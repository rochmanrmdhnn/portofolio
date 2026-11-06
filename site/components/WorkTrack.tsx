"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Copy, Work } from "@/lib/content";
import { Clip } from "./Clip";
import { Mark } from "./Mark";
import { Phrase } from "./Phrase";
import { ProofOpen } from "./Proofs";
import { Reveal } from "./Reveal";

// Harus sama dengan media query .work di globals.css.
const PINNED = "(min-width: 64em) and (min-height: 40em) and (prefers-reduced-motion: no-preference)";

// Desktop: section setinggi 100svh + lebar trek, isinya sticky, trek bergeser 1:1 dengan scroll vertikal.
// Layar sempit atau reduced motion: dist = 0, trek jadi daftar vertikal biasa (diatur CSS), tanpa transform.
export function WorkTrack({ t, ui }: { t: Copy["work"]; ui: Copy["ui"] }) {
  const items = t.items;
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(PINNED);
    const measure = () => {
      const t = track.current;
      setDist(mq.matches && t ? Math.max(0, t.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (dist) setActive(Math.min(items.length - 1, Math.floor(v * items.length)));
  });

  return (
    <section id="work" ref={outer} className="work" style={dist ? { height: `calc(100svh + ${dist}px)` } : undefined}>
      <div className="work-pin">
        <div className="work-head wrap">
          <Reveal>
            <h2 className="h2">
              <Phrase h={t.head} />
            </h2>
          </Reveal>
          <p className="work-intro">{t.intro}</p>
        </div>

        <motion.div ref={track} className="work-track" style={{ x: dist ? x : 0 }}>
          {items.map((w, i) => (
            <Panel key={w.id} w={w} i={i} ui={ui} />
          ))}
        </motion.div>

        {dist > 0 && (
          <div className="work-foot wrap" aria-hidden="true">
            <span className="work-count">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <span className="work-bar">
              <motion.span style={{ scaleX: scrollYProgress }} />
            </span>
            <span className="work-org">{items[active].org}</span>
          </div>
        )}
      </div>
    </section>
  );
}

function Panel({ w, i, ui }: { w: Work; i: number; ui: Copy["ui"] }) {
  const media = w.media;
  return (
    <article className={`wk ${media ? "wk-media" : "wk-text"}`} aria-labelledby={`wk-${w.id}`}>
      {media?.kind === "video" && <Clip className="wk-clip" src={media.src} poster={media.poster} w={media.w} h={media.h} label={media.label} ui={ui} />}
      <div className="wk-body">
        <p className="wk-org">
          <span className="wk-n">{String(i + 1).padStart(2, "0")}</span> {w.org}
        </p>
        <h3 id={`wk-${w.id}`} className="wk-title">
          {w.title}
        </h3>
        {w.stat && (
          <p className="wk-stat">
            <span className="wk-stat-v">
              {w.stat.value}
              {!media && <Mark kind="circle" className="mark-stat" delay={0.15} />}
            </span>
            <span className="wk-stat-l">{w.stat.label}</span>
          </p>
        )}
        <p className="wk-text-body">{w.body}</p>
        {w.note && <p className="note wk-note">{w.note}</p>}
        <p className="wk-links">
          <ProofOpen id={w.id} label={ui.proof} />
        </p>
      </div>
    </article>
  );
}
