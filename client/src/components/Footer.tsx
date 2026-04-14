/* ============================================================
   FOOTER - Site-wide footer
   ============================================================
   EDIT GUIDE:
   - To change social links, nav, tagline, CTA: Edit FOOTER in src/content.ts
   - To change logo: Edit LOGOS in src/content.ts
   ============================================================ */

import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { LOGOS, FOOTER, SITE } from "@/content";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/30">
      {/* Divider */}
      <div className="divider-feral" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src={LOGOS.main} alt="Feral Awareness" className="h-12 w-auto mix-blend-screen" />
              <span className="text-xl tracking-widest text-foreground uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {SITE.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              {FOOTER.social.map((social) => (
                social.label === "Instagram" ? (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Instagram size={20} />
                  </a>
                ) : null
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
              Explore
            </h4>
            <ul className="space-y-2">
              {FOOTER.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School CTA */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
              {FOOTER.school_cta.heading}
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              {FOOTER.school_cta.body}
            </p>
            <Link
              href={FOOTER.school_cta.cta.href}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase glow-blue transition-all duration-300 hover:brightness-125"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {FOOTER.school_cta.cta.label}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-feral mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {FOOTER.legal.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                {i > 0 && <span className="opacity-30">·</span>}
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
