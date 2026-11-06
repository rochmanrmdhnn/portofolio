// Tipe dan data yang tidak bergantung bahasa. Teks halaman ada di lib/copy/en.ts dan lib/copy/id.ts.
// Sumber kebenaran fakta: PROFIL.md. Jangan menambah angka yang tidak ada di sana.

export type Lang = "en" | "id";

export const WA_BASE = "https://wa.me/6281381039158?text=";
export const CV_ID = "/assets/CV_Rochman_Ramadhani_Product_Engineer.pdf";
export const CV_EN = "/assets/CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf";
export const EMAIL = "rochmanramadhani12@gmail.com";

// Urutan tampil di pemilih bahasa. Bendera dari flag-icons (MIT, assets/flags/flag-icons-LICENSE.txt), hanya penanda
// visual: kode bahasa tetap tertulis karena bahasa tidak sama dengan negara.
export const LANGS: { code: Lang; flag: string; short: string }[] = [
  { code: "en", flag: "gb", short: "EN" },
  { code: "id", flag: "id", short: "ID" },
];

// Alamat tiap halaman per bahasa, untuk pemilih bahasa, hreflang, dan canonical.
export const PATHS = {
  home: { en: "/", id: "/id" },
  privacy: { en: "/privacy", id: "/id/privasi" },
  terms: { en: "/terms", id: "/id/ketentuan" },
} satisfies Record<string, Record<Lang, string>>;

// WhatsApp tidak di sini: tautannya membawa sapaan pembuka sesuai bahasa (Copy.wa).
export const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Instagram", value: "@rochmanrmdhnn", href: "https://www.instagram.com/rochmanrmdhnn/" },
  { label: "LinkedIn", value: "in/rochmanrmdhnn", href: "https://www.linkedin.com/in/rochmanrmdhnn/" },
  { label: "GitHub", value: "rochmanrmdhnn", href: "https://github.com/rochmanrmdhnn" },
];

// Judul dengan satu frasa italic serif: [sebelum, frasa, sesudah].
export type Head = [string, string, string?];

export type Media =
  | { kind: "video"; src: string; poster: string; w: number; h: number; label: string }
  | { kind: "image"; src: string; w: number; h: number; alt: string };

// id = id <dialog> bukti, sekaligus hash deep link (omanlabs.tech/#hris).
export type Work = {
  id: string;
  org: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  note?: string;
  media?: Media;
};

export type Chapter = {
  year: string;
  range: string;
  title: string;
  body: string;
  note?: string;
  media?: Media;
};

export type Photo = { src: string; alt: string; cap: string; tilt: number; speed: number };

// Isi panel bukti, disusun ulang dari slide deck lama. `steps` = urutan yang memang berurutan (diberi nomor).
export type Block =
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "entries"; title?: string; steps?: boolean; items: { k?: string; t: string; d: string }[] }
  | { kind: "compare"; a: string; b: string; rows: { label: string; a: string; b: string }[] };

export type Proof = {
  id: string;
  org: string;
  title: string;
  kicker?: string;
  lead?: string[];
  media?: Media[];
  blocks: Block[];
  caveat?: { t: string; d: string };
  note?: string;
};

export type Copy = {
  lang: Lang;
  meta: { title: string; description: string; locale: string; path: string; og: string };
  wa: string;
  ui: {
    skip: string;
    brand: string;
    nav: string;
    menu: string;
    close: string;
    language: string;
    play: string;
    pause: string;
    proof: string;
    proofClose: string;
    proofCta: string;
  };
  nav: { href: string; label: string }[];
  hero: {
    kicker: string;
    // Baris 1, frasa italic bergaris bawah di awal baris 2, sisa baris 2, baris 3.
    lines: [string, string, string, string];
    sub: string;
    cta: string;
    secondary: string;
    note: string;
    alt: string;
    caption: string;
  };
  manifesto: { label: string; text: string; link: string };
  work: { head: Head; intro: string; items: Work[] };
  journey: { head: Head; chapter: string; items: Chapter[] };
  owners: { head: Head; lead: string; cta: string; stages: { title: string; body: string }[] };
  now: {
    head: Head;
    skolain: { role: string; body: string; big: string; bigLabel: string };
    partners: { role: string; title: string; body: string; note: string; photos: Photo[]; flip?: boolean }[];
  };
  gear: {
    head: Head;
    lead: string;
    role: string;
    specLabel: string;
    note: string;
    items: { name: string; what: string; note?: string }[];
  };
  contact: {
    head: Head;
    lead: string;
    cta: string;
    channels: string;
    docsLabel: string;
    docs: { href: string; label: string; value: string; lang?: Lang }[];
    top: string;
  };
  // Label tautan ke halaman legal (footer landing, header dan footer halaman legal).
  legal: { label: string; privacy: string; terms: string; home: string; updated: string };
  proofs: Proof[];
};

// Halaman Kebijakan Privasi dan Ketentuan Layanan (lib/copy/legal-{en,id}.ts). Blok: string = paragraf.
export type LegalBlock = string | { list: string[] } | { links: { label: string; href: string }[] };
export type LegalDoc = {
  title: string;
  description: string;
  intro: string;
  sections: { id: string; h: string; body: LegalBlock[] }[];
};
export type Legal = { privacy: LegalDoc; terms: LegalDoc };

// Tautan deck lama: alias dan nomor slide (1-based, /#16 = slide indeks 15) yang tercetak di CV lama.
// Skrip di <head> menukarnya ke hash landing sebelum halaman dirender. "" = puncak halaman.
export const LEGACY: Record<string, string> = {
  peta: "journey", angka: "", wisuda: "journey", produk: "work", skolain: "skolain", hris: "hris",
  rumahsakit: "hse", wholesale: "bri", omnichannel: "oca", bank: "bri", nucare: "work", linkit: "work",
  stack: "work", primasejahtera: "hris", siloam: "hse", qlola: "bri", oca: "oca", bri: "bri",
  frames: "frames", klhk: "klhk", dokter: "kolegium", advisory: "now", hegemoni: "now", seminar: "journey",
  pdc: "journey", peringkat: "journey", carakerja: "approach", bisnis: "approach", cv: "contact", kontak: "contact",
};

// Indeks = nomor slide deck dikurangi satu (39 slide).
export const LEGACY_SLIDES = [
  "", "", "journey", "", "journey", "journey", "journey", "journey", "journey", "journey", "journey", "work",
  "skolain", "skolain", "skolain", "hris", "hse", "bri", "oca", "bri", "work", "work", "work", "now",
  "frames", "frames", "klhk", "kolegium", "now", "now", "journey", "journey", "journey", "approach",
  "approach", "approach", "approach", "approach", "contact",
];
