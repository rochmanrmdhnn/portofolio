"use client";

import { useEffect, useRef, useState } from "react";
import { LANGS, type Lang } from "@/lib/content";

// Pemilih bahasa berbendera, pola yang sama dengan adr-medika-web (components/header-preferences.tsx): disclosure,
// bukan role=menu. Tombol membuka daftar tautan biasa; klik di luar, Escape, atau Tab keluar menutupnya.
type Props = { lang: Lang; hrefs: Record<Lang, string>; carry?: boolean };

// `carry`: di landing, tautan membawa hash section yang sedang dibaca (yang terakhir melewati 40% tinggi layar),
// jadi pindah bahasa tidak melempar pembaca kembali ke atas. Tanpa JS: ke puncak halaman bahasa lain.
export function LanguageLinks({ lang, hrefs, carry, onPick }: Props & { onPick?: () => void }) {
  return LANGS.map((l) => (
    <li key={l.code}>
      <a
        href={hrefs[l.code]}
        hrefLang={l.code}
        lang={l.code}
        aria-current={l.code === lang ? "page" : undefined}
        onClick={(e) => {
          onPick?.();
          if (!carry || l.code === lang) return;
          const read = Array.from(document.querySelectorAll("main section[id]"))
            .filter((s) => s.getBoundingClientRect().top <= window.innerHeight * 0.4)
            .pop();
          if (read && read.id !== "top") e.currentTarget.href = `${hrefs[l.code]}#${read.id}`;
        }}
      >
        <img className="flag" src={`/assets/flags/${l.flag}.svg`} alt="" width={20} height={15} />
        {l.short}
      </a>
    </li>
  ));
}

export function LanguageMenu({ label, ...props }: Props & { label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const current = LANGS.find((l) => l.code === props.lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      // Escape dari luar pemilih tidak memindahkan fokus.
      if (root.current?.contains(document.activeElement)) button.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="lang"
      onBlur={(e) => {
        // relatedTarget null (Safari tidak memfokuskan tautan yang diklik) diabaikan; klik luar ditangani pointerdown.
        if (e.relatedTarget && !root.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className="lang-btn"
        aria-expanded={open}
        aria-controls="lang-list"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">{label}: </span>
        <img className="flag" src={`/assets/flags/${current.flag}.svg`} alt="" width={20} height={15} />
        <span lang={current.code}>{current.short}</span>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul id="lang-list" className="lang-list" data-open={open || undefined} inert={!open}>
        <LanguageLinks {...props} onPick={() => setOpen(false)} />
      </ul>
    </div>
  );
}
