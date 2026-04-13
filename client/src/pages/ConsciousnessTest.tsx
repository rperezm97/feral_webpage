/* ============================================================
   CONSCIOUSNESS TEST — Feral Awareness
   ============================================================
   Drop into src/pages/ConsciousnessTest.tsx
   Add route: <Route path="/test" component={ConsciousnessTest} />
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TURNSTILE_SITE_KEY } from "@/config";

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

// ── SCORING DATA ─────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: "Q1",
    section: "Where You Actually Are",
    text: "How long have you been seriously seeking? Not reading, not interested — actually sustaining a practice.",
    subtext: "If you're not sure whether it counts — it probably doesn't.",
    options: [
      { letter: "a", label: "Just starting", points: 1 },
      { letter: "b", label: "1–2 years", points: 2 },
      { letter: "c", label: "3–5 years", points: 3 },
      { letter: "d", label: "5–10 years", points: 4 },
      { letter: "e", label: "More than 10 years", points: 5 },
    ],
    feedback: {
      a: "Being here at the very beginning has its own kind of cleanness. You haven't yet accumulated the spiritual patterns that later need dismantling. That's a real advantage — if what you bring is genuine hunger and not spiritual consumer curiosity.",
      b: "You're in the period where most people realize the first tools they found are useful but not enough. That ceiling you're touching is real, and it's a good sign that the seeking is genuine. Dissatisfaction with the surface is the first requirement.",
      c: "Enough time to know you don't want to keep going in circles. Also enough to have accumulated some layers of spiritual ego that will need reviewing. Both things are completely normal at this point, and both are material to work with.",
      d: "Ten years of seeking without arriving at what you're looking for isn't failure — it's the pressure that makes this real. If after all this time you're still here with the fire still burning, that speaks to a quality of seeking that can't be manufactured.",
      e: "Only makes sense to keep seeking after more than ten years if you've already exhausted the easy answers. If you've reached this far without resigning or staying where you were, that fire you still feel — that's śaktipāta. Grace operating.",
    },
  },
  {
    id: "Q2",
    section: "Where You Actually Are",
    text: "In all that time — what has actually given you what you're looking for?",
    options: [
      { letter: "a", label: "Quite a lot — I'm pretty good with what I have", points: 0 },
      { letter: "b", label: "Useful tools, but nothing has reached the depth", points: 3 },
      { letter: "c", label: "Genuine experiences I couldn't stabilize or integrate", points: 5 },
      { letter: "d", label: "Nothing has reached where I need to reach", points: 3 },
      { letter: "e", label: "I don't know exactly what I seek, but I know I haven't found it", points: 4 },
    ],
    feedback: {
      a: "If you're pretty good with what you have, this isn't your place — not yet. The work we do requires genuine dissatisfaction as fuel. Come back when the ceiling starts to feel real.",
      b: "Wellness tools make you functional. A real spiritual path makes you free. Those are completely different objectives, and the spiritual market does everything it can to confuse them — because functionality sells better than freedom.",
      c: "This is the most honest starting point someone can bring. You've touched something real and couldn't stay there. That's not your failure — it's the absence of a map and a real container. That's exactly what a lineage-based school can give you.",
      d: "The honesty of this answer is already practice. Knowing you haven't arrived — without dramatizing it or resigning — is one of the most useful positions from which to begin real work.",
      e: "That feeling of seeking something you can't name is, in Kashmir Shaivism, one of the first signs of pratyabhijñā — recognition. Not of an answer yet, but of the fact that there's something to recognize. That's already a lot.",
    },
  },
  {
    id: "Q3",
    section: "Mind & Body",
    text: "Your mind right now. Can you observe it without being it?",
    options: [
      { letter: "a", label: "I don't fully understand the question", points: 0 },
      { letter: "b", label: "Sometimes I notice I'm thinking, but it pulls me in anyway", points: 2 },
      { letter: "c", label: "I can step out of thought when I choose, even briefly", points: 3 },
      { letter: "d", label: "There's a growing distance between me and my thoughts", points: 4 },
      { letter: "e", label: "Thought happens. I observe it. Not always, but frequently", points: 5 },
    ],
    feedback: {
      a: "No problem. The fact that you don't understand this question just means there's a foundational concept of contemplative practice not yet in place. It's not an insurmountable obstacle — it's the starting point.",
      b: "The capacity to observe thought even a second before it pulls you back in is the first real step. The Vijñāna Bhairava Tantra contains 112 techniques specifically designed for this. You're closer than you think.",
      c: "You have the basic ingredient for any contemplative practice to work: access, even brief, to a space prior to thought. From here it's about deepening, not learning something new.",
      d: "This is the beginning of what Kashmir Shaivism calls sākṣin — witness consciousness. Not the end of the path, but the beginning of real work. Practice from this point starts to be genuinely different.",
      e: "That's mature āṇavopāya moving toward śāktopāya. If this is lived and not just conceptual, there's a practice foundation here on which something serious can be built.",
    },
  },
  {
    id: "Q4",
    section: "Mind & Body",
    text: "Your body right now. Not how you aspire it to be — how it actually is.",
    options: [
      { letter: "a", label: "I live mostly in my head — the body is something I manage", points: 1 },
      { letter: "b", label: "There's a lot of tension, dissociation, or chronic pain I'm aware of", points: 3 },
      { letter: "c", label: "I'm actively working on it — a lot to process", points: 3 },
      { letter: "d", label: "Generally present, though there are still areas of armor", points: 4 },
      { letter: "e", label: "The body is my main laboratory — physical sensation is a direct portal", points: 5 },
    ],
    feedback: {
      a: "Disconnection from the body isn't a character flaw — it's the result of years of conditioning in systems that treat the body as an obstacle. In the Trika, the body is the primary laboratory. Saṃskāras — the residues of unprocessed experience — live in the body before they live in the mind. The work starts here.",
      b: "The fact that you're aware of the tension or dissociation is already more valuable than it appears. Unconscious dissociation is much harder to work with than the conscious tension you can see. You're observing something real, and that's already a portal.",
      c: "Active somatic work is direct preparation for tantric practice. Saṃskāras live in the body first. What you're doing already has the right direction — the tradition can give you a more precise map of what you're crossing.",
      d: "General presence with some armor remaining is an honest description of someone who's already been working for a while. Those zones aren't a problem — they're the exact material of practice at this moment.",
      e: "If this is true and not aspirational, you have the most important asset for Trika work. The tradition doesn't need you to make the body into something it's not — it needs you to use it as what it already is: the most direct portal to universal consciousness.",
    },
  },
  {
    id: "Q5",
    section: "What You're Actually Seeking",
    text: "When you imagine yourself genuinely free — not enlightened as a concept, actually free in daily life — what has changed?",
    subtext: "Not in your feelings. In what you actually do and how you relate to people and situations.",
    options: [
      { letter: "a", label: "I feel at peace — less anxious, calmer", points: 0 },
      { letter: "b", label: "I'm a better person — more loving, more compassionate", points: 1 },
      { letter: "c", label: "I'm more functional and effective in what I do", points: 1 },
      { letter: "d", label: "I'm more alive — more capable of real rage, real joy, real intimacy", points: 5 },
      { letter: "e", label: "My personal story no longer weighs the same — something larger holds it", points: 4 },
    ],
    feedback: {
      a: "What you're describing is an improved ego, not freedom. Peace as the absence of anxiety is a legitimate wellness objective — but it's not what Kashmir Shaivism means by mokṣa. Trika liberation doesn't make you calmer. It makes you more real. More alive. More capable of holding the full range of experience.",
      b: "Unconditional love is a byproduct of awakening, not its objective. When it becomes the goal, it tends to produce the opposite: repression in the name of love, self-negation in the name of compassion. The tradition says: awaken first. The love comes on its own.",
      c: "Spirituality as productivity is one of capitalism's subtlest colonizations of the interior. We're not here to make you more efficient. We're here to ask you: efficient for which system, exactly?",
      d: "This is the Trika answer. Freedom isn't the absence of intensity — it's the capacity to hold it without contracting. Someone free doesn't feel less. They feel everything, without anything paralyzing them. The Trika calls this pūrṇatā — fullness. That's the real objective.",
      e: "The lightness of personal history without losing the capacity to act in the world — that's what the Trika calls jīvanmukti: liberation in life. Not a story that disappears, but a story that no longer possesses you.",
    },
  },
  {
    id: "Q6",
    section: "What You're Actually Seeking",
    text: "Your relationship with desire, pleasure, and wanting.",
    options: [
      { letter: "a", label: "It's the main source of my suffering — I try to transcend or reduce it", points: 0 },
      { letter: "b", label: "I accept it intellectually but there's shame or guilt underneath", points: 2 },
      { letter: "c", label: "It's complicated — sometimes it opens me, sometimes it traps me", points: 3 },
      { letter: "d", label: "It's a portal — when I relate to it well, that's where my real aliveness lives", points: 5 },
    ],
    feedback: {
      a: "This is the Vedanta position, not the Trika position. In Kashmir Shaivism, desire isn't the problem. Compulsive identification with it is the problem. The difference isn't subtle — it changes the entire practice. The path isn't to transcend desire. It's to purify the perception from which you relate to it.",
      b: "Shame around desire is one of the deepest conditionings — and one of the most specifically colonial and patriarchal ones. It's not a spiritual position. It's a trauma inscribed in the body. Trika practice works directly with this: not to eliminate the shame, but to see it for what it is — a contraction of consciousness that can dissolve.",
      c: "This is the most honest description that someone genuinely working with desire can give. The Trika has a very precise map of why it sometimes opens and sometimes traps, and specific tools for each moment.",
      d: "Welcome to the tradition. That's exactly what Abhinavagupta taught: desire (icchā) is the first śakti, the first movement of consciousness toward its own expansion. Working with it correctly is working with the pulse of reality itself.",
    },
  },
  {
    id: "Q7",
    section: "Freedom & Attachment",
    text: "What do you think about attachments and addictions?",
    options: [
      { letter: "a", label: "Real spiritual freedom requires not depending on anything or anyone", points: 0 },
      { letter: "b", label: "Everyone has their attachments — it's part of who you are", points: 1 },
      { letter: "c", label: "You can do what you want, as long as you can also NOT do it", points: 5 },
      { letter: "d", label: "Attachment itself isn't the problem — compulsive identification with it is", points: 4 },
    ],
    feedback: {
      a: "This is the renunciatory position — which the Trika explicitly rejects. Real freedom doesn't require renouncing anything — it requires not being possessed by anything. There's an enormous difference between renouncing and being free.",
      b: "There's truth here, but also a trap. Attachments define you while you have them. The question isn't to accept them as permanent identity — it's to learn to relate to them from a place where they don't possess you. That's different from saying it doesn't matter.",
      c: "This is svātantrya — the sovereign freedom of consciousness. Not abstinence: non-compulsion. The difference is everything. If you can do something or not do it with the same equanimity, that thing no longer possesses you. That's exactly what we're looking for.",
      d: "Exactly. The object of attachment is neutral — the problem is the contraction around it. The conditioning isn't in what you do, but in the degree of internal freedom with which you do it.",
    },
  },
  {
    id: "Q8",
    section: "The Actual Conditioning",
    text: "Your political and social situation, and your spiritual situation.",
    options: [
      { letter: "a", label: "They're separate — spiritual work is interior, politics is something else", points: 0 },
      { letter: "b", label: "Should be connected but I don't have a real framework for linking them", points: 2 },
      { letter: "c", label: "My body's conditioning is also structural and cultural — not just personal", points: 4 },
      { letter: "d", label: "They're inseparable — I can't work on one without working on the other", points: 5 },
    ],
    feedback: {
      a: "Separating spiritual work from political reality is one of the most invisible privileges that exists. Whoever can 'disconnect' from politics to meditate is someone whose existence isn't threatened by power structures. In the Trika, everything is Śiva — including systems of oppression, which are Śiva operating from contraction. Working with that isn't 'importing politics' into spirituality. It's taking the tradition seriously.",
      b: "The honesty of this answer is good. Having the instinct without the map is exactly the state from which something real can be learned. The framework you're looking for exists — in the Trika cosmovision and how it applies to collective conditioning.",
      c: "This is what the Trika calls māyīyamala — the limitation that operates both at the individual and collective level. Recognizing that your body carries conditionings that are not just personal but structural is a form of pratyabhijñā.",
      d: "Exactly. Not as a political stance — as a technical understanding of how collective karma operates in the individual body. Liberation that excludes the collective dimension is not complete liberation. It's another type of bypass, more sophisticated.",
    },
  },
  {
    id: "Q9",
    section: "The Actual Conditioning",
    text: "How close are you to awakening?",
    options: [
      { letter: "a", label: "After all this seeking, I'm clearly better than before", points: 1 },
      { letter: "b", label: "I consider myself more conscious than most people", points: 0 },
      { letter: "c", label: "Probably less conscious than most", points: 2 },
      { letter: "d", label: "My personal history isn't what's most relevant here", points: 3 },
      { letter: "e", label: "It's consciousness that awakens in me — I don't awaken, I'm awakened", points: 5 },
    ],
    feedback: {
      a: "Being better than before isn't the same as awakening. It's important to distinguish them — not to devalue real progress, but to avoid confusing the map with the territory. Personal improvement is a byproduct of awakening in the Trika, not the awakening itself.",
      b: "This is the spiritual ego trap — the most common and hardest to see from inside. Comparing yourself spiritually to others is a clear sign that the ego has colonized the practice. No judgment here — it's just the most important pattern to identify before entering serious work.",
      c: "Humility can be genuine or it can be the other face of spiritual ego — the one that undervalues itself instead of overvaluing. Both are contractions. The Trika position is neither 'I'm very conscious' nor 'I'm very unconscious.' It's: I am consciousness recognizing itself. Period.",
      d: "There's something correct here. But if used to avoid looking at personal history, it becomes bypass. Both things at once: the story matters and doesn't matter. That tension needs to be held, not resolved prematurely.",
      e: "This is the technically correct formulation in the Trika. Pratyabhijñā isn't 'I awaken' — it's 'consciousness recognizes itself through this form.' If this is lived and not just memorized, there's genuine understanding here.",
    },
  },
  {
    id: "Q10",
    section: "The How",
    text: "How do you want to get there?",
    options: [
      { letter: "a", label: "Taking what resonates from different traditions, reaching my own conclusions", points: 0 },
      { letter: "b", label: "Having intense experiences in workshops or retreats when I can", points: 0 },
      { letter: "c", label: "Finding something that works without too much commitment", points: 0 },
      { letter: "d", label: "Committing to a real path with an ancient lineage and a teacher I can trust", points: 5 },
      { letter: "e", label: "Deepening what I already have, with more rigor and a real container", points: 4 },
    ],
    feedback: {
      a: "'I keep what resonates' looks like freedom but is usually the most sophisticated form of avoiding real work. What resonates tends to confirm what you already think. A real lineage confronts you with what you don't want to see. That's the difference.",
      b: "Isolated experiences without continuous practice to integrate them tend to produce more confusion than clarity. The Trika has an explicit position: retreat without daily practice doesn't build anything permanent.",
      c: "It doesn't exist. And if it did, we're not offering it. The tantric path requires commitment — not as penance, but because deep transformation requires time, consistency, and a container. There are hundreds of no-commitment options in the spiritual market. We're not one of them.",
      d: "That's exactly what we offer. And if you've arrived at that conclusion after searching — and not as a naïve starting point — then you already know why it matters. Welcome.",
      e: "Having a foundation and wanting to go deeper with real structure is one of the most intelligent positions from which to arrive at a school. You're not starting from zero — you're starting from where you already have real material to work with.",
    },
  },
  {
    id: "Q11",
    section: "The How",
    text: "When you commit to something — a practice, a course, a process — what actually happens?",
    options: [
      { letter: "a", label: "I start with energy and it fades — staying is genuinely hard for me", points: 1 },
      { letter: "b", label: "I follow through if it excites me, but if it loses intensity I drop it", points: 2 },
      { letter: "c", label: "Depends on circumstances — sometimes yes, sometimes no", points: 2 },
      { letter: "d", label: "I manage to keep going even when it's hard — I adapt rather than quit", points: 4 },
      { letter: "e", label: "When it gets hard is when it gets interesting — difficulty takes me deeper", points: 5 },
    ],
    feedback: {
      a: "Difficulty maintaining is one of the most common and workable obstacles. In the Trika it's understood as a saṃskāra pattern — an energetic contraction that sabotages consistency. It's not a failure of willpower. It's a pattern worked directly in somatic practice.",
      b: "Emotion as fuel is always unstable — it always runs out. Trika practice works especially well when it no longer excites, because that's when the real work begins. If you only practice when you feel something, you're still chasing states rather than cultivating capacity.",
      c: "Circumstances will always interfere — that's not going to change. Practice that depends on circumstances to happen is still just another activity, not a path.",
      d: "This is what distinguishes a practitioner from someone interested in spirituality. Adaptation instead of abandonment already speaks to a mature relationship with the work. Something real can be built from here.",
      e: "This is what the Trika calls the attitude of the vīra — the spiritual warrior. Not masochism — the capacity to use resistance as a portal instead of a reason to stop. That's real practice.",
    },
  },
  {
    id: "Q12",
    section: "Why Here",
    text: "Why Feral Awareness specifically?",
    options: [
      { letter: "a", label: "I saw something on social media that resonated — I don't fully know why yet", points: 1 },
      { letter: "b", label: "I'm looking for something combining spiritual depth, political awareness, and somatic work", points: 3 },
      { letter: "c", label: "I've tried other schools and I need something more rigorous and lineage-based", points: 4 },
      { letter: "d", label: "I've had openings I couldn't integrate — I need a real container", points: 5 },
      { letter: "e", label: "I arrived through my own practice, a teacher, or an internal signal I trust", points: 5 },
    ],
    feedback: {
      a: "Instagram is a legitimate portal — that's how many people arrive here. But if you still don't really know why you're here, take a moment before continuing. You don't need the perfect answer, but something more than passing resonance.",
      b: "Exactly the combination we offer. And it's a combination that exists in very few places — because the spiritual market prefers to separate spirituality from politics and from the body. That you're looking for it specifically already says something about where you are.",
      c: "Rigor without lineage is academic. Lineage without rigor is dogma. The combination of both — which Kashmir Shaivism offers at its best — is rare and demanding. If you've already been through other things and you're still searching, you probably already know the difference from the inside.",
      d: "That's exactly what a lineage-based school exists for. Openings without map and without container create more confusion than clarity. The Trika tradition has the most precise map I know for the territory you've already touched.",
      e: "If you arrived here through your own path, something in that path was already pointing in the right direction. In the Trika that has a name: śaktipāta. Grace operating. We were expecting you.",
    },
  },
];

const OPEN_QUESTIONS: OpenQuestion[] = [
  {
    id: "OQ1",
    text: "What does your current practice not reach?",
    subtext: "The place where it hits its limit and stops. Not generically — specifically. What is still there?",
  },
  {
    id: "OQ2",
    text: "Is there something about yourself you haven't told us because you thought it would disqualify you?",
    subtext: "This is the most important question in the test. You don't have to answer it. But if something came to mind while you read it — we'd genuinely like to know.",
  },
];

// ── TIER DATA ────────────────────────────────────────────────

const TIERS = {
  1: {
    range: "0–20",
    label: "Not the right moment",
    color: "#888888",
    opener: "What we see in your answers is honest, and that already counts for something. But right now isn't the right moment for the school — not because something is wrong with you, but because the work we do requires a foundation that isn't quite in place yet.\n\nPulling this thread too soon can confuse more than illuminate. Read what follows — it's the most useful thing we can offer you right now.",
    closing: "Follow @feral.awareness. The content is designed as a real first encounter with the tradition — not as information, but as a different way of seeing. Let it work on you.\n\nCome back in three months. If something has genuinely shifted, we'll see it.",
  },
  2: {
    range: "21–40",
    label: "Something real is here",
    color: "#00E5FF",
    opener: "There's something genuine in your answers. Real seeking, real awareness of where the limits are, and something that clearly isn't satisfied with what you've found so far. That's not common.\n\nBut there are also some things telling us the container isn't quite ready yet for what we teach. This isn't a no — it's a not yet.",
    closing: "We're proposing a first step: engage with the content on @feral.awareness seriously for 30 days. Not as information — as practice. Let it show you where your real edges are.\n\nCome back in 60 days. If what we see in a second test matches what we sense here, we'll welcome you in.",
  },
  3: {
    range: "41–60",
    label: "We'll be in touch",
    color: "#FFD700",
    opener: "This is what we've been looking for. Not perfection — honesty. What we see in your answers is exactly the combination we need: genuine seeking, real work, and something that isn't satisfied with what you've found so far.\n\nWe'll write to you personally within a week.",
    closing: "While you wait — one thing. Not as homework. As a first taste:\n\nFind a moment where you feel a strong emotion — any emotion. Instead of suppressing it or acting on it, locate exactly where it lives in your body. A pressure, heat, tightening. Stay with the physical sensation for ten seconds without labeling what it means. That's āṇavopāya. That's the beginning.",
  },
};

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

  const getTier = (score: number) => {
    if (score <= 20) return 1;
    if (score <= 40) return 2;
    return 3;
  };

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
    const tier = getTier(score);

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
      tierLabel: tierData.label,
      tierColor: tierData.color,
      opener: tierData.opener,
      closing: tierData.closing,
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
        tier,
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
  const tier = getTier(score);
  const tierData = TIERS[tier as keyof typeof TIERS];

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
    const tierColor = tierData.color;

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
            {tierData.label.toUpperCase()}
          </h2>
          <div className="h-px mb-6" style={{ backgroundColor: tierColor, opacity: 0.4 }} />
          {/* Tier opener */}
          <div className="space-y-3">
            {tierData.opener.split("\n\n").map((para, i) => (
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
            {tierData.closing.split("\n\n").map((para, i) => (
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
          {tier === 3 && (
            <a
              href="/school"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 tracking-widest uppercase transition-all"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                border: "1px solid var(--feral-cyan, #00E5FF)",
                color: "var(--feral-cyan, #00E5FF)",
              }}
            >
              Learn About the School
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
