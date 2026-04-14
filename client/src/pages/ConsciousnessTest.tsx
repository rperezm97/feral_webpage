/* ============================================================
   CONSCIOUSNESS TEST — Feral Awareness
   ============================================================
   Drop into src/pages/ConsciousnessTest.tsx
   Add route: <Route path="/test" component={ConsciousnessTest} />
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TURNSTILE_SITE_KEY, TEST_PAGE } from "@/content";

// ── TYPES ────────────────────────────────────────────────────

interface Option {
  label: string;
  points: number;
  letter: string;
}

interface Question {
  id: string;
  section: string;
  text: string;
  subtext?: string;
  options: Option[];
  feedback: Record<string, string>;
}

interface OpenQuestion {
  id: string;
  text: string;
  subtext?: string;
}

// ── SCORING DATA — edit all questions, options, feedback in content.ts → TEST_PAGE ──

const QUESTIONS: Question[] = TEST_PAGE.questions as Question[];

// (questions moved to content.ts → TEST_PAGE.questions)

const OPEN_QUESTIONS: OpenQuestion[] = TEST_PAGE.open_questions as OpenQuestion[];

// ── TIER DATA ────────────────────────────────────────────────

// score_bands is an array ordered from lowest to highest — edit in content.ts → TEST_PAGE.score_bands
const SCORE_BANDS = TEST_PAGE.score_bands as Array<{ min: number; max: number; level: string; color: string; heading: string; body: string; cta: { href: string; label: string } }>;

// ── ANIMATION VARIANTS ────────────────────────────────────────

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25 } },
};

// ── TOTAL STEPS: 0=intro, 1-12=questions, 13-14=open, 15=email, 16=results
const TOTAL_STEPS = 17;

// ── COMPONENT ────────────────────────────────────────────────

export default function ConsciousnessTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openAnswers, setOpenAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [foundUs, setFoundUs] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // Scroll to top on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [step]);

  // Clear selection when step changes
  useEffect(() => {
    setSelectedOption(answers[currentQuestionId()] || null);
  }, [step]);

  // Reset Turnstile token when leaving step 15 (prevents stale/expired token)
  useEffect(() => {
    if (step !== 15) {
      setTurnstileToken("");
    }
  }, [step]);

  // Load Cloudflare Turnstile script + render widget when entering email step
  useEffect(() => {
    if (step !== 15 || !TURNSTILE_SITE_KEY) return;

    const SCRIPT_ID = "cf-turnstile-script";

    const renderWidget = () => {
      // Small delay to ensure React has finished painting the DOM
      setTimeout(() => {
        const w = (window as unknown as { turnstile?: { render: (el: string, opts: object) => void } }).turnstile;
        if (!w) return;
        const container = document.getElementById("turnstile-widget");
        if (!container) return;
        // Reset and re-render if already rendered (e.g. user went back and forward)
        container.innerHTML = "";
        w.render("#turnstile-widget", {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "dark",
          callback: (token: string) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(""),
          "expired-callback": () => setTurnstileToken(""),
        });
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
  }, [step]);

  const currentQuestionId = () => {
    if (step >= 1 && step <= 12) return QUESTIONS[step - 1].id;
    if (step === 13) return "OQ1";
    if (step === 14) return "OQ2";
    return "";
  };

  const totalScore = () =>
    QUESTIONS.reduce((sum, q) => {
      const letter = answers[q.id];
      if (!letter) return sum;
      const opt = q.options.find((o) => o.letter === letter);
      return sum + (opt?.points ?? 0);
    }, 0);

  const getBand = (score: number) =>
    SCORE_BANDS.find((b) => score >= b.min && score <= b.max) ?? SCORE_BANDS[SCORE_BANDS.length - 1];

  const progress = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  const goNext = () => {
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const selectOption = (letter: string) => {
    const qId = currentQuestionId();
    setSelectedOption(letter);
    setAnswers((prev) => ({ ...prev, [qId]: letter }));
  };

  const handleSubmit = async () => {
    setSubmitError(null);
    setSubmitting(true);

    const score = totalScore();
    const band = getBand(score);

    // Attempt to submit. If endpoint is not configured (501) or network fails,
    // fall through to client-side results without misleading the user.
    try {
      const questionResults = QUESTIONS.flatMap((q) => {
      const letter = answers[q.id];
      if (!letter) return [];
      const opt = q.options.find((o) => o.letter === letter);
      if (!opt) return [];
      return [
        {
          section: q.section,
          text: q.text,
          selectedLabel: opt.label,
          feedback: q.feedback[letter] ?? "",
        },
      ];
    });

    const resultsPayload = {
      tierLabel: band.level,
      tierColor: band.color,
      opener: band.heading + "\n\n" + band.body,
      closing: band.cta.label,
      questionResults,
    };

    const res = await fetch("/api/consciousness-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        phone,
        foundUs,
        score,
        tier: band.level,
        answers,
        openAnswers,
        resultsPayload,
        turnstileToken,
      }),
    });

      if (res.ok) {
        setEmailSent(true);
      } else if (res.status === 501) {
        // Endpoint not configured yet — silent fallback, results shown on screen
      } else {
        // Real failure (validation, turnstile, server) — surface it briefly,
        // but still show results so the user is not stranded
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setSubmitError(data.error || "Submission failed");
      }
    } catch {
      // Network error — silent, fall through to on-screen results
    }

    setSubmitting(false);
    setSubmitted(true);
    setStep(16);
  };

  const score = totalScore();
  const tierData = getBand(score);

  // ── RENDER INTRO ────────────────────────────────────────────
  const renderIntro = () => (
    <motion.div key="intro" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
      <p
        className="text-xs tracking-widest uppercase mb-6"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}
      >
        Feral Awareness · The Test
      </p>
      <h1
        className="text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white mb-6 leading-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        CONSCIOUSNESS
        <br />
        <span style={{ color: "var(--feral-cyan, #00E5FF)" }}>TEST</span>
      </h1>
      <div className="h-px w-24 mb-8" style={{ backgroundColor: "var(--feral-cyan, #00E5FF)" }} />
      <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(238,238,238,0.75)" }}>
        <p>
          This test doesn't measure how much you know about spirituality.
        </p>
        <p>
          It measures something much harder: <span className="text-white font-semibold">whether you're honest with yourself when that honesty is uncomfortable.</span>
        </p>
        <p>
          Twelve questions. Based on more than a decade of practice and transmission in the Trika tradition — mapping the patterns that distinguish practitioners who awaken from those who don't.
        </p>
        <p
          className="border-l-2 pl-4 italic"
          style={{ borderColor: "var(--feral-cyan, #00E5FF)", color: "rgba(238,238,238,0.6)" }}
        >
          There are no correct answers. There are only true ones.
        </p>
        <p className="text-sm" style={{ color: "rgba(238,238,238,0.45)" }}>
          Warning: this test may show you something you didn't want to see. That's exactly the point.
        </p>
      </div>
      <div className="mt-10">
        <button
          onClick={goNext}
          className="inline-flex items-center gap-3 px-10 py-5 text-black font-bold tracking-widest uppercase transition-all duration-300 hover:brightness-110"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            backgroundColor: "var(--feral-cyan, #00E5FF)",
          }}
        >
          Begin
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  );

  // ── RENDER QUESTION ─────────────────────────────────────────
  const renderQuestion = () => {
    const q = QUESTIONS[step - 1];
    const currentAnswer = answers[q.id];

    return (
      <motion.div
        key={`q-${step}`}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={direction}
      >
        <p
          className="text-xs tracking-widest uppercase mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}
        >
          {q.section}
        </p>
        <p className="text-xs mb-6" style={{ color: "rgba(238,238,238,0.35)" }}>
          Question {step} of 12
        </p>
        <h2
          className="text-2xl sm:text-3xl text-white mb-3 leading-tight font-normal"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {q.text}
        </h2>
        {q.subtext && (
          <p className="text-sm mb-8 italic" style={{ color: "rgba(238,238,238,0.45)" }}>
            {q.subtext}
          </p>
        )}
        {!q.subtext && <div className="mb-8" />}

        <div className="space-y-3">
          {q.options.map((opt) => {
            const isSelected = currentAnswer === opt.letter;
            return (
              <button
                key={opt.letter}
                onClick={() => selectOption(opt.letter)}
                className="w-full text-left px-5 py-4 border transition-all duration-200 group"
                style={{
                  borderColor: isSelected
                    ? "var(--feral-cyan, #00E5FF)"
                    : "rgba(238,238,238,0.12)",
                  backgroundColor: isSelected
                    ? "rgba(0, 229, 255, 0.07)"
                    : "rgba(255,255,255,0.02)",
                  color: isSelected ? "#fff" : "rgba(238,238,238,0.65)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center border"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      borderColor: isSelected
                        ? "var(--feral-cyan, #00E5FF)"
                        : "rgba(238,238,238,0.2)",
                      color: isSelected ? "var(--feral-cyan, #00E5FF)" : "rgba(238,238,238,0.3)",
                    }}
                  >
                    {opt.letter.toUpperCase()}
                  </span>
                  <span className="text-sm leading-relaxed">{opt.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-8">
          {step > 1 && (
            <button
              onClick={goPrev}
              className="text-xs tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-60"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 12L3 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          )}
          <div className={step > 1 ? "" : "ml-auto"}>
            <button
              onClick={goNext}
              disabled={!currentAnswer}
              className="inline-flex items-center gap-2 px-8 py-4 text-black tracking-widest uppercase transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.9rem",
                backgroundColor: currentAnswer ? "var(--feral-cyan, #00E5FF)" : "rgba(0,229,255,0.3)",
              }}
            >
              Continue
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // ── RENDER OPEN QUESTION ────────────────────────────────────
  const renderOpenQuestion = () => {
    const qIndex = step - 13;
    const q = OPEN_QUESTIONS[qIndex];
    const value = openAnswers[q.id] || "";
    const isLast = qIndex === 1;

    return (
      <motion.div key={`oq-${step}`} variants={fadeUp} initial="hidden" animate="visible" exit="exit">
        <p
          className="text-xs tracking-widest uppercase mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}
        >
          Open Question {qIndex + 1} of 2
        </p>
        <h2
          className="text-2xl sm:text-3xl text-white mb-3 leading-tight font-normal"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {q.text}
        </h2>
        {q.subtext && (
          <p className="text-sm mb-6 italic" style={{ color: "rgba(238,238,238,0.45)" }}>
            {q.subtext}
          </p>
        )}
        <textarea
          className="w-full min-h-36 p-4 text-sm leading-relaxed resize-none outline-none transition-colors duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(238,238,238,0.12)",
            color: "rgba(238,238,238,0.85)",
            fontFamily: "'Lora', serif",
          }}
          placeholder="Write honestly. There are no wrong answers here."
          value={value}
          onChange={(e) => setOpenAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
          onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
        />
        <div className="flex justify-between mt-6">
          <button
            onClick={goPrev}
            className="text-xs tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-60"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 12L3 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <button
            onClick={goNext}
            className="inline-flex items-center gap-2 px-8 py-4 text-black tracking-widest uppercase transition-all duration-200"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.9rem",
              backgroundColor: "var(--feral-cyan, #00E5FF)",
            }}
          >
            {isLast ? "Almost done" : "Continue"}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </motion.div>
    );
  };

  // ── RENDER EMAIL STEP ───────────────────────────────────────
  const renderEmailStep = () => (
    <motion.div key="email" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
      <p
        className="text-xs tracking-widest uppercase mb-4"
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: "var(--feral-cyan, #00E5FF)" }}
      >
        Last Step
      </p>
      <h2
        className="text-3xl sm:text-4xl text-white mb-3 font-normal"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
      >
        Before your results
      </h2>
      <p className="text-sm mb-8" style={{ color: "rgba(238,238,238,0.5)" }}>
        Leave your details so we can send you the results. If it's a good fit,
        we'll follow up, in case you want to join. 
      </p>

      <div className="space-y-4 max-w-md">
        <div>
          <label
            htmlFor="ct-name"
            className="block text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
          >
            First Name
          </label>
          <input
            id="ct-name"
            name="name"
            type="text"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="w-full px-4 py-3 text-sm outline-none transition-colors"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(238,238,238,0.12)",
              color: "rgba(238,238,238,0.85)",
            }}
            placeholder="Your name"
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
          />
        </div>

   
        <div>
          <label
            htmlFor="ct-email"
            className="block text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
          >
            Email <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="ct-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={email.length > 0 && !email.includes("@")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={254}
            className="w-full px-4 py-3 text-sm outline-none transition-colors"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(238,238,238,0.12)",
              color: "rgba(238,238,238,0.85)",
            }}
            placeholder="your@email.com"
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
          />
        </div>
             <div>
          <label
            htmlFor="ct-phone"
            className="block text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
          >
            Phone Number
          </label>
          <input
            id="ct-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={30}
            className="w-full px-4 py-3 text-sm outline-none transition-colors"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(238,238,238,0.12)",
              color: "rgba(238,238,238,0.85)",
            }}
            placeholder="+49 ..."
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
          />
        </div>

        <div>
        <label
          htmlFor="ct-found-us"
          className="block text-xs tracking-widest uppercase mb-2"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
        >
          Where did you find us?
        </label>
        <select
          id="ct-found-us"
          name="found-us"
          value={foundUs}
          onChange={(e) => setFoundUs(e.target.value)}
          className="w-full px-4 py-3 text-sm outline-none transition-colors"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(238,238,238,0.12)",
            color: "rgba(238,238,238,0.85)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(0,229,255,0.4)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(238,238,238,0.12)")}
        >
          <option value="">Choose one</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend or student">Friend or student</option>
          <option value="Search engine">Search engine</option>
          <option value="Workshop or event">Workshop or event</option>
          <option value="Podcast or interview">Podcast or interview</option>
          <option value="Newsletter">Newsletter</option>
          <option value="Other">Other</option>
        </select>
      </div>


        {/* Cloudflare Turnstile widget — only renders when site key is set */}
        {TURNSTILE_SITE_KEY && (
          <div id="turnstile-widget" className="pt-2" />
        )}
      </div>

      <p className="text-xs mt-4" style={{ color: "rgba(238,238,238,0.3)" }}>
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:opacity-80" style={{ color: "var(--feral-cyan, #00E5FF)" }}>
          privacy policy
        </a>
        . Your data is used only to follow up about your results and the school.
      </p>

      {submitError && (
        <p
          role="alert"
          className="text-xs mt-4 px-3 py-2"
          style={{
            color: "#ff8888",
            backgroundColor: "rgba(255,0,0,0.05)",
            border: "1px solid rgba(255,0,0,0.2)",
          }}
        >
          {submitError} — your results will still be shown on the next screen.
        </p>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={goPrev}
          disabled={submitting}
          className="text-xs tracking-widest uppercase flex items-center gap-2 transition-opacity hover:opacity-60 disabled:opacity-30"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 12L3 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={
            !email.includes("@") ||
            submitting ||
            (!!TURNSTILE_SITE_KEY && !turnstileToken)
          }
          className="inline-flex items-center gap-2 px-10 py-5 text-black font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1rem",
            backgroundColor:
              email.includes("@") && !submitting && (!TURNSTILE_SITE_KEY || turnstileToken)
                ? "var(--feral-cyan, #00E5FF)"
                : "rgba(0,229,255,0.3)",
          }}
        >
          {submitting ? "Sending…" : "See My Results"}
          {!submitting && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </motion.div>
  );

  // ── RENDER RESULTS ──────────────────────────────────────────
  const renderResults = () => {
    const tierColor = tierData.color; // hex color — edit in content.ts → TEST_PAGE.score_bands[n].color

    return (
      <motion.div key="results" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="space-y-12">
        {/* Email status — honest about what actually happened */}
        {emailSent ? (
          <div
            className="px-4 py-3 text-sm"
            style={{
              backgroundColor: "rgba(0,229,255,0.05)",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "rgba(238,238,238,0.75)",
            }}
          >
            ✓ A copy of your results has been sent to <strong>{email}</strong>.
          </div>
        ) : (
          <div
            className="px-4 py-3 text-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(238,238,238,0.1)",
              color: "rgba(238,238,238,0.55)",
            }}
          >
            Email follow-up is currently inactive — your full results are shown
            below. To stay in touch, follow{" "}
            <a
              href="https://instagram.com/feral.awareness"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: "var(--feral-cyan, #00E5FF)" }}
            >
              @feral.awareness
            </a>
            .
          </div>
        )}

        {/* Score header */}
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: tierColor }}
          >
            Your Results
          </p>
          <div className="flex items-end gap-4 mb-4">
            <span
              className="leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "5rem", color: tierColor }}
            >
              {score}
            </span>
            <span className="text-2xl mb-2" style={{ color: "rgba(238,238,238,0.3)" }}>/ 60</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl tracking-wider mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#fff" }}
          >
            {tierData.level.toUpperCase()}
          </h2>
          <div className="h-px mb-6" style={{ backgroundColor: tierColor, opacity: 0.4 }} />
          {/* Tier heading + body */}
          <div className="space-y-3">
            <p className="text-base leading-relaxed font-semibold" style={{ color: "rgba(238,238,238,0.95)" }}>
              {tierData.heading}
            </p>
            {tierData.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "rgba(238,238,238,0.75)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Per-question feedback */}
        <div className="space-y-6">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.4)" }}
          >
            What we see in your answers
          </p>
          {QUESTIONS.map((q) => {
            const letter = answers[q.id];
            if (!letter) return null;
            const feedback = q.feedback[letter];
            const opt = q.options.find((o) => o.letter === letter);
            return (
              <div
                key={q.id}
                className="p-5 border"
                style={{
                  borderColor: "rgba(238,238,238,0.08)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.3)" }}
                >
                  {q.section}
                </p>
                <p className="text-sm mb-1" style={{ color: "rgba(238,238,238,0.5)" }}>
                  {q.text}
                </p>
                <p className="text-xs mb-3 italic" style={{ color: tierColor, opacity: 0.8 }}>
                  You answered: "{opt?.label}"
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(238,238,238,0.75)" }}>
                  {feedback}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div
          className="p-6 border-l-2"
          style={{ borderColor: tierColor, backgroundColor: "rgba(255,255,255,0.02)" }}
        >
          <div className="space-y-3">
            {[tierData.cta.label].map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "rgba(238,238,238,0.75)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://instagram.com/feral.awareness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-black tracking-widest uppercase transition-all hover:brightness-110"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              backgroundColor: "var(--feral-cyan, #00E5FF)",
            }}
          >
            Follow @feral.awareness
          </a>
          {(tierData.level === "Ready" || tierData.level === "Deep") && (
            <a
              href={tierData.cta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 tracking-widest uppercase transition-all"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                border: "1px solid var(--feral-cyan, #00E5FF)",
                color: "var(--feral-cyan, #00E5FF)",
              }}
            >
              {tierData.cta.label}
            </a>
          )}
        </div>

        {/* Retake */}
        <button
          onClick={() => {
          setStep(0);
          setAnswers({});
          setOpenAnswers({});
          setEmail("");
          setName("");
          setPhone("");
          setFoundUs("");
          setSubmitted(false);
          setEmailSent(false);
          setSubmitError(null);
          setTurnstileToken("");

          }}
          className="text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(238,238,238,0.25)" }}
        >
          Retake the test
        </button>
      </motion.div>
    );
  };

  // ── MAIN RENDER ─────────────────────────────────────────────
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          zIndex: 0,
        }}
      />

      {/* Subtle cyan glow top */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-5"
        style={{
          background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div ref={topRef} className="relative z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-24">

          {/* Progress bar — hidden on intro and results */}
          {step > 0 && step < 16 && (
            <div className="mb-12">
              <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(238,238,238,0.3)", fontFamily: "'Bebas Neue', sans-serif" }}>
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-px w-full" style={{ backgroundColor: "rgba(238,238,238,0.08)" }}>
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "var(--feral-cyan, #00E5FF)",
                  }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 0 && renderIntro()}
            {step >= 1 && step <= 12 && renderQuestion()}
            {(step === 13 || step === 14) && renderOpenQuestion()}
            {step === 15 && renderEmailStep()}
            {step === 16 && renderResults()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
