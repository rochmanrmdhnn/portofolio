"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { WORK, type Work } from "@/lib/content";
import { Clip } from "./Clip";
import { Mark } from "./Mark";
import { Reveal } from "./Reveal";

// Harus sama dengan media query .work di globals.css.
const PINNED = "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

// Desktop: section setinggi 100svh + lebar trek, isinya sticky, trek bergeser 1:1 dengan scroll vertikal.
// Layar sempit atau reduced motion: dist = 0, trek jadi daftar vertikal biasa (diatur CSS), tanpa transform.
export function WorkTrack() {
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
    if (dist) setActive(Math.min(WORK.length - 1, Math.floor(v * WORK.length)));
  });

  return (
    <section id="kerja" ref={outer} className="work" style={dist ? { height: `calc(100svh + ${dist}px)` } : undefined}>
      <div className="work-pin">
        <div className="work-head wrap">
          <Reveal>
            <h2 className="h2">Sistem yang sudah dipakai orang.</h2>
          </Reveal>
          <p className="work-intro">
            Tujuh proyek, dari bank sampai rumah sakit. Tiap panel menautkan ke slide buktinya di deck.
          </p>
        </div>

        <motion.div ref={track} className="work-track" style={{ x: dist ? x : 0 }}>
          {WORK.map((w, i) => (
            <Panel key={w.id} w={w} i={i} />
          ))}
        </motion.div>

        {dist > 0 && (
          <div className="work-foot wrap" aria-hidden="true">
            <span className="work-count">
              {String(active + 1).padStart(2, "0")} / {String(WORK.length).padStart(2, "0")}
            </span>
            <span className="work-bar">
              <motion.span style={{ scaleX: scrollYProgress }} />
            </span>
            <span className="work-org">{WORK[active].org}</span>
          </div>
        )}
      </div>
    </section>
  );
}

function Panel({ w, i }: { w: Work; i: number }) {
  const media = w.media;
  return (
    <article className={`wk ${media ? "wk-media" : "wk-text"}`} aria-labelledby={`wk-${w.id}`}>
      {media?.kind === "video" && <Clip className="wk-clip" src={media.src} poster={media.poster} w={media.w} h={media.h} label={media.label} />}
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
          <a href={`/deck#${w.deck}`}>Buktinya di deck</a>
        </p>
      </div>
    </article>
  );
}
