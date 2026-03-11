/* ============================================================
   RESOURCES PAGE - Sanskrit Glossary, Essential Readings, Links
   ============================================================
   EDIT GUIDE:
   - To add glossary terms: Add entries to the GLOSSARY array
   - To add readings: Add entries to the READINGS array
   - To add external resources: Add entries to the LINKS array
   ============================================================ */

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Search } from "lucide-react";

const RESOURCES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================================
   SANSKRIT GLOSSARY - Add terms here
   ============================================================ */
const GLOSSARY = [
  { term: "Shiva", transliteration: "Śiva", definition: "Absolute consciousness. Not a deity to worship, but the nature of reality itself — pure awareness that is your own deepest identity." },
  { term: "Shakti", transliteration: "Śakti", definition: "The dynamic, creative power of consciousness. Shiva's inseparable energy that manifests as the entire universe. Not separate from Shiva." },
  { term: "Spanda", transliteration: "Spanda", definition: "The sacred vibration or pulsation of consciousness. The dynamic throb of awareness that is the source of all movement and creation." },
  { term: "Pratyabhijñā", transliteration: "Pratyabhijñā", definition: "Recognition. The direct recognition of one's own nature as Shiva. Not learning something new, but remembering what was always the case." },
  { term: "Vikalpa", transliteration: "Vikalpa", definition: "Mental construct or conceptual thought. The discursive thinking that veils direct experience of reality. Not inherently bad, but a limitation when mistaken for truth." },
  { term: "Sanhara", transliteration: "Saṃhāra", definition: "Energetic contraction. The bodily residue of unprocessed experience that densifies the body and limits consciousness." },
  { term: "Upāya", transliteration: "Upāya", definition: "Means or method. The three paths of meditation in Kashmir Shaivism: āṇavopāya (individual), śāktopāya (energetic), śāmbhavopāya (direct)." },
  { term: "Tantra", transliteration: "Tantra", definition: "Literally 'loom' or 'weave.' A spiritual path consisting of a nondual cosmovision and practices (yoga) for recognizing one's true nature." },
  { term: "Agama", transliteration: "Āgama", definition: "Sacred scriptures revealed by Shiva. The foundational texts of the tantric tradition, as opposed to the Vedas." },
  { term: "Bhairava", transliteration: "Bhairava", definition: "The fierce aspect of Shiva. Represents the terrifying beauty of absolute consciousness that destroys all illusion." },
  { term: "Trika", transliteration: "Trika", definition: "The 'threefold' system. Another name for Kashmir Shaivism, referring to the triad of Shiva, Shakti, and the individual soul (which are ultimately one)." },
  { term: "Māyā", transliteration: "Māyā", definition: "The power of limitation. In Kashmir Shaivism, not illusion (as in Advaita Vedanta), but Shiva's own power to appear as limited, individual beings." },
  { term: "Bindu", transliteration: "Bindu", definition: "Point of concentrated energy. A focal point used in meditation. Also refers to the point of unity from which creation emerges." },
  { term: "Mudrā", transliteration: "Mudrā", definition: "Gesture or seal. In nondual tantra, the supreme mudrā is experiencing the universe as the expansion of your own consciousness." },
  { term: "Mantra", transliteration: "Mantra", definition: "Sacred sound or formula. In nondual tantra, the great mantra is the mind in silence — not a word to repeat, but a state to embody." },
];

/* ============================================================
   ESSENTIAL READINGS - Add books/texts here
   ============================================================ */
const READINGS = [
  {
    category: "Primary Scriptures",
    items: [
      { title: "Shiva Sutras", author: "Vasugupta (trans. Jaideva Singh)", note: "The foundational aphorisms. Start here." },
      { title: "Vijñāna Bhairava Tantra", author: "Trans. Jaideva Singh", note: "112 meditation techniques. Practical and direct." },
      { title: "Pratyabhijñāhṛdayam", author: "Kṣemarāja (trans. Jaideva Singh)", note: "The heart of recognition. Most accessible entry point." },
      { title: "Spandakārikā", author: "Vasugupta (trans. Jaideva Singh)", note: "The doctrine of vibration." },
    ],
  },
  {
    category: "Advanced Study",
    items: [
      { title: "Tantrāloka", author: "Abhinavagupta (trans. Mark Dyczkowski)", note: "The encyclopedic masterwork. For serious students." },
      { title: "The Doctrine of Vibration", author: "Mark Dyczkowski", note: "Academic study of the Spanda tradition." },
      { title: "The Triadic Heart of Śiva", author: "Paul Eduardo Muller-Ortega", note: "Deep study of Abhinavagupta's Parātrīśikā." },
    ],
  },
  {
    category: "Decolonial & Critical",
    items: [
      { title: "Selling Yoga", author: "Andrea Jain", note: "How yoga was commodified for Western consumption." },
      { title: "The Colonizer's Model of the World", author: "J.M. Blaut", note: "Essential for understanding cultural extraction." },
      { title: "Decolonizing the Body", author: "Various authors", note: "Intersections of embodiment and colonial history." },
    ],
  },
];

/* ============================================================
   EXTERNAL LINKS - Add useful links here
   ============================================================ */
const LINKS = [
  { title: "Tantra Shivaita Aplicado", url: "https://tantrashivaitaplicado.com/", description: "Our lineage school. Deep resources on nondual tantra in Spanish." },
  { title: "Muktabodha Digital Library", url: "https://www.muktabodha.org/", description: "Digital library of Shaiva and Shakta scriptures." },
  { title: "Kashmir Encyclopaedia", url: "#", description: "Academic resource on Kashmir Shaivism history and philosophy." },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = GLOSSARY.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${RESOURCES_IMG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Study Materials
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            RESOURCES
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Sanskrit Glossary, Essential Readings & Curated References
          </p>
        </div>
      </section>

      {/* Sanskrit Glossary */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-4">
              SANSKRIT GLOSSARY
            </h2>
            <p className="text-muted-foreground mb-8">
              {/* EDIT: Glossary intro */}
              Key terms from the Kashmir Shaivism tradition. Understanding these concepts is essential
              for engaging with the scriptures and the practice.
            </p>

            {/* Search */}
            <div className="relative mb-8">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Terms */}
            <div className="space-y-3">
              {filteredGlossary.map((item, i) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border border-border/30 bg-card/30 p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                    <h4 className="text-lg tracking-wider text-foreground">{item.term}</h4>
                    <span className="serif-italic text-feral-cyan text-sm">{item.transliteration}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.definition}</p>
                </motion.div>
              ))}
              {filteredGlossary.length === 0 && (
                <p className="text-muted-foreground text-center py-8">No terms found matching "{searchTerm}"</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* Essential Readings */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              ESSENTIAL READINGS
            </h2>

            <div className="space-y-10">
              {READINGS.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xl tracking-wider text-primary mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 border border-border/20 bg-card/30 p-4 hover:border-primary/30 transition-colors">
                        <BookOpen size={16} className="text-primary shrink-0 mt-1" />
                        <div>
                          <h4 className="text-foreground font-semibold text-sm">{item.title}</h4>
                          <p className="text-muted-foreground text-xs mt-0.5">{item.author}</p>
                          <p className="text-muted-foreground text-xs mt-1 serif-italic">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-feral max-w-4xl mx-auto" />

      {/* External Links */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl tracking-wide text-foreground mb-8">
              EXTERNAL RESOURCES
            </h2>
            <div className="space-y-3">
              {LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 border border-border/30 bg-card/30 p-5 hover:border-primary/40 transition-colors"
                >
                  <ExternalLink size={16} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-foreground group-hover:text-primary transition-colors font-semibold">{link.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
