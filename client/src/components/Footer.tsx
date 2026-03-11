/* ============================================================
   FOOTER - Site-wide footer
   ============================================================
   EDIT GUIDE:
   - To change social links: Edit the SOCIAL_LINKS array
   - To change footer text: Edit the JSX below
   - To add newsletter form: Replace the placeholder div
   ============================================================ */

import { Link } from "wouter";
import { Instagram } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o/Logo_negro_final_5a9a9024.png";

/* EDIT: Change social media links here */
const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/feral.awareness/", label: "Instagram", icon: Instagram },
];

const FOOTER_NAV = [
  { href: "/tantra", label: "Nondual Tantra" },
  { href: "/practice", label: "Practice" },
  { href: "/about", label: "About" },
  { href: "/school", label: "School" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

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
              <img src={LOGO_URL} alt="Feral Awareness" className="h-12 w-auto mix-blend-screen" />
              <span className="text-xl tracking-widest text-foreground uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Feral Awareness
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {/* EDIT: Change tagline here */}
              Radical spirituality & embodiment for liberation & enjoyment.
              Decolonial queerfem lens, lineage-based.
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
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
              {FOOTER_NAV.map((link) => (
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

          {/* Newsletter / Lead Magnet */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-foreground mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
              {/* EDIT: Change newsletter heading */}
              Join the Transmission
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              {/* EDIT: Change newsletter description */}
              Raw essays on nondual tantra, decolonial spirituality, and embodied liberation.
              No spam. No spiritual bypass.
            </p>
            {/* EDIT: Replace with your Substack embed or email form */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScfI9axshcros3mD_6NUpeHcGWAtFBRBIdXw2YawErBtnY_Ig/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase glow-blue transition-all duration-300 hover:brightness-125"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Subscribe
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-feral mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Feral Awareness. All rights reserved.</p>
          <p className="serif-italic opacity-60">
            {/* EDIT: Change footer quote */}
            "The body comes first, the meaning comes second."
          </p>
        </div>
      </div>
    </footer>
  );
}
