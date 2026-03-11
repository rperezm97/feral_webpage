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
import { ArrowRight, BookOpen, Flame, Users, Compass, PenTool, Library } from "lucide-react";

/* ============================================================
   IMAGES - Edit URLs here to change visuals
   ============================================================ */
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-hero-blue-Hvikx3gGvgR7tDVXnsuGYK.webp",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/Logo_negro_final_5a9a9024.png",
  tantra: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-tantra-origins-7yQJqP5DoD4KDmkQy3T9tH.webp",
  practice: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-practice-body-iQQ63gZgXFZF269mY8Auyv.webp",
  about: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-about-portrait-9CSjB93QuLYvEtZFqgYEjW.webp",
  resources: "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp",
};

/* EDIT: Change the test/access form URL */
const TEST_URL = "https://docs.google.com/forms/d/e/1FAIpQLScfI9axshcros3mD_6NUpeHcGWAtFBRBIdXw2YawErBtnY_Ig/viewform?usp=dialog";

/* ============================================================
   SECTION PREVIEW DATA - Edit to change the cards on home page
   ============================================================ */
const SECTIONS = [
  {
    icon: Flame,
    title: "Nondual Tantra",
    description: "Kashmir Shaivism: 6,000 years of radical nondual tradition. Not the neo-tantra you've been sold.",
    href: "/tantra",
    image: "tantra" as const,
  },
  {
    icon: Compass,
    title: "Practice",
    description: "Three paths of meditation. Body as laboratory. Somatic unfolding through movement and stillness.",
    href: "/practice",
    image: "practice" as const,
  },
  {
    icon: Users,
    title: "About",
    description: "Who I am, where I come from, and why I refuse to dilute this tradition for Western comfort.",
    href: "/about",
    image: "about" as const,
  },
  {
    icon: BookOpen,
    title: "School",
    description: "Online school & Berlin motion lab. Ongoing formation, not weekend retreats. Take the entrance test.",
    href: "/school",
    image: "tantra" as const,
  },
  {
    icon: PenTool,
    title: "Blog",
    description: "Raw essays on consciousness, decolonization, embodiment, and the politics of awakening.",
    href: "/blog",
    image: "resources" as const,
  },
  {
    icon: Library,
    title: "Resources",
    description: "Essential readings, Sanskrit glossary, and curated references for serious practitioners.",
    href: "/resources",
    image: "resources" as const,
  },
];

/* ============================================================
   CONSULTORIO DATA - Edit case studies here
   ============================================================ */
const CONSULTORIO = [
  { title: "Spiritual Bypass & Toxic Positivity", preview: "When 'raising your vibration' becomes another form of repression..." },
  { title: "Colonial Religion & Body Shame", preview: "How centuries of puritanism live in your nervous system..." },
  { title: "Desire as Expansion, Not Lack", preview: "You're chasing objects with the implicit belief that you need them..." },
  { title: "Frozen Emotion & Fear of Death", preview: "All our moralistic stance without deep processing is just a temporary patch..." },
  { title: "Self-Improvement as Social Control", preview: "Self-improvement is not designed to make you free, but to make you docile..." },
];

/* ============================================================
   TESTIMONIALS - Edit testimonials here
   ============================================================ */
const TESTIMONIALS = [
  {
    text: "This is not comfortable spirituality. It broke open everything I thought I knew about myself and rebuilt it from the body up.",
    author: "Student, Berlin Lab",
  },
  {
    text: "Finally someone who doesn't separate the political from the spiritual. The decolonial lens changed my entire practice.",
    author: "Online School Member",
  },
  {
    text: "I came looking for meditation techniques. I found a complete dismantling of my ego's favorite hiding places.",
    author: "Workshop Participant",
  },
];

/* Fade-in animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
            Nondual Tantra & Physical Theater
          </motion.p>

          {/* EDIT: Tagline */}
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Radical spirituality & embodiment for liberation & enjoyment.
            Decolonial queerfem lens. Lineage-based. No spiritual bypass.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/school"
              className="px-8 py-4 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-sm"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}
            >
              Enter the School
            </Link>
            <a
              href={TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-feral-cyan text-feral-cyan tracking-widest uppercase transition-all duration-300 hover:bg-feral-cyan/10 text-sm"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}
            >
              Take the Consciousness Test
            </a>
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
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center"
          >
            {/* EDIT: Section subtitle */}
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              What is this?
            </p>

            {/* EDIT: Main intro text - this is your "manifesto lite" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-8">
              THIS IS NOT COMFORTABLE SPIRITUALITY
            </h2>

            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-left">
              {/* EDIT: Intro paragraphs */}
              <p>
                Feral Awareness is a school of <span className="text-foreground font-semibold">Nondual Tantra</span> rooted
                in the Kashmir Shaivism tradition and expressed through <span className="text-foreground font-semibold">physical
                theater and somatic practice</span>. We don't separate the spiritual from the political, the body from
                consciousness, or liberation from enjoyment.
              </p>
              <p>
                Most of what you'll find under the name "Tantra" in the West is <span className="text-feral-red">neo-tantra</span>: a
                modern invention based on sexuality and romantic relationships, disconnected from the original nondual
                scriptures. We are faithful to the <span className="serif-italic">Bhairava Sutras</span> and the lineage
                of masters from Vasugupta to Abhinavagupta to Lakshmanjoo.
              </p>
              <p>
                We apply a <span className="text-foreground font-semibold">decolonial, queerfeminist lens</span> to this
                ancient tradition, because the original Tantra was already radical: it recognized women as spiritually
                equal or superior, rejected the caste system, embraced the arts as yoga, and defied the morality of
                Vedic asceticism.
              </p>
            </div>

            <div className="divider-feral mt-12" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: EXPLORE - Section preview cards
          Links to all subpages with images and descriptions
          EDIT: Change the SECTIONS array at the top of this file
          ============================================================ */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl tracking-wide text-foreground">
              EXPLORE THE PATH
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
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={IMAGES[section.image]}
                        alt={section.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
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
          SECTION 4: CONSULTORIO - Case studies / provocations
          Interactive accordion of real questions and themes
          EDIT: Change the CONSULTORIO array at the top of this file
          ============================================================ */}
      <section className="py-16 lg:py-24 bg-card/50 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-primary tracking-widest uppercase text-sm mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The Consultorio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-4">
              QUESTIONS THAT BURN
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real themes from real people. No sanitized case studies.
              These are the fires we work with.
            </p>
          </motion.div>

          <div className="space-y-3">
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
                className="border border-border/30 bg-background/50 p-5 hover:border-primary/40 transition-colors group"
              >
                <h4 className="text-lg tracking-wider text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm serif-italic">
                  {item.preview}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary tracking-wider uppercase text-sm hover:brightness-125 transition-all"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Submit your question <ArrowRight size={14} />
            </a>
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
              Where are you on the wheel of energies?
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {/* EDIT: Test description */}
              Discover the characteristics that define victorious practitioners who have mastered
              the wheel of energies. This is not a personality quiz. It's a mirror.
            </p>
            <a
              href={TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-lg"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Take the Test Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: TESTIMONIALS
          EDIT: Change the TESTIMONIALS array at the top of this file
          ============================================================ */}
      <section className="py-16 lg:py-24 bg-card/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground">
              TRANSMISSIONS RECEIVED
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } },
                }}
                className="border border-border/20 bg-background/50 p-8 relative"
              >
                <div className="absolute top-4 left-6 text-primary/20 text-6xl serif-bold leading-none">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10 pt-6 serif-italic">
                  {t.text}
                </p>
                <p className="text-xs text-primary tracking-wider uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: NEWSLETTER CTA
          EDIT: Replace with Substack embed or custom form
          ============================================================ */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-6">
              JOIN THE TRANSMISSION
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              {/* EDIT: Newsletter pitch */}
              Raw, unfiltered essays on nondual tantra, decolonial spirituality, and embodied
              liberation. Delivered to your inbox. No spam. No spiritual bypass. No "love and light" bullshit.
            </p>
            {/* EDIT: Replace this with your actual newsletter form/Substack embed */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                className="px-6 py-3 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 text-sm shrink-0"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                onClick={() => window.open(TEST_URL, '_blank')}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 opacity-60">
              {/* EDIT: Privacy note */}
              Your data stays with us. We don't sell, share, or exploit your information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
