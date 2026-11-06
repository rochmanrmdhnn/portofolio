import type { Metadata } from "next";
import { Document, VIEWPORT } from "@/components/Document";
import { EN } from "@/lib/copy/en";

// Disajikan Cloudflare Pages sebagai 404.html untuk semua path yang tidak ada, jadi dua bahasa sekaligus.
export const metadata: Metadata = { title: "Page not found · Rochman Ramadhani", robots: { index: false } };
export const viewport = VIEWPORT;

export default function GlobalNotFound() {
  return (
    <Document t={EN}>
      <main className="lost wrap">
        <h1 className="h2">This page doesn&apos;t exist.</h1>
        <p lang="id" className="lost-id">
          Halaman ini tidak ada.
        </p>
        <p className="lost-links">
          <a className="btn btn-primary" href="/">
            Back to the home page
          </a>
          <a className="btn btn-ghost" href="/id" hrefLang="id" lang="id">
            Kembali ke beranda
          </a>
        </p>
      </main>
    </Document>
  );
}
