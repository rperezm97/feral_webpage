/* ============================================================
   CONSCIOUSNESS TEST — Email Delivery via Resend + Supabase
   ============================================================
   Cloudflare Pages Function: POST /api/consciousness-test

   This version:
   - stores submissions in Supabase
   - supports phone + foundUs
   - emails the detailed on-screen feedback to the respondent
   - sends a clean admin email for Tier 3 submissions
   ============================================================ */

import { createClient } from "@supabase/supabase-js";

interface Env {
  RESEND_API_KEY: string;
  ROB_EMAIL: string;
  TURNSTILE_SECRET: string;
  RESEND_FROM: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

interface QuestionResultPayload {
  section?: unknown;
  text?: unknown;
  selectedLabel?: unknown;
  feedback?: unknown;
}

interface ResultsPayload {
  tierLabel?: unknown;
  tierColor?: unknown;
  opener?: unknown;
  closing?: unknown;
  questionResults?: unknown;
}

interface TestSubmission {
  email?: unknown;
  name?: unknown;
  phone?: unknown;
  foundUs?: unknown;
  score?: unknown;
  tier?: unknown;
  answers?: unknown;
  openAnswers?: unknown;
  resultsPayload?: unknown;
  turnstileToken?: unknown;
}

interface ValidatedQuestionResult {
  section: string;
  text: string;
  selectedLabel: string;
  feedback: string;
}

interface ValidatedResultsPayload {
  tierLabel: string;
  tierColor: string;
  opener: string;
  closing: string;
  questionResults: ValidatedQuestionResult[];
}

interface ValidatedSubmission {
  email: string;
  name: string;
  phone: string;
  foundUs: string;
  score: number;
  tier: number;
  answers: Record<string, string>;
  openAnswers: Record<string, string>;
  resultsPayload: ValidatedResultsPayload;
  turnstileToken: string;
}

const TIER_SUBJECTS: Record<number, string> = {
  1: "Your Consciousness Test: this is not for you",
  2: "Your Consciousness Test: something real is here",
  3: "Your Consciousness Test: we will be in touch",
};

const MAX_BODY_BYTES = 20_000;
const MAX_EMAIL_LEN = 254;
const MAX_NAME_LEN = 100;
const MAX_PHONE_LEN = 30;
const MAX_FOUND_US_LEN = 100;
const MAX_ANSWER_KEYS = 12;
const MAX_OPEN_KEYS = 2;
const MAX_OPEN_VALUE_LEN = 2000;
const MAX_ANSWER_VALUE_LEN = 5;
const MAX_RESULT_ITEMS = 12;
const MAX_RESULT_TEXT_LEN = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s/.]{6,30}$/;

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

function validateResultsPayload(raw: ResultsPayload): ValidatedResultsPayload | string {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return "resultsPayload must be an object";
  }

  const tierLabel = typeof raw.tierLabel === "string" ? raw.tierLabel.trim().slice(0, 200) : "";
  const tierColor = typeof raw.tierColor === "string" ? raw.tierColor.trim().slice(0, 50) : "";
  const opener = typeof raw.opener === "string" ? raw.opener.trim().slice(0, MAX_RESULT_TEXT_LEN) : "";
  const closing = typeof raw.closing === "string" ? raw.closing.trim().slice(0, MAX_RESULT_TEXT_LEN) : "";

  if (!Array.isArray(raw.questionResults)) return "questionResults must be an array";
  if (raw.questionResults.length > MAX_RESULT_ITEMS) return "too many question results";

  const questionResults: ValidatedQuestionResult[] = [];
  for (const item of raw.questionResults as QuestionResultPayload[]) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      return "invalid question result item";
    }

    const section = typeof item.section === "string" ? item.section.trim().slice(0, 200) : "";
    const text = typeof item.text === "string" ? item.text.trim().slice(0, MAX_RESULT_TEXT_LEN) : "";
    const selectedLabel =
      typeof item.selectedLabel === "string" ? item.selectedLabel.trim().slice(0, 500) : "";
    const feedback =
      typeof item.feedback === "string" ? item.feedback.trim().slice(0, MAX_RESULT_TEXT_LEN) : "";

    questionResults.push({ section, text, selectedLabel, feedback });
  }

  return { tierLabel, tierColor, opener, closing, questionResults };
}

function validate(raw: TestSubmission): ValidatedSubmission | string {
  if (typeof raw.email !== "string") return "email must be a string";
  const email = raw.email.trim();
  if (email.length === 0 || email.length > MAX_EMAIL_LEN) return "invalid email length";
  if (!EMAIL_RE.test(email)) return "invalid email format";

  let name = "";
  if (raw.name !== undefined && raw.name !== null) {
    if (typeof raw.name !== "string") return "name must be a string";
    name = raw.name.trim().slice(0, MAX_NAME_LEN);
  }

  let phone = "";
  if (raw.phone !== undefined && raw.phone !== null && raw.phone !== "") {
    if (typeof raw.phone !== "string") return "phone must be a string";
    phone = raw.phone.trim().slice(0, MAX_PHONE_LEN);
    if (phone.length > 0 && !PHONE_RE.test(phone)) return "invalid phone format";
  }

  let foundUs = "";
  if (raw.foundUs !== undefined && raw.foundUs !== null) {
    if (typeof raw.foundUs !== "string") return "foundUs must be a string";
    foundUs = raw.foundUs.trim().slice(0, MAX_FOUND_US_LEN);
  }

  if (typeof raw.score !== "number" || !Number.isInteger(raw.score)) return "score must be an integer";
  if (raw.score < 0 || raw.score > 60) return "score out of range";

  if (typeof raw.tier !== "number" || ![1, 2, 3].includes(raw.tier)) return "tier must be 1, 2, or 3";

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

  const resultsPayload = validateResultsPayload((raw.resultsPayload ?? {}) as ResultsPayload);
  if (typeof resultsPayload === "string") return resultsPayload;

  if (typeof raw.turnstileToken !== "string") return "missing turnstile token";

  return {
    email,
    name,
    phone,
    foundUs,
    score: raw.score,
    tier: raw.tier,
    answers,
    openAnswers,
    resultsPayload,
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
  const {
    RESEND_API_KEY,
    ROB_EMAIL,
    TURNSTILE_SECRET,
    RESEND_FROM,
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
  } = context.env;

  if (!RESEND_API_KEY || !RESEND_FROM) {
    return jsonError("Email delivery not configured yet", 501);
  }

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

  if (TURNSTILE_SECRET) {
    const ip = context.request.headers.get("CF-Connecting-IP") || "";
    const ok = await verifyTurnstile(validated.turnstileToken, TURNSTILE_SECRET, ip);
    if (!ok) return jsonError("turnstile verification failed", 403);
  }

  const {
    email,
    name,
    phone,
    foundUs,
    score,
    tier,
    answers,
    openAnswers,
    resultsPayload,
  } = validated;

  const safeName = escapeHtml(name || "seeker");
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "");
  const safeFoundUs = escapeHtml(foundUs || "");
  const subject = TIER_SUBJECTS[tier] || TIER_SUBJECTS[1];

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { error: dbError } = await supabase.from("test_submissions").insert({
    name: name || null,
    email,
    phone: phone || null,
    found_us: foundUs || null,
    score,
    tier,
    answers_json: answers,
    open_answers_json: openAnswers,
    source: "consciousness-test",
    status: "new",
  });

  if (dbError) {
    console.error("[Supabase] Insert failed:", dbError);
    return jsonError("Could not save submission", 500);
  }

  const questionResultsHtml = resultsPayload.questionResults
    .map(
      (item) => `
        <div style="margin: 0 0 20px 0; padding: 16px; border: 1px solid #222; background: #111;">
          <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase;">
            ${escapeHtml(item.section)}
          </p>
          <p style="margin: 0 0 8px 0; color: #eee;"><strong>${escapeHtml(item.text)}</strong></p>
          <p style="margin: 0 0 8px 0; color: #00E5FF;">
            Answer: ${escapeHtml(item.selectedLabel)}
          </p>
          <p style="margin: 0; color: #ccc; line-height: 1.6;">
            ${escapeHtml(item.feedback)}
          </p>
        </div>
      `
    )
    .join("");

  const openAnswersHtml = Object.entries(openAnswers)
    .filter(([, value]) => value.trim().length > 0)
    .map(
      ([key, value]) => `
        <div style="margin: 0 0 16px 0;">
          <p style="margin: 0 0 6px 0; color: #999; font-size: 12px; text-transform: uppercase;">
            ${escapeHtml(key)}
          </p>
          <p style="margin: 0; color: #ccc; line-height: 1.6;">
            ${escapeHtml(value)}
          </p>
        </div>
      `
    )
    .join("");

  const emailHtml = `
    <div style="font-family: Georgia, serif; color: #eee; background: #0A0A0A; padding: 40px;">
      <h1 style="font-family: sans-serif; letter-spacing: 0.1em; color: #00E5FF;">
        FERAL AWARENESS
      </h1>
      <h2 style="font-family: sans-serif; letter-spacing: 0.05em;">
        Consciousness Test Results
      </h2>

      <p>Hello ${safeName},</p>
      <p>Your score: <strong>${score}/60</strong> — <strong>${escapeHtml(resultsPayload.tierLabel)}</strong></p>

      <hr style="border-color: #222; margin: 30px 0;" />

      ${resultsPayload.opener
        .split("\n\n")
        .map(
          (para) => `
            <p style="color: #ccc; line-height: 1.7; margin: 0 0 16px 0;">
              ${escapeHtml(para)}
            </p>
          `
        )
        .join("")}

      <h3 style="font-family: sans-serif; letter-spacing: 0.05em; color: #00E5FF; margin-top: 32px;">
        What we see in your answers
      </h3>

      ${questionResultsHtml}

      ${
        openAnswersHtml
          ? `
          <h3 style="font-family: sans-serif; letter-spacing: 0.05em; color: #00E5FF; margin-top: 32px;">
            Your open answers
          </h3>
          ${openAnswersHtml}
        `
          : ""
      }

      <div style="margin-top: 32px; padding: 20px; border-left: 2px solid ${escapeHtml(
        resultsPayload.tierColor || "#00E5FF"
      )}; background: #111;">
        ${resultsPayload.closing
          .split("\n\n")
          .map(
            (para) => `
              <p style="color: #ccc; line-height: 1.7; margin: 0 0 16px 0;">
                ${escapeHtml(para)}
              </p>
            `
          )
          .join("")}
      </div>

      <hr style="border-color: #222; margin: 30px 0;" />
      <p style="font-size: 12px; color: #666;">
        Feral Awareness · Roberto Pérez Martínez · Berlin<br/>
        You received this because you completed the Consciousness Test.
      </p>
    </div>
  `;

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

  if (tier === 3 && ROB_EMAIL) {
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; padding: 24px;">
        <h1 style="margin-top: 0;">New Tier 3 Submission</h1>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone || "—"}</p>
        <p><strong>Found us via:</strong> ${safeFoundUs || "—"}</p>
        <p><strong>Score:</strong> ${score}/60</p>
        <p><strong>Tier:</strong> ${escapeHtml(resultsPayload.tierLabel)}</p>

        <hr />

        <h2>Answer summary</h2>
        ${resultsPayload.questionResults
          .map(
            (item) => `
              <div style="margin: 0 0 16px 0; padding: 12px; border: 1px solid #ddd;">
                <p style="margin: 0 0 6px 0;"><strong>${escapeHtml(item.section)}</strong></p>
                <p style="margin: 0 0 6px 0;">${escapeHtml(item.text)}</p>
                <p style="margin: 0; color: #0aa;">Answer: ${escapeHtml(item.selectedLabel)}</p>
              </div>
            `
          )
          .join("")}

        ${
          openAnswersHtml
            ? `
            <hr />
            <h2>Open answers</h2>
            ${openAnswersHtml}
          `
            : ""
        }
      </div>
    `;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: ROB_EMAIL,
        subject: `TIER 3 — ${safeName} — ${score}/60`,
        html: adminHtml,
      }),
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
