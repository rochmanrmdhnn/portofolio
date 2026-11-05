"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, type LenisRef } from "lenis/react";
import { MotionConfig, cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

// Satu loop RAF: Lenis digerakkan oleh frame loop Motion, jadi transform scroll-linked dan posisi scroll
// dihitung di frame yang sama. Lenis mematikan smoothing sendiri bila prefers-reduced-motion.
// Anchor tanpa offset: Lenis sudah mengurangkan scroll-padding-top CSS (tinggi header + 8px); offset tambahan dobel.
export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = ({ timestamp }: { timestamp: number }) => lenisRef.current?.lenis?.raf(timestamp);
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis root ref={lenisRef} options={{ autoRaf: false, anchors: true, lerp: 0.11 }} />
      {children}
    </MotionConfig>
  );
}
