"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Klip bukti: muted, diputar hanya saat terlihat, selalu punya tombol jeda/putar.
// autoplay=false (mis. wisuda.mp4, 111 detik) atau reduced motion: diam sampai pengunjung menekan putar.
export function Clip({
  src,
  poster,
  w,
  h,
  label,
  ui,
  autoplay = true,
  className,
}: {
  src: string;
  poster: string;
  w: number;
  h: number;
  label: string;
  ui: { play: string; pause: string };
  autoplay?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  // null = belum disentuh pengunjung; ikuti autoplay. true/false = pilihan pengunjung, menang atas autoplay.
  const [wanted, setWanted] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const shouldPlay = inView && (wanted ?? (autoplay && !reduce));

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (shouldPlay) v.play().catch(() => setPlaying(false));
    else v.pause();
  }, [shouldPlay]);

  return (
    <figure className={`clip ${className ?? ""}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        width={w}
        height={h}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button type="button" className="clip-toggle" onClick={() => setWanted(!playing)} aria-label={`${playing ? ui.pause : ui.play}: ${label}`}>
        <svg viewBox="0 0 16 16" aria-hidden="true">
          {playing ? <path d="M4 3h3v10H4zM9 3h3v10H9z" /> : <path d="M5 3l8 5-8 5z" />}
        </svg>
      </button>
      <figcaption className="clip-cap">{label}</figcaption>
    </figure>
  );
}
