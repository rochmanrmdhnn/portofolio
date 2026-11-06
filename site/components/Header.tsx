"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { PATHS, type Copy } from "@/lib/content";
import { LanguageLinks, LanguageMenu } from "./LanguageMenu";

export function Header({ t }: { t: Copy }) {
  const { ui, nav } = t;
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
        {/* Desktop: pemilih berbendera di header. Ponsel: daftar bahasa pindah ke dalam Menu supaya WhatsApp muat. */}
        <div className="hdr-lang">
          <LanguageMenu lang={t.lang} hrefs={PATHS.home} label={ui.language} carry />
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
            <ul className="menu-langs" aria-label={ui.language}>
              <LanguageLinks lang={t.lang} hrefs={PATHS.home} carry onPick={() => setOpen(false)} />
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
