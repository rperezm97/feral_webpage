/* ============================================================
   SCHOOL PAGE - The Offer, Test de Acceso, Formats
   ============================================================
   EDIT GUIDE:
   - Change TEST_URL to your actual Google Form or intake form
   - Edit OFFERINGS array to add/remove programs
   - Edit PRINCIPLES array to change school principles
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

/* EDIT: Change the test/access form URL */
const TEST_URL = "https://docs.google.com/forms/d/e/1FAIpQLScfI9axshcros3mD_6NUpeHcGWAtFBRBIdXw2YawErBtnY_Ig/viewform?usp=dialog";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-hero-blue-Hvikx3gGvgR7tDVXnsuGYK.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/Logo_negro_final_5a9a9024.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* EDIT: School offerings/programs */
const OFFERINGS = [
  {
    title: "Online School",
    subtitle: "Ongoing Formation",
    description: "A continuous, deep-dive program into Nondual Tantra. Not a weekend retreat. Not a certification mill. This is an ongoing formation where you study the scriptures, practice daily, and are held accountable by a community of serious practitioners.",
    features: [
      "Weekly live sessions with direct teaching",
      "Study of original scriptures (Shiva Sutras, Vijñāna Bhairava Tantra, Tantrāloka)",
      "Guided meditation practices across all three upāyas",
      "Community of practitioners (not consumers)",
      "Direct access to the teacher for questions",
      "Monthly deep-dive into specific topics",
    ],
    cta: "Apply for the Online School",
  },
  {
    title: "Berlin Motion Lab",
    subtitle: "Physical Theater & Somatic Practice",
    description: "In-person sessions in Berlin where nondual philosophy meets the body. We use physical theater, movement improvisation, and somatic exploration to dissolve energetic contractions (sanharas) and expand the body's capacity to hold consciousness.",
    features: [
      "In-person sessions in Berlin",
      "Physical theater techniques",
      "Somatic exploration & movement",
      "Dissolution of bodily contractions",
      "Integration of philosophy through the body",
      "Small groups for deep work",
    ],
    cta: "Join the Berlin Lab",
  },
  {
    title: "The Consultorio",
    subtitle: "Individual Guidance",
    description: "One-on-one sessions for practitioners who need direct, personalized guidance. We work with your specific patterns, contractions, and questions. This is not therapy — it's tantric guidance rooted in the tradition.",
    features: [
      "One-on-one sessions",
      "Personalized practice recommendations",
      "Direct work with your specific patterns",
      "Integration of life situations with practice",
      "Rooted in scriptural understanding",
      "Available online worldwide",
    ],
    cta: "Request a Session",
  },
];

/* EDIT: School principles */
const PRINCIPLES = [
  { title: "No Spiritual Bypass", text: "We don't use spirituality to avoid facing reality. We use it to face reality more fully." },
  { title: "Lineage-Based", text: "Everything we teach is rooted in the Bhairava Sutras and the Kashmir Shaivism tradition." },
  { title: "Body First", text: "The body is the laboratory. If it's not in the body, it's just philosophy." },
  { title: "No Hierarchy of Worth", text: "No gurus on pedestals. The teacher is a practitioner who shares the path, not a savior." },
  { title: "Decolonial Integrity", text: "We honor the source, refuse cultural appropriation, and maintain political awareness." },
  { title: "Liberation & Enjoyment", text: "These are not separate goals. The tradition insists on both, and so do we." },
];

export default function School() {
  return (
    <div className="min-h-screen">
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
            This is not a course. It's a commitment.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: School intro */}
              <p>
                Feral Awareness is a <span className="text-foreground font-semibold">school of Nondual Tantra</span>,
                not a marketplace of spiritual products. We don't sell weekend retreats, certification programs,
                or "transformational experiences." We offer <span className="text-foreground font-semibold">ongoing
                formation</span> for people who are serious about the path.
              </p>
              <p>
                Entry to the school requires completing a <span className="text-foreground font-semibold">Consciousness
                Test</span> — not to judge you, but to ensure that you understand what you're entering and that
                this path is appropriate for where you are right now.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                {/* EDIT: Key statement */}
                We are not for everyone. We are for the ones who feel that something fundamental is missing
                from the spiritual offerings available to them. The ones who sense that awakening has political
                dimensions. The ones who are tired of being sold comfort disguised as liberation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consciousness Test CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-transparent to-feral-cyan/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <img src={LOGO_URL} alt="" className="w-14 h-14 mx-auto mb-4 opacity-60 mix-blend-screen" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-foreground mb-4">
              CONSCIOUSNESS TEST
            </h2>
            <p className="display text-lg sm:text-xl text-feral-cyan mb-3">
              The Wheel of Energies
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {/* EDIT: Test description */}
              This test helps you understand where you are on the wheel of energies and whether the Feral
              Awareness school is the right container for your practice right now. It's not a personality
              quiz — it's a mirror that reflects the characteristics of victorious practitioners.
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

      {/* Principles */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-12">
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
                    <a
                      href={TEST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-primary tracking-wider uppercase text-sm hover:brightness-125 transition-all"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {offer.cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
