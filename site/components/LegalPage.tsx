import type { Metadata } from "next";
import { PATHS, type Copy, type Lang, type LegalDoc } from "@/lib/content";
import { LanguageMenu } from "./LanguageMenu";

// Kebijakan Privasi dan Ketentuan Layanan: halaman teks biasa dengan header ringkas (tanpa nav section landing).
// Alamatnya yang diajukan ke portal developer (TikTok, Google, Meta, LinkedIn, Pinterest); jangan dipindah.
export function legalMetadata(t: Copy, doc: LegalDoc, paths: Record<Lang, string>): Metadata {
  const title = `${doc.title} · Rochman Ramadhani`;
  return {
    title,
    description: doc.description,
    alternates: { canonical: paths[t.lang], languages: { en: paths.en, id: paths.id, "x-default": paths.en } },
    openGraph: {
      type: "website",
      locale: t.meta.locale,
      url: paths[t.lang],
      siteName: "Rochman Ramadhani",
      title,
      description: doc.description,
      images: [{ url: t.meta.og, width: 1200, height: 630, alt: "Rochman Ramadhani" }],
    },
  };
}

export function LegalPage({ t, doc, paths }: { t: Copy; doc: LegalDoc; paths: Record<Lang, string> }) {
  const here = paths[t.lang];
  const links = [
    { href: PATHS.home[t.lang], label: t.legal.home },
    { href: PATHS.privacy[t.lang], label: t.legal.privacy },
    { href: PATHS.terms[t.lang], label: t.legal.terms },
  ];
  return (
    <>
      <header className="hdr">
        <a href={PATHS.home[t.lang]} className="hdr-brand">
          Rochman<span className="hdr-brand-last"> Ramadhani</span>
        </a>
        <div className="hdr-actions">
          <LanguageMenu lang={t.lang} hrefs={paths} label={t.ui.language} />
          <a className="btn btn-primary btn-sm" href={t.wa} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </header>
      <main className="legal wrap">
        <h1 className="legal-title">{doc.title}</h1>
        <p className="legal-date">{t.legal.updated}</p>
        <p className="legal-intro">{doc.intro}</p>
        {doc.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.h}</h2>
            {s.body.map((b, i) =>
              typeof b === "string" ? (
                <p key={i}>{b}</p>
              ) : "list" in b ? (
                <ul key={i}>
                  {b.list.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : (
                <ul key={i} className="legal-links">
                  {b.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </main>
      <footer className="foot wrap">
        <span>© 2026 Rochman Ramadhani Chiefto Irawan</span>
        <nav className="foot-links" aria-label={t.legal.label}>
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.href === here ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
