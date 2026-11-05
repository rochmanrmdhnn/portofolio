# Landing omanlabs.tech: keputusan desain

Design Read: halaman pribadi seorang Forward Deployed Engineer untuk pemilik bisnis Indonesia (juga klien korporat dan
rekruter), dengan bahasa visual papan tulis dan catatan tangan yang diwarisi dari deck. Dial ENERGY 3 / RHYTHM 3 / MOTION 3.

Deck 39 slide tetap ada di `/deck` dan menjadi gudang bukti; landing ini jalan masuknya. Setiap angka di halaman ini
punya slide pendukung di deck, dan tiap panel kerja menautkan ke slide itu.

## Identitas

- **Motif:** coretan kapur kuning bertulisan tangan (Kalam) yang tergambar saat masuk layar: lingkaran di angka,
  garis bawah, panah ke bukti. Ini cara Oman menjelaskan di deck dan di meja klien, jadi motion-nya punya isi.
- **Warna** (dari deck, dibatasi dua inti + satu aksen):

  | Token | Nilai | Peran |
  |---|---|---|
  | `--board` | `#14231C` | latar utama (papan tulis) |
  | `--board-deep` | `#0D1712` | section bergantian, bingkai media |
  | `--board-lift` | `#1D3227` | permukaan panel |
  | `--chalk` | `#F2EFE4` | teks |
  | `--yellow` | `#E8C547` | satu aksen: coretan tangan, angka bukti, CTA utama |

  Coral dan teal di deck sengaja tidak dipakai. Latar gelap ini dipilih karena merupakan papan tulis tempat brand Oman
  sudah dikenal, bukan karena kesan "tech".
- **Huruf:** Bricolage Grotesque (judul, variable `opsz`/`wght`), Familjen Grotesk (isi), Kalam (catatan tangan).
  Ketiganya sudah dipakai di deck dan CV, dan di-host sendiri dari `assets/fonts/`.
- **Instrument Serif** (permintaan Oman: font yang lagi ramai di situs era AI) dipakai dengan peran sempit: satu
  frasa italic per judul (`.it`) dan nama perangkat di Gear. Kontras serif tipis dengan Bricolage 700 memberi
  penekanan tanpa warna kedua. Lebih dari satu frasa per judul tidak boleh: tekanannya hilang.

## Struktur dan alasannya

| Section | Isi | Teknik | Alasan |
|---|---|---|---|
| Hero | posisi, CTA WhatsApp, foto | line-mask CSS saat muat, coretan tergambar, hero memudar saat scroll | terbaca tanpa JS, LCP tidak menunggu animasi |
| Angka | satu paragraf berisi angka bukti | kata di-scrub scroll | angka dibaca sebagai kalimat, bukan kartu statistik |
| Kerja | 7 proyek, klip potret asli | trek horizontal ter-pin (desktop), daftar vertikal (mobile) | klip semuanya 9:16; trek memperlihatkan beberapa sekaligus |
| Perjalanan | 6 bab 2017 sampai 2026 | tahun raksasa sticky, digit bergulir | urutan waktu, isi tetap dibaca dalam arus normal |
| Pemilik bisnis | 4 tahap kerja | garis kapur tergambar mengikuti scroll | empat langkah ini memang urutan; garisnya menghubungkan |
| Sekarang | Skolain (modul, sekolah pemakai, 1.600+), Hegemoni, belajar AI bareng | foto berbingkai miring, parallax tipis | kontinuitas gaya foto-berisolasi di deck; Skolain sengaja tidak ada di trek Kerja supaya angka dan medianya tidak dobel |
| Gear | MacBook Pro M3 Max 96 GB, iPhone, iPad, AirPods Pro, Plaud Note Pro, Claude | mesin utama sticky, daftar mask reveal | orang kenal orangnya, bukan hanya CV-nya; hanya perangkat yang disebut Oman, model iPhone/iPad tidak ditulis |
| Kontak | WhatsApp, email, sosial, CV, deck | judul mask reveal, roll teks pada tombol | satu aksi utama yang jelas |

## Motion

- Easing `cubic-bezier(0.23, 1, 0.32, 1)` (UI) dan `cubic-bezier(0.16, 1, 0.3, 1)` (reveal besar). Hanya transform,
  opacity, dan clip-path; `pathLength` pada SVG coretan kecil.
- Lenis untuk smooth scroll, satu loop RAF dari Motion.
- `prefers-reduced-motion`: tanpa pin, tanpa scrub, tanpa autoplay; semua konten terlihat statis. Ditangani di CSS
  (blok `@media (prefers-reduced-motion: reduce)` di akhir `globals.css`), bukan cabang `useReducedMotion` saat
  render: HTML statis selalu dirender tanpa preferensi itu, jadi cabang JS memicu hydration mismatch.
- Video: muted, diputar hanya saat terlihat, tombol jeda di tiap klip.

## Jebakan teknis yang sudah dibayar

- **Reveal mengamati pembungkus, bukan elemen yang di-clip.** Chrome menghitung rasio IntersectionObserver
  sesudah clip-path elemen itu sendiri; elemen yang ter-clip penuh rasionya selalu 0 dan tidak pernah muncul.
- **Coretan kapur (`Mark`) diskalakan ke piksel asli kotaknya**, viewBox = ukuran elemen. `vector-effect:
  non-scaling-stroke` digabung `pathLength` memecah dash jadi titik-titik.
- **Garis tahap (`Owners`) tergambar lewat clip-path**, bukan `pathLength`, karena path-nya non-scaling-stroke.
- **Kolom trek dikunci `minmax(0, 1fr)`.** Tanpa itu trek max-content melebarkan kolom grid dan judul serta
  penghitung terlempar keluar layar. Media query pin (`PINNED` di `WorkTrack.tsx`) harus sama dengan CSS `.work`.
- **Judul hero `7vw - 0.5rem`, maksimum 6rem**: baris terpanjang tetap satu baris dari 820px ke atas.
- **Salinan label tombol roll** memakai `content: attr(data-text) / ""`; tanpa alt text kosong nama link terbaca
  dua kali.
- **Teks diperbesar (pengaturan ukuran font browser).** Breakpoint ditulis dalam em, bukan px, supaya layar lebar
  dengan teks 200% ikut turun ke layout sempit. Semua track grid satu kolom `minmax(0, 1fr)`: `1fr` biasa melebar
  mengikuti kata terpanjang. Angka raksasa memakai batas vw di `clamp` (`min(3.6rem, 18vw)`), karena rem yang
  dua kali lipat membuat "50.000+" plus lingkarannya lebih lebar dari ponsel. Satu elemen yang lebih lebar dari
  viewport membuat Chrome mobile memperlebar layout viewport, dan header fixed ikut terdorong keluar layar.
  Uji: `Page.setFontSizes` lewat CDP (standard 32), bukan `html{font-size:200%}`, yang tidak menggeser breakpoint em.
- **Caption polaroid ada dalam arus** (flex column, `margin-top: auto`), bukan absolut, jadi pita bawah ikut tinggi
  caption dan tidak pernah menimpa foto.

## Yang sengaja tidak ada

Testimoni (belum ada yang nyata), papan peringkat BRI, logo klien, count-up angka, kursor kustom, preloader, marquee,
glow atau gradien, label all-caps ber-tracking lebar, em dash.
