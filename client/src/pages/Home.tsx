/* ============================================================
   HOME PAGE - Landing page with section previews & lead magnets
   ============================================================
   DESIGN: Dark, visceral, electric blue accents from logo
   STRUCTURE:
   1. Hero with logo + headline
   2. "What is this?" intro section
   3. Section preview cards (links to subpages)
   4. Consultorio (case studies)
   5. Lead magnet: Test de Consciencia
   6. Testimonials
   7. Newsletter CTA
   
   EDIT GUIDE:
   - All text content is directly editable below
   - Image URLs are stored as constants at the top
   - To change section order: Rearrange the JSX sections
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Flame, Users, Compass, PenTool, Library, Mail } from "lucide-react";
import { LOGO_TRANSPARENT_URL } from "@/config";
import { useState } from "react";

/* ============================================================
   IMAGES - Edit URLs here to change visuals
   ============================================================ */
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-hero-blue-Hvikx3gGvgR7tDVXnsuGYK.webp",
  logo: LOGO_TRANSPARENT_URL,
  tantra: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-tantra-origins-7yQJqP5DoD4KDmkQy3T9tH.webp",
  practice: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-practice-body-iQQ63gZgXFZF269mY8Auyv.webp",
  about: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-about-portrait-9CSjB93QuLYvEtZFqgYEjW.webp",
  resources: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp",
};

/* Internal test route */
const TEST_URL = "/test";

/* ============================================================
   SECTION PREVIEW DATA - Edit to change the cards on home page
   ============================================================ */
const SECTIONS = [
  {
    icon: Flame,
    title: "Nondual Tantra",
    description: "The Bhairava Āgamas. Six thousand years of non-dual tantric tradition. Not neo-tantra. Not Patañjali. A radically different map of consciousness.",
    href: "/tantra",
    image: "tantra" as const,
  },
  {
    icon: Compass,
    title: "Practice",
    description: "The three upāyas as a living system. The body as laboratory. Bhakti as the heat that melts the contraction. Active meditation in daily life.",
    href: "/practice",
    image: "practice" as const,
  },
  {
    icon: Users,
    title: "About",
    description: "Rob Pérez Martínez. Berlin. A story that includes a psychotic break, eight years of physical theater, and a teacher who refused to dilute the transmission.",
    href: "/about",
    image: "about" as const,
  },
  {
    icon: BookOpen,
    title: "School",
    description: "Ongoing formation, not weekend retreats. Online school and Berlin motion lab. Entry is via the Consciousness Test.",
    href: "/school",
    image: "tantra" as const,
  },
  {
    icon: PenTool,
    title: "Blog",
    description: "Essays on consciousness, decolonization, and the politics of recognition. Slow. No listicles.",
    href: "/blog",
    image: "resources" as const,
  },
  {
    icon: Library,
    title: "Resources",
    description: "Sanskrit glossary. Scripture references. What to read first and why.",
    href: "/resources",
    image: "resources" as const,
  },
];

/* ============================================================
   CONSULTORIO DATA - Real themes from the practice
   ============================================================ */
const CONSULTORIO = [
  {
    title: "Spiritual bypass and the tyranny of \"high vibration\"",
    preview: "When \"raising your frequency\" becomes another way to avoid grief, rage, and the political present...",
  },
  {
    title: "Colonial religion and body shame",
    preview: "How centuries of Christian puritanism and Cartesian dualism live inside your nervous system, long after you stopped believing...",
  },
  {
    title: "Desire as expansion, not lack",
    preview: "You are chasing objects with the implicit belief that you need them. In Trika, desire is spanda — consciousness pulsing...",
  },
  {
    title: "Frozen emotion and the fear of death",
    preview: "All moralistic stance without deep emotional processing is a temporary patch. Real freedom starts when fear is recognized as śakti...",
  },
  {
    title: "Self-improvement as social control",
    preview: "Self-improvement is not designed to make you free. It is designed to make you a more efficient participant in the systems that oppress you...",
  },
];

/* Fade-in animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================================
   NEWSLETTER FORM COMPONENT
   EDIT: Replace the fetch URL with your actual email API endpoint
   e.g. Resend, Mailchimp, ConvertKit, etc.
   ============================================================ */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      // EDIT: Replace this URL with your real email API endpoint
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-4 px-6 border border-primary/40 bg-primary/10 text-primary tracking-wider"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
        ✓ You're in. First transmission coming soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-5 py-4 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-4 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 disabled:opacity-50 whitespace-nowrap"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
      >
        {status === "loading" ? "Sending..." : "Join →"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs mt-2 w-full text-left">
          Something went wrong. Try again or email us directly.
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ============================================================
          SECTION 1: HERO
          Full-screen hero with logo, headline, and dual CTAs
          EDIT: Change headline, subheadline, and CTA text below
          ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 grain-overlay" />
        {/* Ambient glow blobs */}
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-feral-cyan/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Logo */}
          <motion.img
            src={IMAGES.logo}
            alt="Feral Awareness"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 drop-shadow-2xl mix-blend-screen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* EDIT: Main headline */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white mb-4 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FERAL AWARENESS
          </motion.h1>

          {/* EDIT: Subheadline */}
          <motion.p
            className="display text-xl sm:text-2xl lg:text-3xl text-feral-cyan mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nondual Tantra · Kashmir Shaivism
          </motion.p>

          {/* EDIT: Tagline */}
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            An awareness that holds the ground of the world while expanding
            into the ocean of nectar at the edge of the universe. Not
            renunciation. Not bypass. Not wellness. A living lineage in the
            Trika tradition — queer, feminist, decolonial, because the texts
            themselves were.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={TEST_URL}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.25rem" }}
            >
              Take the Consciousness Test →
            </Link>
            <Link
              href="/tantra"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white/70 tracking-widest uppercase transition-all duration-300 hover:border-white/60 hover:text-white text-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
            >
              Enter the Tradition
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 2: WHAT IS THIS?
          Brief intro to Feral Awareness - the "elevator pitch"
          EDIT: Change the intro text below
          ============================================================ */}
      <section className="py-28 lg:py-40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              What we mean by feral
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide text-foreground mb-16">
              AN AWARENESS THAT DOES NOT CONTRACT
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-10 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-left"
          >
            <p className="text-foreground text-xl sm:text-2xl leading-relaxed">
              Feral awareness is awareness that has stopped flinching.
            </p>
            <p>
              It holds the ground — the body, the nervous system, the people
              you love, the political present — while simultaneously
              expanding into the edges of the universe, where the texts of
              the Trika tradition describe an{" "}
              <span className="serif-italic">ocean of nectar</span>{" "}
              (<span className="serif-italic">amṛta</span>) pulsing through
              every experience. It doesn&apos;t shrink when the mind
              contracts around a desire or an object. It doesn&apos;t
              withdraw from the world in the name of purity. It does not
              perform serenity. It does not need to.
            </p>

            {/* Pull-quote moment */}
            <blockquote className="pull-quote py-2 my-12">
              &ldquo;Feral&rdquo; means pre-domesticated. Not wild in the sense of
              chaotic. Wild in the sense of not fitted to the cage you were
              born into.
            </blockquote>

            <p>
              The Trika tradition has a word for the mystical experience at
              the center of this:{" "}
              <span className="text-foreground font-semibold serif-italic">
                camatkāra
              </span>{" "}
              — ecstatic awe, the shiver of recognition that reality is not
              a neutral backdrop but a living pulsation of consciousness
              (<span className="serif-italic">spanda</span>). When you feel
              it, life stops being a problem to solve and starts being a
              flow — the manifestation of your own inherent powers
              (<span className="serif-italic">śakti</span>) — without
              shrinking in reaction to the mind or the objects it chases.
            </p>
            <p>
              This is not self-improvement. It is{" "}
              <span className="text-foreground font-semibold serif-italic">
                pratyabhijñā
              </span>{" "}
              — the recognition of what you already are. Consciousness
              itself, in its fullness (<span className="serif-italic">pūrṇatā</span>),
              temporarily contracted into the experience of being &quot;you.&quot;
            </p>
          </motion.div>

          <div className="divider-feral-wide mt-20 max-w-2xl mx-auto" />
        </div>
      </section>

      {/* ============================================================
          SECTION 2.5: CONSCIOUSNESS TEST (early placement for conversion)
          ============================================================ */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The Entrance Gate
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-4">
              CONSCIOUSNESS TEST
            </h2>
            <p className="display text-lg sm:text-xl text-feral-cyan mb-4">
              Not a personality quiz. A mirror.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Twelve questions mapping the patterns that distinguish practitioners who actually wake up from those who don&apos;t. It measures honesty with yourself when that honesty is uncomfortable — which is harder than it sounds.
            </p>
            <Link
              href={TEST_URL}
              className="inline-block w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem" }}
            >
              Take the Test — Free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2.5: WHY NONDUAL
          The philosophical framing — what makes Trika different
          ============================================================ */}
      <section className="py-24 lg:py-36 relative section-warm">
        <div className="absolute inset-0 grain-heavy" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The frame
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-12">
              WHY NONDUAL TANTRA
            </h2>

            <div className="space-y-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Most of what you get sold as &quot;eastern spirituality&quot;
                in the West comes from two places: the Vedas and Patañjali&apos;s
                Yoga Sūtras. Both treat the world as an illusion to overcome,
                the body as an obstacle, desire as a trap. Both come from
                brahmanic caste contexts — privileged people who owned land
                and wrote texts that reflected their privilege, often
                misogynistic and hierarchical. Neo-tantra then took the name{" "}
                <span className="serif-italic">Tantra</span>, stripped it of
                its philosophical depth and political bite, and sold it back
                as a sexuality workshop. That is not what we do here.
              </p>
              <p>
                Kashmir Shaivism comes from a completely different lineage:
                the{" "}
                <span className="text-foreground font-semibold">
                  Bhairava Āgamas
                </span>
                , non-dual tantric texts that put consciousness and the{" "}
                <span className="serif-italic">yoginī</span> at the center,
                treat multiplicity and diversity as manifestations of{" "}
                <span className="serif-italic">śakti</span>, and embrace
                pleasure, body, art, and the world itself as the path.
              </p>

              {/* Pull-quote */}
              <blockquote className="pull-quote py-2 my-8">
                In Trika, liberation and enjoyment are not opposites.
                A tradition that gives you one without the other is incomplete.
              </blockquote>

              <p>
                The world is not{" "}
                <span className="serif-italic">māyā</span> as &quot;illusion.&quot;{" "}
                <span className="serif-italic">Māyā</span> is the creative
                power of consciousness voluntarily contracting itself to taste
                finitude — to experience being separate so it can recognize
                its own fullness. Renunciation without enjoyment becomes repression
                in spiritual clothing. Enjoyment without liberation is empty hedonism.
                The non-dual texts refuse both errors.
              </p>
              <p>
                The lineage is specific: Vasugupta, Somānanda, Utpaladeva, Abhinavagupta (author of
                the <span className="serif-italic">Tantrāloka</span>),
                Kṣemarāja, Swami Lakshmanjoo — and my own teacher Mar Delgado, who
                continues the transmission today.
              </p>
              <p className="text-foreground">
                This path is decolonial because the tradition itself was
                decolonial. It is queer and feminist because{" "}
                <span className="serif-italic">śakti</span> — power, energy,
                the feminine principle — is not subordinate to{" "}
                <span className="serif-italic">Śiva</span>. They are
                inseparable and equal. Your politics are not a distraction
                from the path. They are already practice.
              </p>
            </div>

            <div className="divider-feral-wide mt-16 max-w-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2.75: WHO THIS IS FOR
          Speaking directly to the three audiences
          ============================================================ */}
      <section className="py-24 lg:py-36 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Who
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-10">
              WHO THIS IS FOR
            </h2>

            <div className="space-y-8 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <div>
                <h3 className="text-xl text-foreground tracking-wider mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  SERIOUS PRACTITIONERS WHO HAVE HIT A WALL
                </h3>
                <p>
                  You have sat with other traditions — Zen, Vipassana,
                  Advaita, Vedanta, neo-tantra, ceremonial paths. They gave
                  you something, and then they gave you a ceiling. You started
                  noticing the repression underneath the peace. You started
                  wondering what a tradition would look like that did not
                  require you to split yourself in half to practice it.
                  Welcome.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-foreground tracking-wider mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  THE POLITICALLY RADICAL WHO ARE SUSPICIOUS OF SPIRITUALITY
                </h3>
                <p>
                  You have watched the wellness industry absorb every
                  liberation movement and sell it back as a personal
                  development product. You are not going to be talked into a
                  path that asks you to &quot;raise your vibration&quot; and
                  stop caring about the world. Good. Neither are we. The Trika
                  framework is politically sharp because the texts themselves
                  were. Your politics are not a distraction from practice —
                  they are already practice.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-foreground tracking-wider mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ARTISTS, PERFORMERS, PEOPLE WHO LIVE IN THEIR BODIES
                </h3>
                <p>
                  You have found that concepts don&apos;t go deep enough —
                  that the body reaches what the mind cannot. You work with
                  tension, breath, impulse, presence. The Trika tradition
                  treats the body as the primary laboratory.{" "}
                  <span className="serif-italic">Saṃskāras</span> —
                  conditioning, the karmic residues of unprocessed experience
                  — live in the body first, and they must be released there
                  before the mind can follow. Everything we teach is designed
                  to land somatically.
                </p>
              </div>

              <p className="text-foreground border-l-2 border-primary pl-6 mt-8">
                If none of these are you — if you are here for comfort, for
                &quot;high vibration,&quot; for a teacher to tell you what to
                think — this is not your place. That&apos;s okay. The door is
                honest.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: EXPLORE - Section preview cards
          Links to all subpages with images and descriptions
          EDIT: Change the SECTIONS array at the top of this file
          ============================================================ */}
      <section className="py-20 lg:py-32 relative section-raised">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl tracking-wide text-foreground">
              WALK INTO THE TRADITION
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
              >
                <Link href={section.href} className="group block">
                  <div className="relative overflow-hidden bg-card border border-border/30 transition-all duration-500 hover:border-primary/50 h-full">
                    {/* Card image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={IMAGES[section.image]}
                        alt={section.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <div className="absolute top-4 left-4">
                        <section.icon className="text-primary" size={24} />
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-6">
                      <h3 className="text-2xl tracking-wider text-foreground mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {section.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3.5: TESTIMONIALS - Social proof
          EDIT: Change TESTIMONIALS array at the top of this file
          ============================================================ */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              From practitioners
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground">
              WHAT SHIFTS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I'd spent ten years in Vipassana and Advaita hitting the same ceiling. This is the first framework that didn't ask me to amputate half my experience to be 'spiritual'.",
                name: "M.K.",
                location: "Berlin",
              },
              {
                quote: "The Consciousness Test was the most uncomfortable thing I've done online. Also the most honest. It showed me exactly where I was lying to myself about my practice.",
                name: "S.R.",
                location: "Barcelona",
              },
              {
                quote: "I came in as a skeptic — I'm a political organizer and I distrust anything that smells like wellness. This doesn't. It's rigorous, embodied, and doesn't ask you to stop caring about the world.",
                name: "L.T.",
                location: "Amsterdam",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                className="border border-border/30 bg-card/50 p-6 relative"
              >
                <div className="text-primary text-4xl leading-none mb-4 serif-italic">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 serif-italic">
                  {t.quote}
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-foreground text-sm tracking-wider"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: CONSULTORIO - Case studies / provocations
          Interactive accordion of real questions and themes
          EDIT: Change the CONSULTORIO array at the top of this file
          ============================================================ */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain-heavy" />
        {/* Subtle red glow top-left for warmth */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-feral-red/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The Consultorio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-6">
              QUESTIONS THAT BURN
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real themes from the practice. No sanitized case studies. These
              are the fires we hold in the Consultorio — one-on-one tantric
              guidance for people doing real work.
            </p>
          </motion.div>

          <div className="space-y-4">
            {CONSULTORIO.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.08 } },
                }}
                className="border border-border/20 bg-card/30 p-6 sm:p-8 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="text-primary/40 text-2xl leading-none mt-1 shrink-0"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl tracking-wider text-foreground group-hover:text-primary transition-colors mb-2"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base serif-italic leading-relaxed">
                      {item.preview}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={TEST_URL}
              className="inline-flex items-center gap-2 text-primary tracking-wider uppercase text-sm hover:brightness-125 transition-all"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Submit your question <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: CONSCIOUSNESS TEST - Lead Magnet
          Prominent CTA to the entrance test
          EDIT: Change the TEST_URL constant at the top of this file
          ============================================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <img src={IMAGES.logo} alt="" className="w-16 h-16 mx-auto opacity-60 mix-blend-screen" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide text-foreground mb-6">
              CONSCIOUSNESS TEST
            </h2>
            <p className="display text-xl sm:text-2xl text-feral-cyan mb-4">
              The entrance gate to the school
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              This is not a personality quiz. Twelve questions mapping the
              patterns that distinguish practitioners who actually wake up
              from those who don&apos;t. Based on more than a decade of study
              and transmission in the Trika tradition. It measures honesty
              with yourself when that honesty is uncomfortable — which is
              harder than it sounds.
            </p>
            <Link
              href={TEST_URL}
              className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-lg"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Take the Test
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: NEWSLETTER — Email capture form
          EDIT: Replace the fetch URL with your actual email API endpoint
          ============================================================ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Mail className="mx-auto mb-6 text-primary" size={32} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-4">
              JOIN THE TRANSMISSION
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Raw, unfiltered essays on nondual tantra, decolonial spirituality, and embodied liberation. No algorithms. No noise. Direct to your inbox.
            </p>
            <NewsletterForm />
            <p className="text-muted-foreground text-xs mt-4 opacity-60">
              No spam. Unsubscribe anytime. We don't sell your data.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
