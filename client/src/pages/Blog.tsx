/* ============================================================
   BLOG PAGE - Essays & Transmissions
   ============================================================
   EDIT GUIDE:
   - To add a new blog post: Add an entry to the POSTS array below
   - Each post has: title, date, excerpt, tags, and slug
   - For now posts link to "#" — replace with actual URLs or
     create individual post pages when you have content
   - You can also embed your Substack feed here
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const RESOURCES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================================
   BLOG POSTS - Add your articles here
   ============================================================
   FORMAT:
   {
     title: "Post Title",
     date: "2026-03-10",
     readTime: "8 min",
     excerpt: "First paragraph or summary...",
     tags: ["tag1", "tag2"],
     slug: "/blog/post-slug",  // or external URL
   }
   ============================================================ */
const POSTS = [
  {
    title: "Spiritual Bypass: The Wellness Industry's Favorite Drug",
    date: "2026-03-01",
    readTime: "12 min",
    excerpt: "When 'raising your vibration' becomes another form of repression. How the wellness industry weaponizes positivity to keep you docile, consuming, and disconnected from the radical potential of genuine spiritual practice.",
    tags: ["decolonial", "critique", "spiritual bypass"],
    slug: "#",
  },
  {
    title: "The Body Comes First, The Meaning Comes Second",
    date: "2026-02-15",
    readTime: "9 min",
    excerpt: "Neurobiology confirms what Kashmir Shaivism knew 6,000 years ago: your position, your tension, your shallow breath — these happen automatically, linked to unconscious energy. When these energies are processed through the body, the mind follows.",
    tags: ["embodiment", "practice", "neuroscience"],
    slug: "#",
  },
  {
    title: "Why Neo-Tantra Is Not Tantra",
    date: "2026-02-01",
    readTime: "15 min",
    excerpt: "A detailed examination of how the original nondual tradition was stripped of its philosophical depth, political radicalism, and scriptural foundation to become a sexual wellness product for Western consumption.",
    tags: ["tantra", "decolonial", "tradition"],
    slug: "#",
  },
  {
    title: "Desire as Expansion: The Shaivite View",
    date: "2026-01-15",
    readTime: "10 min",
    excerpt: "In Kashmir Shaivism, desire is not the enemy. It is the very pulsation of consciousness (spanda) expressing itself through you. The problem is not desire — it's the contraction around desire that creates suffering.",
    tags: ["philosophy", "desire", "spanda"],
    slug: "#",
  },
  {
    title: "Self-Improvement Is Social Control",
    date: "2026-01-01",
    readTime: "11 min",
    excerpt: "The self-improvement industry is not designed to make you free. It's designed to make you a more efficient participant in the systems that oppress you. A tantric perspective on why 'becoming your best self' is a trap.",
    tags: ["critique", "decolonial", "politics"],
    slug: "#",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${RESOURCES_IMG})` }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-4 pt-20">
          <p className="text-primary tracking-widest uppercase text-sm mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Raw Transmissions
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-wider text-white text-glow">
            BLOG
          </h1>
          <p className="display text-xl sm:text-2xl text-feral-cyan mt-4">
            Essays on consciousness, decolonization & embodied liberation
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {POSTS.map((post, i) => (
              <motion.article
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } },
                }}
              >
                <a
                  href={post.slug}
                  className="group block border border-border/30 bg-card/30 p-8 hover:border-primary/40 transition-all duration-300"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 border border-border/50 text-primary tracking-wider uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl tracking-wider text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-2 text-primary tracking-wider uppercase text-sm group-hover:brightness-125 transition-all"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    Read <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.article>
            ))}
          </div>

          {/* Substack CTA */}
          <div className="mt-16 text-center">
            <div className="divider-feral mb-8" />
            <p className="text-muted-foreground mb-4">
              {/* EDIT: Replace with your Substack URL */}
              Get these essays delivered to your inbox. No spam. No spiritual bypass.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Subscribe on Substack
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
