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
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const RESOURCES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/feral-resources-bg-BnYg7vxqQiPk2XxGQ7RFZc.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ============================================================
   BLOG POSTS — Each post is a real route under /blog/:slug
   To add a new post:
     1. Create a new component in pages/BlogPost*.tsx
     2. Register the route in App.tsx
     3. Add an entry to this array
   ============================================================ */
const POSTS = [
  {
    title: "The Yoga You Were Sold",
    subtitle: "And why nondual tantra is something else entirely",
    date: "2026-04-08",
    readTime: "8 min",
    tags: ["tantra", "decolonial", "tradition"],
    slug: "/blog/the-yoga-you-were-sold",
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } },
                }}
              >
                <Link
                  href={post.slug}
                  className="group block border border-border/30 bg-card/30 p-8 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-border/50 text-primary tracking-wider uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl sm:text-3xl tracking-wider text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="display text-lg text-feral-cyan mb-4">{post.subtitle}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-primary tracking-wider uppercase text-sm group-hover:brightness-125 transition-all"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Read <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Honest note about more coming */}
          <div className="mt-16 text-center">
            <div className="divider-feral mb-8" />
            <p className="text-muted-foreground text-sm mb-4">
              More essays are coming. Follow @feral.awareness to catch them
              when they land.
            </p>
            <a
              href="https://instagram.com/feral.awareness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary tracking-widest uppercase text-sm hover:brightness-125 transition-all"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Follow @feral.awareness →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
