"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Mark } from "./Mark";

const TEXT =
  "50.000+ karyawan PT PKSS absen lewat HRIS yang saya arsiteki dari nol. 500+ orang memakai sistem HSE Siloam setiap hari, dibangun tim 6 engineer yang saya pimpin. 1.600+ guru, siswa, dan operator memakai Skolain. BRI mengontrak saya 3× untuk produk digitalnya.";

// Kata menyala satu per satu mengikuti scroll; kata berangka diberi aksen. Teksnya tetap satu paragraf DOM biasa.
// Reduced motion: semua kata langsung menyala lewat CSS, supaya render server dan klien sama.
export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");

  return (
    <section className="manifesto" aria-label="Angka bukti">
      <div className="wrap">
        <p ref={ref} className="manifesto-text">
          {words.map((w, i) => (
            <Word key={i} word={w} p={scrollYProgress} start={i / words.length} />
          ))}
        </p>
        <a className="manifesto-link" href="/deck#angka">
          cek satu per satu di deck
          <Mark kind="arrowRight" className="mark-link-arrow" delay={0.2} />
        </a>
      </div>
    </section>
  );
}

function Word({ word, p, start }: { word: string; p: MotionValue<number>; start: number }) {
  const opacity = useTransform(p, [start * 0.85, start * 0.85 + 0.15], [0.14, 1]);
  return (
    <motion.span className={/\d/.test(word) ? "num" : undefined} style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}
