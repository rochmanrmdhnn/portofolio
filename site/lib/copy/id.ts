import { CV_EN, CV_ID, WA_BASE, type Copy } from "../content";

// Bahasa Indonesia, di /id. Register: "saya" dan "Anda", boleh santai ("bareng", "chat") di kalimat pendek.
// Tanpa em dash. Angka hanya dari PROFIL.md.
export const ID: Copy = {
  lang: "id",
  meta: {
    title: "Rochman Ramadhani · Forward Deployed Engineer & Product Engineer",
    description:
      "Forward Deployed Engineer dan Product Engineer yang membantu pemilik bisnis tumbuh dengan AI dan sistem. Founder Skolain. 6+ tahun membangun untuk bank, rumah sakit, sekolah, dan pemerintah, lengkap dengan buktinya.",
    locale: "id_ID",
    path: "/id",
    og: "/assets/og-landing-id.jpg",
  },
  wa: WA_BASE + encodeURIComponent("Halo Oman, saya mau ngobrol soal bisnis saya."),
  ui: {
    skip: "Lewati ke proyek",
    brand: "Rochman Ramadhani, ke atas",
    nav: "Utama",
    menu: "Menu",
    close: "Tutup",
    language: "Bahasa",
    play: "Putar video",
    pause: "Jeda video",
    proof: "Buka buktinya",
    proofClose: "Tutup",
    proofCta: "Ngobrol soal bisnis Anda di WhatsApp",
  },
  nav: [
    { href: "#work", label: "Proyek" },
    { href: "#approach", label: "Cara kerja" },
    { href: "#now", label: "Sekarang" },
    { href: "#journey", label: "Perjalanan" },
    { href: "#gear", label: "Gear" },
  ],
  hero: {
    kicker: "Rochman Ramadhani, S.Kom. · Forward Deployed Engineer · Product Engineer",
    lines: ["Saya membantu", "pemilik bisnis", "tumbuh", "dengan AI dan sistem."],
    sub: "Saya ikut turun ke bisnis Anda sampai sistem dan AI-nya jalan. Bekalnya: 6+ tahun membangun sistem yang dipakai di bank, rumah sakit, sekolah, dan pemerintah.",
    cta: "Chat di WhatsApp",
    secondary: "Lihat proyeknya",
    note: "tiap angka yang saya klaim, buktinya ada di bawah",
    alt: "Rochman Ramadhani",
    caption: "panggil saja Oman",
  },
  manifesto: {
    label: "Angka bukti",
    text: "50.000+ karyawan PT PKSS absen lewat HRIS yang arsitekturnya saya rancang dari nol. 500+ orang memakai sistem HSE Siloam setiap hari, dibangun tim 6 engineer yang saya pimpin. 1.600+ guru, siswa, dan operator memakai Skolain. BRI mengontrak saya 3× untuk produk digitalnya.",
    link: "buka buktinya satu per satu",
  },
  work: {
    head: ["Sistem yang sudah ", "dipakai", " orang."],
    intro:
      "Sembilan proyek: perbankan, rumah sakit, pemerintahan, kedokteran, kesehatan kerja, dan satu salon rambut. Tiap panel membuka buktinya: rincian teknis, peran saya, dan rekaman atau tangkapan layarnya kalau ada.",
    items: [
      {
        id: "hris",
        org: "PrimaSejahtera · PT PKSS",
        title: "Semua karyawan absen di jam yang sama.",
        body: "Puncak trafiknya cuma beberapa menit tiap pagi, dan justru di menit itu sistemnya tidak boleh goyah. Arsitekturnya saya rancang dari nol dengan Rust dan Flutter, di atas 15 virtual machine on-premises yang diorkestrasi Rancher dan RKE2.",
        stat: { value: "50.000+", label: "pengguna aktif" },
        note: "infrastruktur on-premises-nya saya siapkan sendiri",
      },
      {
        id: "hse",
        org: "HSE · Siloam International Hospitals",
        title: "Sistem keselamatan untuk semua unit rumah sakit.",
        body: "Dipakai seluruh unit rumah sakit dan head office. Sebagai Software Architect saya memimpin 6 engineer dan memegang keputusan arsitektur, code review, dan jadwal rilis. Backend Rust, frontend React, seluruhnya di AWS.",
        stat: { value: "500+", label: "pengguna harian" },
        media: { kind: "video", src: "/assets/hse-rs.mp4", poster: "/assets/hse-rs-poster.jpg", w: 540, h: 960, label: "Sistem HSE Siloam" },
      },
      {
        id: "bri",
        org: "BRI · tiga penugasan, Des 2022 sampai Des 2025",
        title: "Bank yang sama memanggil saya lagi, dua kali.",
        body: "New Delivery System untuk teller dan CS unit kerja. Lalu QLOLA, platform wholesale banking untuk nasabah korporasi, dengan integrasi Perum Bulog. Lalu kembali ke NDS sebagai Senior Software Engineer.",
        stat: { value: "3×", label: "kontrak BRI" },
        note: "dipanggil balik itu penilaian yang tidak bisa saya tulis sendiri",
      },
      {
        id: "adr",
        org: "ADR Medika · PT Anggi Darta Raksita",
        title: "Dari form di situs sampai jadi surat penawaran.",
        body: "Saya membangun dua produk yang saling terhubung untuk perusahaan layanan kesehatan kerja ini: situs publik tiga bahasa dan aplikasi penawaran internal tim sales. Inquiry dari situs masuk ke aplikasi, ditugaskan ke sales, lalu jadi draf penawaran dan surat.",
        stat: { value: "76", label: "wilayah layanan di peta situsnya, di 30 provinsi" },
        note: "keduanya produksi sejak September 2026",
        media: {
          kind: "image",
          src: "/assets/medika-situs-02.jpg",
          w: 390,
          h: 846,
          alt: "Bagian wilayah layanan di adr-medika.co.id pada lebar ponsel: 76 wilayah, 30 provinsi, 6 sektor, dan peta Indonesia dengan rute dari kantor pusat Jakarta",
          cap: "Bagian wilayah layanan",
        },
        link: { href: "https://adr-medika.co.id", label: "adr-medika.co.id" },
      },
      {
        id: "oca",
        org: "Telkom Indonesia · Omni Communication Assistant",
        title: "Migrasi untuk menghadapi trafik puncak.",
        body: "Saya yang mengusulkan migrasi backend dari NestJS ke Go, menyusun rencananya, lalu memimpin pengerjaannya. Tujuannya pemakaian CPU dan memori yang lebih efisien, dan platform yang tetap tahan saat trafik puncak.",
        note: "tidak ada persentase hemat yang saya klaim tanpa diukur",
      },
      {
        id: "marsya",
        org: "Marsya Hairdesign · salon rambut, Gading Serpong",
        title: "Situs salon yang diedit dan diterbitkan pemiliknya sendiri.",
        body: "Pemilik salon mengedit harga, foto, dan jurnal di panel admin, menekan satu tombol Publish, lalu situsnya terbit ulang dengan isi baru. Halaman yang tayang tidak bergantung pada panel admin, jadi situs tetap hidup walau panelnya sedang bermasalah.",
        stat: { value: "140", label: "sel harga diuji identik dengan pricelist salon" },
        media: {
          kind: "image",
          src: "/assets/salon-01.jpg",
          w: 390,
          h: 846,
          alt: "Bagian layanan di marsyahairdesign.id pada lebar ponsel: judul A little hair magic, a lot more you, di atas kartu hair extension",
          cap: "Bagian layanan",
        },
        link: { href: "https://marsyahairdesign.id", label: "marsyahairdesign.id" },
      },
      {
        id: "klhk",
        org: "KLHK · Januari sampai April 2024",
        title: "Ikut menyusun aturan pemantauan lingkungan nasional.",
        body: "Terlibat di sesi penyusunan aturan teknis SPARING untuk air limbah dan CEMS untuk emisi cerobong. Lalu membangun platform yang mengirim data pemantauan ke sistem nasional secara otomatis dan terjadwal.",
        media: { kind: "video", src: "/assets/klhk-sparing.mp4", poster: "/assets/klhk-sparing-poster.jpg", w: 540, h: 960, label: "Sesi SPARING di KLHK" },
      },
      {
        id: "frames",
        org: "FRAMES · Kedokteran Penerbangan FKUI",
        title: "Aplikasi ukur kelelahan untuk awak penerbangan.",
        body: "Diluncurkan Program Studi Spesialis Kedokteran Penerbangan FKUI. Saya memegang produknya sekaligus membangun aplikasinya: versi pertama tahun 2020, lalu versi 2 yang rilis 7 Maret 2024, keduanya dikembangkan bersama Garuda Indonesia Training Center. Sejak 13 Oktober 2026 saya membangunnya ulang dari nol dengan Flutter dan Go.",
        note: "versi 2026 masih di staging, belum ada di toko aplikasi",
        media: { kind: "video", src: "/assets/frames-acara-01.mp4", poster: "/assets/frames-acara-01-poster.jpg", w: 360, h: 640, label: "Acara peluncuran FRAMES" },
      },
      {
        id: "kolegium",
        org: "Kolegium Dokter",
        title: "Dashboard keanggotaan untuk 150.000 dokter umum.",
        body: "Sebagai Product Engineer saya memegang discovery, penentuan lingkup, dan prioritas rilis. Diskusi kebutuhannya langsung bersama Kolegium Dokter, tanpa perantara. November 2026 saya mulai riset dan desain platform yang akan menggantikan situs lama mereka. Kodenya belum dibangun.",
        note: "150.000 itu lingkup rancangan, bukan pengguna aktif hari ini",
        media: { kind: "video", src: "/assets/kedokteran-01.mp4", poster: "/assets/kedokteran-01-poster.jpg", w: 360, h: 640, label: "Hari diskusi kebutuhan" },
      },
    ],
  },
  journey: {
    head: ["Dari ruang kelas SMK ke produk ", "sendiri."],
    chapter: "Bab",
    items: [
      {
        year: "2017",
        range: "2017 sampai 2020",
        title: "Masuk SMK, langsung cari kerja.",
        body: "SMKN 26 Jakarta, jurusan Sistem Informatika Jaringan dan Aplikasi. Tiga juara 1 sebelum lulus: Smart Green Garden di SEAMEO SEAMOLEC 2019, Ngajar di Kamp Kreatif SMK 2019, dan Bayar di PermataYouthPreneur 2020. Juli 2020, magang pertama sebagai Software Developer.",
        note: "lomba dan magang sebelum lulus itu cuma keputusan yang saya ambil lebih awal",
      },
      {
        year: "2020",
        range: "2020 sampai 2022",
        title: "Tim tujuh orang jadi tiga puluh.",
        body: "Di PT Lumos Inisiatif Indonesia, dari Software Engineer lalu Lead Software Engineer sejak April 2021. Saya memimpin tim backend, frontend, dan mobile yang mengantar ERP, SCM, dan CRM ke production, dan ikut langsung di hiring dan onboarding.",
        note: "pertama kali saya mengurus orang, di samping kode",
      },
      {
        year: "2022",
        range: "2022 sampai 2023",
        title: "Masuk bank. Tiga penugasan jalan bersamaan.",
        body: "New Delivery System di BRI, Technical Lead Prima Super App di Infobit, dan sistem sektor pemerintahan untuk Kementerian Dalam Negeri. Tahun yang sama saya mulai kuliah Sistem Informasi di Binus, kelas online, sambil kerja penuh waktu.",
      },
      {
        year: "2024",
        range: "2023 sampai 2024",
        title: "Bank, penerbangan, dan lingkungan hidup dalam tahun yang sama.",
        body: "QLOLA di BRI, FRAMES v2 rilis 7 Maret, dan konsultansi SPARING dan CEMS untuk KLHK. Di BRI Product Development Conference bersama Tech in Asia, 25 Juni 2024, saya mulai belajar sisi produk seserius sisi tekniknya.",
        media: { kind: "image", src: "/assets/pdc-01.jpg", w: 1400, h: 1050, alt: "Panggung BRI Product Development Conference bersama Tech in Asia" },
      },
      {
        year: "2025",
        range: "2024 sampai 2025",
        title: "Senior di dua tempat sekaligus.",
        body: "Senior Software Engineer di Telkom OCA dan di NDS BRI, lalu Engineering Manager paruh waktu di Mastah Digital. Maret 2025, peringkat 1 kategori Supporter di program Support System BRI dengan skor 10/10.",
      },
      {
        year: "2026",
        range: "2025 sampai 2026",
        title: "Juni 2026: berhenti jadi tamu di produk orang lain.",
        body: "Mendirikan Skolain. Lulus S.Kom. Sistem Informasi Binus pada 8 Agustus 2026, IPK 3,85, Magna Cum Laude, setelah empat tahun kuliah tanpa pernah berhenti bekerja.",
        note: "di sini saya belajar: memilih apa yang dibangun lebih menentukan daripada seberapa rapi membangunnya",
        media: { kind: "video", src: "/assets/wisuda.mp4", poster: "/assets/wisuda-poster.jpg", w: 720, h: 1280, label: "Prosesi wisuda Binus" },
      },
    ],
  },
  owners: {
    head: ["Kalau ", "Anda", " pemilik bisnis."],
    lead: "Empat tahap yang saya jalani bareng bisnis Anda, dari kunjungan pertama sampai serah terima.",
    cta: "Ceritakan bisnis Anda",
    stages: [
      { title: "Ikut turun ke bisnisnya", body: "Saya datang dan melihat langsung cara tim Anda bekerja sehari-hari." },
      { title: "Cari yang paling makan waktu dan biaya", body: "Ongkos tiap pilihan saya hitung sebelum ada yang dibangun." },
      { title: "Bangun sistem dan AI-nya", body: "Alur kerja berbantuan AI, dan sistem yang tetap jalan saat dipakai banyak orang." },
      { title: "Sampai tim jalan sendiri", body: "Saya melatih orang-orang yang akan memakainya, dan tetap mendampingi sampai sistemnya jadi bagian kerja harian mereka." },
    ],
  },
  now: {
    head: ["Yang saya kerjakan ", "sekarang."],
    skolain: {
      role: "Founder & Product Engineer · sejak Juni 2026",
      body: "Produk pertama yang saya dirikan sendiri: CBT, LMS, kehadiran, manajemen sekolah, dan e-learning dalam satu alur kerja. Dibangun dan diuji langsung di kelas SMK Jakarta Pusat 1. SMKS YP 17 Baradatu di Lampung menemukannya lewat media sosial, lalu berlangganan sampai sekarang.",
      big: "1.600+",
      bigLabel: "pengguna aktif: guru, siswa, dan operator",
    },
    partners: [
      {
        role: "Technology Partner · sejak Mei 2026",
        title: "Grup kecantikan multi-brand",
        body: "Saya mendampingi keputusan teknologi dan arah implementasi sistem internalnya. Ongkos sebuah pilihan teknis saya nilai sejak awal, sebelum tim telanjur mengerjakannya.",
        note: "ikut dari keputusan sampai sistemnya jadi",
        photos: [{ src: "/assets/hegemoni-01.jpg", alt: "Pertemuan bersama tim grup kecantikan multi-brand", cap: "Interaksi Kopi, Bekasi", tilt: -2.5, speed: 36 }],
        flip: true,
      },
      {
        role: "AI Learning Partner · sejak Agustus 2026",
        title: "Belajar AI bareng Coach Rheo",
        body: "Coach Rheo menjalankan doatrto.com dan beberapa unit bisnis lain. Kami belajar AI bareng, langsung di operasional sehari-harinya, lalu menyusun alur kerja berbantuan AI untuk pekerjaan yang berulang tiap hari.",
        note: "duduk satu meja, belajar dari pekerjaan yang sedang jalan",
        photos: [
          { src: "/assets/caezar-01.jpg", alt: "Sesi belajar AI bareng Coach Rheo", cap: "sesi kerja", tilt: 2, speed: 24 },
          { src: "/assets/caezar-03.jpg", alt: "Membedah satu use case AI bersama Coach Rheo", cap: "bedah use case", tilt: -3, speed: 56 },
        ],
      },
    ],
    building: {
      title: "Juga sedang berjalan",
      items: [
        {
          name: "Koperasi by Erat",
          role: "Produk sendiri · sejak Oktober 2026",
          status: "masih staging",
          body: "Aplikasi untuk koperasi simpan pinjam. Transaksi harian seperti setoran dan angsuran pinjaman langsung jadi pembukuan SAK EP. Data tiap koperasi dipisahkan lewat Row Level Security di PostgreSQL.",
        },
        {
          name: "SIM Faskes",
          role: "Riset dan spesifikasi · sejak November 2026",
          status: "belum ada kode",
          body: "Sistem untuk klinik dan apoteknya yang berjalan dari satu data. Sejauh ini: 7 sistem pembanding diamati, 26 proses ditulis lengkap dengan kriteria penerimaannya, dan 111 layar didesain.",
        },
        {
          name: "PT Kharisma Andal Raya",
          role: "Sistem merek dan situs perusahaan · November 2026",
          status: "situsnya sudah tayang",
          body: "Logo, warna, huruf, stempel perusahaan, dan templat dokumen untuk surat, penawaran, dan faktur, ditambah situs perusahaannya.",
          link: { href: "https://kharisma-andal-raya.pages.dev", label: "kharisma-andal-raya.pages.dev" },
        },
      ],
    },
  },
  gear: {
    head: ["Yang selalu ikut ", "kerja."],
    lead: "Ya, saya anak Apple. Semuanya satu akun, jadi pekerjaan pindah dari laptop ke ponsel tanpa mengirim file ke diri sendiri.",
    role: "Mesin utama",
    specLabel: "memori, chip M3 Max",
    note: "lega untuk model AI yang jalan langsung di laptop",
    items: [
      { name: "iPhone", what: "Tombol WhatsApp di situs ini berakhir di sini." },
      { name: "iPad", what: "Layar kedua di samping Mac." },
      { name: "AirPods Pro", what: "Pindah sendiri dari Mac ke iPhone saat ada telepon masuk." },
      {
        name: "Plaud Note Pro",
        what: "Perekam suara AI. Obrolan panjang jadi transkrip dan ringkasan, jadi saya bisa fokus mendengarkan.",
        note: "satu-satunya yang bukan Apple",
      },
      { name: "Claude", what: "Teman berpikir dan menulis kode, setiap hari." },
    ],
  },
  contact: {
    head: ["Punya bisnis dan penasaran AI cocoknya di ", "bagian mana?"],
    lead: "Chat saja lewat WhatsApp, atau DM di Instagram.",
    cta: "Chat di WhatsApp",
    channels: "Kontak",
    docsLabel: "Dokumen",
    docs: [
      { href: CV_ID, label: "CV, tiga halaman (PDF)", value: "Hasil, angka, dan apa saja yang saya kerjakan." },
      { href: CV_EN, label: "CV bahasa Inggris (PDF)", value: "CV yang sama dalam bahasa Inggris, tiga halaman.", lang: "en" },
    ],
    top: "Kembali ke atas",
  },
  legal: {
    label: "Legal",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    home: "Kembali ke beranda",
    updated: "Terakhir diperbarui 6 November 2026",
  },
  proofs: [
    {
      id: "hris",
      org: "PrimaSejahtera · PT PKSS",
      title: "50.000 karyawan absen di jam yang sama.",
      lead: ["Sistem HRIS berskala nasional yang harus tetap tenang justru di menit ketika semua orang memakainya sekaligus."],
      blocks: [
        {
          kind: "entries",
          items: [
            { k: "Arsitektur", t: "Dari nol", d: "Domain model, desain API, dan strategi scaling untuk trafik high-concurrency. Dibangun dengan Rust dan Flutter." },
            { k: "Infrastruktur", t: "On-premises, saya siapkan sendiri", d: "Virtualisasi KVM berisi 15 virtual machine, diorkestrasi Rancher dan Kubernetes RKE2." },
            { k: "Observability", t: "LGTM Stack", d: "Loki, Grafana, Tempo, dan Mimir sebagai platform pemantauan seluruh service." },
          ],
        },
      ],
    },
    {
      id: "hse",
      org: "HSE · Siloam International Hospitals",
      title: "Sistem keselamatan untuk semua unit rumah sakit.",
      kicker: "Health, Safety & Environment",
      media: [{ kind: "video", src: "/assets/hse-rs.mp4", poster: "/assets/hse-rs-poster.jpg", w: 540, h: 960, label: "Sistem HSE Siloam" }],
      blocks: [
        {
          kind: "list",
          items: [
            "Dipakai seluruh unit rumah sakit dan head office, 500+ pengguna harian.",
            "Sebagai Software Architect, saya memimpin 6 engineer dan memegang keputusan arsitektur, code review, dan jadwal rilis.",
            "Backend Rust; frontend Bun, Vite, dan React.",
            "Seluruh infrastruktur di AWS: ECS, ECR, RDS PostgreSQL, CloudWatch, S3, ALB, VPC, IAM.",
          ],
        },
      ],
      note: "rumah sakit itu mission-critical: sistem mati berarti insiden tidak tercatat",
    },
    {
      id: "bri",
      org: "BRI · tiga penugasan",
      title: "Tiga kali dikontrak bank yang sama.",
      blocks: [
        {
          kind: "entries",
          items: [
            {
              k: "Des 2022 sampai Des 2023",
              t: "New Delivery System",
              d: "Membangun dan menjaga aplikasi untuk teller dan CS unit kerja, microservices di atas OpenShift. Mempersingkat waktu penelusuran masalah produksi lewat ELK Stack, Kafka, dan Jaeger.",
            },
            {
              k: "Des 2023 sampai Ags 2024",
              t: "QLOLA",
              d: "Pindah ke sisi wholesale banking, platform digital nasabah korporasi. Bekerja dalam siklus rilis perbankan yang menuntut verifikasi berjenjang sebelum production.",
            },
            {
              k: "Des 2024 sampai Des 2025",
              t: "NDS, kembali sebagai Senior",
              d: "Menahan penurunan kualitas kode lewat code review dan penegakan coding standard, sekaligus jadi rujukan teknis bagi engineer lain. SAST, DAST, dan SonarQube jadi bagian siklus rilis, tidak ditaruh di akhir.",
            },
          ],
        },
        {
          kind: "entries",
          title: "Di QLOLA: backend, fase integrasi mitra",
          items: [
            { t: "Integrasi Perum Bulog", d: "Membuka jalur transaksi baru bagi nasabah korporasi lewat integrasi dengan salah satu mitra strategis berskala nasional." },
            { t: "Otomasi Rundeck", d: "Mengurangi intervensi manual tim operasional pada proses harian lewat otomasi dan orkestrasi." },
            { t: "Uji beban Locust", d: "Memastikan sistem siap sebelum rilis, sesuai tuntutan keandalan layanan nasabah korporasi." },
          ],
        },
      ],
      note: "yang saya bawa dari sini: cara produk bank disusun, diuji, dan dirilis",
    },
    {
      id: "adr",
      org: "ADR Medika · PT Anggi Darta Raksita · produksi sejak September 2026",
      title: "Inquiry dari situs yang berakhir jadi surat penawaran.",
      kicker: "Layanan kesehatan kerja untuk lokasi yang jauh dari kota",
      lead: [
        "Dua produk yang saling mengoper pekerjaan. Situs publik mendatangkan inquiry dari perusahaan yang butuh tenaga medis atau klinik di lokasi kerjanya. Di aplikasi internal, tim sales ADR Medika mengubah tiap inquiry jadi penawaran.",
        "Peran saya: Product Engineer untuk keduanya, dari keputusan produk dan arsitektur sampai rilis.",
      ],
      media: [
        {
          kind: "image",
          src: "/assets/medika-situs-01.jpg",
          w: 390,
          h: 846,
          alt: "Beranda adr-medika.co.id pada lebar ponsel, dengan judul Layanan kesehatan untuk tempat kerja yang jauh dari kota",
          cap: "Situs publik, beranda",
        },
        {
          kind: "image",
          src: "/assets/medika-situs-02.jpg",
          w: 390,
          h: 846,
          alt: "Bagian wilayah layanan di adr-medika.co.id: 76 wilayah, 30 provinsi, 6 sektor, dan peta Indonesia",
          cap: "Situs publik, wilayah layanan",
        },
        {
          kind: "image",
          src: "/assets/medika-sales-02.jpg",
          w: 600,
          h: 1044,
          alt: "Daftar penawaran di aplikasi sales pada lebar ponsel, berisi nama perusahaan contoh dan status tiap penawaran",
          cap: "Aplikasi sales, daftar penawaran. Data contoh.",
        },
        {
          kind: "image",
          src: "/assets/medika-sales-01.jpg",
          w: 1000,
          h: 1040,
          alt: "Satu inquiry di aplikasi sales: perusahaan dan kontak contoh, status Ditugaskan, dan tombol Mulai diproses, Catat tindak lanjut, dan Buat penawaran",
          cap: "Aplikasi sales, inquiry yang sudah ditugaskan ke sales. Gambarnya dari panduan pengguna aplikasi, makanya ada penanda bernomor. Data contoh.",
        },
      ],
      blocks: [
        {
          kind: "entries",
          title: "Perjalanan satu inquiry",
          steps: true,
          items: [
            { t: "Form di situs", d: "Perusahaan mengisi form inquiry di adr-medika.co.id. Situsnya tidak menyimpan database sendiri. Server situs meneruskan inquiry itu ke aplikasi internal." },
            { t: "Ditugaskan ke sales", d: "Inquiry muncul di aplikasi, lalu admin menugaskannya ke salah satu sales." },
            { t: "Draf penawaran", d: "Sales mengubahnya jadi draf. Data kontak ikut tersalin, dan harganya diambil dari daftar yang dijaga admin." },
            { t: "Surat", d: "Aplikasi menghasilkan surat penawaran A4 dalam bentuk PDF atau DOCX. Klien membukanya lewat tautan berkode akses, lalu menerima atau menolak." },
          ],
        },
        {
          kind: "entries",
          title: "Dua produknya",
          items: [
            {
              k: "Produksi sejak 25 September 2026",
              t: "Situs publik, adr-medika.co.id",
              d: "Bahasa Indonesia, Inggris, dan Mandarin Sederhana. 6 layanan, peta 76 wilayah layanan di 30 provinsi, dan 61 artikel tentang regulasi dan operasional kesehatan kerja. Dibangun dengan Next.js, kontennya ditulis dalam MDX.",
            },
            {
              k: "Produksi sejak 21 September 2026",
              t: "Aplikasi penawaran internal",
              d: "Dua peran, admin dan sales. Admin menetapkan harga, sales menyusun penawaran per lokasi kerja dari harga itu. Kolom biaya tidak pernah dikirim ke peran sales. Dibangun dengan Next.js dan PostgreSQL.",
            },
          ],
        },
      ],
      caveat: {
        t: "Yang tidak saya tampilkan atau klaim",
        d: "Aplikasinya ada di balik login, jadi tidak ditautkan di sini. Tangkapan layarnya berisi data contoh, dan nama perusahaan di dalamnya karangan. Saya tidak mengklaim jumlah pengguna dan tidak menyebut klien ADR Medika.",
      },
      note: "situs dan aplikasi memakai inquiry yang sama, jadi tidak ada yang mengetik ulang",
    },
    {
      id: "oca",
      org: "Telkom Indonesia · Omni Communication Assistant",
      title: "Migrasi untuk menghadapi trafik puncak.",
      blocks: [
        {
          kind: "entries",
          steps: true,
          items: [
            { t: "Saya usulkan", d: "Migrasi untuk meningkatkan efisiensi CPU dan memori saat trafik puncak." },
            { t: "Saya rencanakan", d: "Migrasi backend NestJS ke Go, bertahap, tanpa menghentikan layanan." },
            { t: "Saya pimpin", d: "Eksekusi bersama tim, dengan fokus pada ketahanan platform saat trafik naik." },
          ],
        },
        {
          kind: "list",
          title: "Di platform yang sama",
          items: [
            "Kanal pelanggan baru: Jatis, Meta (WhatsApp, Messenger), dan TikTok.",
            "Observability dengan Prometheus, LGTM Stack, dan Datadog.",
            "Microservices event-driven berbasis Kafka dan CDC dari MongoDB, di Alibaba Cloud.",
          ],
        },
      ],
      caveat: {
        t: "Yang tidak saya klaim",
        d: "Efisiensi bergantung pada beban kerja dan arsitektur. Tidak ada persentase penghematan yang saya klaim tanpa pengukuran di proyeknya.",
      },
    },
    {
      id: "marsya",
      org: "Marsya Hairdesign · tayang di marsyahairdesign.id",
      title: "Situs salon yang diedit dan diterbitkan pemiliknya sendiri.",
      kicker: "Salon hair extension dan coloring, Gading Serpong",
      lead: [
        "Di situs salon, harga dan pesan reservasi harus benar setiap hari. Karena itu isinya dipegang pemilik salon, dan situsnya tetap jalan walau panel admin sedang bermasalah.",
        "Peran saya: Product Engineer. Saya membangun situsnya, menyiapkan panel adminnya, dan membangun alur terbitnya.",
      ],
      media: [
        {
          kind: "image",
          src: "/assets/salon-01.jpg",
          w: 390,
          h: 846,
          alt: "Bagian layanan di marsyahairdesign.id pada lebar ponsel: judul A little hair magic, a lot more you, di atas kartu hair extension",
          cap: "Bagian layanan di lebar ponsel, diambil 18 September 2026",
        },
      ],
      blocks: [
        {
          kind: "entries",
          title: "Perjalanan satu perubahan harga",
          steps: true,
          items: [
            { t: "Pemilik mengedit", d: "Harga, foto, dan jurnal diedit di panel admin yang berjalan di atas Directus." },
            { t: "Satu tombol Publish", d: "Menekan Publish membangun ulang situs dengan isi baru. Tidak ada yang perlu menyentuh kode." },
            { t: "Halaman statis terbit", d: "Situsnya dibangun dengan Astro. Isi hanya dibaca saat build, dan halaman yang tayang tidak pernah memanggil panel admin." },
          ],
        },
        {
          kind: "list",
          title: "Yang diperiksa",
          items: [
            "140 sel harga diuji identik dengan pricelist salon.",
            "Pemeriksaan otomatis juga mencakup pesan reservasi WhatsApp, alur di browser, dan tata letak.",
          ],
        },
      ],
      caveat: {
        t: "Yang tidak saya klaim",
        d: "Saya tidak mengklaim rating, jumlah pengunjung, atau skor performa untuk situs ini. Tangkapan layarnya sengaja tidak memuat foto pelanggan dan daftar harga.",
      },
    },
    {
      id: "klhk",
      org: "KLHK · Januari sampai April 2024",
      title: "Ikut menyusun aturan pemantauan lingkungan nasional.",
      kicker: "Kementerian Lingkungan Hidup dan Kehutanan",
      media: [{ kind: "video", src: "/assets/klhk-sparing.mp4", poster: "/assets/klhk-sparing-poster.jpg", w: 540, h: 960, label: "Sesi SPARING di KLHK" }],
      blocks: [
        {
          kind: "list",
          items: [
            "Terlibat di sesi penyusunan aturan teknis SPARING dan CEMS: ketentuan nasional tentang cara industri wajib memantau dan melaporkan buangannya secara terus-menerus.",
            "SPARING untuk mutu air limbah: COD, BOD, pH, TSS, dan debit.",
            "CEMS untuk emisi udara dari cerobong: SO₂, NOₓ, O₂, dan partikulat.",
            "Membangun platform yang mengirim data pemantauan ke sistem nasional secara otomatis dan terjadwal, dengan jalur pelaporan manual sebagai cadangan saat pengiriman gagal.",
          ],
        },
      ],
      note: "dua medium yang berbeda, dan sering dikira satu hal yang sama",
    },
    {
      id: "frames",
      org: "FRAMES · v1 2020 · v2 rilis 7 Maret 2024 · dibangun ulang sejak 13 Oktober 2026",
      title: "Aplikasi ukur kelelahan untuk awak penerbangan.",
      kicker: "Fatigue Risk Assessment with MEdical adviceS",
      lead: [
        "Diluncurkan Program Studi Spesialis Kedokteran Penerbangan, Departemen Ilmu Kedokteran Komunitas, Fakultas Kedokteran Universitas Indonesia. Versi 1 dan 2 dikembangkan bersama Garuda Indonesia Training Center serta para pakar kedokteran.",
        "Aplikasinya menilai risiko kelelahan, tingkat aktivitas fisik, dan kebiasaan tidur awak penerbangan, dan dirancang agar bisa diintegrasikan ke sistem maskapai maupun penerbangan militer. Peran saya di ketiga versinya: Product Engineer, memegang produknya sekaligus membangun aplikasinya.",
      ],
      media: [
        { kind: "image", src: "/assets/frames-launch-01.jpg", w: 1066, h: 711, alt: "Peluncuran FRAMES di Fakultas Kedokteran Universitas Indonesia" },
        { kind: "video", src: "/assets/frames-acara-01.mp4", poster: "/assets/frames-acara-01-poster.jpg", w: 360, h: 640, label: "Acara peluncuran di FKUI" },
        { kind: "video", src: "/assets/frames-acara-02.mp4", poster: "/assets/frames-acara-02-poster.jpg", w: 360, h: 640, label: "Disiarkan ke peserta daring" },
        {
          kind: "image",
          src: "/assets/frames-2026-01.jpg",
          w: 603,
          h: 1312,
          alt: "Gambar toko FRAMES 2026: beranda berisi daftar kuesioner periode ini, CIS20R berikutnya, lalu Jenkins Sleep Scale dan GPAQ",
          cap: "Versi 2026, beranda. Gambar toko dari berkas desain, data sintetis.",
        },
        {
          kind: "image",
          src: "/assets/frames-2026-02.jpg",
          w: 603,
          h: 1312,
          alt: "Gambar toko FRAMES 2026: hasil CIS20R 92 poin dengan batas 76, disertai catatan bahwa ini bukan diagnosis",
          cap: "Versi 2026, hasil. Data sintetis.",
        },
        {
          kind: "image",
          src: "/assets/frames-2026-03.jpg",
          w: 603,
          h: 1312,
          alt: "Gambar toko FRAMES 2026: grafik tren enam hasil CIS20R dari Juni sampai November dengan garis batasnya",
          cap: "Versi 2026, tren. Data sintetis.",
        },
      ],
      blocks: [
        {
          kind: "entries",
          title: "Tiga versi",
          items: [
            { k: "Oktober sampai Desember 2020", t: "Versi 1", d: "Aplikasi Android, dibangun dengan Laravel dan Kotlin." },
            { k: "Rilis 7 Maret 2024", t: "Versi 2", d: "Ditulis ulang dengan Kotlin, arsitektur MVVM, 108 berkas." },
            {
              k: "Sejak 13 Oktober 2026",
              t: "Versi 2026",
              d: "Mulai lagi dari repo kosong: aplikasi Flutter untuk iOS dan Android, API Go, dan admin web untuk yang meninjau jawaban.",
            },
          ],
        },
        {
          kind: "list",
          title: "Yang saya bangun di versi 2",
          items: [
            "Mesin kuesioner dengan riwayat penilaian per pengguna, jadi hasilnya bisa dibandingkan antarwaktu, tidak sekali pakai.",
            "Pertanyaan kebiasaan tidur dan aktivitas fisik punya alur dan layar detailnya sendiri, karena cara menilainya memang berbeda.",
            "Profil penerbang: jam terbang, nomor lisensi, tipe pesawat, rating, dan maskapai, supaya hasil penilaian terbaca dalam konteks operasional.",
            "Pengingat terjadwal lewat Firebase Cloud Messaging, dan penyimpanan lokal Room supaya penilaian tetap bisa diisi tanpa koneksi.",
          ],
        },
        {
          kind: "list",
          title: "Isi versi 2026",
          items: [
            "Pilot mengisi tiga kuesioner: CIS20R untuk kelelahan kronis, GPAQ untuk aktivitas fisik, dan Jenkins Sleep Scale untuk tidur.",
            "Hasil tampil begitu jawaban terkirim. Sesudah itu dokter Kedokteran Penerbangan meninjaunya di admin web.",
            "4 peran: pilot, peninjau Kedokteran Penerbangan, staf safety maskapai, dan superadmin. Data dipisah per maskapai.",
            "Aplikasi dan adminnya tersedia dalam bahasa Indonesia dan Inggris.",
          ],
        },
      ],
      caveat: {
        t: "Yang tidak saya klaim soal versi 2026",
        d: "Masih berjalan di staging dan belum rilis di App Store maupun Google Play. Integrasi dengan REDCap, basis data riset FKUI, masih memakai tiruan. Persetujuan komite etik belum ada. Saya tidak mengklaim jumlah pilot atau maskapai pemakainya.",
      },
      note: "kelelahan awak pesawat itu isu keselamatan, dan sebelum ini belum ada cara menilainya secara mandiri",
    },
    {
      id: "kolegium",
      org: "Kolegium Dokter · dashboard sudah rilis · platform baru masih desain",
      title: "Dashboard keanggotaan untuk 150.000 dokter umum.",
      media: [{ kind: "video", src: "/assets/kedokteran-01.mp4", poster: "/assets/kedokteran-01-poster.jpg", w: 360, h: 640, label: "Hari diskusi kebutuhan" }],
      blocks: [
        {
          kind: "list",
          items: [
            "Sebagai Product Engineer, saya memegang discovery, penentuan lingkup, dan prioritas rilis.",
            "Keanggotaan berskala nasional, dirancang untuk sampai 150.000 dokter umum di seluruh Indonesia.",
            "Diskusi kebutuhan dilakukan langsung bersama Kolegium Dokter, tanpa perantara.",
          ],
        },
        {
          kind: "list",
          title: "November 2026: riset dan desain platform pengganti situs lama",
          items: [
            "4 modul dalam lingkupnya: Pengumuman, Keanggotaan, Event, dan LMS.",
            "5 benchmark: satu untuk landing dan satu untuk tiap modul.",
            "Sekitar 680 layar didesain di Figma, per peran, termasuk keadaan memuat dan kosong.",
            "Kode platform ini belum dibangun. Yang ada hari ini riset dan desainnya.",
          ],
        },
      ],
      caveat: { t: "Yang tidak saya klaim", d: "Angka 150.000 itu lingkup rancangan, bukan jumlah pengguna aktif hari ini." },
    },
    {
      id: "skolain",
      org: "Skolain · temuan lapangan sampai hari ini",
      title: "Rekap nilai berhari-hari. Data yang sama diinput dua kali.",
      blocks: [
        {
          kind: "compare",
          a: "Sebelum",
          b: "Sesudah",
          rows: [
            { label: "Rekap nilai", a: "Hitungan hari, dikumpulkan manual dari banyak file.", b: "Real-time. Penilaian KBM harian dan ujian sudah tersistem." },
            { label: "Ujian", a: "Kertas, digandakan, dijaga, lalu dikoreksi satu-satu.", b: "CBT dengan anti-contek dan penilaian otomatis." },
            { label: "Absensi", a: "Google Form dan Excel, direkap ulang tiap akhir bulan.", b: "Modul kehadiran yang langsung masuk ke satu alur kerja." },
            { label: "Data pokok", a: "Diinput dua kali: sekali di Dapodik, sekali di sistem sekolah.", b: "Integrasi Dapodik, satu sumber data." },
            { label: "e-Rapor", a: "Ekspor manual, formatnya sering tidak cocok.", b: "Modul yang kompatibel dengan e-Rapor. Ini yang membuat sekolah bertahan memakainya." },
          ],
        },
        {
          kind: "entries",
          title: "Hari ini",
          items: [
            { k: "Adopsi", t: "1.600+ pengguna aktif", d: "Guru, siswa, dan operator ikut memakainya, tidak berhenti di akun admin." },
            { k: "Mitra pengembangan", t: "SMK Jakarta Pusat 1", d: "Sekolah tempat produk ini dibangun dan diuji langsung di kelas." },
            { k: "Klien berlangganan", t: "SMKS YP 17 Baradatu, Lampung", d: "Menemukan Skolain lewat media sosial kami, lalu berlangganan sampai sekarang." },
          ],
        },
        {
          kind: "entries",
          title: "Peran saya: dari keluhan guru sampai rilis",
          steps: true,
          items: [
            { t: "Discovery", d: "Duduk bareng guru, operator, dan kepala sekolah. Cari keluhan yang paling sering, bukan yang paling nyaring." },
            { t: "User story dan acceptance criteria", d: "Temuan diubah jadi keputusan lingkup yang siap dieksekusi tim, dituangkan di Jira." },
            { t: "Alur dan sequence", d: "User flow dan sequence diagram di Mermaid, supaya tidak ada bagian yang ditebak sendiri-sendiri." },
            { t: "Rilis", d: "Prioritas rilis, onboarding, dan pelatihan guru sampai produknya benar-benar dipakai." },
            { t: "Ukur", d: "Feedback lapangan jadi bahan iterasi kuartal berikutnya." },
          ],
        },
      ],
      note: "arsitektur multi-tenant yang saya rancang sendiri menjaga biaya tetap stabil, termasuk saat ujian serentak",
    },
  ],
};
