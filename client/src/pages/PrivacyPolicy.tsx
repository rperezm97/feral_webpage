/* ============================================================
   PRIVACY POLICY — GDPR Art. 13/14
   ============================================================
   REQUIRED before collecting any personal data.
   Rob: Replace Schnellerstr. 112, 12439, Berlin and feral.awareness@gmail.com before deploying.
   Update if you add analytics, newsletter, or payment later.
   ============================================================ */

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1
            className="text-5xl sm:text-6xl tracking-wider text-foreground mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PRIVACY POLICY
          </h1>
          <p className="text-muted-foreground text-sm mb-12">
            Last updated: April 2026
          </p>

          {/* ── English Version ─────────────────────────── */}
          <div className="space-y-10 text-muted-foreground text-base leading-relaxed mb-16">

            {/* Controller */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Who controls your data
              </h2>
              <p>
                Roberto Pérez Martínez
                <br />
                {/* TODO: Replace Schnellerstr. 112, 12439, Berlin before deploying */}
                Schnellerstr. 112, 12439, Berlin
                <br />
                Germany
              </p>
              <p className="mt-2">
                {/* TODO: Replace feral.awareness@gmail.com before deploying */}
                Email:{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
              </p>
            </section>

            {/* What we collect */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                What data we collect
              </h2>
              <p>
                When you take the Consciousness Test on this website, you
                provide your name, email address, and test answers. This data
                is submitted to our server for processing. We do not use
                tracking cookies, analytics scripts, advertising pixels, or
                any form of behavioral tracking.
              </p>
            </section>

            {/* Why */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Why we collect it
              </h2>
              <p>
                To follow up with you about your test results and, if
                appropriate, about the Feral Awareness school. When email
                delivery is active, you will also receive your results by
                email. We process your data based on your explicit consent
                (GDPR Article 6(1)(a)). You can withdraw consent at any time
                by contacting us.
              </p>
            </section>

            {/* How long */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                How long we keep it
              </h2>
              <p>
                Until you request deletion, or two years of inactivity —
                whichever comes first.
              </p>
            </section>

            {/* Recipients */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Who else receives your data
              </h2>
              <p>
                When email delivery is active, emails are sent via{" "}
                <a
                  href="https://resend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125 transition-colors"
                >
                  Resend
                </a>{" "}
                (Resend, Inc.), which acts as a data processor. No other third
                parties receive your data. We do not sell, share, or transfer
                your data for advertising or profiling purposes.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Your rights
              </h2>
              <p className="mb-3">
                Under the GDPR, you have the right to:
              </p>
              <p className="pl-6 border-l-2 border-border/30 space-y-1">
                Access the data we hold about you.
                <br />
                Correct inaccurate data.
                <br />
                Request deletion of your data.
                <br />
                Restrict or object to processing.
                <br />
                Receive your data in a portable format.
                <br />
                Withdraw consent at any time.
              </p>
              <p className="mt-4">
                {/* TODO: Replace feral.awareness@gmail.com before deploying */}
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
                .
              </p>
              <p className="mt-2">
                You also have the right to lodge a complaint with the{" "}
                <a
                  href="https://www.datenschutz-berlin.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125 transition-colors"
                >
                  Berliner Beauftragte für Datenschutz und Informationsfreiheit
                </a>
                .
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Cookies & tracking
              </h2>
              <p>
                This website does not use tracking cookies, analytics tools, or
                advertising pixels. No consent banner is required because no
                non-essential cookies are set.
              </p>
            </section>

            {/* Fonts */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Fonts & external resources
              </h2>
              <p>
                All fonts are self-hosted on this server. No requests are made to
                Google Fonts or other external font services. Images are served
                from our own CDN. No visitor data is transmitted to third parties
                through the loading of this website.
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Hosting
              </h2>
              <p>
                This website is hosted on Cloudflare Pages (Cloudflare, Inc.).
                Cloudflare may process technical connection data (IP addresses,
                access times) for the purpose of delivering the website.
                Cloudflare's privacy policy is available at{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125 transition-colors"
                >
                  cloudflare.com/privacypolicy
                </a>
                .
              </p>
            </section>
          </div>

          {/* ── Divider ──────────────────────────────────── */}
          <div className="divider-feral mb-16" />

          {/* ── German Version ──────────────────────────── */}
          <div className="space-y-10 text-muted-foreground text-base leading-relaxed">
            <h2
              className="text-3xl tracking-wider text-foreground mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              DATENSCHUTZERKLÄRUNG
            </h2>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Verantwortlicher
              </h3>
              <p>
                Roberto Pérez Martínez
                <br />
                Schnellerstr. 112, 12439, Berlin
                <br />
                Deutschland
                <br />
                E-Mail:{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Welche Daten wir erheben
              </h3>
              <p>
                Wenn Sie den Consciousness Test auf dieser Website durchführen,
                geben Sie Ihren Namen, Ihre E-Mail-Adresse und Ihre
                Testantworten an. Diese Daten werden zur Verarbeitung an
                unseren Server übermittelt. Wir verwenden keine
                Tracking-Cookies, Analyse-Tools, Werbepixel oder sonstige
                Formen der Verhaltensverfolgung.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Zweck der Erhebung
              </h3>
              <p>
                Um mit Ihnen bezüglich Ihrer Testergebnisse und, falls
                zutreffend, bezüglich der Feral-Awareness-Schule in Kontakt
                zu treten. Sobald der E-Mail-Versand aktiv ist, erhalten Sie
                Ihre Ergebnisse auch per E-Mail. Rechtsgrundlage ist Ihre
                ausdrückliche Einwilligung (DSGVO Art. 6 Abs. 1 lit. a). Sie
                können Ihre Einwilligung jederzeit widerrufen.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Speicherdauer
              </h3>
              <p>
                Bis Sie die Löschung beantragen oder zwei Jahre Inaktivität
                vergangen sind — je nachdem, was zuerst eintritt.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Empfänger
              </h3>
              <p>
                Sobald der E-Mail-Versand aktiv ist, erfolgt dieser über
                Resend (Resend, Inc.) als Auftragsverarbeiter. Ihre Daten
                werden nicht an weitere Dritte weitergegeben, verkauft oder
                für Werbezwecke verwendet.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Ihre Rechte
              </h3>
              <p className="mb-3">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerruf Ihrer Einwilligung.
              </p>
              <p>
                Kontakt:{" "}
                <a href="mailto:feral.awareness@gmail.com" className="text-primary hover:brightness-125 transition-colors">
                  feral.awareness@gmail.com
                </a>
              </p>
              <p className="mt-2">
                Beschwerderecht bei der{" "}
                <a
                  href="https://www.datenschutz-berlin.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125 transition-colors"
                >
                  Berliner Beauftragten für Datenschutz und Informationsfreiheit
                </a>
                .
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Cookies & Tracking
              </h3>
              <p>
                Diese Website verwendet keine Tracking-Cookies, Analyse-Tools
                oder Werbepixel.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Schriftarten & externe Ressourcen
              </h3>
              <p>
                Alle Schriftarten werden lokal auf diesem Server gehostet. Es
                werden keine Anfragen an Google Fonts oder andere externe
                Dienste gestellt.
              </p>
            </section>

            <section>
              <h3
                className="text-2xl tracking-wider text-foreground mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Hosting
              </h3>
              <p>
                Diese Website wird auf Cloudflare Pages (Cloudflare, Inc.)
                gehostet. Cloudflare kann technische Verbindungsdaten
                (IP-Adressen, Zugriffszeiten) zum Zweck der
                Website-Bereitstellung verarbeiten. Cloudflares
                Datenschutzrichtlinie finden Sie unter{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125 transition-colors"
                >
                  cloudflare.com/privacypolicy
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
