// Semua teks halaman. Sumber kebenaran: PROFIL.md dan deck (deck.html). Jangan menambah angka yang tidak ada di sana.
// `deck` = alias slide pendukung di /deck#<alias>.

export const WA = "https://wa.me/6281381039158?text=" + encodeURIComponent("Halo Oman, saya mau ngobrol soal bisnis saya.");
export const CV = "/assets/CV_Rochman_Ramadhani_Product_Engineer.pdf";

export type Media =
  | { kind: "video"; src: string; poster: string; w: number; h: number; label: string }
  | { kind: "image"; src: string; w: number; h: number; alt: string };

export type Work = {
  id: string;
  org: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  note?: string;
  deck: string;
  media?: Media;
};

export const WORK: Work[] = [
  {
    id: "hris",
    org: "PrimaSejahtera · PT PKSS",
    title: "Semua karyawan absen di jam yang sama.",
    body:
      "Puncak trafiknya cuma beberapa menit tiap pagi, dan justru di menit itu sistemnya tidak boleh goyah. Arsitekturnya saya rancang dari nol dengan Rust dan Flutter, di atas 15 virtual machine on-premises yang diorkestrasi Rancher dan RKE2.",
    stat: { value: "50.000+", label: "pengguna aktif" },
    note: "infrastruktur on-premises-nya saya setup sendiri",
    deck: "hris",
  },
  {
    id: "hse",
    org: "HSE · Siloam International Hospitals",
    title: "Sistem keselamatan untuk semua unit rumah sakit.",
    body:
      "Dipakai seluruh unit rumah sakit dan head office. Sebagai Software Architect saya memimpin 6 engineer dan memegang keputusan arsitektur, code review, dan jadwal rilis. Backend Rust, frontend React, seluruhnya di AWS.",
    stat: { value: "500+", label: "pengguna harian" },
    deck: "siloam",
    media: { kind: "video", src: "/assets/hse-rs.mp4", poster: "/assets/hse-rs-poster.jpg", w: 540, h: 960, label: "Sistem HSE Siloam" },
  },
  {
    id: "bri",
    org: "BRI · tiga penugasan, Des 2022 sampai Des 2025",
    title: "Bank yang sama memanggil saya lagi, dua kali.",
    body:
      "New Delivery System untuk teller dan CS unit kerja. Lalu QLOLA, platform wholesale banking untuk nasabah korporasi, dengan integrasi Perum Bulog. Lalu kembali ke NDS sebagai Senior Software Engineer.",
    stat: { value: "3×", label: "kontrak BRI" },
    note: "dipanggil balik itu penilaian yang tidak bisa saya tulis sendiri",
    deck: "bri",
  },
  {
    id: "oca",
    org: "Telkom Indonesia · Omni Communication Assistant",
    title: "Migrasi untuk menghadapi trafik puncak.",
    body:
      "Mengusulkan, merencanakan, dan memimpin migrasi backend NestJS ke Go (Golang) di Telkom Indonesia, Omni Communication Assistant, untuk meningkatkan efisiensi resource dan ketahanan platform saat trafik puncak.",
    note: "tidak ada persentase hemat yang saya klaim tanpa diukur",
    deck: "oca",
  },
  {
    id: "klhk",
    org: "KLHK · Januari sampai April 2024",
    title: "Ikut menyusun aturan pemantauan lingkungan nasional.",
    body:
      "Terlibat di sesi penyusunan aturan teknis SPARING untuk air limbah dan CEMS untuk emisi cerobong. Lalu membangun platform yang mengirim data pemantauan ke sistem nasional secara otomatis dan terjadwal.",
    deck: "klhk",
    media: { kind: "video", src: "/assets/klhk-sparing.mp4", poster: "/assets/klhk-sparing-poster.jpg", w: 540, h: 960, label: "Sesi SPARING di KLHK" },
  },
  {
    id: "frames",
    org: "FRAMES · FKUI × Garuda Indonesia Training Center",
    title: "Aplikasi ukur kelelahan untuk awak penerbangan.",
    body:
      "Diluncurkan Program Studi Spesialis Kedokteran Penerbangan FKUI. Saya memegang produknya sekaligus membangun aplikasinya. Versi pertama Oktober sampai Desember 2020, versi 2 rilis 7 Maret 2024.",
    deck: "frames",
    media: { kind: "video", src: "/assets/frames-acara-01.mp4", poster: "/assets/frames-acara-01-poster.jpg", w: 360, h: 640, label: "Acara peluncuran FRAMES" },
  },
  {
    id: "kolegium",
    org: "Kolegium Dokter",
    title: "Dashboard keanggotaan untuk 150.000 dokter umum.",
    body:
      "Sebagai Product Engineer saya memegang discovery, penentuan lingkup, dan prioritas rilis. Diskusi kebutuhannya langsung bersama Kolegium Dokter, bukan lewat perantara.",
    note: "150.000 itu lingkup rancangan, bukan pengguna aktif hari ini",
    deck: "dokter",
    media: { kind: "video", src: "/assets/kedokteran-01.mp4", poster: "/assets/kedokteran-01-poster.jpg", w: 360, h: 640, label: "Hari diskusi kebutuhan" },
  },
];

export type Chapter = {
  year: string;
  range: string;
  title: string;
  body: string;
  note?: string;
  media?: Media;
};

export const JOURNEY: Chapter[] = [
  {
    year: "2017",
    range: "2017 sampai 2020",
    title: "Masuk SMK, langsung cari kerja.",
    body:
      "SMKN 26 Jakarta, jurusan Sistem Informatika Jaringan dan Aplikasi. Tiga juara 1 sebelum lulus: Smart Green Garden di SEAMEO SEAMOLEC 2019, Ngajar di Kamp Kreatif SMK 2019, dan Bayar di PermataYouthPreneur 2020. Juli 2020, magang pertama sebagai Software Developer.",
    note: "lomba dan magang sebelum lulus itu cuma keputusan yang saya ambil lebih awal",
  },
  {
    year: "2020",
    range: "2020 sampai 2022",
    title: "Tim tujuh orang jadi tiga puluh.",
    body:
      "Di PT Lumos Inisiatif Indonesia, dari Software Engineer lalu Lead Software Engineer sejak April 2021. Memimpin tim backend, frontend, dan mobile mengantar ERP, SCM, dan CRM ke production. Saya ikut langsung di hiring dan onboarding.",
    note: "pertama kali saya mengurus orang, bukan cuma kode",
  },
  {
    year: "2022",
    range: "2022 sampai 2023",
    title: "Masuk bank. Tiga penugasan jalan bersamaan.",
    body:
      "New Delivery System di BRI, Technical Lead Prima Super App di Infobit, dan sistem sektor pemerintahan untuk Kementerian Dalam Negeri. Tahun yang sama saya mulai kuliah Sistem Informasi di Binus, kelas online, sambil kerja penuh waktu.",
  },
  {
    year: "2024",
    range: "2023 sampai 2024",
    title: "Bank, penerbangan, dan lingkungan hidup, dalam tahun yang sama.",
    body:
      "QLOLA di BRI, FRAMES v2 rilis 7 Maret, dan konsultansi SPARING dan CEMS untuk KLHK. Di BRI Product Development Conference bersama Tech in Asia, 25 Juni 2024, saya mulai serius belajar sisi produk, bukan cuma sisi tekniknya.",
    media: { kind: "image", src: "/assets/pdc-01.jpg", w: 1400, h: 1050, alt: "Panggung BRI Product Development Conference bersama Tech in Asia" },
  },
  {
    year: "2025",
    range: "2024 sampai 2025",
    title: "Senior di dua tempat sekaligus.",
    body:
      "Senior Software Engineer di Telkom OCA dan di NDS BRI, lalu Engineering Manager paruh waktu di Mastah Digital. Maret 2025, peringkat 1 kategori Supporter di program Support System BRI dengan skor 10/10.",
  },
  {
    year: "2026",
    range: "2025 sampai 2026",
    title: "Juni 2026: berhenti jadi tamu di produk orang lain.",
    body:
      "Mendirikan Skolain. Lulus S.Kom. Sistem Informasi Binus pada 8 Agustus 2026, IPK 3,85, Magna Cum Laude, setelah empat tahun kuliah tanpa pernah berhenti bekerja.",
    note: "keputusan tentang apa yang dibangun lebih menentukan daripada seberapa rapi membangunnya",
    media: { kind: "video", src: "/assets/wisuda.mp4", poster: "/assets/wisuda-poster.jpg", w: 720, h: 1280, label: "Prosesi wisuda Binus" },
  },
];

export const STAGES = [
  { title: "Ikut turun ke bisnisnya", body: "Melihat langsung cara tim bekerja sehari-hari, bukan menebak dari jauh." },
  { title: "Cari yang paling makan waktu & biaya", body: "Ongkos tiap pilihan dihitung sebelum ada yang dibangun." },
  { title: "Bangun sistem & AI-nya", body: "Alur kerja berbantuan AI dan sistem yang tetap jalan saat dipakai banyak orang." },
  { title: "Sampai tim jalan sendiri", body: "Saya tetap ikut sampai timnya menjalankannya tanpa saya." },
];

export const CONTACTS = [
  { label: "WhatsApp", value: "+62 813 8103 9158", href: WA },
  { label: "Email", value: "rochmanramadhani12@gmail.com", href: "mailto:rochmanramadhani12@gmail.com" },
  { label: "Instagram", value: "@rochmanrmdhnn", href: "https://www.instagram.com/rochmanrmdhnn/" },
  { label: "LinkedIn", value: "in/rochmanrmdhnn", href: "https://www.linkedin.com/in/rochmanrmdhnn/" },
  { label: "GitHub", value: "rochmanrmdhnn", href: "https://github.com/rochmanrmdhnn" },
];

// Alias slide deck lama (deck.html ALIASES). Tautan seperti omanlabs.tech/#skolain di CV yang sudah beredar
// dialihkan ke /deck#skolain oleh skrip di <head>.
export const DECK_ALIASES = [
  "peta", "angka", "wisuda", "produk", "skolain", "hris", "rumahsakit", "wholesale", "omnichannel", "bank", "nucare",
  "linkit", "stack", "primasejahtera", "siloam", "qlola", "oca", "bri", "frames", "klhk", "dokter", "advisory",
  "hegemoni", "seminar", "pdc", "peringkat", "carakerja", "bisnis", "cv", "kontak",
];
