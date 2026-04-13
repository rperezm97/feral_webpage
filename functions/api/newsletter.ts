/* ============================================================
   NEWSLETTER SIGNUP — Resend + Supabase
   ============================================================
   Cloudflare Pages Function: POST /api/newsletter

   - Validates email
   - Stores in Supabase (newsletter_subscribers table)
   - Sends a welcome email via Resend
   ============================================================ */

import { createClient } from "@supabase/supabase-js";

interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM: string;
  ROB_EMAIL: string;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LEN = 254;

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { RESEND_API_KEY, RESEND_FROM, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = context.env;

  // Parse body
  let body: { email?: unknown };
  try {
    body = await context.request.json() as { email?: unknown };
  } catch {
    return jsonError("invalid json", 400);
  }

  // Validate email
  if (typeof body.email !== "string") return jsonError("email required", 400);
  const email = body.email.trim().toLowerCase();
  if (email.length === 0 || email.length > MAX_EMAIL_LEN) return jsonError("invalid email", 400);
  if (!EMAIL_RE.test(email)) return jsonError("invalid email format", 400);

  // Store in Supabase
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email, subscribed_at: new Date().toISOString(), status: "active" }, { onConflict: "email" });

    if (error) {
      console.error("[Supabase] Newsletter insert failed:", error);
      // Don't block — still send welcome email even if DB write fails
    }
  }

  // Send welcome email via Resend
  if (RESEND_API_KEY && RESEND_FROM) {
    const welcomeHtml = `
      <div style="font-family: Georgia, serif; color: #eee; background: #0A0A0A; padding: 40px; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: sans-serif; letter-spacing: 0.15em; color: #00E5FF; font-size: 1.8rem; margin-bottom: 4px;">
          FERAL AWARENESS
        </h1>
        <p style="color: #666; font-family: sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 32px 0;">
          Nondual Tantra · Kashmir Shaivism
        </p>

        <p style="color: #ccc; line-height: 1.8; margin: 0 0 20px 0;">
          You're in.
        </p>

        <p style="color: #ccc; line-height: 1.8; margin: 0 0 20px 0;">
          The transmission arrives unannounced — raw essays on nondual tantra, decolonial spirituality, and what it actually means to practice in a body that lives in the world. No algorithms. No content calendar. When there is something worth saying, you will hear it.
        </p>

        <p style="color: #ccc; line-height: 1.8; margin: 0 0 32px 0;">
          In the meantime — if you haven't yet taken the Consciousness Test, that is the door.
        </p>

        <a href="https://feralawareness.com/test"
          style="display: inline-block; padding: 14px 32px; background: #1a6bff; color: #fff; text-decoration: none; font-family: sans-serif; font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase;">
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

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: email,
        subject: "You're in the transmission — Feral Awareness",
        html: welcomeHtml,
      }),
    });

    if (!res.ok) {
      console.error("[Resend] Newsletter welcome email failed:", await res.text());
    }
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
