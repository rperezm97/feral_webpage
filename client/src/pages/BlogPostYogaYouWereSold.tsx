/* ============================================================
   BLOG POST — The Yoga You Were Sold
   ============================================================
   First real essay. Expanded from an Instagram reel.
   Length target: ~1500 words. Slow reading.
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPostYogaYouWereSold() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary tracking-wider uppercase text-xs mb-8 hover:brightness-125 transition-all"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          {/* Meta */}
          <p
            className="text-primary tracking-widest uppercase text-xs mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Essay · April 2026 · 8 min read
          </p>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground mb-4 text-glow leading-tight">
            THE YOGA YOU WERE SOLD
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mb-12">
            And why nondual tantra is something else entirely
          </p>

          {/* Body */}
          <article className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p className="text-foreground text-xl leading-relaxed border-l-2 border-primary pl-6">
              If you have ever stepped into a yoga studio in Berlin, London,
              or Los Angeles, most of what you learned belongs to a specific
              lineage. That lineage is not the only one. It is not even the
              most sophisticated one. And it is almost the opposite of what
              we teach.
            </p>

            <p>
              The yoga you were sold is, for the most part, a descendant of
              Patañjali&apos;s{" "}
              <span className="serif-italic">Yoga Sūtras</span> and the
              broader Vedic-Brahmanic philosophical stream that gave us the
              Upaniṣads, the <span className="serif-italic">Bhagavad Gītā</span>,
              and Advaita Vedānta. These are remarkable texts. I am not here
              to mock them. But they share a set of assumptions that the
              nondual tantric tradition actively refuses — and those
              assumptions matter, because they shape what you think
              &quot;spiritual practice&quot; even is.
            </p>

            <h2
              className="text-2xl sm:text-3xl tracking-wider text-foreground mt-12 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              THE WORLD AS PROBLEM
            </h2>

            <p>
              In the classical Vedic frame, the world is something you are
              trying to escape. <span className="serif-italic">Saṃsāra</span>{" "}
              — the cycle of birth, death, and rebirth — is a wheel of
              suffering. The goal is to step off. Desire is a trap. The body
              is a burden. Women, householders, artists, people who cook and
              clean and raise children, all of these are, in the strict
              reading, at a disadvantage relative to the male renunciate who
              can sit in a cave and practice. The highest realization is to
              dissolve into the undifferentiated absolute — to make the
              multiplicity of the world go away, because the multiplicity is
              the problem.
            </p>

            <p>
              If that frame lands uneasily for you — if you have ever
              wondered why your meditation teacher seemed a little suspicious
              of joy, or why the spiritual path always seemed to require
              giving something up, or why the women in your tradition were
              always cooking while the men were sitting — your instinct is
              good. You were picking up on something real. The tradition you
              were taught was built on the premise that the finite, embodied,
              desiring world is a mistake to be corrected.
            </p>

            <h2
              className="text-2xl sm:text-3xl tracking-wider text-foreground mt-12 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              THE WORLD AS PLAY
            </h2>

            <p>
              The Trika tradition — the non-dual Kashmir Shaivism that grew
              around the <span className="serif-italic">Bhairava Āgamas</span>{" "}
              between the 7th and 12th centuries — starts from a completely
              different premise. The world is not a mistake. The world is{" "}
              <span className="text-foreground font-semibold">consciousness playing at being finite</span>. The
              multiplicity of forms, bodies, desires, objects, relationships,
              seasons, political struggles, and sensory experiences is not
              the problem. It is the self-expression of the absolute. In the
              technical language of the tradition, it is{" "}
              <span className="serif-italic">śakti</span> — the dynamic,
              creative power of consciousness — expressing itself as the
              apparent other.
            </p>

            <p>
              This changes everything. If the world is consciousness playing,
              then desire is not a trap. Desire is{" "}
              <span className="serif-italic">spanda</span> — the pulsation
              of consciousness itself, rising into form. The problem is not
              that you want things. The problem is the contraction around the
              wanting, the belief that getting the thing will complete a self
              that was never actually incomplete. Release the contraction,
              and desire becomes beautiful: the way consciousness reaches
              toward its own expression.
            </p>

            <p>
              If the world is consciousness playing, then the body is not an
              obstacle. The body is the most direct laboratory for
              recognizing what you actually are. The{" "}
              <span className="serif-italic">Vijñāna Bhairava Tantra</span>,
              one of the central texts of this tradition, is essentially a
              catalog of 112 techniques for using sensory, embodied
              experience as a doorway into recognition: the space between
              two breaths, the moment of sneezing, the instant before
              orgasm, the taste of water on the tongue, the shiver when you
              hear unexpected music. Nothing is rejected. Everything is a
              potential gate.
            </p>

            <p>
              And if the world is consciousness playing, then women,
              householders, artists, and people with complicated lives are
              not at a disadvantage. In some of the Kaula currents of this
              tradition, the{" "}
              <span className="serif-italic">yoginī</span> — the awakened
              female practitioner — is at the center of the mandala, not the
              periphery. The monk in a cave is not the paradigm. The
              practitioner who wakes up while raising children, teaching,
              grieving, loving, and resisting empire — that is the paradigm.
            </p>

            <h2
              className="text-2xl sm:text-3xl tracking-wider text-foreground mt-12 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MĀYĀ IS NOT ILLUSION
            </h2>

            <p>
              One of the most common mistranslations in Western books on
              Indian philosophy is{" "}
              <span className="serif-italic">māyā</span> as &quot;illusion.&quot;
              In the Vedantic reading, the world is māyā, and māyā is
              illusion, and the spiritual goal is to see through the illusion
              to the underlying reality. That is a coherent philosophical
              position, but it is not what the tantric non-dualists mean by{" "}
              <span className="serif-italic">māyā</span>.
            </p>

            <p>
              In Trika, <span className="serif-italic">māyā</span> is the
              creative power of consciousness to voluntarily contract itself,
              to limit its own infinite awareness into the experience of
              being a finite, located, bounded self. This contraction is not
              a mistake. It is the condition that makes experience possible
              at all. You cannot taste something unless there is a you
              separate from the taste. The contraction creates the space for
              recognition — for the delicious shock of realizing that the
              separation was always held inside something larger.
            </p>

            <p>
              Abhinavagupta, the great eleventh-century synthesizer of this
              tradition, described the absolute as having five powers:
              consciousness (<span className="serif-italic">cit</span>), bliss
              (<span className="serif-italic">ānanda</span>), will
              (<span className="serif-italic">icchā</span>), knowledge
              (<span className="serif-italic">jñāna</span>), and action
              (<span className="serif-italic">kriyā</span>). These are not
              attributes that get added to a neutral ground. They are the
              ground. The world is not separate from bliss; the world is
              bliss expressing itself as form. The technical name for the
              shiver of recognizing this directly is{" "}
              <span className="text-foreground font-semibold serif-italic">
                camatkāra
              </span>{" "}
              — ecstatic awe. It is the native state of awareness when the
              contractions loosen enough for the fullness to be felt.
            </p>

            <h2
              className="text-2xl sm:text-3xl tracking-wider text-foreground mt-12 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              NEO-TANTRA IS NOT TANTRA
            </h2>

            <p>
              One more thing, because the word <em>Tantra</em> has been
              colonized twice — first by Western orientalism, then by the
              wellness industry. The &quot;tantra&quot; you see advertised at
              retreats and weekend workshops, with its emphasis on sacred
              sexuality, eye-gazing, and partner breath work, is almost
              entirely a twentieth-century Western invention. It took the
              name <em>Tantra</em> from the Indian tradition and stripped
              out the philosophy, the lineage, the scriptures, the political
              bite, and most of the content, leaving a generic sexual
              wellness product.
            </p>

            <p>
              Osho is the most famous figure in this lineage of
              misrepresentation. The real tantric tradition does include
              sexuality as a potential gate — among many others — but it is
              not a sexuality tradition. It is a consciousness tradition. The{" "}
              <span className="serif-italic">Śiva Sūtras</span>, the{" "}
              <span className="serif-italic">Spanda Kārikā</span>, the{" "}
              <span className="serif-italic">Pratyabhijñāhṛdayam</span>, the{" "}
              <span className="serif-italic">Tantrāloka</span>, and the{" "}
              <span className="serif-italic">Bhairava Āgamas</span> are
              dense philosophical texts about the nature of awareness, the
              structure of experience, and the techniques of recognition.
              They treat the body, breath, emotion, and desire as doorways.
              They do not reduce the tradition to what happens between two
              people on a mat.
            </p>

            <h2
              className="text-2xl sm:text-3xl tracking-wider text-foreground mt-12 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              WHY THIS MATTERS
            </h2>

            <p>
              If you have spent years in a tradition that treats the world
              as a problem, and you have started noticing the repression
              underneath the peace — the cultivated niceness, the suppressed
              grief, the polite avoidance of conflict, the quiet conviction
              that your political rage was spiritually immature — you were
              not failing at your practice. You were bumping into the
              tradition&apos;s foundational assumptions. Those assumptions
              are not universal. There is another map.
            </p>

            <p>
              In the Trika map, your rage can be{" "}
              <span className="serif-italic">śakti</span>. Your grief can be
              a doorway. Your political commitments can be the fire of the
              practice itself, not a distraction from it. Your body is the
              primary laboratory. Your queerness, your femininity, your
              neurodivergence, your history — all of these are not obstacles
              to recognition. They are the specific shapes through which
              recognition will come. The cave is not the paradigm. Life is.
            </p>

            <p className="text-foreground border-l-2 border-primary pl-6 mt-8">
              This is what we teach. Not a pacified spirituality. A living
              tradition that still has teeth, still has depth, and still
              refuses the terms on which the wellness industry tries to
              domesticate it. If any of this lands, the door is open.
            </p>

            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-6">
                If this resonates, the entrance gate to the school is the
                Consciousness Test.
              </p>
              <Link
                href="/test"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Take the Test
              </Link>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
