"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import type { Copy } from "@/lib/content";

export function Header({ t }: { t: Copy }) {
  const { ui, nav } = t;
  const other = ui.other;
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  return (
    <header className="hdr">
      <a href="#top" className="hdr-brand" aria-label={ui.brand} onClick={() => setOpen(false)}>
        Rochman<span className="hdr-brand-last"> Ramadhani</span>
      </a>
      <nav className="hdr-nav" aria-label={ui.nav}>
        {nav.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="hdr-actions">
        {/* Bahasa aktif hanya penanda visual; pembaca layar sudah tahu dari <html lang>. Saat diklik, tautan membawa
            hash section yang sedang dibaca (yang terakhir melewati 40% tinggi layar), jadi pindah bahasa tidak
            melempar pembaca kembali ke atas. Tanpa JS: ke puncak halaman bahasa lain. */}
        <div className="hdr-lang">
          <span aria-hidden="true">{t.lang.toUpperCase()}</span>
          <a
            href={other.href}
            hrefLang={other.lang}
            lang={other.lang}
            aria-label={`${other.short} · ${other.label}`}
            onClick={(e) => {
              const read = Array.from(document.querySelectorAll("main section[id]"))
                .filter((s) => s.getBoundingClientRect().top <= window.innerHeight * 0.4)
                .pop();
              e.currentTarget.href = other.href + (read && read.id !== "top" ? `#${read.id}` : "");
            }}
          >
            {other.short}
          </a>
        </div>
        <a className="btn btn-primary btn-sm" href={t.wa} target="_blank" rel="noopener">
          WhatsApp
        </a>
        <button type="button" className="hdr-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? ui.close : ui.menu}
        </button>
      </div>
      <motion.span className="hdr-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            className="menu"
            aria-label={ui.menu}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            {nav.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  setOpen(false);
                  // Lenis sedang stop() selama menu terbuka; force supaya scroll tetap jalan.
                  e.preventDefault();
                  if (lenis) lenis.scrollTo(n.href, { force: true });
                  else document.querySelector(n.href)?.scrollIntoView();
                }}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.04, ease: [0.23, 1, 0.32, 1] }}
              >
                {n.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
