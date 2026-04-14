/* ============================================================
   TANTRA PAGE — The tradition, scripturally specific
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TANTRA, IMAGES } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Tantra() {
  return (
    <div className="min-h-screen">
      {/* Hero — edit in content.ts → TANTRA.hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.tantra})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {TANTRA.hero.eyebrow}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            {TANTRA.hero.heading}
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            {TANTRA.hero.subheading}
          </p>
        </div>
      </section>

      {/* What the tradition actually is */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              What it is
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              A LIVING MAP OF CONSCIOUSNESS
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Kashmir Shaivism — also called the{" "}
                <span className="serif-italic text-feral-cyan">Trika</span>,
                meaning &quot;the threefold&quot; — is a non-dual philosophical
                and contemplative tradition that crystallized in the Kashmir
                Valley between roughly the seventh and twelfth centuries, as
                a synthesis of much older oral and textual currents. It is
                rooted in a specific body of scripture called the{" "}
                <span className="serif-italic text-foreground font-semibold">
                  Bhairava Āgamas
                </span>{" "}
                — non-dual tantric texts that were transmitted inside small
                circles of practicing yogīs and yoginīs, and are still
                studied and practiced today in an unbroken lineage.
              </p>
              <p>
                At the center of the tradition is a simple, radical claim:
                there is one reality, and that reality is consciousness. Not
                an impersonal ground, not a remote deity, not a cosmic
                principle you have to reach. Consciousness is what you
                already are, right now, reading this. What looks like a
                world of separate objects and a separate self is
                consciousness temporarily contracting itself to taste
                finitude — voluntarily, playfully, and without losing
                anything in the process. Waking up is not becoming
                something new. It is{" "}
                <span className="text-foreground font-semibold serif-italic">
                  pratyabhijñā
                </span>
                , recognition — the direct, felt seeing of what was always
                the case.
              </p>
              <p>
                This is a tradition that insists the finite and the infinite
                are not opposed. Your body is not an obstacle; it is the
                laboratory. Your desires are not traps; they are{" "}
                <span className="serif-italic">spanda</span>, the pulsation
                of consciousness reaching toward its own expression. Your
                emotions are not lower-vibrational noise; they are the
                pathways. Your political life, your relationships, your
                grief, your joy — all of it is already the practice, if you
                know how to meet it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Why nondual */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The frame
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              WHY NONDUAL
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                The word &quot;non-dual&quot; gets thrown around a lot, and
                most of the time it means something vaguely mystical —
                &quot;everything is one, man.&quot; The technical meaning in
                the Trika tradition is much more precise, and it matters.
              </p>
              <p>
                Dualistic traditions split reality into two fundamentally
                different categories: consciousness and matter, spirit and
                world, sacred and profane, pure and impure, liberation and
                ordinary life. Practice becomes the work of moving from one
                side to the other — getting rid of the bad half, cultivating
                the good half. Most of the yoga and meditation you have
                encountered in the West operates this way, even when it
                doesn&apos;t advertise it. The body is to be transcended.
                Desire is to be renounced. The world is to be seen through.
                You are to become something other than what you currently
                are.
              </p>
              <p>
                Non-dual tantra refuses this split at the root. There are
                not two categories. There is one reality —{" "}
                <span className="serif-italic">cit</span>, consciousness,
                pure awareness — and everything that appears is that same
                reality in a particular mode. The world is not other than
                consciousness. Matter is not other than spirit. Your
                body is not a vehicle for something more real; it is that
                something more real, appearing as a body. This is not a
                metaphor. The texts are technically rigorous about it.
              </p>
              <p>
                Why does this matter practically? Because as long as your
                cosmovision splits reality into two, your practice will be
                an exhausting attempt to get rid of half of yourself. You
                will treat your own emotions as enemies. You will feel
                guilty for wanting things. You will sit in meditation hoping
                to &quot;clear&quot; the mental noise that is, in the Trika
                frame, consciousness itself pulsing. The split creates the
                suffering it claims to solve.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                In a non-dual map, nothing needs to be rejected. Every state
                is already consciousness. The task is not purification but
                recognition. You are not climbing a ladder. You are
                uncovering what was always there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* The scriptures */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The texts
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THE BHAIRAVA ĀGAMAS AND THEIR COMMENTATORS
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed mb-12">
              <p>
                The Trika tradition is based on a specific category of
                scripture called the{" "}
                <span className="serif-italic text-foreground font-semibold">
                  Bhairava Āgamas
                </span>
                . Within classical Indian tantric literature, tantras are
                traditionally divided into currents — dualist, non-dualist,
                and mixed. The Bhairava Āgamas belong to the fully non-dual
                stream. They take{" "}
                <span className="serif-italic">Bhairava</span> — a wrathful,
                boundary-dissolving form of Śiva — as the name of ultimate
                reality, and they refuse every split between sacred and
                profane, pure and impure, permitted and forbidden.
              </p>
              <p>
                These texts were not written as philosophy. They are more
                like condensed maps: short, cryptic verses meant to be
                received from a teacher and unpacked through practice and
                commentary. Over the centuries, a lineage of realized
                masters produced the commentarial tradition that makes these
                texts readable today. Here are the ones we work with.
              </p>
            </div>

            {/* Scripture cards — edit titles/authors/descs in content.ts → TANTRA.scriptures.texts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TANTRA.scriptures.texts.map((text, i) => (
                <div key={i} className="border border-border/30 bg-card/50 p-5 hover:border-primary/40 transition-colors">
                  <h4 className="text-lg tracking-wider text-foreground mb-1 serif-bold">{text.title}</h4>
                  <p className="text-primary text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {text.author}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{text.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* The lineage */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The line
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              LINEAGE AS CHAIN OF VERIFICATION
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Lineage in a contemplative tradition is different from
                institutional authority. It is not a credential. It is a
                chain of verification: practice → realization → transmission
                → practice → realization → transmission, across generations
                of people who actually did the work and produced results
                that other people in the lineage could test against their
                own experience.
              </p>
              <p>
                The Trika lineage that we work in runs, roughly: Vasugupta →
                Somānanda → Utpaladeva → Abhinavagupta → Kṣemarāja → … →
                Swami Lakshmanjoo (the last great Kashmiri master of the
                twentieth century, who kept the transmission alive through
                the twentieth-century disruptions of the Kashmir Valley) →
                his students, including Daniel Odier → Mar Delgado (PhD in
                linguistics, based in Spain, rigorous textual scholar and
                realized teacher, authorized and supporting this school) →
                my own practice and this work.
              </p>
              <p>
                Lineage is not a guarantee of truth. Traditions degrade.
                Interpretations drift. Teachers fail. But a living lineage
                at least gives you continuity of practice, accumulated
                insight from people who stress-tested the map, and a way to
                check your own experience against something older than your
                own confusion. It is more reliable than reinventing
                spirituality from scratch every weekend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Neo-tantra critique */}
      <section className="py-20 lg:py-28 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-feral-red tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              A necessary distinction
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              NEO-TANTRA IS NOT TANTRA
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                What you find marketed as &quot;tantra&quot; in the West —
                at retreats, weekend workshops, couples&apos; therapy with a
                spiritual accent, partner breath exercises, eye-gazing,
                sacred sexuality courses — is almost entirely a
                twentieth-century Western invention. Its lineage is not the
                Bhairava Āgamas. Its lineage is Osho, the human potential
                movement, and the wellness industry&apos;s ongoing project
                of absorbing every genuine tradition and selling it back as
                a personal development product.
              </p>
              <p>
                This is not a minor terminological complaint. It is a
                specific kind of cultural appropriation: take the name of a
                sophisticated non-dual philosophical tradition, strip out
                the philosophy, the scriptures, the lineage, the political
                bite, and most of the content, keep the exotic word, and
                sell it to people who don&apos;t know the difference. What
                remains is usually a workshop about intimacy and eye contact
                with some incense.
              </p>
              <p>
                The real tantric tradition does include sexuality as one
                possible doorway — among many others, alongside breath,
                sound, emotion, silence, movement, taste, memory, and
                dreaming. But it is not a sexuality tradition. It is a
                consciousness tradition that treats every modality of human
                experience as a potential gate. Reducing it to sexual
                wellness is like reducing classical music to the sound of a
                violin: technically accurate in one instance, completely
                missing the form.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                We are not hostile to pleasure or intimacy — the texts are
                not. We are hostile to the replacement of a living tradition
                with its marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Lifestyle */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Form of life
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              NOTHING TO RENOUNCE, NOTHING TO PERFORM
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Because the tradition is non-dual, there is no frontier
                between the spiritual and the ordinary. Practice is not a
                half-hour activity you do in the morning so you can feel
                virtuous the rest of the day. It is continuous, active
                recognition in the middle of daily life — washing dishes,
                walking to the train, arguing with your landlord, cooking,
                grieving, being tired. The daily life is not an
                interruption of the practice. It is the practice.
              </p>
              <p>
                Because there is no split to enforce, there is no
                renunciation. You do not have to give up pleasure, money,
                sexuality, relationships, art, politics, or coffee. You also
                do not have to indulge in any of them. The point is not
                what you do with the objects but what you do with the
                contraction around the objects — the grasping, the
                identification, the story that completion is elsewhere.
                When the contraction loosens, the object is free to be
                what it actually is: consciousness appearing as a cup of
                coffee.
              </p>
              <p>
                Shaivite practitioners go unnoticed. There is no uniform,
                no special diet, no coded vocabulary, no performance of
                spirituality. Devotion is internal. It goes inside. In a
                culture where spirituality is often a costume, this is
                quietly radical.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA — edit label/href in content.ts → TANTRA.cta */}
      <section className="py-16 text-center">
        <Link
          href={TANTRA.cta.href}
          className="inline-flex items-center gap-3 text-primary tracking-widest uppercase text-lg hover:brightness-125 transition-all"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {TANTRA.cta.label} <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
