/* ============================================================
   FREEBIE PAGE — Lead capture for Instagram CTAs
   ============================================================
   Route: /freebie/:slug
   EDIT: Add/edit freebies in content.ts → FREEBIES array

   Flow:
     1. Visitor arrives from Instagram "link in bio"
     2. Sees the freebie description + email form
     3. Submits email → stored in Supabase → freebie auto-sent via Resend
     4. Shows "check your email" confirmation

   To add a new freebie:
     1. Edit content.ts → FREEBIES array
     2. No code changes needed — this page auto-generates from the slug
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRoute, Link } from "wouter";
import { FREEBIES, TURNSTILE_SITE_KEY } from "@/content";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Freebie() {
  const [, params] = useRoute("/freebie/:slug");
  const slug = params?.slug ?? "";

  const freebie = FREEBIES.find((f) => f.slug === slug);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRendered = useRef(false);

  // Load Turnstile widget
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || turnstileRendered.current) return;
    const SCRIPT_ID = "cf-turnstile-freebie";

    const renderWidget = () => {
      setTimeout(() => {
        const w = (window as unknown as { turnstile?: { render: (el: string, opts: object) => void } }).turnstile;
        if (!w) return;
        const container = document.getElementById("freebie-turnstile");
        if (!container || container.children.length > 0) return;
        w.render("#freebie-turnstile", {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "dark",
          callback: (token: string) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(""),
          "expired-callback": () => setTurnstileToken(""),
        });
        turnstileRendered.current = true;
      }, 100);
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      renderWidget();
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/freebie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          name: name.trim(),
          freebie_id: freebie?.id ?? slug,
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({})) as { error?: string };
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  // Unknown slug → 404 style
  if (!freebie) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div>
          <p className="text-muted-foreground text-sm mb-4">Freebie not found.</p>
          <Link href="/" className="text-primary text-sm tracking-widest uppercase hover:opacity-80"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ← Back to Feral Awareness
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${freebie.thumbnail})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        {/* Back link */}
        <Link href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-12 transition-opacity hover:opacity-60"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}>
          <ArrowLeft size={12} /> Feral Awareness
        </Link>

        {status === "success" ? (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
            <p className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}>
              On its way
            </p>
            <h1 className="text-4xl sm:text-5xl tracking-wider text-white leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              CHECK YOUR<br />
              <span style={{ color: "var(--feral-cyan, #00E5FF)" }}>EMAIL</span>
            </h1>
            <div className="h-px w-16" style={{ backgroundColor: "var(--feral-cyan, #00E5FF)" }} />
            <p className="text-base leading-relaxed" style={{ color: "rgba(238,238,238,0.75)" }}>
              {freebie.confirmation}
            </p>
            <div className="pt-4 space-y-3">
              <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.3)" }}>
                While you're here
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/test"
                  className="inline-flex items-center justify-center px-6 py-3 text-black tracking-widest uppercase text-sm transition-all hover:brightness-110"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", backgroundColor: "var(--feral-cyan, #00E5FF)" }}>
                  Take the Consciousness Test →
                </Link>
                <a href="https://instagram.com/feral.awareness"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 tracking-widest uppercase text-sm transition-all"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", border: "1px solid rgba(238,238,238,0.2)", color: "rgba(238,238,238,0.7)" }}>
                  @feral.awareness
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}>
                Free Guide
              </p>
              <h1 className="text-4xl sm:text-6xl tracking-wider text-white mb-3 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {freebie.title.toUpperCase()}
              </h1>
              <p className="text-lg sm:text-xl text-feral-cyan mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                {freebie.tagline}
              </p>
              <div className="h-px w-16 mb-6" style={{ backgroundColor: "var(--feral-cyan, #00E5FF)" }} />
              <p className="text-base leading-relaxed" style={{ color: "rgba(238,238,238,0.7)" }}>
                {freebie.description}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="fb-name" className="block text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.45)" }}>
                  Name <span style={{ color: "rgba(238,238,238,0.3)" }}>(optional)</span>
                </label>
                <input
                  id="fb-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How you'd like to be addressed"
                  maxLength={100}
                  className="w-full px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(238,238,238,0.12)",
                    color: "rgba(238,238,238,0.9)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
                />
              </div>

              <div>
                <label htmlFor="fb-email" className="block text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.45)" }}>
                  Email <span style={{ color: "#FF6B6B" }}>*</span>
                </label>
                <input
                  id="fb-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  maxLength={254}
                  className="w-full px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(238,238,238,0.12)",
                    color: "rgba(238,238,238,0.9)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
                />
              </div>

              {/* Turnstile */}
              {TURNSTILE_SITE_KEY && <div id="freebie-turnstile" className="mt-2" />}

              {errorMsg && (
                <p className="text-xs" style={{ color: "#FF6B6B" }}>{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !email || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
                className="w-full sm:w-auto px-10 py-4 text-black tracking-widest uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1rem",
                  backgroundColor: "var(--feral-cyan, #00E5FF)",
                }}
              >
                {status === "loading" ? "Sending..." : freebie.cta_label}
              </button>

              <p className="text-xs" style={{ color: "rgba(238,238,238,0.3)" }}>
                No spam. Unsubscribe anytime. Your email stays in our list only.
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
