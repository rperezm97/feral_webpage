/* ============================================================
   FERAL AWARENESS — MASTER CONTENT FILE
   ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR CONTENT CHANGES.

   Every page, every section, every text block, every image,
   every background, every CTA, every link — all here.

   HOW BACKGROUNDS WORK (per section):
     bg: {
       type: "image"  → shows a static image
       type: "video"  → streams from Cloudflare Stream (future)
       type: "none"   → plain dark background
       url: string    → image URL  (used when type = "image")
       videoId: string→ Cloudflare Stream video ID (used when type = "video")
       overlay: string→ Tailwind opacity class for dark overlay, e.g. "bg-black/60"
       grain: boolean → adds grain texture (true/false)
       shimmer: boolean → adds iridescent shimmer (true/false)
     }

   HOW TO ADD A NEW IMAGE:
     1. Upload to your CloudFront CDN (or Cloudflare Images)
     2. Paste the full URL in the relevant bg.url below

   HOW TO ACTIVATE A VIDEO BACKGROUND (when ready):
     1. Upload video to Cloudflare Stream in your dashboard
     2. Copy the Video ID (looks like: abc123def456...)
     3. Set  type: "video"  and  videoId: "abc123def456..."
     4. The <SectionBg> component handles the rest automatically

   CLOUDFLARE STREAM EMBED FORMAT (for reference):
     https://customer-{code}.cloudflarestream.com/{videoId}/iframe
   ============================================================ */

// ─── CDN & SITE ─────────────────────────────────────────────
export const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o";
// Cloudflare Stream customer code — set this when you have a Stream account
export const CF_STREAM_CUSTOMER = ""; // e.g. "m-123abc"

export const SITE = {
  name:      "Feral Awareness",
  url:       "https://www.feralawareness.com/",
  email:     "feral.awareness@gmail.com",
  tagline:   "Radical spirituality & embodiment for liberation & enjoyment. Decolonial queerfem lens, lineage-based.",
  instagram: "https://www.instagram.com/feral.awareness/",
};

// ─── LOGOS ───────────────────────────────────────────────────
export const LOGOS = {
  main:        "/images/Logo_negro_final.png",
  transparent: "/images/Logo_dark_trans.png",
};

// ─── CLOUDFLARE TURNSTILE ────────────────────────────────────
export const TURNSTILE_SITE_KEY = "0x4AAAAAAC8j7PnIM3z63td1";

// ─── IMAGE LIBRARY ───────────────────────────────────────────
// Add all your site images here. Reference them by key below.
export const IMAGES = {
  hero:        `${CDN}/feral-hero-blue-Hvikx3gGvgR7tDVXnsuGYK.webp`,
  tantra:      `${CDN}/feral-tantra-origins-7yQJqP5DoD4KDmkQy3T9tH.webp`,
  practice:    `${CDN}/feral-practice-body-iQQ63gZgXFZF269mY8Auyv.webp`,
  about:       `${CDN}/feral-about-portrait-93GxX36zxF8oC8nRpwa9XV.webp`,
  resources:   `${CDN}/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp`,
  school:      `${CDN}/feral-hero-blue-Hvikx3gGvgR7tDVXnsuGYK.webp`,
  // Atmospheric textures (Unsplash — free, CC0)
  oceanNectar: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80&auto=format&fit=crop",
  nebula:      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=80&auto=format&fit=crop",
  iridescent:  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1600&q=80&auto=format&fit=crop",
  deepwater:   "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1600&q=80&auto=format&fit=crop",
  // Additional free images for test slides & new sections (Unsplash CC0)
  mountain:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop",
  milkyway:    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80&auto=format&fit=crop",
  forest:      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80&auto=format&fit=crop",
  candlelight: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1600&q=80&auto=format&fit=crop",
  // Roberto's original design assets (section backgrounds, cards, decorative elements)
  yantra:      "/images/yantra.png",    // Logo yantra — section dividers & decorative overlays
  base1:       "/images/base1.png",     // Dark neon electric smoke — testimonials
  base2:       "/images/base2.png",     // Starfield with yantra corners — WHO IS FOR
  p4:          "/images/p4.png",        // Kali/Durga face — lineage accent + who-card-3
  p5:          "/images/p5.png",        // Design composition 5 — who-card-2
  p7:          "/images/p7.png",        // Design composition 7
  p9:          "/images/p9.png",        // Design composition 9 — who-card-1
  p10:         "/images/p10.png",       // Design composition 10
  p12:         "/images/p12.png",       // Design composition 12
  p13:         "/images/p13.png",       // Aurora borealis — lineage background
  p15:         "/images/p15.png",       // Kali + red smoke — consultorio background
  P1:          "/images/P1.png",        // Portrait composition
  P2:          "/images/P2.png",        // Portrait composition
};

// ─── BACKGROUND TYPE ─────────────────────────────────────────
// Used by every section below. The <SectionBg> component reads this.
export type BgType = "image" | "video" | "none";
export interface SectionBg {
  type:     BgType;
  url?:     string;   // image URL
  videoId?: string;   // Cloudflare Stream video ID
  overlay?: string;   // Tailwind class e.g. "bg-black/60"
  grain?:   boolean;
  shimmer?: boolean;
}

// ─── NAVIGATION ──────────────────────────────────────────────
// Edit labels or hrefs, or reorder/add items
export const NAV_LINKS = [
  { href: "/",          label: "Home" },
  { href: "/tantra",    label: "Tantra" },
  { href: "/practice",  label: "Practice" },
  { href: "/about",     label: "About" },
  { href: "/school",    label: "School" },
  { href: "/blog",      label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export const NAV_CTA = { href: "/test", label: "Take the Test" };

// ─── FOOTER ──────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Radical spirituality & embodiment for liberation & enjoyment. Decolonial queerfem lens, lineage-based.",
  nav: [
    { href: "/tantra",    label: "Nondual Tantra" },
    { href: "/practice",  label: "Practice" },
    { href: "/about",     label: "About" },
    { href: "/school",    label: "School" },
    { href: "/blog",      label: "Blog" },
    { href: "/resources", label: "Resources" },
  ],
  school_cta: {
    heading: "Enter the School",
    body:    "Take the Consciousness Test — the entrance gate to Feral Awareness. Not a personality quiz. A mirror.",
    cta:     { href: "/test", label: "Take the Test" },
  },
  social: [
    { href: "https://www.instagram.com/feral.awareness/", label: "Instagram" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/privacy",   label: "Privacy" },
  ],
};

// ════════════════════════════════════════════════════════════
// HOME PAGE
// ════════════════════════════════════════════════════════════
export const HOME = {

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    bg: {
      type:    "image" as BgType,
      url:     IMAGES.hero,
      // To use video instead: type: "video", videoId: "your-cloudflare-stream-id"
      videoId: "",
      overlay: "bg-black/50",
      grain:   true,
      shimmer: false,
    },
    headline:    "FERAL AWARENESS",
    eyebrow:     "Non-dual Tantra · Kashmir Shaivism · The Trika",
    subheadline: "Radical spirituality for people who are done being sold comfort dressed up as liberation.",
    clarifier:   "Not neo-tantra. Not wellness. Not self-improvement. Trika Kashmir Shaivism — six thousand years of non-dual tradition, lineage-based and politically clear.",
    cta_primary:   { href: "/test",   label: "Take the Consciousness Test" },
    cta_secondary: { href: "/school", label: "Enter the School" },
    cta_freebie:   { href: "/freebie/intro-spanda", label: "Get the free guide" },
    scarcity:    "School now open at founding price · Price increases when the cohort fills",
  },

  // ── WHAT IS THIS SECTION ─────────────────────────────────
  what: {
    bg: { type: "none" as BgType },
    eyebrow:  "What we mean by feral",
    heading:  "AN AWARENESS THAT DOES NOT CONTRACT",
    intro:    "Feral awareness is awareness that has stopped flinching.",
    body: [
      "It holds the ground — the body, the nervous system, the people you love, the political present — while simultaneously expanding into the edges of the universe, where the texts of the Trika tradition describe an ocean of nectar (amṛta) pulsing through every experience. It doesn't shrink when the mind contracts around a desire or an object. It doesn't withdraw from the world in the name of purity.",
      "\"Feral\" means pre-domesticated. Not wild in the sense of chaotic. Wild in the sense of not fitted to the cage you were born into.",
      "The Trika tradition has a word for the mystical experience at the center of this: camatkāra — ecstatic awe, the shiver of recognition that reality is not a neutral backdrop but a living pulsation of consciousness (spanda). When you feel it, life stops being a problem to solve and starts being a flow.",
      "This is not self-improvement. It is pratyabhijñā — the recognition of what you already are. Consciousness itself, in its fullness (pūrṇatā), temporarily contracted into the experience of being \"you.\"",
    ],
  },

  // ── EARLY TEST CTA (conversion placement) ────────────────
  early_cta: {
    bg: {
      type:    "none" as BgType,
      overlay: "bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10",
    },
    eyebrow:    "The Entrance Gate",
    heading:    "CONSCIOUSNESS TEST",
    subheading: "Not a personality quiz. A mirror.",
    body:       "Twelve questions mapping the patterns that distinguish practitioners who actually wake up from those who don't. It measures honesty with yourself when that honesty is uncomfortable — which is harder than it sounds.",
    cta:        { href: "/test", label: "Take the Test — Free" },
    note:       "Founding price · Will not last",
  },

  // ── WHY NONDUAL SECTION ───────────────────────────────────
  nondual: {
    bg: {
      type:    "image" as BgType,
      url:     IMAGES.oceanNectar,
      videoId: "",
      overlay: "bg-black/80",
      grain:   false,
      shimmer: true,
    },
    eyebrow: "The frame",
    heading: "WHY NONDUAL TANTRA",
    body: [
      "Most of what you get sold as \"eastern spirituality\" in the West comes from two places: the Vedas and Patañjali's Yoga Sūtras. Both treat the world as an illusion to overcome, the body as an obstacle, desire as a trap. Both come from brahmanic caste contexts — privileged people who owned land and wrote texts that reflected their privilege.",
      "Kashmir Shaivism comes from a completely different lineage: the Bhairava Āgamas, non-dual tantric texts that put consciousness and the yoginī at the center, treat multiplicity and diversity as manifestations of śakti, and embrace pleasure, body, art, and the world itself as the path.",
      "The world is not māyā as \"illusion.\" Māyā is the creative power of consciousness voluntarily contracting itself to taste finitude — to experience being separate so it can recognize its own fullness. Renunciation without enjoyment becomes repression in spiritual clothing. Enjoyment without liberation is empty hedonism. The non-dual texts refuse both errors.",
      "This path is decolonial because the tradition itself was decolonial. It is queer and feminist because śakti — power, energy, the feminine principle — is not subordinate to Śiva. They are inseparable and equal. Your politics are not a distraction from the path. They are already practice.",
    ],
    pullquote: "In Trika, liberation and enjoyment are not opposites. A tradition that gives you one without the other is incomplete.",
  },

  // ── WHO THIS IS FOR ───────────────────────────────────────
  who: {
    bg: {
      type:  "none" as BgType,
      grain: true,
    },
    eyebrow: "Who",
    heading: "WHO THIS IS FOR",
    groups: [
      {
        title: "SERIOUS PRACTITIONERS WHO HAVE HIT A WALL",
        body:  "You have sat with other traditions — Zen, Vipassana, Advaita, Vedanta, neo-tantra, ceremonial paths. They gave you something, and then they gave you a ceiling. You started noticing the repression underneath the peace. Welcome.",
        image: IMAGES.p9,
      },
      {
        title: "THE POLITICALLY RADICAL WHO ARE SUSPICIOUS OF SPIRITUALITY",
        body:  "You have watched the wellness industry absorb every liberation movement and sell it back as a personal development product. Good. Neither are we. The Trika framework is politically sharp because the texts themselves were.",
        image: IMAGES.p5,
      },
      {
        title: "ARTISTS, PERFORMERS, PEOPLE WHO LIVE IN THEIR BODIES",
        body:  "You have found that concepts don't go deep enough — that the body reaches what the mind cannot. The Trika tradition treats the body as the primary laboratory. Saṃskāras live in the body first, and they must be released there before the mind can follow.",
        image: IMAGES.p4,
      },
    ],
    closing: "If none of these are you — if you are here for comfort, for \"high vibration,\" for a teacher to tell you what to think — this is not your place. That's okay. The door is honest.",
  },

  // ── FREEBIE CTA STRIP ────────────────────────────────────
  // Shown below the hero. Add/remove freebies to show more entry points.
  freebie_cta: {
    heading:    "START HERE — FREE",
    subheading: "Not ready for the test? Start with a free guide.",
    items: [
      { slug: "intro-spanda", label: "Intro to Spanda", tagline: "The living pulsation at the heart of Kashmir Shaivism — free PDF" },
    ],
  },

  // ── LINEAGE ──────────────────────────────────────────────
  // Shows the unbroken transmission line from origin to now
  lineage: {
    eyebrow: "The Line",
    heading: "AN UNBROKEN TRANSMISSION",
    nodes: [
      { name: "Vasugupta",          century: "c. 9th century",       works: "Śiva Sūtras · Spanda Kārikā" },
      { name: "Somānanda",          century: "c. 9th–10th century",  works: "Śivadṛṣṭi" },
      { name: "Utpaladeva",         century: "c. 10th century",      works: "Īśvarapratyabhijñākārikā · Śivastotrāvalī" },
      { name: "Abhinavagupta",      century: "c. 10th–11th century", works: "Tantrāloka · Tantrasāra · Paramārthasāra" },
      { name: "Kṣemarāja",          century: "c. 11th century",      works: "Pratyabhijñāhṛdayam · Spanda Nirṇaya" },
      { name: "Swami Lakshmanjoo",  century: "1907 – 1991",          works: "Last living authority of Kashmir Shaivism" },
      { name: "Mar Delgado",        century: "Contemporary · Spain", works: "PhD linguistics · Trika transmission · Tantra Shaivita Aplicado" },
      { name: "Roberto Pérez Martínez", century: "Berlin",           works: "Authorized by Mar Delgado · this school" },
    ],
    note: "Lineage is not a credential. It is a chain of verification: practice → realization → transmission, across generations of people who stress-tested the map.",
  },

  // ── SECTION CARDS ────────────────────────────────────────
  sections_block: {
    bg: {
      type:    "image" as BgType,
      url:     IMAGES.nebula,
      videoId: "",
      overlay: "bg-gradient-to-b from-background via-transparent to-background",
      grain:   false,
      shimmer: false,
    },
    heading: "WALK INTO THE TRADITION",
    sections: [
      {
        title:       "Nondual Tantra",
        description: "The Bhairava Āgamas. Six thousand years of non-dual tantric tradition. Not neo-tantra. Not Patañjali. A radically different map of consciousness.",
        href:        "/tantra",
        image:       IMAGES.tantra,
      },
      {
        title:       "Practice",
        description: "The three upāyas as a living system. The body as laboratory. Bhakti as the heat that melts the contraction. Active meditation in daily life.",
        href:        "/practice",
        image:       IMAGES.practice,
      },
      {
        title:       "About",
        description: "Rob Pérez Martínez. Berlin. A story that includes a psychotic break, eight years of physical theater, and a teacher who refused to dilute the transmission.",
        href:        "/about",
        image:       IMAGES.about,
      },
      {
        title:       "School",
        description: "Ongoing formation, not weekend retreats. Online school and Berlin motion lab. Entry is via the Consciousness Test.",
        href:        "/school",
        image:       IMAGES.tantra,
      },
      {
        title:       "Blog",
        description: "Essays on consciousness, decolonization, and the politics of recognition. Slow. No listicles.",
        href:        "/blog",
        image:       IMAGES.resources,
      },
      {
        title:       "Resources",
        description: "Sanskrit glossary. Scripture references. What to read first and why.",
        href:        "/resources",
        image:       IMAGES.resources,
      },
    ],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────
  testimonials: {
    bg: { type: "none" as BgType },
    eyebrow: "From practitioners",
    heading: "WHAT SHIFTS",
    items: [
      {
        quote:      "I'd spent ten years in Vipassana and Advaita hitting the same ceiling. This is the first framework that didn't ask me to amputate half my experience to be 'spiritual'.",
        name:       "M.K.",
        location:   "Berlin",
        credential: "10 years Vipassana + Advaita Vedanta",
      },
      {
        quote:      "The Consciousness Test was the most uncomfortable thing I've done online. Also the most honest. It showed me exactly where I was lying to myself about my practice.",
        name:       "S.R.",
        location:   "Barcelona",
        credential: "Yoga teacher, 6 years practice",
      },
      {
        quote:      "I came in as a skeptic — I'm a political organizer and I distrust anything that smells like wellness. This doesn't. It's rigorous, embodied, and doesn't ask you to stop caring about the world.",
        name:       "L.T.",
        location:   "Amsterdam",
        credential: "Political organizer, secular background",
      },
    ],
  },

  // ── CONSULTORIO ───────────────────────────────────────────
  consultorio: {
    bg: { type: "none" as BgType },
    eyebrow: "The Consultorio",
    heading: "QUESTIONS THAT BURN",
    body:    "Real themes from the practice. No sanitized case studies. These are the fires we hold in the Consultorio — one-on-one tantric guidance for people doing real work.",
    items: [
      {
        title:   "Spiritual bypass and the tyranny of \"high vibration\"",
        preview: "When \"raising your frequency\" becomes another way to avoid grief, rage, and the political present — that is bypass. The Trika tradition holds that unprocessed emotion is contracted śakti. What has not moved through the body has not been processed. Equanimity built on top of avoidance is a performance, not liberation.",
      },
      {
        title:   "Colonial religion and body shame",
        preview: "The belief that the body is a problem — sinful, dirty, lower — did not disappear when you stopped identifying as Christian. It entered your nervous system as saṃskāra: body-held conditioning that shapes how you perceive, react, and contract. Kashmir Shaivism makes the inverse claim: the body is the primary laboratory of consciousness.",
      },
      {
        title:   "Desire as expansion, not lack",
        preview: "In Trika philosophy, desire (icchā śakti) is not a sign of deficiency — it is spanda, the pulsation of consciousness reaching toward its own expression. The problem is not the desire. It is the contraction around the desire: the belief that the object you chase is separate from what you already are.",
      },
      {
        title:   "Frozen emotion and the fear of death",
        preview: "What presents itself as an emotion is often a saṃskāra: condensed, unprocessed experience held in the body as rigidity. Abhinavagupta teaches that every vikāra — every disturbance — is śakti in disguise. Fear of death, recognized clearly, becomes the recognition of the impermanent arising within the permanent ground.",
      },
      {
        title:   "Self-improvement as social control",
        preview: "The self-improvement industry operates on the premise that you are deficient and that fixing yourself will make you free. Kashmir Shaivism begins from the opposite position: pūrṇatā, fullness — you are already complete consciousness, temporarily contracted. The work is pratyabhijñā — recognition — not construction.",
      },
    ],
    cta: { href: "/test", label: "Submit your question" },
  },

  // ── CONSCIOUSNESS TEST CTA BLOCK ─────────────────────────
  test_cta: {
    bg: {
      type:    "image" as BgType,
      url:     IMAGES.deepwater,
      videoId: "",
      overlay: "bg-black/75",
      grain:   false,
      shimmer: true,
    },
    heading:    "CONSCIOUSNESS TEST",
    subheading: "The entrance gate to the school",
    body:       "This is not a personality quiz. Twelve questions mapping the patterns that distinguish practitioners who actually wake up from those who don't. Fifteen minutes. No account required.",
    badge:      "School open · Founding price — not permanent",
    cta:        { href: "/test", label: "Take the Test — Free" },
  },

  // ── NEWSLETTER ────────────────────────────────────────────
  newsletter: {
    bg: {
      type:    "image" as BgType,
      url:     IMAGES.iridescent,
      videoId: "",
      overlay: "bg-gradient-to-b from-background via-black/60 to-background",
      grain:   false,
      shimmer: false,
    },
    heading:     "JOIN THE TRANSMISSION",
    body:        "Raw, unfiltered essays on nondual tantra, decolonial spirituality, and embodied liberation. No algorithms. No noise. Direct to your inbox.",
    placeholder: "your@email.com",
    cta:         "Join →",
    success:     "✓ You're in. First transmission coming soon.",
    disclaimer:  "No spam. Unsubscribe anytime. We don't sell your data.",
  },
};

// ════════════════════════════════════════════════════════════
// TANTRA PAGE
// ════════════════════════════════════════════════════════════
export const TANTRA = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.tantra, videoId: "", overlay: "bg-black/60", grain: true },
    eyebrow:    "The Tradition",
    heading:    "NONDUAL TANTRA",
    subheading: "Kashmir Shaivism · The Trika",
  },

  what: {
    bg: { type: "none" as BgType },
    eyebrow: "What it is",
    heading: "A LIVING MAP OF CONSCIOUSNESS",
    body: [
      "Kashmir Shaivism — also called the Trika, meaning \"the threefold\" — is a non-dual philosophical and contemplative tradition that crystallized in the Kashmir Valley between roughly the seventh and twelfth centuries, as a synthesis of much older oral and textual currents. It is rooted in a specific body of scripture called the Bhairava Āgamas — non-dual tantric texts that were transmitted inside small circles of practicing yogīs and yoginīs, and are still studied and practiced today in an unbroken lineage.",
      "At the center of the tradition is a simple, radical claim: there is one reality, and that reality is consciousness. Not an impersonal ground, not a remote deity, not a cosmic principle you have to reach. Consciousness is what you already are, right now, reading this. Waking up is not becoming something new. It is pratyabhijñā, recognition — the direct, felt seeing of what was always the case.",
      "This is a tradition that insists the finite and the infinite are not opposed. Your body is not an obstacle; it is the laboratory. Your desires are not traps; they are spanda, the pulsation of consciousness reaching toward its own expression. Your emotions are not lower-vibrational noise; they are the pathways. Your political life, your relationships, your grief, your joy — all of it is already the practice, if you know how to meet it.",
    ],
  },

  nondual: {
    bg: { type: "none" as BgType },
    eyebrow: "The frame",
    heading: "WHY NONDUAL",
    body: [
      "The word \"non-dual\" gets thrown around a lot, and most of the time it means something vaguely mystical — \"everything is one, man.\" The technical meaning in the Trika tradition is much more precise, and it matters.",
      "Dualistic traditions split reality into two fundamentally different categories: consciousness and matter, spirit and world, sacred and profane. Practice becomes the work of moving from one side to the other. Most of the yoga and meditation you have encountered in the West operates this way, even when it doesn't advertise it. The body is to be transcended. Desire is to be renounced.",
      "Non-dual tantra refuses this split at the root. There is one reality — cit, consciousness, pure awareness — and everything that appears is that same reality in a particular mode. The world is not other than consciousness. Your body is not a vehicle for something more real; it is that something more real, appearing as a body.",
      "Why does this matter practically? Because as long as your cosmovision splits reality into two, your practice will be an exhausting attempt to get rid of half of yourself.",
    ],
    pullquote: "In a non-dual map, nothing needs to be rejected. Every state is already consciousness. The task is not purification but recognition.",
  },

  scriptures: {
    bg: { type: "none" as BgType },
    eyebrow: "The texts",
    heading: "THE BHAIRAVA ĀGAMAS AND THEIR COMMENTATORS",
    intro: [
      "The Trika tradition is based on a specific category of scripture called the Bhairava Āgamas. They take Bhairava — a wrathful, boundary-dissolving form of Śiva — as the name of ultimate reality, and they refuse every split between sacred and profane, pure and impure, permitted and forbidden.",
      "These texts were not written as philosophy. They are condensed maps: short, cryptic verses meant to be received from a teacher and unpacked through practice and commentary.",
    ],
    texts: [
      { title: "Śiva Sūtras",              author: "Vasugupta · ~9th c.",        desc: "The foundational aphorisms, received by Vasugupta after a vision. Three sections mapping the three upāyas." },
      { title: "Spanda Kārikā",            author: "Vasugupta · ~9th c.",        desc: "The doctrine of vibration. Consciousness as dynamic pulsation — the heartbeat of the absolute, felt in every moment of experience." },
      { title: "Vijñāna Bhairava Tantra",  author: "Anonymous · early medieval", desc: "One hundred and twelve techniques (dhāraṇās) for recognition through direct sensory, emotional, and somatic experience. The most practical of the core texts." },
      { title: "Pratyabhijñāhṛdayam",      author: "Kṣemarāja · ~11th c.",       desc: "The Heart of Recognition. Twenty short sūtras with commentary — the most accessible entry point. If you read only one text to begin with, this is it." },
      { title: "Tantrāloka",               author: "Abhinavagupta · ~10th–11th c.", desc: "The encyclopedic masterwork. Thirty-seven chapters synthesizing the entire non-dual tantric tradition." },
      { title: "Tantrasāra",               author: "Abhinavagupta · ~10th–11th c.", desc: "The essence of the Tantrāloka — a shorter, distilled version of the same teachings." },
      { title: "Īśvarapratyabhijñākārikā", author: "Utpaladeva · ~10th c.",       desc: "The foundational text of the Pratyabhijñā (Recognition) school. Liberation is not something to attain but something to recognize." },
      { title: "Śivastotrāvalī",           author: "Utpaladeva · ~10th c.",       desc: "Ecstatic devotional hymns from the same philosopher. Proof that rigorous philosophy and bhakti are not in conflict." },
    ],
  },

  lineage: {
    bg: { type: "none" as BgType },
    eyebrow: "The line",
    heading: "LINEAGE AS CHAIN OF VERIFICATION",
    body: [
      "Lineage in a contemplative tradition is different from institutional authority. It is not a credential. It is a chain of verification: practice → realization → transmission → practice → realization → transmission, across generations of people who actually did the work and produced results that other people in the lineage could test against their own experience.",
      "The Trika lineage runs roughly: Vasugupta → Somānanda → Utpaladeva → Abhinavagupta → Kṣemarāja → … → Swami Lakshmanjoo → Daniel Odier → Mar Delgado (PhD in linguistics, based in Spain, rigorous textual scholar and realized teacher, authorized and supporting this school) → this work.",
      "Lineage is not a guarantee of truth. Traditions degrade. Interpretations drift. Teachers fail. But a living lineage at least gives you continuity of practice, accumulated insight from people who stress-tested the map, and a way to check your own experience against something older than your own confusion.",
    ],
  },

  neotantra: {
    bg: { type: "none" as BgType, grain: true },
    eyebrow: "A necessary distinction",
    heading: "NEO-TANTRA IS NOT TANTRA",
    body: [
      "What you find marketed as \"tantra\" in the West — at retreats, weekend workshops, couples' therapy with a spiritual accent, partner breath exercises, eye-gazing, sacred sexuality courses — is almost entirely a twentieth-century Western invention. Its lineage is not the Bhairava Āgamas. Its lineage is Osho, the human potential movement, and the wellness industry's ongoing project of absorbing every genuine tradition.",
      "This is not a minor terminological complaint. It is a specific kind of cultural appropriation: take the name of a sophisticated non-dual philosophical tradition, strip out the philosophy, the scriptures, the lineage, the political bite, and most of the content, keep the exotic word, and sell it.",
      "The real tantric tradition does include sexuality as one possible doorway — among many others, alongside breath, sound, emotion, silence, movement, taste, memory, and dreaming. But it is not a sexuality tradition. It is a consciousness tradition that treats every modality of human experience as a potential gate.",
    ],
    pullquote: "We are not hostile to pleasure or intimacy — the texts are not. We are hostile to the replacement of a living tradition with its marketing.",
  },

  lifestyle: {
    bg: { type: "none" as BgType },
    eyebrow: "Form of life",
    heading: "NOTHING TO RENOUNCE, NOTHING TO PERFORM",
    body: [
      "Because the tradition is non-dual, there is no frontier between the spiritual and the ordinary. Practice is not a half-hour activity you do in the morning. It is continuous, active recognition in the middle of daily life — washing dishes, walking to the train, arguing with your landlord, cooking, grieving, being tired.",
      "Because there is no split to enforce, there is no renunciation. You do not have to give up pleasure, money, sexuality, relationships, art, politics, or coffee. The point is not what you do with the objects but what you do with the contraction around the objects.",
      "Shaivite practitioners go unnoticed. There is no uniform, no special diet, no coded vocabulary, no performance of spirituality. Devotion is internal. In a culture where spirituality is often a costume, this is quietly radical.",
    ],
  },

  cta: { href: "/practice", label: "Continue to the Practice" },
};

// ════════════════════════════════════════════════════════════
// PRACTICE PAGE
// ════════════════════════════════════════════════════════════
export const PRACTICE = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.practice, videoId: "", overlay: "bg-black/60", grain: true },
    eyebrow:    "The Laboratory",
    heading:    "PRACTICE",
    subheading: "The body first. Devotion as the heat that melts the contraction.",
  },

  what: {
    bg: { type: "none" as BgType },
    eyebrow: "What practice actually is",
    heading: "NOT A PERFORMANCE",
    body: [
      "Practice in the Trika tradition is not about becoming a better person, calming your mind, raising your vibration, accumulating techniques, or performing serenity. It is about one thing: pratyabhijñā — the direct recognition that what you are has never been other than pure consciousness.",
      "Everything else is scaffolding for that one recognition. Breath practices, meditation techniques, body work, mantra, devotion, philosophical study — all of these are tools that create the conditions in which recognition can land and stabilize. They are not the goal. When a technique becomes the goal, it becomes another identity, another accumulation.",
      "The Trika tradition organizes these scaffoldings into three levels, called the upāyas — means, or methods. They are not three separate paths you choose between. They are three different angles of approach, calibrated to where the contraction is currently thickest in your experience.",
    ],
  },

  upayas: {
    bg: { type: "none" as BgType },
    eyebrow: "The system",
    heading: "THE THREE UPĀYAS",
    items: [
      {
        name:        "Āṇavopāya",
        subtitle:    "The path of the individual",
        description: "The most accessible of the three. Practices that work with the body, the breath, mantra, sound, image — concrete supports for attention when the sense of separation is still thick and the mind pulls hard into discursive thinking.",
        examples: [
          "Prāṇāyāma — breath practices that shift the relationship between inhale, exhale, and the pauses",
          "Mantra — recitation as a doorway into the felt resonance of sound-consciousness",
          "Bindu concentration — single-pointed awareness on focal points in the body",
          "Body-centered dhāraṇās from the Vijñāna Bhairava Tantra",
        ],
      },
      {
        name:        "Śāktopāya",
        subtitle:    "The path of energy and meaning",
        description: "The middle path. Practices that work directly with śakti — the pulsation of consciousness expressing itself as thought, emotion, intention, perception, desire. Less about gross supports and more about watching the pure movement of energy through the field of experience.",
        examples: [
          "Contemplation of the 36 tattvas — the structure of how consciousness contracts into experience",
          "Working with vikalpas — watching mental constructs arise and dissolve without grasping",
          "Active meditation in daily life — practice that does not stop when you leave the cushion",
          "Śakti practices — using emotion and energetic intensity as pathways",
        ],
      },
      {
        name:        "Śāmbhavopāya",
        subtitle:    "The direct path of recognition",
        description: "The most direct. Not a technique so much as a direct recognition of the non-dual ground, often triggered by the presence and transmission of a teacher who is already there, or by the sudden penetration of one of the central insights of the tradition.",
        examples: [
          "Direct recognition (pratyabhijñā) through insight into the nature of awareness",
          "Transmission through the presence of a realized teacher",
          "The collapse of effort into what the texts call sahaja — the spontaneous natural state",
          "Stabilization of the recognized ground across all activity",
        ],
      },
    ],
    anupaya_note: "Some texts speak of a fourth category called anupāya — literally \"no means.\" It is important to understand that anupāya is not a method you can practice. It is the ground that the three upāyas point toward. Teachers who tell beginners \"there is nothing to do, just drop into anupāya\" are either confused or deliberately skipping the work.",
  },

  body: {
    bg: { type: "none" as BgType, grain: true },
    eyebrow: "The laboratory",
    heading: "THE BODY FIRST",
    body: [
      "The body is not a vehicle for something more real. In a non-dual map, the body is that more real, appearing as a body. This changes what practice looks like. It is not about disciplining the body into submission so the real spiritual work can happen. The body is where the real spiritual work happens.",
      "The Trika tradition knows that saṃskāras — the residues of unprocessed experience, the conditioning that shapes how you perceive and react — live in the body before they live in the mind. What looks like a thought is very often a bodily contraction dressed up in language. You cannot think your way out of these, because they are not thoughts.",
      "This is why eight years of physical theater work — Grotowski, Meyerhold, Artaud — fold naturally into this practice. The Motion Lab in Berlin is where we do this work in person.",
    ],
    pullquote: "The body comes first. The meaning comes second. If it is not in the body, it is philosophy, not practice.",
  },

  bhakti: {
    bg: { type: "none" as BgType },
    eyebrow: "The heat",
    heading: "DEVOTION MELTS WHAT TECHNIQUE CANNOT TOUCH",
    body: [
      "Technique organizes. Discipline sharpens. But when the heart is closed, practice becomes a task, a performance, a dissociated repetition. The problem with technique alone is that it operates inside the same contracted identity that needs to dissolve.",
      "Bhakti — devotion — is what makes practice porous enough for recognition to land. Not devotion as sentimental performance. Devotion in the Trika sense is the warmth that undoes the inner hardening of conditioned personality. Bhakti is seeing every object as the radiance of your own consciousness, and letting that seeing melt the contraction around it.",
      "Swami Lakshmanjoo taught that devotion is not decoration added on top of \"real practice.\" My own teacher Mar Delgado puts it this way: real knowledge and real devotion are one. Technique can discipline attention — but devotion melts the contraction that keeps recognition from becoming lived.",
      "You cannot manufacture bhakti. You can only make space for it — by letting the heart be touched, by noticing the moments when the world actually does shimmer a little, by refusing the cynicism that keeps you safe from being moved.",
    ],
  },

  cta: { href: "/school", label: "See how this is taught" },
};

// ════════════════════════════════════════════════════════════
// ABOUT PAGE
// ════════════════════════════════════════════════════════════
export const ABOUT = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.about, videoId: "", overlay: "bg-black/60", grain: true },
    eyebrow:    "Who is doing this work",
    heading:    "ABOUT",
    subheading: "Roberto Pérez Martínez · Berlin",
  },

  opening: {
    bg: { type: "none" as BgType },
    pullquote: "I am not a guru. I am not enlightened. I am a practitioner in a specific lineage who has spent enough time in this tradition to be able to share it carefully, and who has the explicit authorization of my own teacher to do so. That is the only credential that matters here.",
    body: [
      "My name is Roberto Pérez Martínez. I go by Rob. I was born in a small town in Spain, raised Catholic, and I left the church the moment I understood it had nothing to offer me. I have a Bachelor's degree in mathematics and a Master's in artificial intelligence — I spent some years doing research at the Fraunhofer Institut, which is a long way from where I am now and also, in some unexpected ways, not as far as it sounds. I am queer, neurodivergent, and currently based in Berlin, where I run this school and continue my practice in the Trika tradition.",
    ],
  },

  story: {
    bg: { type: "none" as BgType },
    eyebrow: "How I got here",
    heading: "THE LONG WAY ROUND",
    body: [
      "Eight years ago, somewhere in my mid-twenties, I had a psychotic break. I do not romanticize this. It was terrifying, it cost me a lot, and I am one of the people who walked back from it more or less intact, which is not everyone's outcome. What I will say is that the break opened something. It cracked the assumption that ordinary consensus reality was the only available frame, and somewhere in the wreckage I started reading the Tibetan Book of the Dead because nothing else I owned felt relevant to what was happening to me.",
      "That was the first time I understood that there were traditions on this planet that had been mapping the kinds of states I was now familiar with — not as pathology but as territory. It was also my first awakening. Not in the sense that I was suddenly enlightened. In the sense that a layer of identification dropped, briefly, and I saw something I could not unsee.",
      "I moved to Berlin. I went through what I can now identify as several years of spiritual bypass — chasing the openness of the first awakening, trying to reproduce it with techniques and substances and intensities, mistaking expanded states for liberation. The wellness industry is happy to sell you a thousand variations on that exact mistake.",
      "What pulled me out was not a peak experience. It was, of all things, eight years of practicing physical theater — the lineages of Grotowski, Meyerhold, and Artaud. I started to notice that what I was learning in the studio was operating on the same layer that the spiritual stuff had been claiming to operate on. The body was doing the work that the mind had been failing to do.",
      "Two years ago I found my teacher.",
    ],
  },

  teacher: {
    bg: { type: "none" as BgType, grain: true },
    eyebrow: "The teacher",
    heading: "MAR DELGADO",
    body: [
      "Mar Delgado is a PhD linguist, a scholar of the Trika tradition, and a realized teacher in the lineage of Kashmir Shaivism. She received her initial transmission from a direct disciple of Daniel Odier, and after her own realization her teaching aligns most closely with the work of Swami Lakshmanjoo and the Lakshmanjoo Academy. She runs a project called Tantra Shaivita Aplicado, and she is the reason I am able to offer this work at all.",
      "What Mar does that almost nobody else does is hold both halves of this tradition simultaneously. She is a rigorous textual scholar — she reads the Sanskrit, she works with the original commentaries, she does not let people get away with vague pseudo-tantric language. And she is actually realized. Both at once. That is rare.",
      "The lineage she stands in runs back through Lakshmanjoo, Kṣemarāja, Abhinavagupta, Utpaladeva, Somānanda, and Vasugupta — and forward, through her, into the work I am doing now. Mar has authorized this school and continues to actively support it. Nothing I teach is invented by me. Everything comes through her, the texts, and a tradition older than any of us.",
    ],
    pullquote: "If you find anything valuable in this school, the gratitude belongs to Mar and to the long line of practitioners standing behind her.",
  },

  what_i_bring: {
    bg: { type: "none" as BgType },
    eyebrow: "What I add",
    heading: "WHAT I BRING TO THIS",
    intro:   "I bring three things that I think are useful, and I will tell you what they are without false modesty.",
    items: [
      {
        title: "A technical mind.",
        body:  "Mathematics and AI research trained me to be uncomfortable with vagueness. I cannot stand spirituality that hides behind soft language. When I teach the Trika tradition, I want the structure to be visible — the technical vocabulary, the precise distinctions, the actual claims the texts are making.",
      },
      {
        title: "A body trained in physical theater.",
        body:  "Eight years of Grotowski, Meyerhold, and Artaud taught me that the body is the primary site of practice, that presence is something you can train, and that the difference between a performance and a transmission is tangible.",
      },
      {
        title: "A life that has been politicized from the start.",
        body:  "I am queer. I am Spanish. I came up through the Catholic Church and watched it do harm. The decolonial, queer, feminist framing of this school is not a marketing layer. It is how I read the texts, because the texts themselves were already doing that work.",
      },
    ],
    pullquote: "I do not teach self-improvement. I share a tradition that has the power to dissolve the self that needs improving.",
  },

  // ── PHOTO GALLERY ─────────────────────────────────────────
  // To add a new photo: paste any URL here (CDN, Google Drive direct link, etc.)
  // Each entry shows in the About page gallery grid.
  gallery: [
    { url: IMAGES.about, caption: "Berlin" },
    // { url: "https://your-cdn.com/photo.jpg", caption: "Your caption here" },
  ],

  cta: { href: "/test", label: "Take the Consciousness Test" },
};

// ════════════════════════════════════════════════════════════
// SCHOOL PAGE
// ════════════════════════════════════════════════════════════
export const SCHOOL = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.school, videoId: "", overlay: "bg-black/60", grain: true },
    eyebrow:    "Three ways in",
    heading:    "THE SCHOOL",
    subheading: "Not a course. A commitment.",
  },

  intro: {
    bg: { type: "none" as BgType },
    body: [
      "Feral Awareness is a school of non-dual tantra in the Trika tradition. It is not a marketplace of spiritual products. There are no weekend retreats, no certification programs, no \"transformational experiences\" to book. Those formats do not produce the thing they promise. What we offer is ongoing formation for people who are serious about the path, in three formats: an online school, an in-person Motion Lab in Berlin, and one-on-one guidance through the Consultorio.",
      "Entry into any of these formats starts the same way: you take the Consciousness Test. This is not a personality quiz. It is a mirror — a set of questions designed to surface how honestly you are currently relating to your own experience, and whether the work we do here is a good fit for where you actually are. The test is free and takes about fifteen minutes. It exists to protect both of us from wasting time.",
      "We are not for everyone. We are for people who sense that something fundamental is missing from the spirituality on offer, who feel that awakening has political dimensions, and who are tired of being sold comfort dressed up as liberation. If that is you, welcome.",
    ],
  },

  test_cta: {
    bg: {
      type:    "none" as BgType,
      overlay: "bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10",
    },
    heading:    "START WITH THE TEST",
    subheading: "The entrance gate to the school",
    body:       "Twelve questions mapping how you actually relate to practice, to the body, to desire, and to honesty with yourself. Fifteen minutes. No account required.",
    cta:        { href: "/test", label: "Take the Test" },
  },

  principles: {
    bg: { type: "none" as BgType },
    eyebrow: "How we work",
    heading: "OUR PRINCIPLES",
    items: [
      { title: "No bypass",             text: "We do not use spirituality to avoid what is actually happening in your life, your body, your politics, or your grief. We use it to meet these things more fully." },
      { title: "Scripture and lineage", text: "Everything we teach is grounded in the Bhairava Āgamas, the commentarial tradition of Kashmir Shaivism, and an unbroken line of practice that runs through Swami Lakshmanjoo, Mar Delgado, and into this work." },
      { title: "Body first",            text: "Saṃskāras live in the body before they live in the mind. If practice is not landing in the body, it is philosophy. We work somatically before we work conceptually." },
      { title: "No gurus on pedestals", text: "I am a practitioner who shares the path, not a savior. The teacher is a mirror, not a destination. Anyone who lets you give them the authority of your own recognition is stealing from you." },
      { title: "Decolonial integrity",  text: "The tradition was already decolonial before the word existed. We honor the source, refuse cultural appropriation, do not dilute the philosophy for Western comfort, and do not separate politics from practice." },
      { title: "Liberation and enjoyment", text: "Mokṣa without bhoga is repression in spiritual clothing. Bhoga without mokṣa is empty hedonism. The tradition refuses both errors, and so do we." },
    ],
  },

  offerings: {
    bg: { type: "none" as BgType },
    eyebrow: "Three ways in",
    heading: "THE OFFER",
    items: [
      {
        title:       "Online School",
        subtitle:    "Ongoing formation",
        description: "A continuous, deep program in the Trika tradition for people who are serious about practice. Not a weekend retreat, not a certification mill, not a course you finish and move on from. Weekly live sessions, direct teaching, scripture study, and access for questions.",
        features: [
          "Weekly live Zoom sessions with direct teaching",
          "Close study of the Bhairava Āgamas and their commentaries",
          "Guided practice across all three upāyas, calibrated to where you actually are",
          "A community of serious practitioners, not spiritual consumers",
          "Direct access to me for questions between sessions",
          "Monthly deep dives into specific themes from the tradition",
        ],
        cta: "Apply for the school",
      },
      {
        title:       "Motion Lab — Berlin",
        subtitle:    "Physical theater meets non-dual practice",
        description: "In-person work in Berlin where the tantric tradition meets the physical theater lineages I come from — Grotowski, Meyerhold, Artaud. We use movement, breath, voice, improvisation, and sustained presence to dissolve bodily contractions and expand the capacity of the body to hold consciousness. Small groups. Deep work. This is not a yoga class.",
        features: [
          "In-person sessions in Berlin, held weekly or bi-weekly",
          "Physical theater techniques as tantric practice",
          "Somatic exploration, movement, breath, voice, sustained presence",
          "Direct work with bodily contractions that hold conditioning in place",
          "Integration of philosophy through the body — not as concept",
          "Small groups to allow for real depth",
        ],
        cta: "Join the Motion Lab",
      },
      {
        title:       "The Consultorio",
        subtitle:    "One-on-one guidance",
        description: "Individual sessions for practitioners who need direct, personalized work on specific patterns, contractions, questions, or life situations. This is not therapy. It is tantric guidance rooted in the tradition and in my own practice. Available online worldwide.",
        features: [
          "One-on-one video sessions, online from anywhere",
          "Work with your specific contractions, patterns, and questions",
          "Personalized practice recommendations calibrated to your experience",
          "Integration of life situations with practice in real time",
          "Rooted in scripture, lineage, and lived transmission",
        ],
        cta: "Request a session",
      },
    ],
  },

  pricing: {
    bg: { type: "none" as BgType },
    eyebrow: "About money",
    heading: "WHY PRICING COMES AFTER THE TEST",
    body: [
      "You will notice that there are no prices listed on this page. This is deliberate, and it is not a sales tactic. Pricing for the school is discussed after you take the Consciousness Test, for two reasons.",
      "First, the formats are calibrated. The Online School, the Motion Lab, and the Consultorio each involve different amounts of time, different depths of work, and different kinds of commitment. Quoting a flat number without knowing where you actually are would misrepresent the offer.",
      "Second, I keep the work accessible. Sliding scales exist. Solidarity arrangements exist. I would rather have the conversation about what is actually workable for your life than post a number that either excludes you or inflates the price for people who can afford more.",
      "Take the test. If the fit is there, we will talk about money honestly, and figure out whether there is a format and a price that actually work for you. If the fit is not there, I will tell you that too.",
    ],
  },
};

// ════════════════════════════════════════════════════════════
// BLOG PAGE
// ════════════════════════════════════════════════════════════
export const BLOG = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.resources, videoId: "", overlay: "bg-black/70", grain: true },
    eyebrow:    "Raw Transmissions",
    heading:    "BLOG",
    subheading: "Essays on consciousness, decolonization & embodied liberation",
  },

  // ── ADD NEW POSTS HERE ────────────────────────────────────
  // To add a post:
  //   1. Create a new file in pages/BlogPost*.tsx
  //   2. Register its route in App.tsx
  //   3. Add an entry to this array
  posts: [
    {
      title:    "The Yoga You Were Sold",
      subtitle: "And why nondual tantra is something else entirely",
      date:     "2026-04-08",
      readTime: "8 min",
      tags:     ["tantra", "decolonial", "tradition"],
      slug:     "/blog/the-yoga-you-were-sold",
    },
  ],

  footer_note:    "More essays are coming. Follow @feral.awareness to catch them when they land.",
  instagram_cta:  { href: "https://instagram.com/feral.awareness", label: "Follow @feral.awareness →" },
};

// ════════════════════════════════════════════════════════════
// RESOURCES PAGE
// ════════════════════════════════════════════════════════════
export const RESOURCES = {

  hero: {
    bg: { type: "image" as BgType, url: IMAGES.resources, videoId: "", overlay: "bg-black/70", grain: true },
    eyebrow:    "Study Materials",
    heading:    "RESOURCES",
    subheading: "Sanskrit Glossary, Essential Readings & Curated References",
  },

  glossary: {
    bg: { type: "none" as BgType },
    heading: "SANSKRIT GLOSSARY",
    intro:   "Key terms from the Kashmir Shaivism tradition. Understanding these concepts is essential for engaging with the scriptures and the practice.",
    // ── ADD / EDIT TERMS HERE ──────────────────────────────
    terms: [
      { term: "Shiva",       transliteration: "Śiva",          definition: "Absolute consciousness. Not a deity to worship, but the nature of reality itself — pure awareness that is your own deepest identity." },
      { term: "Shakti",      transliteration: "Śakti",         definition: "The dynamic, creative power of consciousness. Shiva's inseparable energy that manifests as the entire universe. Not separate from Shiva." },
      { term: "Spanda",      transliteration: "Spanda",        definition: "The sacred vibration or pulsation of consciousness. The dynamic throb of awareness that is the source of all movement and creation." },
      { term: "Pratyabhijñā",transliteration: "Pratyabhijñā",  definition: "Recognition. The direct recognition of one's own nature as Shiva. Not learning something new, but remembering what was always the case." },
      { term: "Vikalpa",     transliteration: "Vikalpa",       definition: "Mental construct or conceptual thought. The discursive thinking that veils direct experience of reality." },
      { term: "Sanhara",     transliteration: "Saṃhāra",       definition: "Energetic contraction. The bodily residue of unprocessed experience that densifies the body and limits consciousness." },
      { term: "Upāya",       transliteration: "Upāya",         definition: "Means or method. The three paths of meditation in Kashmir Shaivism: āṇavopāya (individual), śāktopāya (energetic), śāmbhavopāya (direct)." },
      { term: "Tantra",      transliteration: "Tantra",        definition: "Literally 'loom' or 'weave.' A spiritual path consisting of a nondual cosmovision and practices (yoga) for recognizing one's true nature." },
      { term: "Agama",       transliteration: "Āgama",         definition: "Sacred scriptures revealed by Shiva. The foundational texts of the tantric tradition, as opposed to the Vedas." },
      { term: "Bhairava",    transliteration: "Bhairava",      definition: "The fierce aspect of Shiva. Represents the terrifying beauty of absolute consciousness that destroys all illusion." },
      { term: "Trika",       transliteration: "Trika",         definition: "The 'threefold' system. Another name for Kashmir Shaivism, referring to the triad of Shiva, Shakti, and the individual soul." },
      { term: "Māyā",        transliteration: "Māyā",          definition: "The power of limitation. In Kashmir Shaivism, not illusion (as in Advaita Vedanta), but Shiva's own power to appear as limited, individual beings." },
      { term: "Bindu",       transliteration: "Bindu",         definition: "Point of concentrated energy. A focal point used in meditation. Also refers to the point of unity from which creation emerges." },
      { term: "Mudrā",       transliteration: "Mudrā",         definition: "Gesture or seal. In nondual tantra, the supreme mudrā is experiencing the universe as the expansion of your own consciousness." },
      { term: "Mantra",      transliteration: "Mantra",        definition: "Sacred sound or formula. In nondual tantra, the great mantra is the mind in silence — not a word to repeat, but a state to embody." },
    ],
  },

  readings: {
    bg: { type: "none" as BgType },
    heading: "ESSENTIAL READINGS",
    // ── ADD / EDIT READING CATEGORIES HERE ────────────────
    categories: [
      {
        category: "Primary Scriptures",
        items: [
          { title: "Shiva Sutras",          author: "Vasugupta (trans. Jaideva Singh)",      note: "The foundational aphorisms. Start here." },
          { title: "Vijñāna Bhairava Tantra",author: "Trans. Jaideva Singh",                 note: "112 meditation techniques. Practical and direct." },
          { title: "Pratyabhijñāhṛdayam",   author: "Kṣemarāja (trans. Jaideva Singh)",     note: "The heart of recognition. Most accessible entry point." },
          { title: "Spandakārikā",          author: "Vasugupta (trans. Jaideva Singh)",      note: "The doctrine of vibration." },
        ],
      },
      {
        category: "Advanced Study",
        items: [
          { title: "Tantrāloka",            author: "Abhinavagupta (trans. Mark Dyczkowski)", note: "The encyclopedic masterwork. For serious students." },
          { title: "The Doctrine of Vibration", author: "Mark Dyczkowski",                   note: "Academic study of the Spanda tradition." },
          { title: "The Triadic Heart of Śiva", author: "Paul Eduardo Muller-Ortega",        note: "Deep study of Abhinavagupta's Parātrīśikā." },
        ],
      },
      {
        category: "Decolonial & Critical",
        items: [
          { title: "Selling Yoga",          author: "Andrea Jain",    note: "How yoga was commodified for Western consumption." },
          { title: "The Colonizer's Model of the World", author: "J.M. Blaut", note: "Essential for understanding cultural extraction." },
          { title: "Decolonizing the Body", author: "Various authors", note: "Intersections of embodiment and colonial history." },
        ],
      },
    ],
  },

  links: {
    bg: { type: "none" as BgType },
    heading: "EXTERNAL RESOURCES",
    // ── ADD / EDIT LINKS HERE ──────────────────────────────
    items: [
      { title: "Tantra Shivaita Aplicado", url: "https://tantrashivaitaplicado.com/", description: "Our lineage school. Deep resources on nondual tantra in Spanish." },
      { title: "Muktabodha Digital Library", url: "https://www.muktabodha.org/",     description: "Digital library of Shaiva and Shakta scriptures." },
      { title: "Kashmir Encyclopaedia",    url: "#",                                  description: "Academic resource on Kashmir Shaivism history and philosophy." },
    ],
  },
};

// ════════════════════════════════════════════════════════════
// CONSCIOUSNESS TEST PAGE
// (Questions & scoring live here — all editable)
// ════════════════════════════════════════════════════════════
export const TEST_PAGE = {

  hero: {
    bg: { type: "none" as BgType },
    heading:    "CONSCIOUSNESS TEST",
    subheading: "Not a personality quiz. A mirror.",
    body:       "Twelve questions designed to map where you actually are in your relationship with practice, with the body, with desire, and with honesty. Fifteen minutes. No account required. The results are for you.",
  },

  // ── SCORED QUESTIONS ──────────────────────────────────────
  // Each question has options with point values (1–5)
  // and per-answer feedback shown after completion.
  // Edit text freely; do NOT change the id fields.
  questions: [
    {
      id: "Q1",
      section: "Where You Actually Are",
      text: "How long have you been seriously seeking? Not reading, not interested — actually sustaining a practice.",
      subtext: "If you're not sure whether it counts — it probably doesn't.",
      image: IMAGES.nebula,
      options: [
        { letter: "c", label: "3–5 years",            points: 3 },
        { letter: "a", label: "Just starting",        points: 1 },
        { letter: "e", label: "More than 10 years",   points: 5 },
        { letter: "b", label: "1–2 years",            points: 2 },
        { letter: "d", label: "5–10 years",           points: 4 },
      ],
      feedback: {
        a: "Being here at the very beginning has its own kind of cleanness. You haven't yet accumulated the spiritual patterns that later need dismantling. That's a real advantage — if what you bring is genuine hunger and not spiritual consumer curiosity.",
        b: "A year or two is enough time to have tasted something real and also enough time to have started accumulating the first spiritual habits. What matters now is whether you're building a scaffold or building an identity.",
        c: "Three to five years is where most people either deepen or plateau. You have enough experience to feel the limits of what you've been doing. That restlessness, if it's honest, is exactly the right fuel.",
        d: "Five to ten years means you've been through at least one serious disillusionment. Good. That's not failure — that's the tradition doing its job. The question is what you did with it.",
        e: "More than ten years means you've outlasted most practitioners in most contexts you've entered. You know the difference between accumulation and transformation. The question is which one you've been doing.",
      },
    },
    {
      id: "Q2",
      section: "Where You Actually Are",
      text: "What has your practice primarily been?",
      subtext: "Choose the one that's been most central, even if you've done multiple.",
      image: IMAGES.practice,
      options: [
        { letter: "a", label: "Mindfulness / Vipassana / secular meditation",              points: 2 },
        { letter: "b", label: "Yoga (āsana-based, studio context)",                        points: 1 },
        { letter: "f", label: "Lineage-based practice with a living teacher",              points: 5 },
        { letter: "c", label: "Advaita, Zen, or non-dual inquiry",                        points: 3 },
        { letter: "d", label: "Ceremonial, entheogenic, or shamanic",                     points: 2 },
        { letter: "e", label: "Tantric or energy-based (including neo-tantra)",           points: 2 },
        { letter: "g", label: "Self-directed: books, retreats, no sustained container",   points: 1 },
      ],
      feedback: {
        a: "Mindfulness gives you a real skill: the capacity to observe. But observation without a cosmovision is like a microscope without a theory — you see clearly, but you don't know what you're looking at or why it matters.",
        b: "Physical yoga practice is a real doorway into the body. The question is whether it's been practice in the sense of transformation or practice in the sense of a healthy habit. Both are valid. Only one is what we do here.",
        c: "Non-dual inquiry is the nearest tradition to what we work in. If you've been in Advaita or Zen, you've been in territory that shares the same fundamental claim — one reality, no second. The difference is what you do with the body.",
        d: "Ceremonial and entheogenic practice can open genuine territory. The question is always: what happens in ordinary consciousness when the ceremony is over? If the answer is 'I go back to the same patterns,' the ceremony is showing you a view without giving you a path.",
        e: "If your tantric practice has been neo-tantra — the Western sexual-spiritual synthesis — you've been working with a very diluted and often distorted form. That's not an insult; it's a fact about what's available. The tradition this school works in is something categorically different.",
        f: "Lineage-based practice with a living teacher is the only context in which real transmission happens. If you've had that, you know the difference between learning about practice and actually being held inside one. That knowledge is exactly what this school requires.",
        g: "Self-directed practice is where most serious practitioners begin, and many stay there indefinitely because the available containers feel either too commercial or too cult-adjacent. That discrimination is actually a sign of health. The question is whether you're ready for a container that's neither.",
      },
    },
    {
      id: "Q3",
      section: "Where You Actually Are",
      text: "Have you had what you would call a genuine awakening experience — a moment of expanded recognition that dropped a layer of identification?",
      subtext: "Not a nice feeling in meditation. A genuine shift in the sense of self.",
      image: IMAGES.milkyway,
      options: [
        { letter: "d", label: "Yes — multiple times, with increasing stability",           points: 4 },
        { letter: "b", label: "Something happened but I'm not sure how to name it",       points: 2 },
        { letter: "e", label: "Yes — the ground of ordinary life has shifted, durably",   points: 5 },
        { letter: "a", label: "No — nothing that felt like that",                          points: 1 },
        { letter: "c", label: "Yes — once, and it hasn't stabilized since",               points: 3 },
      ],
      feedback: {
        a: "No awakening experience doesn't mean no capacity for it. It might mean you haven't yet found the conditions in which it can land, or that the practices you've used haven't been calibrated for that. That's exactly what the upāyas are for.",
        b: "The uncertainty itself is interesting data. Something happened that didn't fit the ordinary categories. The tradition has very precise language for the range of things that can happen in that territory — and the ability to map your experience precisely is part of what the school offers.",
        c: "A single awakening that hasn't stabilized is one of the most common and most difficult places to be in spiritual practice. You've seen it. You can't unsee it. And you can't reproduce it reliably. The Trika tradition calls this the 'recognition without stabilization' problem, and it has a specific pedagogy for it.",
        d: "Multiple openings with increasing stability suggests you're in genuine deepening rather than just accumulating peak experiences. The question now is whether the recognition is landing in the body and in ordinary daily life — not just in formal practice or altered states.",
        e: "A fundamental shift in the relationship to ordinary experience is what the tradition actually points toward — not dramatic experiences but a change in the ground. If that's happened for you, this school is a place to understand what occurred, to go deeper, and to find language and community for territory that most contexts won't even acknowledge.",
      },
    },
    {
      id: "Q4",
      section: "Honesty With Yourself",
      text: "When you encounter a teaching or practice that contradicts something you've built your identity around — a belief, a community, a self-image — what happens?",
      subtext: "Be honest. Nobody is watching.",
      image: IMAGES.iridescent,
      options: [
        { letter: "d", label: "I actively look for where it might be right",                points: 4 },
        { letter: "b", label: "I feel uncomfortable and usually avoid it",                  points: 2 },
        { letter: "a", label: "I find reasons why the new thing is wrong",                  points: 1 },
        { letter: "e", label: "These challenges are the most useful part of my practice",   points: 5 },
        { letter: "c", label: "I can hear it, but I notice the resistance and sit with it", points: 3 },
      ],
      feedback: {
        a: "Finding reasons why the new thing is wrong is the most sophisticated form of defense the mind has — it looks like discernment. The question to ask yourself is: are you discerning, or are you defending? They feel identical from the inside.",
        b: "Avoidance is honest. It knows the threat is real. The question is: what is it protecting? Usually it's protecting an investment — time, identity, community. These are real things. But at some point, protecting the investment costs more than letting go of it.",
        c: "Being able to hear a challenge while staying with the discomfort of it is real skill. Most people can't do this. The fact that you're naming the resistance rather than bypassing it suggests you're actually working with something.",
        d: "Actively looking for where the challenge might be right is one of the clearest signs of genuine practice. It requires having loosened the grip of the identity enough to be curious about its edges.",
        e: "If you find genuine challenges to your identity structure interesting rather than threatening, you've already developed some capacity for what the tradition calls viveka — discriminating awareness. The contraction that would ordinarily defend has already loosened enough to be curious.",
      },
    },
    {
      id: "Q5",
      section: "Honesty With Yourself",
      text: "In your spiritual life, how often do you perform something — for a teacher, a community, yourself — rather than actually doing the work?",
      subtext: "This is the question that gets lied to the most.",
      image: IMAGES.deepwater,
      options: [
        { letter: "d", label: "Often — performance has been one of my main obstacles",     points: 4 },
        { letter: "a", label: "I'm pretty sure I'm mostly genuine",                        points: 1 },
        { letter: "c", label: "Regularly — it's something I actively work with",           points: 3 },
        { letter: "e", label: "I'm not sure I can fully tell the difference yet",          points: 3 },
        { letter: "b", label: "Rarely — I catch it sometimes",                             points: 2 },
      ],
      feedback: {
        a: "\"Pretty sure I'm mostly genuine\" is almost always what performance sounds like from the inside. This isn't an accusation — it's a structural feature of the problem. Genuine practice makes you less certain, not more.",
        b: "Catching the performance sometimes is real work. Most people never catch it at all. The question is what you do when you catch it — whether you can stay with the embarrassment of it without either self-flagellating or immediately reframing it as something else.",
        c: "Actively working with the performance pattern is one of the most honest things you can say about a spiritual life. It means you've gotten close enough to it to see it moving, which is already more than most practitioners manage.",
        d: "Performance as a main obstacle is a level of self-knowledge that most people don't reach. If you can name it that clearly, you've already separated from it enough to see it. That separation is the beginning of something real.",
        e: "Not being sure you can tell the difference between performance and genuine practice is one of the most honest answers here. The difference is real, and it can be learned. That's part of what the school trains.",
      },
    },
    {
      id: "Q6",
      section: "The Body",
      text: "How does your spiritual practice relate to your body?",
      image: IMAGES.oceanNectar,
      options: [
        { letter: "b", label: "I have a body-based practice (yoga, movement) but it feels separate from the 'real' work", points: 2 },
        { letter: "e", label: "The body is the primary site of practice for me",                  points: 5 },
        { letter: "c", label: "I know the body is important but I haven't found the right container for it", points: 3 },
        { letter: "a", label: "I mostly work with my mind — meditation, inquiry, study",         points: 1 },
        { letter: "d", label: "My practice is explicitly somatic — body and insight are integrated", points: 4 },
      ],
      feedback: {
        a: "Mind-based practice is where most lineages start, and it can go quite far. The limit it hits is the saṃskāras — the condensed somatic memory that lives in the body as contraction. At some point, the mind hits a floor, and only the body can go below it.",
        b: "A body-based practice that feels separate from the 'real' spiritual work is actually a very common split. You've found two containers that are pointing at the same thing but haven't yet been integrated. That integration is exactly what the Motion Lab is for.",
        c: "Knowing the body is important without having the right container for it is one of the more honest assessments a practitioner can make. Most available body-practice containers are either pure fitness, performance, or spiritual theater. This school is trying to be something different.",
        d: "Explicit somatic integration is relatively rare in spiritual practice. If you've developed that, you've gone somewhere most practitioners haven't. The question is whether the integration is with a specific cosmovision — whether the body work is connected to a framework that can extend and deepen it.",
        e: "The body as the primary site of practice is the orientation the Trika tradition works from, and it's what the school builds on. If you're already here, the question is what tradition, what lineage, what precise understanding of why the body comes first.",
      },
    },
    {
      id: "Q7",
      section: "The Body",
      text: "Have you ever had a somatic release in practice — something in the body shifting, releasing, or dissolving that wasn't just relaxation?",
      image: IMAGES.forest,
      options: [
        { letter: "c", label: "Yes — occasionally, usually in retreat or intense practice",points: 3 },
        { letter: "a", label: "No — not that I can identify",                              points: 1 },
        { letter: "e", label: "Yes — and I understand it as part of the process, not chance", points: 5 },
        { letter: "b", label: "Maybe — something physical happened but I'm not sure",      points: 2 },
        { letter: "d", label: "Yes — this happens in my regular practice",                 points: 4 },
      ],
      feedback: {
        a: "No identifiable somatic release doesn't mean the body isn't doing anything. It often means the practice container hasn't created the conditions for it. The body is not passive — it's waiting for the right approach.",
        b: "Something physical happening without knowing how to categorize it is very common. The tradition has precise language for what happens in somatic release — for the different kinds of bodily intelligence being activated. Having language for it changes your relationship to it.",
        c: "Occasional somatic release in retreat or intense contexts is a sign that the body knows how to do this — that when the conditions are right, the release happens. The work of regular practice is making those conditions more ordinary.",
        d: "Regular somatic release means the practice is actually working on the layer where it needs to work. Most practice never gets this deep. If this is happening for you in an ordinary practice context, you've found something real.",
        e: "Understanding somatic release as part of the process — knowing what it is, why it's happening, what it's doing — means you have a framework that can hold the experience without either dramatizing it or dismissing it. That's a significant level of practice maturity.",
      },
    },
    {
      id: "Q8",
      section: "Desire and Pleasure",
      text: "How do you relate to desire in your spiritual life?",
      image: IMAGES.candlelight,
      options: [
        { letter: "b", label: "Desire is complicated — I know it's not purely bad but I'm not sure how to work with it", points: 2 },
        { letter: "d", label: "I understand desire as the pulsation of consciousness reaching toward expression",      points: 4 },
        { letter: "a", label: "Desire is an obstacle — the tradition I'm in asks me to reduce or transcend it", points: 1 },
        { letter: "e", label: "Desire and liberation are not opposed for me — I practice inside both simultaneously",  points: 5 },
        { letter: "c", label: "I'm learning to use desire as information rather than a problem to solve",              points: 3 },
      ],
      feedback: {
        a: "Treating desire as an obstacle is the dualist position — it assumes that what you are at the level of desire is not what you are at the level of awakening. The non-dual tradition makes the opposite claim: the energy of desire is the same energy as the energy of liberation. It's a matter of what you do with the contraction around it.",
        b: "\"Complicated\" is the honest word for where most practitioners in the West land on desire. The tradition gives you a very specific map for working with it — not as something to transcend or indulge but as a doorway.",
        c: "Desire as information is a good middle position — it's functional and it stops the war with desire. The next move is recognizing that desire is not information about something lacking but a movement of consciousness itself.",
        d: "Understanding desire as spanda — the pulsation of consciousness reaching toward its own expression — is the core Trika teaching on desire. If you're here, you're working in the same framework we work in.",
        e: "Practicing inside desire and liberation simultaneously is the bhoga-mokṣa unity that the tradition insists on. It's not a position you hold intellectually — it's a lived relationship with experience. If this is where you are, this school can take you deeper into it.",
      },
    },
    {
      id: "Q9",
      section: "Politics and Spirituality",
      text: "How does your spiritual practice relate to your political and social life?",
      image: IMAGES.nebula,
      options: [
        { letter: "c", label: "I see them as related but my practice doesn't explicitly integrate them",               points: 3 },
        { letter: "a", label: "I keep them separate — spirituality is inner work, politics is outer",                   points: 1 },
        { letter: "e", label: "I don't experience a separation — liberation requires political consciousness",          points: 5 },
        { letter: "b", label: "I try to keep them connected but find it difficult",                                     points: 2 },
        { letter: "d", label: "My politics emerged from or are deeply informed by my practice",                        points: 4 },
      ],
      feedback: {
        a: "Separating inner and outer work is one of the classic moves of spiritual bypass — it protects the practice from being tested by the world. The Trika tradition would say: if the practice is real, it changes how you meet the world. And if it doesn't change how you meet the world, it's not yet fully real.",
        b: "Finding it difficult to connect practice and politics is usually a sign that one or both of them hasn't yet reached the layer where they naturally meet. They meet in the body — in the nervous system, in the patterns of reactivity, in what you can and cannot feel.",
        c: "Seeing a relationship without having a framework that integrates them is the most common position for practitioners who are politically conscious. The tradition offers that framework — not by making practice into politics, but by showing how the same movement of consciousness that perpetuates inner contraction also perpetuates outer oppression.",
        d: "Politics emerging from practice or practice deepening political consciousness is the integrated position — and it's relatively rare. It usually requires both a practice that goes deep enough and a politics that goes honest enough.",
        e: "Not experiencing a separation between liberation and political consciousness is the tradition's starting position. The Trika texts were written in a specific social context that shaped their politics — and the tradition, read carefully, is already there.",
      },
    },
    {
      id: "Q10",
      section: "What You're Looking For",
      text: "What are you actually looking for from a school or teacher?",
      subtext: "There are no wrong answers here — but some answers fit this school and some don't.",
      image: IMAGES.iridescent,
      options: [
        { letter: "d", label: "Transmission — contact with someone who has actually realized something",              points: 4 },
        { letter: "a", label: "Techniques and practices I can do on my own",                                           points: 1 },
        { letter: "e", label: "Formation — I want to be changed, not just taught",                                    points: 5 },
        { letter: "c", label: "Intellectual depth — rigorous teaching in a serious tradition",                        points: 3 },
        { letter: "b", label: "Community and belonging with other practitioners",                                      points: 2 },
      ],
      feedback: {
        a: "Techniques you can do on your own are real, and we teach them. But a school is a different kind of container than a technique library. If what you're looking for is tools to use in isolation, the school format may not be the right fit — you might get more from the resources section.",
        b: "Community is a real need and this school has it. But if community is the primary thing you're looking for, check whether you're using connection to avoid the solitude that real practice requires.",
        c: "Intellectual depth is what this school is built on. The tradition has extraordinary philosophical sophistication, and we don't dilute it. If this is what you're hungry for, you're in the right place.",
        d: "Looking for transmission is the most honest thing you can say about what you actually need. You can read the Tantrāloka yourself. What you can't get from a book is the felt recognition that the person across from you is in the territory the map is describing.",
        e: "Formation — being changed, not just taught — is the thing the school is actually offering. If this is what you're looking for, you understand what the work is. Almost everything else is preparation for it.",
      },
    },
    {
      id: "Q11",
      section: "What You're Looking For",
      text: "What would make you stop engaging with a teacher or school?",
      image: IMAGES.deepwater,
      options: [
        { letter: "b", label: "If the community became more important than the practice",                              points: 3 },
        { letter: "d", label: "If the teaching became comfortable and stopped challenging me",                         points: 5 },
        { letter: "a", label: "If they challenged my existing beliefs too directly",                                    points: 1 },
        { letter: "e", label: "If they couldn't give me a direct, honest account of their own limits and failures",   points: 4 },
        { letter: "c", label: "If there were signs of financial or sexual exploitation",                               points: 4 },
      ],
      feedback: {
        a: "Leaving when beliefs are challenged too directly is worth being honest about. It means the practice has a limit — which is okay, but it's useful to know. What you can hold and what you can't hold is exactly the information the test is designed to surface.",
        b: "Community overwhelming practice is one of the most common ways schools fail. If you've seen this happen and it's a boundary for you, that's a sign of genuine discernment.",
        c: "Financial and sexual exploitation are the most obvious failure modes of spiritual authority, and clarity about them is basic. The harder discrimination is the subtler forms of exploitation — the teacher who needs you to need them, the school that makes you dependent rather than free.",
        d: "Leaving when the teaching becomes comfortable is a high standard. It means you understand that the purpose of the container is to keep the edge live — that comfort without challenge is the beginning of stagnation.",
        e: "A teacher who can't give a direct, honest account of their own limits and failures is performing authority rather than being it. This is one of the most reliable tests of a teacher's actual development.",
      },
    },
    {
      id: "Q12",
      section: "Readiness",
      text: "What do you bring to this work right now?",
      subtext: "Not what you hope to bring. What you actually have.",
      image: IMAGES.mountain,
      options: [
        { letter: "c", label: "Real practice and a specific question or obstacle I haven't been able to move",         points: 4 },
        { letter: "e", label: "Honestly — I'm not sure. Something keeps bringing me back to this.",                    points: 3 },
        { letter: "d", label: "Serious depth and a readiness for transmission-level work",                             points: 5 },
        { letter: "a", label: "Curiosity and openness — I'm beginning",                                                 points: 1 },
        { letter: "b", label: "Some experience and a growing hunger for something more rigorous",                       points: 3 },
      ],
      feedback: {
        a: "Beginning is a complete position — not lesser than anything else. The school takes beginners if they bring real honesty and real hunger. The question isn't where you are. It's whether you're willing to meet the work at the level it requires.",
        b: "Hunger for something more rigorous, after some experience, is exactly the profile this school is designed for. You've been in enough containers to know what's missing. The question is whether you're ready for the specificity of what's being offered.",
        c: "A real practice with a specific obstacle you haven't been able to move is the clearest indicator that you're ready for direct guidance. The Consultorio is specifically for this. The school is for people who want to keep working with that guidance over time.",
        d: "Readiness for transmission-level work means you've moved through enough of the preliminary stages that the practice can begin to operate at a different depth. You know the difference between learning about territory and actually being in it.",
        e: "Something keeps bringing you back is not a trivial answer. The tradition has a specific account of why the path calls to certain people — not through intellectual interest but through a deeper recognition that this is the work. Trust the pull enough to take the test.",
      },
    },
  ] as Array<{
    id: string;
    section: string;
    text: string;
    subtext?: string;
    image?: string;
    options: Array<{ letter: string; label: string; points: number }>;
    feedback: Record<string, string>;
  }>,

  // ── OPEN-ENDED QUESTIONS ──────────────────────────────────
  open_questions: [
    {
      id: "OQ1",
      text: "What specifically brought you to this test today? Not the general answer — the specific thing.",
      subtext: "One or two sentences. What is the actual movement that brought you here?",
    },
    {
      id: "OQ2",
      text: "What are you most afraid this school will ask of you?",
      subtext: "If the answer is 'nothing' — look again.",
    },
  ] as Array<{ id: string; text: string; subtext?: string }>,

  // ── SCORING BANDS ─────────────────────────────────────────
  score_bands: [
    {
      min: 12, max: 24,
      level: "Beginning",
      color: "#00E5FF",
      heading: "You're at the beginning.",
      body: "The door is open. What you bring is curiosity and honesty — which is the right starting equipment. This school is not the right fit for you right now, but the Resources section is. Start there. Come back when practice has given you something specific to work with.",
      cta: { href: "/resources", label: "Start with the Resources" },
    },
    {
      min: 25, max: 36,
      level: "Building",
      color: "#0055FF",
      heading: "You're building something real.",
      body: "You have real experience and you're asking the right questions. You've hit at least one wall and you're not pretending it isn't there. The school can work with you. The next step is a conversation — take the test, let us read your answers, and we'll tell you honestly whether the fit is there.",
      cta: { href: "mailto:feral.awareness@gmail.com", label: "Get in touch" },
    },
    {
      min: 37, max: 48,
      level: "Ready",
      color: "#00E5FF",
      heading: "You're ready for this work.",
      body: "You've been through enough to know what's missing, and what's missing is exactly what this school is offering. You have depth, honesty, and a specific hunger. The next step is simple: apply. The conversation will tell us both whether the fit is there.",
      cta: { href: "mailto:feral.awareness@gmail.com", label: "Apply to the school" },
    },
    {
      min: 49, max: 60,
      level: "Deep",
      color: "#0055FF",
      heading: "You're already in it.",
      body: "You have genuine depth and you know it. The school is probably not the first container you need — it's the one that can hold what you've already built. Let's talk. Not about whether you're ready, but about what the next stage looks like.",
      cta: { href: "mailto:feral.awareness@gmail.com", label: "Let's talk" },
    },
  ],

  result_intro: "Here is where you actually are.",
  submit_cta:   "See My Results",
  restart_cta:  "Take the test again",
  email_label:  "Your email (to receive results + next steps)",
  email_note:   "No spam. Unsubscribe any time.",
};

// ════════════════════════════════════════════════════════════
// FREEBIES — Lead magnets for Instagram CTA
// ════════════════════════════════════════════════════════════
// To add a new freebie:
//   1. Create a PDF / video / doc and get a shareable URL
//   2. Add a new entry to this array
//   3. The page /freebie/:slug is automatically generated
//
// The freebie email is sent automatically via Resend when someone signs up.
// Leads are stored in Supabase → freebie_subscribers table.

export const FREEBIES = [
  {
    id:            "intro-spanda",
    slug:          "intro-spanda",
    title:         "Introduction to Spanda",
    tagline:       "The living pulsation at the heart of Kashmir Shaivism",
    description:   "Spanda — the sacred vibration — is where Kashmir Shaivism begins. This guide unpacks what the Spanda Kārikā and Abhinavagupta's commentaries say about the divine pulsation at the root of every thought, sensation, and breath. Not a summary. A map for practice.",
    thumbnail:     IMAGES.nebula,
    // ↓ EDIT THIS: paste the URL of your PDF, Google Drive file, or video
    file_url:      "", // e.g. "https://drive.google.com/file/d/xxx/view"
    email_subject: "Your free guide: Introduction to Spanda — Feral Awareness",
    email_body:    "Here is your guide to Spanda. Read it slowly — each section is designed to land in the body, not just the mind. When you're ready to go deeper, take the Consciousness Test at feralawareness.com/test.",
    cta_label:     "Get the Free Guide",
    confirmation:  "Your guide is on its way. Check your email — and your spam folder if nothing arrives in five minutes.",
  },
  // ── ADD MORE FREEBIES BELOW ──────────────────────────────
  // {
  //   id:            "three-upayas",
  //   slug:          "three-upayas",
  //   title:         "The Three Upāyas",
  //   tagline:       "How Kashmir Shaivism organizes the path",
  //   description:   "...",
  //   thumbnail:     IMAGES.iridescent,
  //   file_url:      "",
  //   email_subject: "Your free guide: The Three Upāyas — Feral Awareness",
  //   email_body:    "...",
  //   cta_label:     "Get the Free Guide",
  //   confirmation:  "Your guide is on its way.",
  // },
];
