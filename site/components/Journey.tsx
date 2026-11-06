"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Chapter, Copy } from "@/lib/content";
import { Clip } from "./Clip";
import { Phrase } from "./Phrase";
import { Reveal } from "./Reveal";

// Desktop: tahun raksasa menempel di kiri, bab bergulir di kanan; bab yang melewati tengah layar jadi aktif.
// Tiap digit punya slot sendiri, jadi 2017 ke 2020 hanya menggulirkan dua digit terakhir.
export function Journey({ t, ui }: { t: Copy["journey"]; ui: Copy["ui"] }) {
  const [{ active, dir }, setState] = useState({ active: 0, dir: 1 });
  const year = t.items[active].year;

  const select = useCallback((i: number) => {
    setState((s) => (s.active === i ? s : { active: i, dir: i > s.active ? 1 : -1 }));
  }, []);

  return (
    <section id="journey" className="journey">
      <div className="wrap journey-grid">
        <div className="journey-side">
          <Reveal>
            <h2 className="h2">
              <Phrase h={t.head} />
            </h2>
          </Reveal>
          <div className="journey-year" aria-hidden="true">
            {year.split("").map((d, slot) => (
              <span key={slot} className="digit">
                <AnimatePresence initial={false} mode="popLayout" custom={dir}>
                  <motion.span
                    key={d}
                    custom={dir}
                    variants={{
                      enter: (k: number) => ({ y: `${k * 100}%` }),
                      center: { y: "0%" },
                      exit: (k: number) => ({ y: `${k * -100}%` }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {d}
                  </motion.span>
                </AnimatePresence>
              </span>
            ))}
          </div>
          <p className="journey-range note" aria-hidden="true">
            {t.items[active].range}
          </p>
        </div>

        <ol className="journey-list">
          {t.items.map((c, i) => (
            <ChapterItem key={c.year} c={c} i={i} label={t.chapter} ui={ui} onActive={select} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ChapterItem({
  c,
  i,
  label,
  ui,
  onActive,
}: {
  c: Chapter;
  i: number;
  label: string;
  ui: Copy["ui"];
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inMiddle = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inMiddle) onActive(i);
  }, [inMiddle, i, onActive]);

  return (
    <li ref={ref} className="ch">
      <p className="ch-year" aria-hidden="true">
        {c.year}
      </p>
      <p className="ch-range">
        {label} {i + 1} · {c.range}
      </p>
      <Reveal>
        <h3 className="ch-title">{c.title}</h3>
      </Reveal>
      <p className="ch-body">{c.body}</p>
      {c.note && <p className="note ch-note">{c.note}</p>}
      {c.media?.kind === "image" && (
        <figure className="ch-photo">
          <img src={c.media.src} width={c.media.w} height={c.media.h} alt={c.media.alt} loading="lazy" decoding="async" />
        </figure>
      )}
      {c.media?.kind === "video" && (
        <Clip className="ch-clip" src={c.media.src} poster={c.media.poster} w={c.media.w} h={c.media.h} label={c.media.label} ui={ui} autoplay={false} />
      )}
    </li>
  );
}
