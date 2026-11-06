"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import type { Copy } from "@/lib/content";
import { Mark } from "./Mark";
import { Phrase } from "./Phrase";
import { Reveal } from "./Reveal";

// Empat tahap ini memang berurutan; garis kapur di kiri tergambar mengikuti scroll dan menghubungkannya.
// Garis dibuka dengan clip-path dari atas, bukan pathLength: viewBox-nya di-stretch (non-scaling-stroke), dan
// dash pathLength pada kombinasi itu pecah jadi titik-titik. Reduced motion: CSS membuka garis penuh.
export function Owners({ t, wa }: { t: Copy["owners"]; wa: string }) {
  const list = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 0.75", "end 0.6"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  const clipPath = useTransform(drawn, (v) => `inset(0 0 ${((1 - v) * 100).toFixed(2)}% 0)`);

  return (
    <section id="approach" className="owners">
      <div className="wrap owners-grid">
        <div className="owners-side">
          <Reveal>
            <h2 className="h2">
              <Phrase h={t.head} />
            </h2>
          </Reveal>
          <p className="owners-lead">{t.lead}</p>
          <a className="btn btn-primary" href={wa} target="_blank" rel="noopener">
            <span className="roll" data-text={t.cta}>
              <span>{t.cta}</span>
            </span>
          </a>
        </div>

        <div ref={list} className="stages">
          <motion.svg
            className="stages-line"
            viewBox="0 0 40 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
            style={{ clipPath }}
          >
            <path d="M20,0 C8,120 32,220 18,340 C6,450 30,560 20,680 C10,790 30,890 20,1000" vectorEffect="non-scaling-stroke" />
          </motion.svg>
          <ol>
            {t.stages.map((s, i) => (
              <li key={s.title} className="stage">
                <span className="stage-n" aria-hidden="true">
                  {i + 1}
                  <Mark kind="circle" className="mark-stage" delay={0.1} />
                </span>
                <h3 className="stage-title">{s.title}</h3>
                <p className="stage-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
