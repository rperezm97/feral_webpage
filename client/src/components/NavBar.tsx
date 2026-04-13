/* ============================================================
   NAVBAR - Fixed navigation with logo
   ============================================================
   EDIT GUIDE:
   - To change nav links: Edit the NAV_LINKS array below
   - To change logo: Replace the LOGO_URL constant
   - To change CTA button: Edit the "Test de Acceso" link at bottom
   ============================================================ */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGO_URL } from "@/config";

/* EDIT: Add, remove, or reorder navigation links here */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tantra", label: "Tantra" },
  { href: "/practice", label: "Practice" },
  { href: "/about", label: "About" },
  { href: "/school", label: "School" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

/* EDIT: Change the CTA (call to action) button in the nav */
const CTA_LINK = {
  href: "/test",
  label: "Take the Test",
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="Feral Awareness Logo"
              className="h-10 lg:h-14 w-auto mix-blend-screen"
            />
            <span className="hidden sm:block text-lg lg:text-xl tracking-widest text-foreground uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Feral Awareness
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.95rem" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA_LINK.href}
              className="ml-4 px-5 py-2 bg-primary text-primary-foreground text-sm tracking-wider uppercase glow-blue transition-all duration-300 hover:brightness-125"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {CTA_LINK.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-lg tracking-wider uppercase transition-colors ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={CTA_LINK.href}
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-5 py-3 bg-primary text-primary-foreground text-center text-lg tracking-wider uppercase glow-blue"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {CTA_LINK.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
