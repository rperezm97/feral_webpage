import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-primary tracking-widest uppercase text-sm mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Lost in the void
        </p>
        <h1
          className="text-7xl sm:text-8xl tracking-wider text-foreground mb-4 text-glow"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          404
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          This page doesn't exist. It may have been moved, or it was never here
          to begin with.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground tracking-widest uppercase glow-blue transition-all duration-300 hover:brightness-125"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
