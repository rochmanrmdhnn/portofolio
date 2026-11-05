"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Mark } from "./Mark";
import { Reveal } from "./Reveal";

type Photo = { src: string; alt: string; cap: string; tilt: number; speed: number };

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

export function Now() {
  return (
    <section id="sekarang" className="now">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">
            Yang saya kerjakan <em className="it">sekarang.</em>
          </h2>
        </Reveal>

        <article className="now-row now-skolain">
          <div className="now-copy">
            <p className="now-role">Founder &amp; Product Engineer · sejak Juni 2026</p>
            <h3 className="now-title">Skolain</h3>
            <p>
              Produk pertama yang saya dirikan sendiri: CBT, LMS, kehadiran, manajemen sekolah, dan e-learning dalam satu alur
              kerja. Dibangun dan diuji langsung di kelas SMK Jakarta Pusat 1. SMKS YP 17 Baradatu di Lampung menemukannya lewat
              media sosial, lalu berlangganan sampai sekarang.
            </p>
            <p className="now-links">
              <a href="https://skolain.id" target="_blank" rel="noopener">
                skolain.id
              </a>
              <a href="/deck#skolain">Ceritanya di deck</a>
            </p>
          </div>
          <p className="now-big">
            <span className="now-big-v">
              1.600+
              <Mark kind="circle" className="mark-big" delay={0.2} />
            </span>
            <span className="now-big-l">pengguna aktif: guru, siswa, dan operator</span>
          </p>
        </article>

        <article className="now-row now-flip">
          <Photos
            photos={[{ src: "/assets/hegemoni-01.jpg", alt: "Pertemuan bersama tim grup kecantikan multi-brand", cap: "Interaksi Kopi, Bekasi", tilt: -2.5, speed: 36 }]}
          />
          <div className="now-copy">
            <p className="now-role">Technology Partner · sejak Mei 2026</p>
            <h3 className="now-title">Grup kecantikan multi-brand</h3>
            <p>
              Mendampingi keputusan teknologi dan arah implementasi sistem internalnya. Ongkos sebuah pilihan teknis saya nilai
              sejak awal, sebelum tim terlanjur mengerjakannya.
            </p>
            <p className="note">peran yang mirip dengan di Mastah, bedanya di sini saya datang dari luar</p>
          </div>
        </article>

        <article className="now-row">
          <div className="now-copy">
            <p className="now-role">AI Learning Partner · sejak Agustus 2026</p>
            <h3 className="now-title">Belajar AI bareng Coach Rheo</h3>
            <p>
              Coach Rheo menjalankan doatrto.com dan beberapa unit bisnis lain. Kami belajar AI bareng, langsung di operasional
              sehari-harinya, lalu menyusun alur kerja berbantuan AI untuk pekerjaan yang berulang tiap hari.
            </p>
            <p className="note">duduk satu meja, bukan pelatihan kelas</p>
          </div>
          <Photos
            photos={[
              { src: "/assets/caezar-01.jpg", alt: "Sesi belajar AI bareng Coach Rheo", cap: "sesi kerja", tilt: 2, speed: 24 },
              { src: "/assets/caezar-03.jpg", alt: "Membedah kasus pakai AI bersama Coach Rheo", cap: "bedah kasus pakai", tilt: -3, speed: 56 },
            ]}
          />
        </article>
      </div>
    </section>
  );
}
