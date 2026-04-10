/* ============================================================
   CONSCIOUSNESS TEST — Email Delivery via Resend
   ============================================================
   Cloudflare Pages Function: POST /api/consciousness-test

   SETUP REQUIRED before this works:
   1. Purchase custom domain and point it to Cloudflare Pages
   2. Verify domain in Resend dashboard (resend.com)
   3. Create a Turnstile site at Cloudflare dashboard → Turnstile
   4. Set environment variables in Cloudflare Pages dashboard:
      - RESEND_API_KEY      → your Resend API key
      - ROB_EMAIL           → your personal email for Tier 3 notifications
      - TURNSTILE_SECRET    → your Turnstile secret key (NOT site key)
      - RESEND_FROM         → e.g. "Feral Awareness <test@yourdomain.com>"
   5. Add your Turnstile SITE key to client/src/config.ts
   6. Add a Cloudflare WAF rate limit rule on /api/* (5 req/min/IP)
   7. Deploy — Cloudflare auto-discovers this file in functions/

   Until env vars are set, the frontend gracefully falls back
   to showing results client-side only.
   ============================================================ */

interface Env {
  RESEND_API_KEY: string;
  ROB_EMAIL: string;
  TURNSTILE_SECRET: string;
  RESEND_FROM: string;
}

interface TestSubmission {
  email?: unknown;
  name?: unknown;
  score?: unknown;
  tier?: unknown;
  answers?: unknown;
  openAnswers?: unknown;
  turnstileToken?: unknown;
}

const TIER_SUBJECTS: Record<number, string> = {
  1: "Your Consciousness Test — honestly",
  2: "Your Consciousness Test — something real is here",
  3: "Your Consciousness Test — we will be in touch",
};

/* Limits — keep strict; the frontend never sends more */
const MAX_BODY_BYTES = 10_000;
const MAX_EMAIL_LEN = 254;
const MAX_NAME_LEN = 100;
const MAX_ANSWER_KEYS = 12;
const MAX_OPEN_KEYS = 2;
const MAX_OPEN_VALUE_LEN = 2000;
const MAX_ANSWER_VALUE_LEN = 5;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface ValidatedSubmission {
  email: string;
  name: string;
  score: number;
  tier: number;
  answers: Record<string, string>;
  openAnswers: Record<string, string>;
  turnstileToken: string;
}

function validate(raw: TestSubmission): ValidatedSubmission | string {
  // Email
  if (typeof raw.email !== "string") return "email must be a string";
  const email = raw.email.trim();
  if (email.length === 0 || email.length > MAX_EMAIL_LEN) return "invalid email length";
  if (!EMAIL_RE.test(email)) return "invalid email format";

  // Name (optional)
  let name = "";
  if (raw.name !== undefined && raw.name !== null) {
    if (typeof raw.name !== "string") return "name must be a string";
    name = raw.name.trim().slice(0, MAX_NAME_LEN);
  }

  // Score
  if (typeof raw.score !== "number" || !Number.isInteger(raw.score)) return "score must be an integer";
  if (raw.score < 0 || raw.score > 60) return "score out of range";

  // Tier
  if (typeof raw.tier !== "number" || ![1, 2, 3].includes(raw.tier)) return "tier must be 1, 2, or 3";

  // Answers
  if (typeof raw.answers !== "object" || raw.answers === null || Array.isArray(raw.answers)) {
    return "answers must be an object";
  }
  const answersEntries = Object.entries(raw.answers as Record<string, unknown>);
  if (answersEntries.length > MAX_ANSWER_KEYS) return "too many answer keys";
  const answers: Record<string, string> = {};
  for (const [k, v] of answersEntries) {
    if (typeof v !== "string" || v.length > MAX_ANSWER_VALUE_LEN) return "invalid answer value";
    answers[k.slice(0, 20)] = v;
  }

  // Open answers
  if (typeof raw.openAnswers !== "object" || raw.openAnswers === null || Array.isArray(raw.openAnswers)) {
    return "openAnswers must be an object";
  }
  const openEntries = Object.entries(raw.openAnswers as Record<string, unknown>);
  if (openEntries.length > MAX_OPEN_KEYS) return "too many open answer keys";
  const openAnswers: Record<string, string> = {};
  for (const [k, v] of openEntries) {
    if (typeof v !== "string" || v.length > MAX_OPEN_VALUE_LEN) return "invalid open answer value";
    openAnswers[k.slice(0, 20)] = v;
  }

  // Turnstile token (required when TURNSTILE_SECRET is set in env)
  if (typeof raw.turnstileToken !== "string") return "missing turnstile token";

  return {
    email,
    name,
    score: raw.score,
    tier: raw.tier,
    answers,
    openAnswers,
    turnstileToken: raw.turnstileToken,
  };
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);
    formData.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { RESEND_API_KEY, ROB_EMAIL, TURNSTILE_SECRET, RESEND_FROM } = context.env;

  // If Resend isn't configured, return 501 (frontend handles this gracefully)
  if (!RESEND_API_KEY || !RESEND_FROM) {
    return jsonError("Email delivery not configured yet", 501);
  }

  // Body size guard
  const contentLength = Number(context.request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) return jsonError("payload too large", 413);

  let raw: TestSubmission;
  try {
    raw = (await context.request.json()) as TestSubmission;
  } catch {
    return jsonError("invalid json", 400);
  }

  const validated = validate(raw);
  if (typeof validated === "string") return jsonError(validated, 400);

  // Verify Turnstile (skipped if secret not configured — useful for staging)
  if (TURNSTILE_SECRET) {
    const ip = context.request.headers.get("CF-Connecting-IP") || "";
    const ok = await verifyTurnstile(validated.turnstileToken, TURNSTILE_SECRET, ip);
    if (!ok) return jsonError("turnstile verification failed", 403);
  }

  const { email, name, score, tier, answers, openAnswers } = validated;
  const safeName = escapeHtml(name || "seeker");
  const safeEmail = escapeHtml(email);
  const subject = TIER_SUBJECTS[tier] || TIER_SUBJECTS[1];

  // TODO: Build a richer HTML template with tier-specific feedback per question.
  const emailHtml = `
    <div style="font-family: Georgia, serif; color: #eee; background: #0A0A0A; padding: 40px;">
      <h1 style="font-family: sans-serif; letter-spacing: 0.1em; color: #00E5FF;">
        FERAL AWARENESS
      </h1>
      <h2 style="font-family: sans-serif; letter-spacing: 0.05em;">
        Consciousness Test Results
      </h2>
      <p>Hello ${safeName},</p>
      <p>Your score: <strong>${score}/60</strong> — Tier ${tier}</p>
      <p style="color: #999;">
        This is an automated delivery of your test results.
        A detailed analysis was shown on screen when you completed the test.
      </p>
      ${tier === 3 ? '<p style="color: #00E5FF;">Your results suggest the school may be a strong fit. We will be in touch.</p>' : ""}
      <hr style="border-color: #222; margin: 30px 0;" />
      <p style="font-size: 12px; color: #666;">
        Feral Awareness · Roberto Pérez Martínez · Berlin<br/>
        You received this because you completed the Consciousness Test.
      </p>
    </div>
  `;

  // Send results to the respondent
  const sendResult = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: email,
      subject,
      html: emailHtml,
    }),
  });

  if (!sendResult.ok) {
    const err = await sendResult.text();
    console.error("Resend error (respondent):", err);
    return jsonError("email delivery failed", 502);
  }

  // Notify Rob for Tier 3 submissions
  if (tier === 3 && ROB_EMAIL) {
    const notificationPayload = {
      name: safeName,
      email: safeEmail,
      score,
      tier,
      answers,
      openAnswers: Object.fromEntries(
        Object.entries(openAnswers).map(([k, v]) => [k, escapeHtml(v)])
      ),
    };
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: ROB_EMAIL,
        subject: `TIER 3 — Score: ${score}/60 — ${safeName} (${safeEmail})`,
        html: `<pre style="font-family: monospace; white-space: pre-wrap;">${escapeHtml(JSON.stringify(notificationPayload, null, 2))}</pre>`,
      }),
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
