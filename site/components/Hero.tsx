"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { WA } from "@/lib/content";
import { Mark } from "./Mark";

// Koreografi muat ada di CSS (.hero-line, .hero-in): jalan tanpa menunggu hidrasi dan tetap terbaca tanpa JS.
// Bagian JS hanya fade keluar saat hero di-scroll. Progres diukur dari blok teks sendiri (mulai saat tepi atasnya
// menyentuh atas layar), jadi di ponsel, tempat foto ada di atas teks, judul tidak sudah pudar ketika baru dibaca.
// Reduced motion: CSS menahan blok teks diam dan penuh.
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section id="top" className="hero">
      <motion.div ref={ref} className="hero-copy" style={{ y, opacity }}>
        <p className="hero-kicker hero-in" style={{ "--d": "0ms" } as React.CSSProperties}>
          Rochman Ramadhani, S.Kom. · Forward Deployed Engineer
        </p>
        <h1 className="hero-title">
          <span className="hero-line" style={{ "--i": 0 } as React.CSSProperties}>
            <span>Saya membantu</span>
          </span>
          <span className="hero-line" style={{ "--i": 1 } as React.CSSProperties}>
            <span>
              <span className="hl it">
                pemilik bisnis
                <Mark kind="underline" className="mark-under" delay={1.05} play />
              </span>{" "}
              tumbuh
            </span>
          </span>
          <span className="hero-line" style={{ "--i": 2 } as React.CSSProperties}>
            <span>dengan AI dan sistem.</span>
          </span>
        </h1>
        <p className="hero-sub hero-in" style={{ "--d": "520ms" } as React.CSSProperties}>
          6+ tahun membangun sistem yang dipakai di bank, rumah sakit, sekolah, dan pemerintah. Sekarang saya ikut turun ke
          bisnis Anda sampai sistem dan AI-nya jalan.
        </p>
        <div className="hero-actions hero-in" style={{ "--d": "640ms" } as React.CSSProperties}>
          <a className="btn btn-primary" href={WA} target="_blank" rel="noopener">
            <span className="roll" data-text="Chat lewat WhatsApp">
              <span>Chat lewat WhatsApp</span>
            </span>
          </a>
          <a className="btn btn-ghost" href="#kerja">
            Lihat buktinya
          </a>
        </div>
        <p className="hero-note note hero-in" style={{ "--d": "900ms" } as React.CSSProperties}>
          tiap angka yang saya klaim, buktinya ada di bawah
          <Mark kind="arrowDown" className="mark-hero-arrow" delay={1.4} play />
        </p>
      </motion.div>

      <figure className="hero-photo">
        <span className="tape" aria-hidden="true" />
        <img
          src="/assets/rochman.jpg"
          width={900}
          height={1200}
          alt="Rochman Ramadhani"
          fetchPriority="high"
        />
        <figcaption>panggil saja Oman</figcaption>
      </figure>
    </section>
  );
}
