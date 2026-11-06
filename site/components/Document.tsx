import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { LEGACY, LEGACY_SLIDES, type Copy } from "@/lib/content";
import { Providers } from "./Providers";
import "@/app/globals.css";

// Kerangka <html> bersama untuk dua root layout: app/(en) di "/" dan app/(id)/id di "/id".
// Dua root layout, bukan satu, supaya <html lang> sudah benar di HTML statisnya.

const display = localFont({
  src: "../public/assets/fonts/bricolage-grotesque.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "../public/assets/fonts/familjen-grotesk.woff2",
  weight: "400 700",
  variable: "--font-body",
  display: "swap",
});
const hand = localFont({
  src: [
    { path: "../public/assets/fonts/kalam-400.woff2", weight: "400" },
    { path: "../public/assets/fonts/kalam-700.woff2", weight: "700" },
  ],
  variable: "--font-hand",
  display: "swap",
  preload: false,
});

// Suara penekanan: satu frasa italic per judul, plus nama perangkat di Gear. Italic dipakai di judul hero, jadi dipreload.
const serif = localFont({
  src: [
    { path: "../public/assets/fonts/instrument-serif-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const VIEWPORT: Viewport = { themeColor: "#14231C", colorScheme: "dark" };

export function metadataFor(t: Copy): Metadata {
  const og = { url: t.meta.og, width: 1200, height: 630, alt: "Rochman Ramadhani, Forward Deployed Engineer and Product Engineer" };
  return {
    metadataBase: new URL("https://omanlabs.tech"),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: "Rochman Ramadhani Chiefto Irawan" }],
    alternates: { canonical: t.meta.path, languages: { en: "/", id: "/id", "x-default": "/" } },
    icons: {
      icon: [
        { url: "/assets/favicon.svg", type: "image/svg+xml" },
        { url: "/assets/favicon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/assets/apple-touch-icon.png",
    },
    openGraph: {
      type: "profile",
      locale: t.meta.locale,
      alternateLocale: t.lang === "en" ? "id_ID" : "en_US",
      url: t.meta.path,
      siteName: "Rochman Ramadhani",
      title: t.meta.title,
      description: t.meta.description,
      images: [og],
    },
    twitter: { card: "summary_large_image" },
  };
}

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://omanlabs.tech/#person",
  name: "Rochman Ramadhani Chiefto Irawan",
  alternateName: ["Rochman Ramadhani", "Oman"],
  honorificSuffix: "S.Kom.",
  jobTitle: ["Forward Deployed Engineer", "Product Engineer"],
  description:
    "Forward Deployed Engineer and Product Engineer who helps Indonesian business owners grow with AI and well-built systems. Founder of Skolain. 6+ years building production systems for banking, healthcare, government and education.",
  url: "https://omanlabs.tech",
  image: "https://omanlabs.tech/assets/profile.jpg",
  email: "mailto:rochmanramadhani12@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  worksFor: { "@type": "Organization", name: "Skolain", url: "https://skolain.id" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Binus University (BINUS Online Learning)" },
    { "@type": "HighSchool", name: "SMK Negeri 26 Jakarta" },
  ],
  award: [
    "1st place, SEAMEO SEAMOLEC Southeast Asia Creative Camp batch 3 (January 2019): Smart Green Garden, an automatic IoT plant-watering system",
    "1st place, Kamp Kreatif SMK Indonesia 2019 (Ministry of Education and Culture): Ngajar, a two-way classroom LMS",
    "1st place, PermataYouthPreneur 2020 (PermataBank): Bayar, a fintech app",
  ],
  knowsAbout: [
    "AI for business", "AI-assisted workflows", "Forward deployed engineering", "Product engineering",
    "Product discovery", "System architecture", "Golang", "Rust", "Microservices",
    "Event-driven architecture", "Multi-tenant architecture", "Cloud and on-premises infrastructure",
    "Kubernetes", "Observability", "Engineering management",
  ],
  sameAs: [
    "https://www.linkedin.com/in/rochmanrmdhnn/",
    "https://github.com/rochmanrmdhnn",
    "https://gitlab.com/rochmanrmdhnn",
    "https://www.instagram.com/rochmanrmdhnn/",
    "https://www.threads.com/@rochmanrmdhnn",
    "https://x.com/rochmanrmdhnn",
    "https://www.facebook.com/rochmanrmdhnn",
    "https://www.youtube.com/@rochmanrmdhnn",
    "https://id.pinterest.com/rochmanrmdhnn/",
    "https://www.tiktok.com/@rochmanrmdhn",
    "https://lynk.id/rochmanrmdhnn",
  ],
};

// Jalan sebelum body diparse: hash lama deck (#skolain, #dokter, #16) diganti hash landing yang setara, jadi
// browser langsung menggulir ke section-nya, dan Proofs membuka panel bukti bila hash-nya id panel.
const LEGACY_HASH = `(function(){var r=location.hash.slice(1),h=r.toLowerCase(),m=${JSON.stringify(LEGACY)},s=${JSON.stringify(
  LEGACY_SLIDES,
)},n=/^\\d+$/.test(h)?s[h-1]:Object.prototype.hasOwnProperty.call(m,h)?m[h]:void 0;if(n===void 0||n===r)return;history.replaceState(null,"",n?"#"+n:location.pathname+location.search)})()`;

export function Document({ t, children }: { t: Copy; children: React.ReactNode }) {
  return (
    <html lang={t.lang} className={`${display.variable} ${body.variable} ${hand.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LEGACY_HASH }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
