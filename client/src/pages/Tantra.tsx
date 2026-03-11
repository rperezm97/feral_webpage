/* ============================================================
   TANTRA PAGE - What is Nondual Tantra / Kashmir Shaivism
   ============================================================
   CONTENT SECTIONS:
   1. Hero banner
   2. What is Kashmir Shaivism (origins, 6000 years)
   3. What is Nondual Tantra (Bhairava Sutras, Agamas)
   4. Difference from Neo-Tantra (critical section)
   5. Philosophy & Lifestyle
   6. Key Texts
   7. CTA to Practice page
   
   EDIT GUIDE: All text is directly editable. Sanskrit terms use serif-italic class.
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-tantra-origins-7yQJqP5DoD4KDmkQy3T9tH.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Tantra() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            The Tradition
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            NONDUAL TANTRA
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Kashmir Shaivism &mdash; The Original Left-Hand Path
          </p>
        </div>
      </section>

      {/* What is Kashmir Shaivism */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            {/* EDIT: Section title */}
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              WHAT IS KASHMIR SHAIVISM?
            </h2>

            {/* EDIT: Content paragraphs */}
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                <span className="serif-italic text-feral-cyan">Kashmir Shaivism</span> (also called <span className="serif-italic">Trika</span> or
                the <span className="serif-italic">Shaivism of Kashmir</span>) is a <span className="text-foreground font-semibold">nondual spiritual
                tradition</span> that developed in the Kashmir region, transmitted orally for thousands of years and committed
                to writing between the 7th and 11th centuries CE. Historians of religion trace its origins to approximately
                <span className="text-foreground font-semibold"> 6,000 years ago</span>.
              </p>
              <p>
                For Shaivism, there exists an <span className="text-foreground font-semibold">absolute and omnipresent consciousness</span> that
                manifests in the entire universe. This consciousness is called <span className="serif-italic text-feral-cyan">Shiva</span>, and it is
                not separate from you. You already participate in divinity, even if you are not experiencing it due to
                misunderstandings (<span className="serif-italic">vikalpas</span>) and energetic contractions
                (<span className="serif-italic">sanharas</span>) that veil your true nature.
              </p>
              <p>
                This tradition is based on the <span className="serif-italic text-foreground font-semibold">Agamas</span>, specifically
                the <span className="serif-italic">Bhairava Sutras</span>, which contain the most direct nondual knowledge.
                These scriptures describe methods to expand consciousness through meditation, devotion, and the
                recognition of one's own divine nature.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* What is Nondual Tantra */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              WHAT IS NONDUAL TANTRA?
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Content */}
              <p>
                <span className="serif-italic text-feral-cyan">Tantra</span> is a spiritual path consisting of a
                <span className="text-foreground font-semibold"> nondual cosmovision</span> and a set of
                <span className="text-foreground font-semibold"> practices (yoga)</span> whose objective is the
                recognition of our true nature, which is not separate from divinity. This recognition is what is
                usually called <span className="serif-italic">awakening</span>, because until achieving it, as the
                Greek poet Pindar said: <span className="serif-italic text-feral-cyan">"a dream of a shadow is the human being."</span>
              </p>
              <p>
                The Shaivite path was <span className="text-foreground font-semibold">completely revolutionary</span> in its
                time: it recognized women as equal and even spiritually superior, was practiced mostly by lay people
                who ignored the caste system, accepted the arts as a form of yoga, and embraced practices that
                challenged the prevailing morality. It specifically defied the morality, asceticism, and misogyny
                of the religions and forms of spirituality derived from the Vedas.
              </p>
              <p>
                Applied Nondual Tantra is a set of practices designed to <span className="text-foreground font-semibold">erase
                the bodily memories of your traumatic experiences</span>, and to destroy the mental structures linked
                to the Ego that prevent us from living an authentic and joyful life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Difference from Neo-Tantra */}
      <section className="py-20 lg:py-28 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-feral-red tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Critical Distinction
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THIS IS NOT NEO-TANTRA
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Neo-tantra critique */}
              <p>
                The vast majority of what you will find in the spiritual scene has <span className="text-feral-red font-semibold">nothing
                to do</span> with the Tantra Sutras or the original nondual path. Not even those who claim to share
                "traditional tantra" base their teachings on the Shaivite scriptures. They only share techniques
                derived from the Vedas.
              </p>
              <p>
                What you will find under the name "Tantra" is actually <span className="text-feral-red font-semibold">neo-tantra</span>: a
                modern New Age invention based primarily on sexuality and romantic-affective relationships. Under
                this umbrella, each teacher mixes techniques and therapies — old, new, and invented — creating
                a peculiar blend. Within neo-tantra, you won't find any homogeneity beyond talk of "sacred" or
                "conscious" sexuality.
              </p>
              <p>
                By contrast, those of us who share the <span className="text-foreground font-semibold">original tantra</span> are
                completely faithful to the scriptures of people who achieved awakening and left clear understanding
                and precise instructions so that we could follow their path.
              </p>
              <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                {/* EDIT: Key quote */}
                Schools that call themselves "tantric" and then base their practices on sexual-relational content
                belong to the New Age and have nothing to do with Nondual Tantra. We do not accept schools that
                appropriate the name of the highest teaching.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Lifestyle */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              PHILOSOPHY & LIFESTYLE
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Philosophy content */}
              <p>
                For tantrikas, there is <span className="text-foreground font-semibold">no frontier between the spiritual
                and the mundane</span>. Our practices are designed to meditate while pointing to consciousness in the
                midst of our daily activity. We do not conceive of being a yogi part-time and an ordinary person
                the rest of the time.
              </p>
              <p>
                This inseparable union between the mundane and the spiritual defines the way of life of tantrikas.
                Since there is no need to subtract hours from the mundane to go to the temple or the meditation hall,
                <span className="text-foreground font-semibold"> renunciation ceases to make sense</span>. Most Shaivites
                enjoy the pleasures of life without fear, because as long as you maintain contact with divine
                consciousness, nothing creates attachment and therefore cannot harm you.
              </p>
              <p>
                Shaivite yogis and yoginis go <span className="text-foreground font-semibold">unnoticed in their daily
                life</span>. Nobody would say they are devotees, not by their clothing, not by using coded language,
                not by their behavior or diet. In Shaivism, devotion goes inside — it is a way of being in the
                world, not an external performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Key Texts */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              KEY TEXTS
            </h2>
            {/* EDIT: Add or remove texts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Shiva Sutras", author: "Vasugupta", desc: "The foundational aphorisms received directly from Shiva." },
                { title: "Spandakārikā", author: "Vasugupta", desc: "The doctrine of vibration — consciousness as dynamic pulsation." },
                { title: "Tantrāloka", author: "Abhinavagupta", desc: "The encyclopedic masterwork of nondual tantra." },
                { title: "Pratyabhijñāhṛdayam", author: "Kṣemarāja", desc: "The heart of recognition — the most accessible entry point." },
                { title: "Vijñāna Bhairava Tantra", author: "Anonymous", desc: "112 meditation techniques for direct experience." },
                { title: "Śivastotrāvalī", author: "Utpaladeva", desc: "Ecstatic devotional hymns of supreme beauty." },
              ].map((text, i) => (
                <div key={i} className="border border-border/30 bg-card/50 p-5 hover:border-primary/40 transition-colors">
                  <h4 className="text-lg tracking-wider text-foreground mb-1 serif-bold">{text.title}</h4>
                  <p className="text-primary text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {text.author}
                  </p>
                  <p className="text-muted-foreground text-sm">{text.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <Link
          href="/practice"
          className="inline-flex items-center gap-3 text-primary tracking-widest uppercase text-lg hover:brightness-125 transition-all"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Explore the Practice <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
