# Portofolio — Rochman Ramadhani Chiefto Irawan

Dokumen yang saling menopang:

- **`site/`** → **omanlabs.tech**. Landing page Next.js (static export), hub tautan yang dituju semua bio media
  sosial, dalam dua bahasa: Inggris di `/`, Indonesia di `/id` (tombol EN/ID di header). Isinya posisi sekarang
  (Forward Deployed Engineer yang membantu pemilik bisnis tumbuh dengan AI dan sistem), delapan proyek dengan panel
  buktinya, perjalanan 2017–2026, cara kerja, dan kontak dengan WhatsApp paling depan. Copy ada di
  `site/lib/copy/{en,id}.ts`; keputusan desain dan motion di `site/DESIGN.md`.
- **`cv/cv.html`** → **`assets/CV_Rochman_Ramadhani_Product_Engineer.pdf`**: CV Product Engineer tiga halaman,
  fokus ke hasil. Versi Inggris: `assets/CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf`. Nama lama
  `CV_Rochman_Ramadhani_Product_Owner.pdf` dialihkan 301 lewat `_redirects` (Cloudflare Pages), karena tautan ke
  PDF lama masih beredar.
- **`deck.html`**: arsip deck *6+ Tahun Berkarya* (39 slide, satu file HTML). Tidak di-deploy lagi; isinya sudah
  pindah ke panel bukti landing, dan `/deck` dialihkan 301 ke `/`.

Aturan yang mengikat semuanya: **CV menyebut angkanya, panel bukti menunjukkan artefaknya.** Tidak boleh ada
angka di CV yang tidak punya bukti pendukung, dan sebaliknya. Landing hanya memakai angka yang sudah ada di
`PROFIL.md` dan deck.

Hosting: [omanlabs.tech](https://omanlabs.tech) (Cloudflare Pages, proyek `rochman-ramadhani` di akun yang
sama dengan zona `omanlabs.tech`). Domain lama `oman-porto.skolain.id` (proyek `oman-porto` di akun lain)
dialihkan ke sini. Deploy dari checkout `main` yang bersih:

```bash
./scripts/build-site.sh   # next build di site/, lalu rakit dist/: landing EN/ID + aset + berkas root
npx wrangler pages deploy dist --project-name rochman-ramadhani --branch main
```

Pratinjau tanpa menyentuh produksi: ganti `--branch main` dengan nama branch lain (mis. `sesi-landing`).
Uji `dist/` secara lokal dengan `npx wrangler pages dev dist`, yang meniru clean URL (`/id.html` → `/id`)
dan `_redirects` seperti di Cloudflare.

SEO/AEO/GEO: `<head>` kedua halaman memuat satu blok JSON-LD `Person` (nama, alias, jabatan, penghargaan, `sameAs`
ke semua profil sosial), `canonical`, dan `hreflang` en/id/x-default. `llms.txt` (bahasa Inggris, format
llmstxt.org) merangkum profil untuk mesin jawaban. `sitemap.xml` mendaftar `/` dan `/id` (dengan `xhtml:link`
hreflang), `PROFIL.md`, dan `llms.txt`; naikkan `lastmod`-nya tiap ada perubahan isi.

## Menjalankan

Landing: `cd site && npm ci && npm run dev` (Node 24), lalu buka `/` atau `/id`.

Deck arsip: buka `deck.html` di browser mana pun, tanpa build. Navigasi `→` / `←` / `Space` / `PageUp`–`PageDown`,
scroll, atau geser di layar sentuh; `E` untuk menyunting teks langsung di slide (tersimpan di `localStorage`,
`Ctrl/⌘+S` mengekspor salinan HTML baru).

### Deep link

Tiap proyek punya panel bukti (`<dialog>`) yang terbuka dari hash, di kedua bahasa (`/#hris`, `/id#hris`):

```
#skolain  #hris  #hse  #bri  #oca  #klhk  #frames  #kolegium
```

Section: `#work  #journey  #approach  #now  #gear  #contact`.

PDF CV dan bio lama menautkan alias deck (`omanlabs.tech/#rumahsakit`, `/deck#15`, `/#16`), dan PDF yang sudah
beredar tidak bisa ditarik lagi. Skrip kecil di `<head>` (`LEGACY_HASH` di `site/components/Document.tsx`, peta di
`LEGACY` dan `LEGACY_SLIDES` pada `site/lib/content.ts`) menukar alias atau nomor slide ke hash landing yang setara
sebelum halaman dirender: `#rumahsakit`/`#siloam` → `#hse`, `#dokter` → `#kolegium`, `#kontak` → `#contact`, nomor
slide → panel atau section-nya. `/deck#…` sampai ke sana lewat 301 ke `/`, karena hash ikut dibawa browser.

## Membangun ulang

```bash
./scripts/build-assets.sh   # foto & video: sips + ffmpeg (butuh: brew install ffmpeg)
./cv/build.sh               # CV -> PDF via Chrome headless, plus cek regresi ATS
```

`build-assets.sh` mengambil sumber dari `~/Downloads` dan dari repo `slide-kka-smk`, lalu
mengonversi video 4K HEVC ke H.264. Bukan sekadar optimasi: **HEVC tidak jalan di Firefox sama sekali.**
Audio dibuang (`-an`) — semua klip diputar `muted`, dan audio rapat internal tidak perlu ikut terbit.

`cv/build.sh` menutup dengan `pdftotext -layout` dan memeriksa nama, nomor telepon, URL, serta judul
bagian masih terbaca dalam urutan yang benar. Kalau ada yang hilang, build gagal — itu regresi ATS.

## Keputusan yang perlu diketahui sebelum mengubah

**Font di-host sendiri di `assets/fonts/` (~160 KB), bukan lewat Google Fonts CDN.** Deck harus tetap
tampil sama di jaringan yang memblokir CDN, dan headless Chrome bisa mencetak sebelum webfont selesai
dimuat — PDF-nya jadi diam-diam beda dari preview. Bricolage dan Familjen itu variable font, satu berkas
untuk semua weight. Instrument Serif (tegak dan italic, subset latin) hanya dipakai landing.

**`.pos` di-deklarasikan ulang setelah semua komponen** (bagian 24 di stylesheet). Hampir setiap arketipe
(`.cards`, `.maptable`, `.flow`, `.linkcard`, `.hbox`, `.rail`, `.lanes`, …) menyetel `position:relative`
di bagian setelah `.pos`. Specificity-nya sama, jadi yang belakangan menang dan `--x`/`--y` berubah arti
diam-diam: bukan koordinat dari tepi slide, tapi geseran dari posisi aliran. Gejalanya menipu karena
elemen pertama tiap slide tetap mendarat di tempat yang benar. `transform` sengaja **tidak** ikut diulang —
itu akan meratakan semua kemiringan hand-drawn; untuk kotak yang ingin lurus, pakai `.rot-0`.

**Nomor halaman dan isi rail digenerate JS saat boot**, bukan ditulis tangan. Menyisipkan slide tidak
perlu penomoran ulang manual. Urutannya mengikat: `buildChrome()` harus jalan **sebelum** `restoreEdits()`,
karena `restoreEdits` mengunci teks berdasarkan posisi elemen.

**`STORE_PREFIX` = `portofolio-rrci:v1:`.** Kunci `localStorage` di deck lama tidak memuat identitas deck
sama sekali, jadi dua deck di satu origin akan saling menimpa isi editnya. Naikkan ke `v2` kalau slide
ditata ulang besar-besaran.

**`@page` dan `print-color-adjust:exact` wajib ada.** Papan tulisnya 100% gradient CSS; tanpa keduanya
PDF keluar jadi teks hitam di atas putih dengan orientasi potret.

## Linimasa

`.rail` (enam bab, lebar sama) dan `.lanes` (Gantt berskala) adalah dua tingkat dari komponen yang sama.
Jendela waktunya di-set di container — `--from` / `--to` — dan tiap bar membawa `--y0`/`--y1` dalam
**tahun desimal** (`2022.92` = Desember 2022), supaya bisa dicek mata waktu review.

Segmen rail dibuat sama lebar, bukan proporsional waktu: pada skala sebenarnya Bab 4 cuma dapat 6,6%
dan tidak terbaca, padahal tahun-tahun padat itu yang isinya paling banyak. Karena tiap segmen diberi
label rentang tanggal aslinya, tidak ada klaim skala yang perlu dibantah — dan grafik yang benar-benar
berskala ada tepat di bawahnya.

Bar di bawah ~0,9 tahun pada jendela 10 tahun terlalu sempit untuk label di dalam; pakai `.lbl-out`.
Dua penugasan yang benar-benar tumpang tindih di satu jalur pakai `.up` / `.dn` supaya tumpang tindihnya
terlihat, bukan tersembunyi — itu justru isi ceritanya.

## Batas yang dipegang soal privasi

Deck ini publik, jadi aturannya sama seperti deck KKA SMK: **dokumentasi yang memang sudah diterbitkan
resmi boleh tampil; dokumen internal yang memuat nama, wajah, atau skor rekan kerja tidak.**

Konkretnya: papan peringkat "Support System" Maret 2025 **tidak** ditampilkan sebagai gambar — prestasinya
tetap diklaim penuh, hanya bentuk buktinya jadi teks. Foto tim di kantor BRI dan rekaman acara internal tidak dipakai.

Nama klien dan produknya (BRI, QLOLA, NDS, Telkom OCA, Siloam, PT PKSS, Kolegium Dokter) **boleh dan memang
disebut** di deck, CV, dan `PROFIL.md`. Yang tetap umum hanya bio media sosial dan README profil GitHub; cara
menyebutnya mengikuti tabel di `PROFIL.md`. Nama berkas aset tetap netral (`hse-rs.mp4`, `pdc-01.jpg`, …).

Slide testimoni sempat memuat tiga screenshot WhatsApp dari mantan rekan kerja. Slide itu dicabut dan
berkasnya ikut dihapus dari repo, bukan sekadar disembunyikan — pesan pribadi dari orang bernama tidak
perlu tetap ada di server publik selama tidak ditampilkan. Menunggu testimoni yang memang diniatkan
untuk terbit.

Menghapus berkasnya dari repo ternyata **tidak cukup**. Cloudflare Pages tetap menyajikan ketiganya lewat
domain kustom meski tidak ada di deployment mana pun — bertahan melewati purge per-URL, `purge_everything`,
deploy ulang, bahkan Development Mode (`cf-cache-status: DYNAMIC` tapi tetap mengembalikan PNG asli).
Deployment lama juga menyajikannya lewat URL `*.pages.dev` masing-masing.

Jadi ada dua lapis penanganan, dan keduanya perlu dipertahankan:

1. **Deployment lama dihapus.** Snapshot Pages bersifat kekal dan tiap deployment punya URL publik sendiri —
   menghapus berkas di deployment baru tidak menutup yang lama.
2. **Aturan WAF di zona `skolain.id`** memblokir `oman-porto.skolain.id/assets/chat-*` dengan status 403.
   Jangan dihapus. Itu jaring pengaman kalau pemetaan aset basi di sisi Cloudflare muncul lagi. Proyek baru
   `rochman-ramadhani` tidak pernah menerima berkas itu, jadi `omanlabs.tech` tidak mewarisi masalahnya.
