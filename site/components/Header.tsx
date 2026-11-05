"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { WA } from "@/lib/content";

const NAV = [
  { href: "#kerja", label: "Kerja" },
  { href: "#perjalanan", label: "Perjalanan" },
  { href: "#pemilik-bisnis", label: "Cara kerja" },
  { href: "#sekarang", label: "Sekarang" },
  { href: "#gear", label: "Gear" },
  { href: "/deck", label: "Deck" },
];

export function Header() {
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
      <a href="#top" className="hdr-brand" aria-label="Rochman Ramadhani, ke atas" onClick={() => setOpen(false)}>
        Rochman<span className="hdr-brand-last"> Ramadhani</span>
      </a>
      <nav className="hdr-nav" aria-label="Utama">
        {NAV.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="hdr-actions">
        <a className="btn btn-primary btn-sm" href={WA} target="_blank" rel="noopener">
          WhatsApp
        </a>
        <button type="button" className="hdr-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? "Tutup" : "Menu"}
        </button>
      </div>
      <motion.span className="hdr-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            className="menu"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            {NAV.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  setOpen(false);
                  if (!n.href.startsWith("#")) return;
                  // Lenis sedang stop() selama menu terbuka; force supaya scroll tetap jalan.
                  e.preventDefault();
                  if (lenis) lenis.scrollTo(n.href, { offset: -72, force: true });
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
