/* ============================================================
   ABOUT PAGE — Rob, the lineage, and how we got here
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ABOUT, IMAGES } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero — edit in content.ts → ABOUT.hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.about})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {ABOUT.hero.eyebrow}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            {ABOUT.hero.heading}
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            {ABOUT.hero.subheading}
          </p>
        </div>
      </section>

      {/* Opening — direct */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p className="text-foreground text-xl leading-relaxed border-l-2 border-primary pl-6">
                I am not a guru. I am not enlightened. I am a practitioner
                in a specific lineage who has spent enough time in this
                tradition to be able to share it carefully, and who has
                the explicit authorization of my own teacher to do so.
                That is the only credential that matters here.
              </p>
              <p>
                My name is Roberto Pérez Martínez. I go by Rob. I was born
                in a small town in Spain, raised Catholic, and I left the
                church the moment I understood it had nothing to offer me.
                I have a Bachelor&apos;s degree in mathematics and a
                Master&apos;s in artificial intelligence — I spent some
                years doing research at the Fraunhofer Institut, which is
                a long way from where I am now and also, in some
                unexpected ways, not as far as it sounds. I am queer,
                neurodivergent, and currently based in Berlin, where I
                run this school and continue my practice in the Trika
                tradition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* The break and the years that followed */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              How I got here
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THE LONG WAY ROUND
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Eight years ago, somewhere in my mid-twenties, I had a
                psychotic break. I do not romanticize this. It was
                terrifying, it cost me a lot, and I am one of the people
                who walked back from it more or less intact, which is not
                everyone&apos;s outcome and not something I take for
                granted. What I will say is that the break opened
                something. It cracked the assumption that ordinary
                consensus reality was the only available frame, and
                somewhere in the wreckage I started reading the Tibetan
                Book of the Dead because nothing else I owned felt
                relevant to what was happening to me.
              </p>
              <p>
                That was the first time I understood that there were
                traditions on this planet that had been mapping the kinds
                of states I was now familiar with — not as pathology but
                as territory. It was also my first awakening. Not in the
                sense that I was suddenly enlightened. In the sense that
                a layer of identification dropped, briefly, and I saw
                something I could not unsee.
              </p>
              <p>
                I moved to Berlin. I went through what I can now identify
                as several years of spiritual bypass — chasing the
                openness of the first awakening, trying to reproduce it
                with techniques and substances and intensities, mistaking
                expanded states for liberation. I was not stupid. I was
                doing what most people do when they have had a glimpse and
                then lose it. The wellness industry is happy to sell you
                a thousand variations on that exact mistake.
              </p>
              <p>
                What pulled me out was not a peak experience. It was, of
                all things, eight years of practicing physical theater —
                the lineages of Grotowski, Meyerhold, and Artaud. These
                are not spiritual schools. They are theatrical traditions
                that take the body absolutely seriously, that understand
                the actor as a vehicle of presence rather than a
                performer of feeling, and that drill into you the
                discipline of being undefendedly here, in this body,
                right now, with another person. I started to notice that
                what I was learning in the studio was operating on the
                same layer that the spiritual stuff had been claiming to
                operate on. The body was doing the work that the mind
                had been failing to do.
              </p>
              <p>
                Two years ago I found my teacher.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* Mar */}
      <section className="py-20 lg:py-28 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              The teacher
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              MAR DELGADO
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Mar Delgado is a PhD linguist, a scholar of the Trika
                tradition, and a realized teacher in the lineage of
                Kashmir Shaivism. She received her initial transmission
                from a direct disciple of Daniel Odier, and after her own
                realization her teaching aligns most closely with the work
                of Swami Lakshmanjoo and the Lakshmanjoo Academy. She
                runs a project called{" "}
                <span className="serif-italic">Tantra Shaivita Aplicado</span>
                , and she is the reason I am able to offer this work at
                all.
              </p>
              <p>
                What Mar does that almost nobody else does is hold both
                halves of this tradition simultaneously. She is a rigorous
                textual scholar — she reads the Sanskrit, she works with
                the original commentaries, she does not let people get
                away with vague pseudo-tantric language. And she is
                actually realized — the kind of teacher whose presence
                does the work that the texts are pointing toward, so you
                can feel the difference between &quot;someone who knows
                about this&quot; and &quot;someone who is in it.&quot;
                Both at once. That is rare, and it is what a real
                contemplative tradition is supposed to look like.
              </p>
              <p>
                The lineage she stands in runs back through Lakshmanjoo,
                Kṣemarāja, Abhinavagupta, Utpaladeva, Somānanda, and
                Vasugupta — the founding figures of Kashmir Shaivism — and
                forward, through her, into the work I am doing now. Mar
                has authorized this school and continues to actively
                support it. Nothing I teach is invented by me. Everything
                comes through her, the texts, and a tradition older than
                any of us.
              </p>
              <p className="text-foreground border-l-2 border-primary pl-6">
                If you find anything valuable in this school, the
                gratitude belongs to Mar and to the long line of
                practitioners standing behind her.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-3xl mx-auto" />

      {/* What I bring */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              What I add
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              WHAT I BRING TO THIS
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I bring three things that I think are useful, and I will
                tell you what they are without false modesty.
              </p>
              <p>
                <span className="text-foreground font-semibold">A
                technical mind.</span>{" "}
                Mathematics and AI research trained me to be uncomfortable
                with vagueness. I cannot stand spirituality that hides
                behind soft language. When I teach the Trika tradition, I
                want the structure to be visible — the technical
                vocabulary, the precise distinctions, the actual claims
                the texts are making. If you want metaphor, I can do that
                too. But I will always tell you when something is a
                metaphor and when it is a precise philosophical claim,
                and I will not mix the two to manipulate you into feeling
                profundity.
              </p>
              <p>
                <span className="text-foreground font-semibold">A body
                trained in physical theater.</span>{" "}
                Eight years of Grotowski, Meyerhold, and Artaud taught me
                that the body is the primary site of practice, that
                presence is something you can train, and that the
                difference between a performance and a transmission is
                tangible. I bring that into everything I teach. The Motion
                Lab in Berlin is where this is most explicit, but the
                same principle runs through the online school: if it is
                not in the body, it is not in the practice.
              </p>
              <p>
                <span className="text-foreground font-semibold">A life
                that has been politicized from the start.</span>{" "}
                I am queer. I am Spanish. I came up through the Catholic
                Church and watched it do harm. I have been on the
                receiving end of enough institutional violence to be
                allergic to spirituality that asks me to look away from
                the world. The decolonial, queer, feminist framing of
                this school is not a marketing layer. It is how I read
                the texts, because the texts themselves were already
                doing that work. The wellness industry domesticates
                everything it touches. I am not interested in being
                domesticated.
              </p>
              <p className="text-foreground border-l-2 border-primary pl-6">
                I do not teach self-improvement. I share a tradition
                that has the power to dissolve the self that needs
                improving.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA — edit in content.ts → ABOUT.cta */}
      <section className="py-16 text-center">
        <Link
          href={ABOUT.cta.href}
          className="inline-flex items-center gap-3 text-primary tracking-widest uppercase text-lg hover:brightness-125 transition-all"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {ABOUT.cta.label} <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
