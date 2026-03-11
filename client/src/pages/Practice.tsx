/* ============================================================
   PRACTICE PAGE - Types of meditation, body work, the lab
   ============================================================
   EDIT GUIDE: All text content is directly editable below.
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-practice-body-iQQ63gZgXFZF269mY8Auyv.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* EDIT: Meditation paths data */
const MEDITATION_PATHS = [
  {
    name: "Āṇavopāya",
    subtitle: "The Individual Means",
    level: "Accessible to all",
    description: "The most accessible path, regardless of experience. These techniques rely on breath, bindus (focal points), and mantra recitation. They are not sophisticated, but they work when ego identification is very strong. This is where most practitioners begin.",
    practices: ["Prāṇāyāma (breath work)", "Mantra recitation", "Bindu concentration", "Body-based awareness"],
  },
  {
    name: "Śāktopāya",
    subtitle: "The Path of Energy",
    level: "Intermediate practitioners",
    description: "The middle path. These techniques use subtler supports to maintain meditation — we lean on energy in different ways to connect with divine consciousness. For practitioners where ego identification has become softer.",
    practices: ["Energy awareness", "Subtle body meditation", "Contemplation of tattvas", "Active meditation in daily life"],
  },
  {
    name: "Śāmbhavopāya",
    subtitle: "The Direct Path",
    level: "Advanced practitioners",
    description: "The most direct path. The capacity to enter Shiva's consciousness simply through the grace of your teacher or by integrating elevated understandings of the cosmovision. No technique needed — just recognition.",
    practices: ["Direct recognition", "Grace of the guru", "Spontaneous absorption", "Non-meditation (anupāya)"],
  },
];

export default function Practice() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            The Laboratory
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            PRACTICE
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Body as Temple. Movement as Prayer. Destruction as Liberation.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Intro text */}
              <p>
                Meditation in Nondual Tantra consists of a <span className="text-foreground font-semibold">great variety
                of techniques</span>, most of which are sustainable during mundane activities. We aspire to experience
                the connection to Shiva <span className="text-foreground font-semibold">24/7, even during sleep</span>.
              </p>
              <p>
                There is no fixed system. Each practitioner must use techniques according to their energetic state
                and the activities they are developing moment to moment. The strategies of the Ego are very creative,
                and <span className="text-foreground font-semibold">we must be more creative</span>.
              </p>
              <p>
                The tradition recognizes <span className="text-foreground font-semibold">three paths</span> (upāyas),
                each corresponding to a different level of identification with the ego. These are not progressive
                stages — you may use different paths at different moments of the same day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Paths of Meditation */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl tracking-wide text-foreground">
              THREE PATHS OF MEDITATION
            </h2>
          </motion.div>

          <div className="space-y-8">
            {MEDITATION_PATHS.map((path, i) => (
              <motion.div
                key={path.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                className="border border-border/30 bg-card/50 p-8 lg:p-10 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <span className="text-primary text-sm tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      Path {i + 1}
                    </span>
                    <h3 className="text-3xl tracking-wider text-foreground mt-1">{path.name}</h3>
                    <p className="display text-lg text-feral-cyan mt-1">{path.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-2 tracking-wider uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {path.level}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-muted-foreground leading-relaxed mb-4">{path.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {path.practices.map((p) => (
                        <span key={p} className="text-xs px-3 py-1 border border-border/50 text-muted-foreground">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Body & Energy */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              BODY, ENERGY & THE LAB
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Body/energy content */}
              <p>
                The body for tantra is the <span className="text-foreground font-semibold">generator of individual
                experience</span>. We aim to dis-identify from it through our practices. For this dis-identification
                to be possible, we must aspire to a body that feels as <span className="text-foreground font-semibold">fluid
                and light as possible</span>.
              </p>
              <p>
                There are many Shaivite practices that seek a body free of <span className="serif-italic">sanharas</span> —
                energetic residues of experiences that densify the body. <span className="text-foreground font-semibold">Rigidity
                of the body is rigidity of the mind</span>. That's why we practice a physical yoga that seeks fluidity,
                not forced static postures.
              </p>
              <p>
                The <span className="text-foreground font-semibold">Berlin Motion Lab</span> is where this understanding
                meets physical theater. We use movement, improvisation, and somatic exploration as direct pathways
                to dissolve <span className="serif-italic">sanharas</span> and expand the body's capacity to hold
                consciousness without contracting.
              </p>
              <p>
                <span className="text-foreground font-semibold">Neurobiology confirms what the tradition knew:</span> the
                body comes first, the meaning comes second. Your position, your tension, your shallow breath — these
                happen automatically, linked to unconscious energy. When these energies are processed through the body,
                the mind follows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Mantras, Mudras, Rituals */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              MANTRAS, MUDRAS & RITUALS
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Mantras/mudras content */}
              <p>
                In Nondual Tantra, the <span className="text-foreground font-semibold">great mantra is the mind in
                silence</span> and the supreme mudra consists in experiencing the universe as the expansion of your
                own consciousness. Since this is a nondual path, a gesture or words alone cannot have any spiritual
                power — they only serve when the one who uses them has the capacity to access universal consciousness.
              </p>
              <p>
                The same applies to rituals. They are performed, but always assuming that the ritual in itself has
                <span className="text-foreground font-semibold"> no spiritual value</span>. It only has value if the
                participants are already connected to divine consciousness. Otherwise, they are just empty acts
                without any power.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                {/* EDIT: Key quote */}
                This is the radical honesty of the tradition: no technique, no ritual, no mantra can save you.
                Only the direct recognition of your own nature. Everything else is a support — useful, but never
                the thing itself.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <Link
          href="/school"
          className="inline-flex items-center gap-3 text-primary tracking-widest uppercase text-lg hover:brightness-125 transition-all"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Join the School <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
