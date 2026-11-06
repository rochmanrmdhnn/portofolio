"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Copy } from "@/lib/content";
import { Mark } from "./Mark";

// Koreografi muat ada di CSS (.hero-line, .hero-in): jalan tanpa menunggu hidrasi dan tetap terbaca tanpa JS.
// Bagian JS hanya fade keluar saat hero di-scroll. Progres diukur dari blok teks sendiri (mulai saat tepi atasnya
// menyentuh atas layar), jadi di ponsel, tempat foto ada di atas teks, judul tidak sudah pudar ketika baru dibaca.
// Reduced motion: CSS menahan blok teks diam dan penuh.
export function Hero({ t, wa }: { t: Copy["hero"]; wa: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section id="top" className="hero">
      <motion.div ref={ref} className="hero-copy" style={{ y, opacity }}>
        <p className="hero-kicker hero-in" style={{ "--d": "0ms" } as React.CSSProperties}>
          {t.kicker}
        </p>
        <h1 className="hero-title">
          <span className="hero-line" style={{ "--i": 0 } as React.CSSProperties}>
            <span>{t.lines[0]}</span>
          </span>
          <span className="hero-line" style={{ "--i": 1 } as React.CSSProperties}>
            <span>
              <span className="hl it">
                {t.lines[1]}
                <Mark kind="underline" className="mark-under" delay={1.05} play />
              </span>{" "}
              {t.lines[2]}
            </span>
          </span>
          <span className="hero-line" style={{ "--i": 2 } as React.CSSProperties}>
            <span>{t.lines[3]}</span>
          </span>
        </h1>
        <p className="hero-sub hero-in" style={{ "--d": "520ms" } as React.CSSProperties}>
          {t.sub}
        </p>
        <div className="hero-actions hero-in" style={{ "--d": "640ms" } as React.CSSProperties}>
          <a className="btn btn-primary" href={wa} target="_blank" rel="noopener">
            <span className="roll" data-text={t.cta}>
              <span>{t.cta}</span>
            </span>
          </a>
          <a className="btn btn-ghost" href="#work">
            {t.secondary}
          </a>
        </div>
        <p className="hero-note note hero-in" style={{ "--d": "900ms" } as React.CSSProperties}>
          {t.note}
          <Mark kind="arrowDown" className="mark-hero-arrow" delay={1.4} play />
        </p>
      </motion.div>

      <figure className="hero-photo">
        <span className="tape" aria-hidden="true" />
        <img
          src="/assets/rochman.jpg"
          width={900}
          height={1200}
          alt={t.alt}
          fetchPriority="high"
        />
        <figcaption>{t.caption}</figcaption>
      </figure>
    </section>
  );
}
