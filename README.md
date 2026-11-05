# Portofolio — Rochman Ramadhani Chiefto Irawan

Tiga dokumen yang saling menopang:

- **`site/`** → **beranda omanlabs.tech**. Landing page Next.js (static export), hub tautan yang dituju semua bio
  media sosial: posisi sekarang (Forward Deployed Engineer yang membantu pemilik bisnis tumbuh dengan AI dan
  sistem), tujuh proyek dengan tautan ke slide buktinya, perjalanan 2017–2026, cara kerja, dan kontak dengan
  WhatsApp paling depan. Keputusan desain dan motion ada di `site/DESIGN.md`.
- **`deck.html`** → **omanlabs.tech/deck**. Deck *6+ Tahun Berkarya*, 39 slide, satu file HTML, tanpa dependensi.
  Lapisan dokumentasi: linimasa lengkap 2017–2026, produk yang dipegang, konsultansi, dan bukti kerjanya.
- **`cv/cv.html`** → **`assets/CV_Rochman_Ramadhani_Product_Engineer.pdf`** — CV Product Engineer tiga halaman,
  fokus ke hasil. Nama lama `CV_Rochman_Ramadhani_Product_Owner.pdf` dialihkan 301 ke sini lewat `_redirects`
  (Cloudflare Pages), karena tautan ke PDF lama masih beredar.

Aturan yang mengikat semuanya: **CV menyebut angkanya, deck menunjukkan artefaknya.** Tidak boleh ada
angka di CV yang tidak punya slide pendukung, dan sebaliknya. Landing hanya memakai angka yang sudah ada di
`PROFIL.md` dan deck.

Hosting: [omanlabs.tech](https://omanlabs.tech) (Cloudflare Pages, proyek `rochman-ramadhani` di akun yang
sama dengan zona `omanlabs.tech`). Domain lama `oman-porto.skolain.id` (proyek `oman-porto` di akun lain)
dialihkan ke sini. Deploy dari checkout `main` yang bersih:

```bash
./scripts/build-site.sh   # next build di site/, lalu rakit dist/: landing + deck.html + aset + berkas root
npx wrangler pages deploy dist --project-name rochman-ramadhani --branch main
```

Pratinjau tanpa menyentuh produksi: ganti `--branch main` dengan nama branch lain (mis. `sesi-landing`).
Uji `dist/` secara lokal dengan `npx wrangler pages dev dist`, yang meniru clean URL (`/deck.html` → `/deck`)
dan `_redirects` seperti di Cloudflare.

SEO/AEO/GEO: `<head>` landing dan deck masing-masing memuat satu blok JSON-LD `Person` (nama, alias, jabatan,
penghargaan, `sameAs` ke semua profil sosial). `llms.txt` (bahasa Inggris, format llmstxt.org) merangkum profil
untuk mesin jawaban. `sitemap.xml` mendaftar landing, deck, `PROFIL.md`, dan `llms.txt`; naikkan `lastmod`-nya
tiap ada perubahan isi.

## Menjalankan

Landing: `cd site && npm ci && npm run dev` (Node 24). Deck: buka `deck.html` di browser mana pun, tanpa build
dan tanpa npm.

Navigasi deck: `→` / `←` / `Space` / `PageUp`–`PageDown`, scroll, atau geser di layar sentuh.
`Home` dan `End` melompat ke slide pertama dan terakhir.

Tekan `E` (atau arahkan kursor ke pojok kiri atas) untuk menyunting teks langsung di slide.
Perubahan tersimpan di `localStorage`; `Ctrl/⌘+S` mengekspor salinan HTML baru.

### Deep link

Nomor slide tersimpan di hash URL (`/deck#15`), tapi untuk ditulis di CV pakai **alias**, bukan angka:

```
#peta  #angka  #skolain  #hris  #rumahsakit  #wholesale  #omnichannel  #bank
#frames  #klhk  #dokter  #advisory  #hegemoni  #seminar  #pdc  #peringkat  #carakerja  #bisnis  #kontak
```

Alias lama dari sebelum Oktober 2026 tetap hidup dan menunjuk ke slide yang sama, karena tautannya masih
beredar: `#primasejahtera` (= `#hris`), `#siloam` (= `#rumahsakit`), `#qlola` (= `#wholesale`),
`#oca` (= `#omnichannel`), `#bri` (= `#bank`).

Hash posisional putus begitu ada satu slide disisipkan, sementara PDF CV yang sudah beredar tidak bisa
ditarik lagi. Alias tidak ikut bergeser.

PDF CV yang sudah beredar menautkan `omanlabs.tech/#alias`, dari masa deck masih di beranda. Skrip kecil di
`<head>` landing (`DECK_REDIRECT` di `site/app/layout.tsx`) meneruskan hash berupa angka atau alias deck ke
`/deck#…` sebelum halaman dirender; id section landing (`#kerja`, `#hubungi`, …) tidak ikut diteruskan. Tautan
baru langsung pakai `/deck#alias`.

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

**Font di-host sendiri di `assets/fonts/` (~128 KB), bukan lewat Google Fonts CDN.** Deck harus tetap
tampil sama di jaringan yang memblokir CDN, dan headless Chrome bisa mencetak sebelum webfont selesai
dimuat — PDF-nya jadi diam-diam beda dari preview. Bricolage dan Familjen itu variable font, satu berkas
untuk semua weight.

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
