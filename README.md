# Portofolio — Rochman Ramadhani Chiefto Irawan

Dokumen yang saling menopang:

- **`site/`** → **omanlabs.tech**. Landing page Next.js (static export), hub tautan yang dituju semua bio media
  sosial, dalam dua bahasa: Inggris di `/`, Indonesia di `/id` (pemilih bahasa berbendera di header). Isinya posisi sekarang
  (Forward Deployed Engineer dan Product Engineer yang membantu pemilik bisnis tumbuh dengan AI dan sistem), delapan
  proyek dengan panel buktinya, perjalanan 2017–2026, cara kerja, dan kontak dengan WhatsApp paling depan. Copy ada di
  `site/lib/copy/{en,id}.ts`; keputusan desain dan motion di `site/DESIGN.md`.
- **`cv/cv.html`** → **`assets/CV_Rochman_Ramadhani_Product_Engineer.pdf`** (Indonesia) dan **`cv/cv-en.html`** →
  **`assets/CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf`** (Inggris): CV tiga halaman dengan judul
  Forward Deployed Engineer & Product Engineer, fokus ke hasil. Isi dan angkanya sama; ubah keduanya bersamaan, lalu
  `cv/build.sh` (argumen `id`/`en` untuk merender satu saja). Nama berkas PDF tetap karena tautannya sudah beredar;
  nama lama `CV_Rochman_Ramadhani_Product_Owner.pdf` dialihkan 301 lewat `_redirects` (Cloudflare Pages).
- **Halaman legal** (`/privacy`, `/terms`; Indonesia di `/id/privasi`, `/id/ketentuan`, dan `/privasi`, `/ketentuan`
  dialihkan 301 ke sana): Kebijakan Privasi dan Ketentuan Layanan untuk alat posting pribadi Omanlabs Konten dan
  Skolain Konten. URL versi Inggris yang diisi di portal developer TikTok, Google/YouTube, Meta, LinkedIn, dan
  Pinterest; jangan dipindah. Copy di `site/lib/copy/legal-{en,id}.ts`. Kebijakannya menyatakan token hanya disimpan
  di macOS Keychain di komputer sendiri, tanpa server; skrip posting harus mematuhi itu. Untuk situs, kebijakan
  menyebut tanpa cookie dan dengan Cloudflare Web Analytics (disuntikkan zona `omanlabs.tech`, tidak tampak di
  `*.pages.dev`); bila analitik atau cookie berubah, ubah juga bagian "This website". Tanggal "Last updated"
  dinaikkan tiap isi kebijakan berubah.

Aturan yang mengikat semuanya: **CV menyebut angkanya, panel bukti menunjukkan artefaknya.** Tidak boleh ada
angka di CV yang tidak punya bukti pendukung, dan sebaliknya. Landing hanya memakai angka yang sudah ada di
`PROFIL.md`.

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

Domain dan header:

- `www.omanlabs.tech` adalah record dummy `AAAA 100::` (proxied) dengan Redirect Rule di zona yang mengalihkan 301
  ke apex, path dan query ikut dibawa. Redirect per host tidak bisa lewat `_redirects` Pages.
- `_headers` memasang HSTS (tanpa `includeSubDomains`, karena subdomain lain di zona bukan milik situs ini),
  larangan iframe (`X-Frame-Options`, `frame-ancestors`), COOP, `Permissions-Policy`, cache setahun untuk
  `/_next/static/*`, dan `X-Robots-Tag: noindex` untuk semua alamat `*.pages.dev`.
- `_redirects` juga menangkap tebakan URL: `/en` dan `/en/*` ke versi tanpa prefix, `/id/privacy` dan `/id/terms`
  ke nama Indonesianya.

SEO/AEO/GEO: `<head>` kedua halaman memuat satu blok JSON-LD `Person` (nama, alias, jabatan, penghargaan, `sameAs`
ke semua profil sosial), `canonical`, dan `hreflang` en/id/x-default. `llms.txt` (bahasa Inggris, format
llmstxt.org) merangkum profil untuk mesin jawaban. `sitemap.xml` mendaftar `/`, `/id`, empat halaman legal (dengan
`xhtml:link` hreflang), `PROFIL.md`, dan `llms.txt`; naikkan `lastmod`-nya tiap ada perubahan isi.

## Menjalankan

Landing: `cd site && npm ci && npm run dev` (Node 24), lalu buka `/` atau `/id`.

### Deep link

Tiap proyek punya panel bukti (`<dialog>`) yang terbuka dari hash, di kedua bahasa (`/#hris`, `/id#hris`):

```
#skolain  #hris  #hse  #bri  #oca  #klhk  #frames  #kolegium
```

Section: `#work  #journey  #approach  #now  #gear  #contact`.

PDF CV dan bio lama menautkan alias dari deck lama (`omanlabs.tech/#rumahsakit`, `/deck#15`, `/#16`), dan PDF yang sudah
beredar tidak bisa ditarik lagi. Skrip kecil di `<head>` (`LEGACY_HASH` di `site/components/Document.tsx`, peta di
`LEGACY` dan `LEGACY_SLIDES` pada `site/lib/content.ts`) menukar alias atau nomor slide ke hash landing yang setara
sebelum halaman dirender: `#rumahsakit`/`#siloam` → `#hse`, `#dokter` → `#kolegium`, `#kontak` → `#contact`, nomor
slide → panel atau section-nya. `/deck#…` sampai ke sana lewat 301 ke `/`, karena hash ikut dibawa browser.

## Membangun ulang

```bash
./scripts/build-assets.sh   # foto & video: sips + ffmpeg (butuh: brew install ffmpeg)
./cv/build.sh               # CV ID + EN -> PDF via Chrome headless, plus cek regresi ATS (`id`/`en` untuk satu saja)
```

`build-assets.sh` mengambil sumber dari `~/Downloads` dan dari repo `slide-kka-smk`, lalu
mengonversi video 4K HEVC ke H.264. Bukan sekadar optimasi: **HEVC tidak jalan di Firefox sama sekali.**
Audio dibuang (`-an`) — semua klip diputar `muted`, dan audio rapat internal tidak perlu ikut terbit.

`cv/build.sh` menutup dengan `pdftotext -layout` dan memeriksa nama, nomor telepon, URL, serta judul
bagian masih terbaca dalam urutan yang benar. Kalau ada yang hilang, build gagal — itu regresi ATS.

## Keputusan yang perlu diketahui sebelum mengubah

**Font di-host sendiri di `assets/fonts/` (~160 KB), bukan lewat Google Fonts CDN**, supaya tampilan sama di jaringan
yang memblokir CDN. Bricolage dan Familjen itu variable font, satu berkas untuk semua weight; Instrument Serif
(tegak dan italic, subset latin).

## Batas yang dipegang soal privasi

Situs ini publik, jadi aturannya sama seperti deck KKA SMK: **dokumentasi yang memang sudah diterbitkan
resmi boleh tampil; dokumen internal yang memuat nama, wajah, atau skor rekan kerja tidak.**

Konkretnya: papan peringkat "Support System" Maret 2025 **tidak** ditampilkan sebagai gambar — prestasinya
tetap diklaim penuh, hanya bentuk buktinya jadi teks. Foto tim di kantor BRI dan rekaman acara internal tidak dipakai.

Nama klien dan produknya (BRI, QLOLA, NDS, Telkom OCA, Siloam, PT PKSS, Kolegium Dokter) **boleh dan memang
disebut** di landing, CV, dan `PROFIL.md`. Yang tetap umum hanya bio media sosial dan README profil GitHub; cara
menyebutnya mengikuti tabel di `PROFIL.md`. Nama berkas aset tetap netral (`hse-rs.mp4`, `pdc-01.jpg`, …).

Deck lama (sudah dihapus dari repo) sempat memuat tiga screenshot WhatsApp dari mantan rekan kerja. Slide itu dicabut dan
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
