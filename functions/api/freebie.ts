/* ============================================================
   FREEBIE API — Lead capture + auto-send freebie via Resend
   ============================================================
   Cloudflare Pages Function: POST /api/freebie

   - Validates email + freebie_id
   - Verifies Cloudflare Turnstile (if configured)
   - Stores subscriber in Supabase → freebie_subscribers table
   - Sends the freebie email via Resend
   - Sends admin notification to ROB_EMAIL (if configured)

   Required env vars (set in Cloudflare Pages dashboard):
     RESEND_API_KEY
     RESEND_FROM
     SUPABASE_URL
     SUPABASE_SERVICE_ROLE_KEY
     ROB_EMAIL (optional — for admin notifications)
     TURNSTILE_SECRET (optional — for bot protection)

   Supabase table schema:
     CREATE TABLE freebie_subscribers (
       id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
       email text NOT NULL,
       name text,
       freebie_id text NOT NULL,
       subscribed_at timestamptz NOT NULL DEFAULT now(),
       status text NOT NULL DEFAULT 'active',
       UNIQUE(email, freebie_id)
     );
   ============================================================ */

import { createClient } from "@supabase/supabase-js";

interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM: string;
  ROB_EMAIL: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  TURNSTILE_SECRET: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── FREEBIE CATALOGUE (mirrors content.ts FREEBIES) ──────────
// Keep in sync with content.ts → FREEBIES. Only the fields needed
// server-side are duplicated here to avoid importing client code.
const FREEBIE_CATALOGUE: Record<string, {
  email_subject: string;
  email_body: string;
  file_url: string;
  title: string;
}> = {
  "intro-spanda": {
    title:         "Introduction to Spanda",
    file_url:      "", // ← EDIT: paste your PDF/Google Drive URL here
    email_subject: "Your free guide: Introduction to Spanda — Feral Awareness",
    email_body:    "Here is your guide to Spanda. Read it slowly — each section is designed to land in the body, not just the mind. When you're ready to go deeper, take the Consciousness Test at feralawareness.com/test.",
  },
  // ── ADD MORE FREEBIES HERE (match slug from content.ts) ──────
  // "three-upayas": {
  //   title:         "The Three Upāyas",
  //   file_url:      "",
  //   email_subject: "Your free guide: The Three Upāyas — Feral Awareness",
  //   email_body:    "...",
  // },
};

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function json(data: object, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { RESEND_API_KEY, RESEND_FROM, ROB_EMAIL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TURNSTILE_SECRET } = context.env;

  // ── Parse body ─────────────────────────────────────────────
  let body: { email?: unknown; name?: unknown; freebie_id?: unknown; turnstileToken?: unknown };
  try {
    body = await context.request.json() as typeof body;
  } catch {
    return jsonError("invalid json", 400);
  }

  // ── Validate email ─────────────────────────────────────────
  if (typeof body.email !== "string") return jsonError("email required", 400);
  const email = body.email.trim().toLowerCase();
  if (!email || email.length > 254) return jsonError("invalid email", 400);
  if (!EMAIL_RE.test(email)) return jsonError("invalid email format", 400);

  // ── Validate freebie_id ────────────────────────────────────
  if (typeof body.freebie_id !== "string" || !body.freebie_id) return jsonError("freebie_id required", 400);
  const freebieId = body.freebie_id.trim().slice(0, 100);
  const freebie = FREEBIE_CATALOGUE[freebieId];
  if (!freebie) return jsonError("unknown freebie", 400);

  // ── Optional fields ────────────────────────────────────────
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const safeName = name || "there";

  // ── Turnstile verification ─────────────────────────────────
  if (TURNSTILE_SECRET) {
    const token = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
    if (!token) return jsonError("captcha required", 400);

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: TURNSTILE_SECRET, response: token }),
    });
    const verifyData = await verifyRes.json() as { success: boolean };
    if (!verifyData.success) return jsonError("captcha verification failed", 403);
  }

  // ── Store in Supabase ──────────────────────────────────────
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase
      .from("freebie_subscribers")
      .upsert(
        { email, name, freebie_id: freebieId, subscribed_at: new Date().toISOString(), status: "active" },
        { onConflict: "email,freebie_id" }
      );
    if (error) {
      console.error("[Supabase] Freebie subscriber insert failed:", error);
      // Non-blocking — still send the freebie
    }
  }

  // ── Build freebie email HTML ───────────────────────────────
  const hasFile = freebie.file_url && freebie.file_url.length > 0;

  const freebieHtml = `
    <div style="font-family: Georgia, serif; color: #eee; background: #0A0A0A; padding: 40px; max-width: 600px; margin: 0 auto;">
      <h1 style="font-family: sans-serif; letter-spacing: 0.15em; color: #00E5FF; font-size: 1.8rem; margin-bottom: 4px;">
        FERAL AWARENESS
      </h1>
      <p style="color: #666; font-family: sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 32px 0;">
        Nondual Tantra · Kashmir Shaivism
      </p>

      <p style="color: #ccc; line-height: 1.8; margin: 0 0 12px 0;">
        Hello ${safeName},
      </p>

      <p style="color: #ccc; line-height: 1.8; margin: 0 0 20px 0;">
        Here is your free guide: <strong style="color: #fff;">${freebie.title}</strong>.
      </p>

      <p style="color: #ccc; line-height: 1.8; margin: 0 0 32px 0;">
        ${freebie.email_body}
      </p>

      ${hasFile ? `
      <a href="${freebie.file_url}"
        style="display: inline-block; padding: 14px 32px; background: #00E5FF; color: #000; text-decoration: none; font-family: sans-serif; font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 40px;">
        Download Your Guide →
      </a>
      ` : `
      <p style="color: #888; font-size: 0.85rem; margin: 0 0 32px 0; padding: 12px 16px; border-left: 2px solid #333;">
        The guide will be with you shortly. If you have any issues, reply to this email.
      </p>
      `}

      <hr style="border: none; border-top: 1px solid #222; margin: 32px 0;" />

      <p style="color: #888; line-height: 1.8; margin: 0 0 20px 0; font-size: 0.9rem;">
        When you're ready to go deeper — the Consciousness Test is the door.
      </p>

      <a href="https://feralawareness.com/test"
        style="display: inline-block; padding: 12px 28px; background: #0055FF; color: #fff; text-decoration: none; font-family: sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase;">
        Take the Consciousness Test →
      </a>

      <hr style="border: none; border-top: 1px solid #222; margin: 40px 0;" />
      <p style="color: #555; font-size: 0.75rem; font-family: sans-serif;">
        Feral Awareness · Roberto Pérez Martínez · Berlin<br/>
        You received this because you signed up at feralawareness.com.<br/>
        To unsubscribe, reply to this email with "unsubscribe".
      </p>
    </div>
  `;

  // ── Send freebie email via Resend ──────────────────────────
  if (!RESEND_API_KEY || !RESEND_FROM) {
    // Resend not configured — log and return success anyway (dev mode)
    console.warn("[Freebie] Resend not configured — skipping email send");
    return json({ success: true, note: "email not configured" });
  }

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: email,
      subject: freebie.email_subject,
      html: freebieHtml,
    }),
  });

  if (!emailRes.ok) {
    console.error("[Resend] Freebie email failed:", await emailRes.text());
    return jsonError("email send failed", 502);
  }

  // ── Admin notification (optional) ─────────────────────────
  if (ROB_EMAIL) {
    const adminHtml = `
      <div style="font-family: sans-serif; color: #eee; background: #0A0A0A; padding: 32px; max-width: 500px;">
        <h2 style="color: #00E5FF; margin-bottom: 16px;">New Freebie Subscriber</h2>
        <p><strong>Freebie:</strong> ${freebie.title} (${freebieId})</p>
        <p><strong>Email:</strong> ${email}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      </div>
    `;
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: ROB_EMAIL,
        subject: `New freebie subscriber — ${freebie.title}`,
        html: adminHtml,
      }),
    }).catch(console.error);
  }

  return json({ success: true });
};
