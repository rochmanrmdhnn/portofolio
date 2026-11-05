"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { STAGES, WA } from "@/lib/content";
import { Mark } from "./Mark";
import { Reveal } from "./Reveal";

// Empat tahap ini memang berurutan; garis kapur di kiri tergambar mengikuti scroll dan menghubungkannya.
// Garis dibuka dengan clip-path dari atas, bukan pathLength: viewBox-nya di-stretch (non-scaling-stroke), dan
// dash pathLength pada kombinasi itu pecah jadi titik-titik. Reduced motion: CSS membuka garis penuh.
export function Owners() {
  const list = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 0.75", "end 0.6"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  const clipPath = useTransform(drawn, (v) => `inset(0 0 ${((1 - v) * 100).toFixed(2)}% 0)`);

  return (
    <section id="pemilik-bisnis" className="owners">
      <div className="wrap owners-grid">
        <div className="owners-side">
          <Reveal>
            <h2 className="h2">Kalau Anda pemilik bisnis.</h2>
          </Reveal>
          <p className="owners-lead">
            Empat tahap yang saya jalani bareng bisnis Anda. Yang terakhir paling penting: tim Anda menjalankannya sendiri.
          </p>
          <a className="btn btn-primary" href={WA} target="_blank" rel="noopener">
            <span className="roll" data-text="Ceritakan bisnis Anda">
              <span>Ceritakan bisnis Anda</span>
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
            {STAGES.map((s, i) => (
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
