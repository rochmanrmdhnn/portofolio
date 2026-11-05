"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Mask reveal sekali saat masuk layar: blok naik dari balik garis bawahnya (clip-path + translate).
// Yang diamati pembungkus luar: Chrome menghitung rasio IntersectionObserver sesudah clip-path elemen itu
// sendiri, jadi elemen yang masih ter-clip penuh selalu berasio 0 dan tidak akan pernah terpicu.
// Margin -10% di clip-path menjaga descender dan coretan yang keluar sedikit dari kotak tetap terlihat.
// Reduced motion: transform dimatikan MotionConfig, clip-path dimatikan di CSS ([data-reveal]).
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className={className}>
      <motion.div
        data-reveal
        initial={{ clipPath: "inset(-10% -10% 110% -10%)", y: "0.6em" }}
        animate={inView ? { clipPath: "inset(-10% -10% -10% -10%)", y: 0 } : undefined}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
