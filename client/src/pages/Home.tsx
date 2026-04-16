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
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { HOME, IMAGES as CONTENT_IMAGES, LOGOS } from "@/content";

/* ============================================================
   EDIT ALL CONTENT IN: src/content.ts
   Images, text, CTAs, sections, consultorio topics — all there.
   ============================================================ */

/* Merge content.ts images with logo for backward compat */
const IMAGES = { ...CONTENT_IMAGES, logo: LOGOS.transparent };

const TEST_URL = "/test";
const SECTIONS = HOME.sections_block.sections;
const CONSULTORIO = HOME.consultorio;

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
  const [openConsultorio, setOpenConsultorio] = useState<number | null>(null);

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
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {HOME.hero.subheadline}
          </motion.p>
          {"clarifier" in HOME.hero && (
            <motion.p
              className="text-muted-foreground/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              {(HOME.hero as { clarifier: string }).clarifier}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Primary CTA — pulsing glow to draw the eye */}
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(0,85,255,0.4)", "0 0 50px rgba(0,85,255,0.75)", "0 0 20px rgba(0,85,255,0.4)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link
                href={HOME.hero.cta_primary.href}
                className="block w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground tracking-widest uppercase transition-all duration-300 hover:brightness-125 text-center"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.35rem", letterSpacing: "0.12em" }}
              >
                {HOME.hero.cta_primary.label} →
              </Link>
            </motion.div>
            {/* Secondary CTA */}
            <Link
              href={HOME.hero.cta_secondary.href}
              className="w-full sm:w-auto px-8 py-5 border border-white/30 text-white/80 tracking-widest uppercase transition-all duration-300 hover:border-primary/60 hover:text-primary text-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
            >
              {HOME.hero.cta_secondary.label}
            </Link>
          </motion.div>

          {/* Scarcity nudge */}
          <motion.p
            className="text-muted-foreground/50 text-xs tracking-widest uppercase mt-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            School now open at founding price · Price increases when the cohort fills
          </motion.p>
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
          FREEBIE STRIP — low-commitment entry point for Instagram audience
          EDIT: Add/remove freebies in content.ts → HOME.freebie_cta.items
          ============================================================ */}
      {"freebie_cta" in HOME && (HOME.freebie_cta as { heading: string; subheading: string; items: Array<{ slug: string; label: string; tagline: string }> }).items.length > 0 && (
        <section className="py-10 lg:py-14 relative bg-card/20 border-y border-border/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="shrink-0">
                <p className="text-primary tracking-widest uppercase text-xs mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {(HOME.freebie_cta as { heading: string; subheading: string }).heading}
                </p>
                <p className="text-muted-foreground text-sm max-w-xs">
                  {(HOME.freebie_cta as { heading: string; subheading: string }).subheading}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {(HOME.freebie_cta as { items: Array<{ slug: string; label: string; tagline: string }> }).items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/freebie/${item.slug}`}
                    className="group inline-flex items-center gap-2 px-5 py-3 border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm tracking-wider uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <ArrowRight size={12} className="text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 2.75: WHO THIS IS FOR
          Speaking directly to the three audiences
          ============================================================ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.18]"
          style={{ backgroundImage: `url(${IMAGES.base2})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {HOME.who.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground">
              {HOME.who.heading}
            </h2>
          </motion.div>

          {/* 3 image cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {(HOME.who.groups as Array<{ title: string; body: string; image?: string }>).map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.13 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden border border-border/20 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Image top */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  {group.image && (
                    <img
                      src={group.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 transition-all duration-700"
                      style={{ transform: "scale(1.02)", transition: "transform 700ms ease, opacity 500ms ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1.02)")}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-base leading-tight tracking-wider group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {group.title}
                    </h3>
                  </div>
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                {/* Text bottom */}
                <div className="flex-1 bg-card/50 p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{group.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-foreground border-l-2 border-primary pl-6 max-w-2xl text-base leading-relaxed"
          >
            {HOME.who.closing}
          </motion.p>
        </div>
      </section>

      {/* ── Yantra divider ─────────────────────────────────────── */}
      <div className="flex items-center justify-center py-2">
        <div className="flex-1 h-px bg-border/20 max-w-32" />
        <motion.img src={IMAGES.yantra} alt="" aria-hidden className="w-10 h-10 opacity-25 mx-4"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        <div className="flex-1 h-px bg-border/20 max-w-32" />
      </div>

      {/* ============================================================
          SECTION 2: WHAT IS THIS?
          Brief intro to Feral Awareness - the "elevator pitch"
          EDIT: Change the intro text below
          ============================================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Floating yantra watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img src={IMAGES.yantra} alt="" aria-hidden
            className="w-[460px] h-[460px] opacity-[0.07] mix-blend-screen select-none"
            animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} />
        </div>
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
          STATS STRIP — compact trust signals between WHO and WHY
          ============================================================ */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp}
        className="py-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-feral-cyan/8" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-3 divide-x divide-border/20">
            {[
              { num: "12", label: "questions mapped to practice depth" },
              { num: "15 min", label: "no account required" },
              { num: "1", label: "unbroken lineage from source to now" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center px-4 py-2"
              >
                <p className="text-2xl sm:text-3xl tracking-wider text-primary mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {stat.num}
                </p>
                <p className="text-muted-foreground/60 text-xs leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ============================================================
          SECTION 2.5: WHY NONDUAL
          The philosophical framing — what makes Trika different
          ============================================================ */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Ocean of nectar texture */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.oceanNectar})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 shimmer-overlay" />
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
          LINEAGE — compact trust signal showing unbroken transmission
          EDIT: content.ts → HOME.lineage
          ============================================================ */}
      {"lineage" in HOME && (
        <section className="py-14 lg:py-20 relative overflow-hidden border-t border-border/10">
          {/* Aurora borealis atmospheric background */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.20]"
            style={{ backgroundImage: `url(${IMAGES.p13})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          {/* Kali/Durga face — right-side atmospheric accent */}
          <div className="absolute right-0 top-0 bottom-0 w-72 pointer-events-none">
            <img src={IMAGES.p4} alt="" aria-hidden
              className="h-full w-full object-cover object-center opacity-[0.22] mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <p className="text-primary tracking-widest uppercase text-xs mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {(HOME.lineage as { eyebrow: string }).eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl tracking-wide text-foreground mb-10">
                {(HOME.lineage as { heading: string }).heading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-16 max-w-2xl">
                {(HOME.lineage as { nodes: Array<{ name: string; century: string; works: string }> }).nodes.map((node, i, arr) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 mb-6"
                  >
                    <div className="flex flex-col items-center shrink-0 mt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-primary/25 shrink-0" />
                      {i < arr.length - 1 && i % 2 === 0 && (
                        <div className="w-px h-8 bg-primary/20 mt-1" />
                      )}
                    </div>
                    <div>
                      <p className="text-foreground text-sm tracking-wider"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {node.name}
                      </p>
                      <p className="text-primary/60 text-xs mt-0.5">{node.century}</p>
                      {node.works && (
                        <p className="text-muted-foreground/45 text-xs italic mt-0.5">{node.works}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground/50 text-xs mt-2 max-w-xl">
                {(HOME.lineage as { note: string }).note}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Yantra divider ─────────────────────────────────────── */}
      <div className="flex items-center justify-center py-2">
        <div className="flex-1 h-px bg-border/20 max-w-32" />
        <motion.img src={IMAGES.yantra} alt="" aria-hidden className="w-10 h-10 opacity-25 mx-4"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        <div className="flex-1 h-px bg-border/20 max-w-32" />
      </div>

      {/* ============================================================
          SECTION 3.5: TESTIMONIALS - Social proof
          EDIT: Change TESTIMONIALS array at the top of this file
          ============================================================ */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        {/* Neon smoke texture */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
          style={{ backgroundImage: `url(${IMAGES.base1})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              From practitioners
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground">
              WHAT SHIFTS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME.testimonials.items.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,85,255,0.15)" }}
                className="border border-border/30 bg-card/50 p-6 relative cursor-default"
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
                  {"credential" in t && t.credential && (
                    <p className="text-muted-foreground/60 text-xs italic mt-1">{t.credential as string}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Yantra divider ─────────────────────────────────────── */}
      <div className="flex items-center justify-center py-2">
        <div className="flex-1 h-px bg-border/20 max-w-32" />
        <motion.img src={IMAGES.yantra} alt="" aria-hidden className="w-10 h-10 opacity-25 mx-4"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
        <div className="flex-1 h-px bg-border/20 max-w-32" />
      </div>

      {/* ============================================================
          SECTION 3: EXPLORE - Section preview cards
          Links to all subpages with images and descriptions
          EDIT: Change the SECTIONS array at the top of this file
          ============================================================ */}
      <section className="py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${IMAGES.nebula})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } },
                }}
              >
                <Link href={section.href} className="group block h-full">
                  {/* Full-image card: image fills the card, text overlays bottom */}
                  <div className="relative overflow-hidden h-80 border border-border/20 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,85,255,0.2)]">
                    {/* Background image — zooms on hover */}
                    <img
                      src={section.image}
                      alt={section.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-40 group-hover:opacity-60"
                      style={{ transform: "scale(1)", transition: "transform 700ms ease, opacity 500ms ease" }}
                    />
                    {/* Gradient overlay — stronger at bottom for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
                    {/* Blue accent line that appears on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl lg:text-3xl tracking-wider text-white mb-2 group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {section.title}
                      </h3>
                      {/* Description slides up on hover */}
                      <p className="text-white/60 text-sm leading-relaxed mb-3 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
                        {section.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          SECTION 4: CONSULTORIO - Case studies / provocations
          Interactive accordion of real questions and themes
          EDIT: Change the CONSULTORIO array at the top of this file
          ============================================================ */}
      <section className="py-14 lg:py-20 relative overflow-hidden">
        {/* Kali + red smoke atmospheric background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.20]"
          style={{ backgroundImage: `url(${IMAGES.p15})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
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
            {CONSULTORIO.items.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.08 } },
                }}
                className={`border bg-card/30 transition-all duration-300 cursor-pointer ${openConsultorio === i ? "border-primary/50 bg-card/60" : "border-border/20 hover:border-primary/30 hover:bg-card/50"}`}
                onClick={() => setOpenConsultorio(openConsultorio === i ? null : i)}
              >
                <div className="flex items-center gap-4 p-6 sm:p-8">
                  <span className="text-primary/50 text-2xl leading-none shrink-0 w-8"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className={`flex-1 text-base sm:text-lg tracking-wider transition-colors duration-300 ${openConsultorio === i ? "text-primary" : "text-foreground"}`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {item.title}
                  </h4>
                  <motion.span
                    animate={{ rotate: openConsultorio === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-primary/60 text-xl shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openConsultorio === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pl-[4.5rem]">
                        <p className="text-muted-foreground text-sm sm:text-base serif-italic leading-relaxed border-l border-primary/30 pl-4">
                          {item.preview}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Iridescent deepwater background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.deepwater})` }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 shimmer-overlay" />
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
              CONSCIOUSNESS TEST
            </h2>
            <p className="display text-xl sm:text-2xl text-feral-cyan mb-4">
              The entrance gate to the school
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              This is not a personality quiz. Twelve questions mapping the
              patterns that distinguish practitioners who actually wake up
              from those who don&apos;t. It measures honesty
              with yourself when that honesty is uncomfortable — which is
              harder than it sounds.
            </p>
            {/* Scarcity bar */}
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-feral-cyan/30 bg-feral-cyan/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-feral-cyan animate-pulse shrink-0" />
              <p className="text-feral-cyan text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                School open · Founding price — not permanent
              </p>
            </div>
            <div className="block">
              <Link
                href={TEST_URL}
                className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-lg"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Take the Test — Free
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: NEWSLETTER — Email capture form
          EDIT: Replace the fetch URL with your actual email API endpoint
          ============================================================ */}
      <section className="py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${IMAGES.iridescent})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/60 to-background" />
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
