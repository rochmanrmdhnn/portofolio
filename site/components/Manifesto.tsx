"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import type { Copy } from "@/lib/content";
import { Mark } from "./Mark";

// Kata menyala satu per satu mengikuti scroll; kata berangka diberi aksen. Teksnya tetap satu paragraf DOM biasa.
// Reduced motion: semua kata langsung menyala lewat CSS, supaya render server dan klien sama.
export function Manifesto({ t }: { t: Copy["manifesto"] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = t.text.split(" ");

  return (
    <section className="manifesto" aria-label={t.label}>
      <div className="wrap">
        <p ref={ref} className="manifesto-text">
          {words.map((w, i) => (
            <Word key={i} word={w} p={scrollYProgress} start={i / words.length} />
          ))}
        </p>
        <a className="manifesto-link" href="#work">
          {t.link}
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
