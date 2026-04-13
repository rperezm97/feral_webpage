/* ============================================================
   FERAL AWARENESS — Site Configuration
   ============================================================
   Centralized constants used across the site.
   Update these in ONE place when they change.
   ============================================================ */

/* Public site URL — update when custom domain is live */
export const SITE_URL = "https://www.feralawareness.com/";

/* Contact email — keep in sync with Impressum.tsx and PrivacyPolicy.tsx */
export const CONTACT_EMAIL = "feral.awareness@gmail.com";

/* CloudFront CDN base for site images */
export const CDN_BASE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663409144732/6xT7c74sLRiq4TRr5ix35o";

/* ============================================================
   CLOUDFLARE TURNSTILE — Bot protection for the test form
   ============================================================
   Rob: Get your site key from Cloudflare dashboard:
   https://dash.cloudflare.com → Turnstile → Add site
   Then set this constant. Until then, the widget shows a
   visible "configure Turnstile" placeholder in dev only.

   The matching TURNSTILE_SECRET goes in Cloudflare Pages env vars
   (NOT here — it must stay server-side).
   ============================================================ */
export const TURNSTILE_SITE_KEY = "0x4AAAAAAC8j7PnIM3z63td1"; // e.g. "0x4AAAAAAA..."

export const LOGO_URL = `$/images/Logo_negro_final.png`;
export const LOGO_TRANSPARENT_URL = `$/images/logo-transparent.png`;
