"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import type { Copy, Photo } from "@/lib/content";
import { Mark } from "./Mark";
import { Phrase } from "./Phrase";
import { ProofOpen } from "./Proofs";
import { Reveal } from "./Reveal";

// Foto berbingkai dengan selotip, gaya yang sama dengan deck. Parallax tipis: tiap foto bergerak
// dengan kecepatan sedikit berbeda dari teksnya. Reduced motion: CSS menahan foto di tempat (--tilt menjaga miringnya).
function Photos({ photos }: { photos: Photo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <div ref={ref} className={`now-photos n${photos.length}`}>
      {photos.map((p) => (
        <PhotoFrame key={p.src} p={p} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function PhotoFrame({ p, progress }: { p: Photo; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [p.speed, -p.speed]);
  return (
    <motion.figure className="frame" style={{ y, rotate: p.tilt, ["--tilt" as string]: `${p.tilt}deg` }}>
      <span className="tape" aria-hidden="true" />
      <img src={p.src} width={461} height={820} alt={p.alt} loading="lazy" decoding="async" />
      <figcaption>{p.cap}</figcaption>
    </motion.figure>
  );
}

export function Now({ t, ui }: { t: Copy["now"]; ui: Copy["ui"] }) {
  const s = t.skolain;
  return (
    <section id="now" className="now">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">
            <Phrase h={t.head} />
          </h2>
        </Reveal>

        <article className="now-row now-skolain">
          <div className="now-copy">
            <p className="now-role">{s.role}</p>
            <h3 className="now-title">Skolain</h3>
            <p>{s.body}</p>
            <p className="now-links">
              <a href="https://skolain.id" target="_blank" rel="noopener">
                skolain.id
              </a>
              <ProofOpen id="skolain" label={ui.proof} />
            </p>
          </div>
          <p className="now-big">
            <span className="now-big-v">
              {s.big}
              <Mark kind="circle" className="mark-big" delay={0.2} />
            </span>
            <span className="now-big-l">{s.bigLabel}</span>
          </p>
        </article>

        {t.partners.map((p) => {
          const copy = (
            <div className="now-copy">
              <p className="now-role">{p.role}</p>
              <h3 className="now-title">{p.title}</h3>
              <p>{p.body}</p>
              <p className="note">{p.note}</p>
            </div>
          );
          return (
            <article key={p.title} className={`now-row${p.flip ? " now-flip" : ""}`}>
              {p.flip && <Photos photos={p.photos} />}
              {copy}
              {!p.flip && <Photos photos={p.photos} />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
