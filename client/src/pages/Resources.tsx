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
import { RESOURCES, IMAGES } from "@/content";

/* ============================================================
   RESOURCES PAGE
   EDIT GUIDE: ALL content (glossary, readings, links) is in
   content.ts → RESOURCES.glossary / .readings / .links
   ============================================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = RESOURCES.glossary.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero — edit in content.ts → RESOURCES.hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.resources})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {RESOURCES.hero.eyebrow}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            {RESOURCES.hero.heading}
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            {RESOURCES.hero.subheading}
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

            {/* Reading categories — edit in content.ts → RESOURCES.readings */}
            <div className="space-y-10">
              {RESOURCES.readings.map((category) => (
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
            {/* External links — edit in content.ts → RESOURCES.links */}
            <div className="space-y-3">
              {RESOURCES.links.map((link, i) => (
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
