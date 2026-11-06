"use client";

import { motion, useInView } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

// Coretan kapur: lingkaran, garis bawah, atau panah yang tergambar sekali saat masuk layar.
// Ukuran kotak datang dari CSS (className). Koordinat path ditulis dalam kotak acuan lalu diskalakan ke ukuran
// piksel sebenarnya, jadi viewBox = ukuran elemen: stroke rata di semua sisi dan pathLength tetap akurat.
// (vector-effect: non-scaling-stroke + viewBox yang di-stretch membuat dash pathLength pecah jadi titik-titik.)
const SHAPES = {
  circle: { w: 100, h: 100, d: ["M14,60 C8,30 38,8 64,12 C90,16 99,42 92,66 C84,90 44,96 22,84 C6,75 4,52 20,36"] },
  underline: { w: 200, h: 100, d: ["M2,62 C30,40 70,34 110,40 C140,44 170,50 198,38"] },
  arrowDown: { w: 100, h: 100, d: ["M40,4 C30,30 34,62 52,92", "M30,78 C40,84 46,90 52,94 C56,84 60,76 68,70"] },
  arrowRight: { w: 150, h: 100, d: ["M4,60 C40,40 90,36 140,52", "M124,34 C132,42 136,48 142,54 C132,58 124,62 116,70"] },
} as const;

type Kind = keyof typeof SHAPES;

export function Mark({ kind, className, delay = 0, play }: { kind: Kind; className?: string; delay?: number; play?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.8 });
  const shape = SHAPES[kind];
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.width && r.height) setBox({ w: r.width, h: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const sx = box ? box.w / shape.w : 1;
  const sy = box ? box.h / shape.h : 1;
  const on = (play ?? seen) && box !== null;

  return (
    <svg
      ref={ref}
      className={`mark ${className ?? ""}`}
      viewBox={box ? `0 0 ${box.w} ${box.h}` : `0 0 ${shape.w} ${shape.h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {shape.d.map((d, i) => (
        <motion.path
          key={i}
          d={d.replace(/(-?[\d.]+),(-?[\d.]+)/g, (_, x: string, y: string) => `${(+x * sx).toFixed(1)},${(+y * sy).toFixed(1)}`)}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={on ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{
            pathLength: { duration: i ? 0.35 : 0.8, delay: delay + i * 0.7, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.01, delay: delay + i * 0.7 },
          }}
        />
      ))}
    </svg>
  );
}
