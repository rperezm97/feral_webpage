/* ============================================================
   IMPRESSUM — Legal Notice (§ 5 TMG)
   ============================================================
   REQUIRED BY GERMAN LAW for every commercial website.
   Rob: Replace Schnellerstr. 112, 12439, Berlin and feral.awareness@gmail.com before deploying.
   ============================================================ */

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Impressum() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1
            className="text-5xl sm:text-6xl tracking-wider text-foreground mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            IMPRESSUM
          </h1>

          {/* ── German Version ──────────────────────────── */}
          <section className="space-y-6 text-muted-foreground text-base leading-relaxed mb-16">
            <div>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-foreground font-semibold">Roberto Pérez Martínez</p>
              {/* TODO: Replace Schnellerstr. 112, 12439, Berlin with your full Berlin address before deploying */}
              <p>Schnellerstr. 112, 12439, Berlin</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Kontakt
              </h3>
              {/* TODO: Replace feral.awareness@gmail.com with your business email before deploying */}
              <p>
                E-Mail:{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Umsatzsteuer
              </h3>
              <p>
                Gemäß §19 UStG wird keine Umsatzsteuer berechnet
                (Kleinunternehmerregelung).
              </p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV
              </h3>
              <p>Roberto Pérez Martínez</p>
              <p>(Adresse wie oben)</p>
            </div>
          </section>

          {/* ── Divider ──────────────────────────────────── */}
          <div className="divider-feral mb-16" />

          {/* ── English Version ─────────────────────────── */}
          <section className="space-y-6 text-muted-foreground text-base leading-relaxed">
            <div>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Legal Notice (Impressum)
              </h2>
              <p className="mb-4">
                According to § 5 of the German Telemedia Act (TMG):
              </p>
              <p className="text-foreground font-semibold">Roberto Pérez Martínez</p>
              {/* TODO: Replace Schnellerstr. 112, 12439, Berlin with your full Berlin address before deploying */}
              <p>Schnellerstr. 112, 12439, Berlin</p>
              <p>Germany</p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Contact
              </h3>
              <p>
                Email:{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                VAT
              </h3>
              <p>
                Under §19 UStG (Kleinunternehmerregelung), no VAT is charged.
              </p>
            </div>

            <div>
              <h3
                className="text-xl tracking-wider text-foreground mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Responsible for content
              </h3>
              <p>Roberto Pérez Martínez (address as above)</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
