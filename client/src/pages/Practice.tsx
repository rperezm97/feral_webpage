/* ============================================================
   PRACTICE PAGE — The three upāyas, the body, devotion
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-practice-body-iQQ63gZgXFZF269mY8Auyv.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* The three upāyas as the living pedagogical system */
const UPAYAS = [
  {
    name: "Āṇavopāya",
    subtitle: "The path of the individual",
    description:
      "The most accessible of the three. Practices that work with the body, the breath, mantra, sound, image — concrete supports for attention when the sense of separation is still thick and the mind pulls hard into discursive thinking. This is where most practitioners begin, and where most practice always partially lives, because we have bodies and conditioning and nervous systems that need grounded techniques.",
    examples: [
      "Prāṇāyāma — breath practices that shift the relationship between inhale, exhale, and the pauses",
      "Mantra — recitation as a doorway into the felt resonance of sound-consciousness",
      "Bindu concentration — single-pointed awareness on focal points in the body",
      "Body-centered dhāraṇās from the Vijñāna Bhairava Tantra",
    ],
  },
  {
    name: "Śāktopāya",
    subtitle: "The path of energy and meaning",
    description:
      "The middle path. Practices that work directly with śakti — the pulsation of consciousness expressing itself as thought, emotion, intention, perception, desire. Less about gross supports and more about watching the pure movement of energy through the field of experience. The contemplation of the 36 tattvas, the work with vikalpas (mental constructs), active meditation in the middle of daily life. Requires that the initial grip of identification with body-mind has already loosened a little.",
    examples: [
      "Contemplation of the 36 tattvas — the structure of how consciousness contracts into experience",
      "Working with vikalpas — watching mental constructs arise and dissolve without grasping",
      "Active meditation in daily life — practice that does not stop when you leave the cushion",
      "Śakti practices — using emotion and energetic intensity as pathways",
    ],
  },
  {
    name: "Śāmbhavopāya",
    subtitle: "The direct path of recognition",
    description:
      "The most direct. Not a technique so much as a direct recognition of the non-dual ground, often triggered by the presence and transmission of a teacher who is already there, or by the sudden penetration of one of the central insights of the tradition — that this, right here, right now, is already it. There is no technique because there is nowhere to go. What remains is recognition stabilizing itself across more and more of experience.",
    examples: [
      "Direct recognition (pratyabhijñā) through insight into the nature of awareness",
      "Transmission through the presence of a realized teacher",
      "The collapse of effort into what the texts call sahaja — the spontaneous natural state",
      "Stabilization of the recognized ground across all activity",
    ],
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
            The body first. Devotion as the heat that melts the contraction.
          </p>
        </div>
      </section>

      {/* Opening */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              What practice actually is
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              NOT A PERFORMANCE
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Practice in the Trika tradition is not about becoming a
                better person, calming your mind, raising your vibration,
                accumulating techniques, or performing serenity. It is about
                one thing:{" "}
                <span className="text-foreground font-semibold serif-italic">
                  pratyabhijñā
                </span>{" "}
                — the direct recognition that what you are has never been
                other than pure consciousness, and that everything appearing
                in your experience, including the most contracted parts of
                you, is already that same consciousness in a particular mode.
              </p>
              <p>
                Everything else is scaffolding for that one recognition.
                Breath practices, meditation techniques, body work, mantra,
                devotion, philosophical study, working with emotion, working
                with desire — all of these are tools that create the
                conditions in which recognition can land and stabilize. They
                are not the goal. When a technique becomes the goal, it
                becomes another identity, another place to hide, another
                accumulation.
              </p>
              <p>
                The Trika tradition organizes these scaffoldings into three
                levels, called the{" "}
                <span className="serif-italic text-foreground font-semibold">
                  upāyas
                </span>{" "}
                — means, or methods. They are not three separate paths you
                choose between. They are three different angles of approach,
                calibrated to where the contraction is currently thickest
                in your experience. A living practice usually moves between
                all three.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* The three upāyas */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The system
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-10">
              THE THREE UPĀYAS
            </h2>

            <div className="space-y-8">
              {UPAYAS.map((upaya, i) => (
                <motion.div
                  key={upaya.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                  }}
                  className="border border-border/30 bg-card/30 p-6 lg:p-8"
                >
                  <h3 className="text-2xl tracking-wider text-foreground mb-1 serif-bold">{upaya.name}</h3>
                  <p className="text-primary text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {upaya.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">{upaya.description}</p>
                  <ul className="space-y-2">
                    {upaya.examples.map((ex, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">·</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Anupāya note — critically important framing */}
            <div className="mt-10 p-6 border-l-2 border-feral-cyan bg-card/20">
              <p className="text-feral-cyan tracking-widest uppercase text-xs mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                A note on anupāya
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Some texts and some teachers speak of a fourth category called{" "}
                <span className="serif-italic">anupāya</span> — literally
                &quot;no means,&quot; &quot;no path.&quot; It is important to
                understand that <span className="serif-italic">anupāya</span>{" "}
                is not a method you can practice.{" "}
                <span className="text-foreground">
                  It is the ground that the three upāyas point toward
                </span>
                . It is what remains when recognition has stabilized and the
                scaffolding is no longer needed. Teachers who tell beginners
                &quot;there is nothing to do, you are already enlightened,
                just drop into anupāya&quot; are either confused or
                deliberately skipping the work. You cannot drop into
                something you have not first approached. The upāyas are the
                living pedagogical system. Anupāya is what they dissolve into.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Body first */}
      <section className="py-20 lg:py-28 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The laboratory
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THE BODY FIRST
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                The body is not a vehicle for something more real. In a
                non-dual map, the body is that more real, appearing as a
                body. This changes what practice looks like. It is not about
                disciplining the body into submission so the real spiritual
                work can happen. The body is where the real spiritual work
                happens.
              </p>
              <p>
                There is a precise reason for this. The Trika tradition
                knows that{" "}
                <span className="serif-italic text-foreground font-semibold">
                  saṃskāras
                </span>{" "}
                — the residues of unprocessed experience, the conditioning
                that shapes how you perceive and react — live in the body
                before they live in the mind. What looks like a thought is
                very often a bodily contraction dressed up in language.
                What looks like a preference is often an old frozen
                response. What looks like a belief is often a muscular
                pattern. You cannot think your way out of these, because
                they are not thoughts. They are compressed somatic memory,
                and they must be released somatically.
              </p>
              <p>
                This is why eight years of physical theater work — Grotowski,
                Meyerhold, Artaud — fold naturally into this practice. The
                physical theater traditions already know that the body is
                a vehicle of transmission, not performance. They already
                know that the actor&apos;s job is not to pretend but to be
                present with enough precision that presence itself is what
                moves the audience. That knowledge maps directly onto
                tantric practice. The{" "}
                <span className="serif-italic">Motion Lab</span> is where
                we do this work in person, in Berlin.
              </p>
              <p className="text-foreground border-l-2 border-primary pl-6">
                The body comes first. The meaning comes second. If it is
                not in the body, it is philosophy, not practice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Bhakti — the melting heat */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The heat
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              DEVOTION MELTS WHAT TECHNIQUE CANNOT TOUCH
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Technique organizes. Discipline sharpens. But when the heart
                is closed, practice becomes a task, a performance, a
                dissociated repetition — work you do to get somewhere, which
                is exactly the movement that keeps the destination away. The
                problem with technique alone is that it operates inside the
                same contracted identity that needs to dissolve. The
                technique becomes another thing the ego does.
              </p>
              <p>
                <span className="text-foreground font-semibold serif-italic">
                  Bhakti
                </span>{" "}
                — devotion — is what makes practice porous enough for
                recognition to land. Not devotion as sentimental performance.
                Not devotion as a belief system with a personal god attached.
                Devotion in the Trika sense is the warmth that undoes the
                inner hardening of conditioned personality — the story in
                three times (past, present, future) that keeps the separate
                self feeling real. Bhakti is seeing every object as the
                radiance of your own consciousness, and letting that seeing
                melt the contraction around it.
              </p>
              <p>
                Swami Lakshmanjoo, the last great Kashmiri master, taught
                that devotion is not decoration added on top of &quot;real
                practice.&quot; It is not performance, pious display, or
                theater. It is the condition under which technique becomes
                transformative instead of mechanical. My own teacher Mar
                Delgado puts it this way: real knowledge and real devotion
                are one. Technique can discipline attention, find the holes
                in the{" "}
                <span className="serif-italic">vikalpa</span>, organize the
                work — but devotion melts the contraction that keeps
                recognition from becoming lived.
              </p>
              <p>
                This is not about forcing feelings. You cannot manufacture
                bhakti. You can only make space for it — by letting the
                heart be touched, by noticing the moments when the world
                actually does shimmer a little, by refusing the cynicism
                that keeps you safe from being moved. When those moments
                land, lean in. That is the practice.
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
          See how this is taught <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
