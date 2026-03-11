/* ============================================================
   ABOUT PAGE - Who I Am, Lineage, Decolonial Lens
   ============================================================
   EDIT GUIDE: All text content is directly editable below.
   Replace placeholder bio with your actual biography.
   ============================================================ */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-about-portrait-9CSjB93QuLYvEtZFqgYEjW.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            The Teacher
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            WHO I AM
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Not a guru. A practitioner who shares the path.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left: Key facts */}
              <div className="lg:col-span-1 space-y-6">
                {/* EDIT: Replace with your photo or keep the generated portrait */}
                <div className="aspect-[3/4] bg-card border border-border/30 overflow-hidden">
                  <img src={HERO_IMG} alt="Portrait" className="w-full h-full object-cover opacity-80" />
                </div>
                {/* EDIT: Key facts about you */}
                <div className="space-y-3 text-sm">
                  <div className="border border-border/30 p-3">
                    <p className="text-primary tracking-widest uppercase text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Based in</p>
                    <p className="text-foreground">Berlin, Germany</p>
                  </div>
                  <div className="border border-border/30 p-3">
                    <p className="text-primary tracking-widest uppercase text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Lineage</p>
                    <p className="text-foreground">Kashmir Shaivism (Trika)</p>
                  </div>
                  <div className="border border-border/30 p-3">
                    <p className="text-primary tracking-widest uppercase text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Lens</p>
                    <p className="text-foreground">Decolonial Queerfeminist</p>
                  </div>
                  <div className="border border-border/30 p-3">
                    <p className="text-primary tracking-widest uppercase text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Practice</p>
                    <p className="text-foreground">Nondual Tantra & Physical Theater</p>
                  </div>
                </div>
              </div>

              {/* Right: Bio text */}
              <div className="lg:col-span-2 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
                {/* EDIT: Your biography - replace all placeholder text */}
                <p>
                  I am a practitioner and teacher of <span className="text-foreground font-semibold">Nondual Tantra</span> in
                  the Kashmir Shaivism tradition, and a <span className="text-foreground font-semibold">physical theater
                  artist</span> based in Berlin. My work sits at the intersection of ancient nondual philosophy,
                  somatic practice, and decolonial thought.
                </p>
                <p>
                  I came to this path not through the wellness industry, but through a deep dissatisfaction with
                  the <span className="text-feral-red">spiritual marketplace</span> — the commodification of awakening,
                  the cultural appropriation disguised as "universality," and the systematic erasure of the radical
                  political dimensions of Eastern traditions by Western interpreters.
                </p>
                <p>
                  My training is <span className="text-foreground font-semibold">lineage-based</span>. I study under
                  the guidance of masters who are faithful to the Bhairava Sutras and the Agamas — not to modern
                  reinterpretations or New Age adaptations. The tradition I share is the same one transmitted from
                  Vasugupta to Abhinavagupta to Lakshmanjoo.
                </p>
                <p>
                  I apply a <span className="text-foreground font-semibold">decolonial, queerfeminist lens</span> to
                  this tradition — not because I'm imposing modern politics onto ancient wisdom, but because the
                  original Tantra was already radical. It recognized women as spiritually equal or superior, rejected
                  the caste system, embraced the arts as yoga, and defied the morality of Vedic asceticism.
                </p>
                <p>
                  Through <span className="text-foreground font-semibold">Feral Awareness</span>, I offer an online
                  school, in-person labs in Berlin, and written transmissions. My approach is direct, uncompromising,
                  and rooted in the understanding that <span className="serif-italic text-feral-cyan">liberation and
                  enjoyment are not separate goals</span>.
                </p>

                <p className="text-foreground font-semibold border-l-2 border-primary pl-6">
                  {/* EDIT: Personal manifesto statement */}
                  I don't teach "self-improvement." I share a tradition that has the power to dissolve the self
                  that needs improving. If that scares you, this is not your path. If it excites you, welcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Lineage */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THE LINEAGE
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Lineage content */}
              <p>
                The lineage of Kashmir Shaivism is not a chain of gurus demanding obedience. It is a
                <span className="text-foreground font-semibold"> transmission of understanding</span> — a living thread
                of consciousness that passes from teacher to student through direct experience, not dogma.
              </p>
              <p>
                The key figures in this tradition include:
              </p>
            </div>

            {/* EDIT: Add or remove lineage figures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { name: "Vasugupta", period: "9th century", role: "Received the Shiva Sutras. Founder of the written tradition." },
                { name: "Somānanda", period: "9th century", role: "Established the Pratyabhijñā (Recognition) school." },
                { name: "Utpaladeva", period: "10th century", role: "Poet-philosopher. Author of the Īśvarapratyabhijñā." },
                { name: "Abhinavagupta", period: "10th-11th century", role: "The great synthesizer. Author of the Tantrāloka." },
                { name: "Kṣemarāja", period: "11th century", role: "Student of Abhinavagupta. Made the tradition accessible." },
                { name: "Lakshmanjoo", period: "20th century", role: "Last living master of the unbroken oral tradition in Kashmir." },
              ].map((figure, i) => (
                <div key={i} className="border border-border/30 bg-card/50 p-5 hover:border-primary/40 transition-colors">
                  <h4 className="text-lg tracking-wider text-foreground serif-bold">{figure.name}</h4>
                  <p className="text-primary text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {figure.period}
                  </p>
                  <p className="text-muted-foreground text-sm">{figure.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Decolonial Approach */}
      <section className="py-20 lg:py-28 bg-card/30 relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-feral-red tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Why it matters
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              THE DECOLONIAL LENS
            </h2>
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {/* EDIT: Decolonial content */}
              <p>
                The Western spiritual marketplace has systematically <span className="text-feral-red font-semibold">stripped
                Eastern traditions of their political and philosophical depth</span>, reducing them to wellness products
                for individual consumption. Yoga became exercise. Meditation became productivity hacking. Tantra
                became sex workshops.
              </p>
              <p>
                This is not innocent. It is a continuation of <span className="text-foreground font-semibold">colonial
                extraction</span> — taking what is useful for the dominant culture while discarding the radical
                elements that challenge its foundations: the critique of materialism, the rejection of hierarchy,
                the insistence on collective liberation.
              </p>
              <p>
                A decolonial approach to Tantra means <span className="text-foreground font-semibold">returning to the
                source texts</span>, honoring the cultural context, acknowledging the political dimensions of the
                tradition, and refusing to sanitize its radical edges for Western comfort.
              </p>
              <p>
                It also means applying the tradition's own principles — nonduality, the rejection of false
                hierarchies, the embrace of the body and desire — to <span className="text-foreground font-semibold">contemporary
                struggles</span>: gender liberation, anti-racism, anti-capitalism, and the dismantling of the
                wellness-industrial complex.
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
          Enter the School <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
