/* ============================================================
   SCHOOL PAGE — The offer
   ============================================================
   EDIT GUIDE:
   - All text, CTAs, principles, offerings: Edit SCHOOL in src/content.ts
   - Hero image: Edit IMAGES.school in src/content.ts
   ============================================================ */

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { SCHOOL, IMAGES, LOGOS } from "@/content";

const TEST_URL = SCHOOL.test_cta.cta.href;
const HERO_IMG = IMAGES.school;
const LOGO_URL = LOGOS.main;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OFFERINGS = [
  {
    title: "Online School",
    subtitle: "Ongoing formation",
    description:
      "A continuous, deep program in the Trika tradition for people who are serious about practice. Not a weekend retreat, not a certification mill, not a course you finish and move on from. Ongoing formation means you keep studying the texts, keep practicing, keep being held by a lineage and a community, for as long as the work is alive in you. Weekly live sessions, direct teaching, scripture study, and access for questions.",
    features: [
      "Weekly live Zoom sessions with direct teaching",
      "Close study of the Bhairava Āgamas and their commentaries — Śiva Sūtras, Spanda Kārikā, Vijñāna Bhairava Tantra, Pratyabhijñāhṛdayam, and selections from the Tantrāloka and Tantrasāra",
      "Guided practice across all three upāyas, calibrated to where you actually are",
      "A community of serious practitioners, not spiritual consumers",
      "Direct access to me for questions between sessions",
      "Monthly deep dives into specific themes from the tradition",
    ],
    cta: "Apply for the school",
  },
  {
    title: "Motion Lab — Berlin",
    subtitle: "Physical theater meets non-dual practice",
    description:
      "In-person work in Berlin where the tantric tradition meets the physical theater lineages I come from — Grotowski, Meyerhold, Artaud. We use movement, breath, voice, improvisation, and sustained presence to dissolve bodily contractions (saṃskāras) and expand the capacity of the body to hold consciousness without shrinking. Small groups. Deep work. This is not a yoga class.",
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
    title: "The Consultorio",
    subtitle: "One-on-one guidance",
    description:
      "Individual sessions for practitioners who need direct, personalized work on specific patterns, contractions, questions, or life situations. This is not therapy. It is tantric guidance rooted in the tradition and in my own practice — I will meet you where you actually are, not where a manual says you should be. Available online worldwide.",
    features: [
      "One-on-one video sessions, online from anywhere",
      "Work with your specific contractions, patterns, and questions",
      "Personalized practice recommendations calibrated to your experience",
      "Integration of life situations with practice in real time",
      "Rooted in scripture, lineage, and lived transmission",
    ],
    cta: "Request a session",
  },
];

const PRINCIPLES = [
  {
    title: "No bypass",
    text: "We do not use spirituality to avoid what is actually happening in your life, your body, your politics, or your grief. We use it to meet these things more fully.",
  },
  {
    title: "Scripture and lineage",
    text: "Everything we teach is grounded in the Bhairava Āgamas, the commentarial tradition of Kashmir Shaivism, and an unbroken line of practice that runs through Swami Lakshmanjoo, Mar Delgado, and into this work.",
  },
  {
    title: "Body first",
    text: "Saṃskāras live in the body before they live in the mind. If practice is not landing in the body, it is philosophy. We work somatically before we work conceptually.",
  },
  {
    title: "No gurus on pedestals",
    text: "I am a practitioner who shares the path, not a savior. The teacher is a mirror, not a destination. Anyone who lets you give them the authority of your own recognition is stealing from you.",
  },
  {
    title: "Decolonial integrity",
    text: "The tradition was already decolonial before the word existed. We honor the source, refuse cultural appropriation, do not dilute the philosophy for Western comfort, and do not separate politics from practice.",
  },
  {
    title: "Liberation and enjoyment",
    text: "Mokṣa without bhoga is repression in spiritual clothing. Bhoga without mokṣa is empty hedonism. The tradition refuses both errors, and so do we.",
  },
];

export default function School() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px, unless dismissed
      setShowSticky(window.scrollY > 400 && !dismissed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <div className="min-h-screen">

      {/* ── Sticky floating CTA bar ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 bg-background/95 backdrop-blur-md border border-primary/50 shadow-[0_0_30px_rgba(0,85,255,0.25)]"
            style={{ maxWidth: "calc(100vw - 2rem)" }}
          >
            <span className="text-muted-foreground text-sm tracking-wide hidden sm:block">
              Ready to start?
            </span>
            <Link
              href={TEST_URL}
              className="px-7 py-2.5 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125 whitespace-nowrap"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
            >
              Take the Test →
            </Link>
            <button
              onClick={() => { setDismissed(true); setShowSticky(false); }}
              className="text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <img src={LOGO_URL} alt="" className="w-20 h-20 mx-auto mb-6 opacity-80 mix-blend-screen" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            THE SCHOOL
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Not a course. A commitment.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Feral Awareness is a school of non-dual tantra in the Trika
                tradition. It is not a marketplace of spiritual products.
                There are no weekend retreats, no certification programs, no
                &quot;transformational experiences&quot; to book. Those
                formats do not produce the thing they promise. What we offer
                is{" "}
                <span className="text-foreground font-semibold">
                  ongoing formation
                </span>{" "}
                for people who are serious about the path, in three formats:
                an online school, an in-person Motion Lab in Berlin, and
                one-on-one guidance through the Consultorio.
              </p>
              <p>
                Entry into any of these formats starts the same way: you
                take the Consciousness Test. This is not a personality quiz.
                It is a mirror — a set of questions designed to surface how
                honestly you are currently relating to your own experience,
                and whether the work we do here is a good fit for where you
                actually are. The test is free and takes about fifteen
                minutes. It exists to protect both of us from wasting time.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                We are not for everyone. We are for people who sense that
                something fundamental is missing from the spirituality on
                offer, who feel that awakening has political dimensions,
                and who are tired of being sold comfort dressed up as
                liberation. If that is you, welcome.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consciousness Test CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <img src={LOGO_URL} alt="" className="w-14 h-14 mx-auto mb-4 opacity-60 mix-blend-screen" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-4">
              START WITH THE TEST
            </h2>
            <p className="display text-lg sm:text-xl text-feral-cyan mb-3">
              The entrance gate to the school
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Twelve questions mapping how you actually relate to practice,
              to the body, to desire, and to honesty with yourself. Fifteen
              minutes. No account required.
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

      {/* Principles */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground">
              OUR PRINCIPLES
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } },
                }}
                className="border border-border/30 bg-card/50 p-6 hover:border-primary/40 transition-colors"
              >
                <h4 className="text-lg tracking-wider text-foreground mb-2">{p.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-feral max-w-5xl mx-auto" />

      {/* Offerings */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Three ways in
            </p>
            <h2 className="text-4xl sm:text-5xl tracking-wide text-foreground">
              THE OFFER
            </h2>
          </motion.div>

          <div className="space-y-8">
            {OFFERINGS.map((offer, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                className="border border-border/30 bg-card/50 p-8 lg:p-10 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <span className="text-primary text-sm tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {offer.subtitle}
                    </span>
                    <h3 className="text-3xl tracking-wider text-foreground mt-1 mb-4">{offer.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <ul className="space-y-3">
                      {offer.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={TEST_URL}
                      className="inline-flex items-center gap-2 mt-6 text-primary tracking-wider uppercase text-sm hover:brightness-125 transition-all"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {offer.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-feral max-w-5xl mx-auto" />

      {/* Pricing / honest note */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              About money
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              WHY PRICING COMES AFTER THE TEST
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                You will notice that there are no prices listed on this
                page. This is deliberate, and it is not a sales tactic.
                Pricing for the school is discussed after you take the
                Consciousness Test, for two reasons.
              </p>
              <p>
                First, the formats are calibrated. The Online School, the
                Motion Lab, and the Consultorio each involve different
                amounts of time, different depths of work, and different
                kinds of commitment. Quoting a flat number without knowing
                where you actually are would misrepresent the offer.
              </p>
              <p>
                Second, I keep the work accessible. Sliding scales exist.
                Solidarity arrangements exist. I would rather have the
                conversation about what is actually workable for your life
                than post a number that either excludes you or inflates the
                price for people who can afford more. The wellness industry
                treats pricing as a filter for desirability. I treat it as
                a conversation about access.
              </p>
              <p className="text-foreground border-l-2 border-primary pl-6">
                Take the test. If the fit is there, we will talk about
                money honestly, and figure out whether there is a format
                and a price that actually work for you. If the fit is not
                there, I will tell you that too.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
