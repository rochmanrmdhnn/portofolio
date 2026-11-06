import { EMAIL, PATHS, type Legal } from "../content";

// Padanan lib/copy/legal-en.ts. Isi kedua bahasa harus sama; versi Inggris yang diajukan ke portal developer.
const APPS = "Omanlabs Konten dan Skolain Konten";

export const LEGAL_ID: Legal = {
  privacy: {
    title: "Kebijakan Privasi",
    description: `Cara ${APPS}, dua alat publikasi pribadi milik Rochman Ramadhani, dan situs omanlabs.tech menangani data.`,
    intro: `Kebijakan ini berlaku untuk ${APPS}, dua alat publikasi pribadi yang saya jalankan sendiri, serta situs ini, omanlabs.tech. "Saya" berarti Rochman Ramadhani, perorangan yang berdomisili di Jakarta, Indonesia.`,
    sections: [
      {
        id: "tools",
        h: "Fungsi alatnya",
        body: [
          "Alat ini mengunggah video buatan saya sendiri beserta captionnya ke akun media sosial milik atau kelolaan saya: akun pribadi saya dan akun resmi Skolain. Alatnya berjalan di komputer saya sendiri. Orang lain tidak bisa mendaftar atau menghubungkan akun, dan alat ini tidak ditawarkan ke publik.",
          "Platform yang dipakai: TikTok, YouTube, Instagram, Halaman Facebook, LinkedIn, dan Pinterest, masing-masing lewat API resminya.",
        ],
      },
      {
        id: "data",
        h: "Data yang diakses",
        body: [
          "Saat saya menghubungkan akun lewat login resmi platform, platform hanya memberikan yang saya setujui:",
          {
            list: [
              "Informasi dasar akun, seperti ID akun, nama tampilan, dan foto profil, untuk memastikan akun yang terhubung benar.",
              "Access token, dan refresh token bila platform mengeluarkannya, supaya alat bisa memublikasikan ke akun itu.",
              "Video, caption, dan pengaturan posting yang saya pilih untuk dipublikasikan.",
              "ID posting dan status publikasi dari platform, supaya saya bisa memastikan posting sudah tayang.",
            ],
          },
          "Alat ini tidak membaca pesan, kontak, data pribadi pengikut, atau konten orang lain, dan tidak mengumpulkan analitik.",
        ],
      },
      {
        id: "use",
        h: "Penggunaan data",
        body: [
          "Hanya untuk memublikasikan konten saya sendiri dan memeriksa bahwa konten itu sudah tayang. Data dari platform tidak dipakai untuk iklan, tidak dijual, tidak dipakai membuat profil, dan tidak dipakai melatih model AI.",
          "Penggunaan informasi dari Google API mengikuti Google API Services User Data Policy, termasuk ketentuan Limited Use.",
          { links: [{ label: "Google API Services User Data Policy", href: "https://developers.google.com/terms/api-services-user-data-policy" }] },
        ],
      },
      {
        id: "storage",
        h: "Tempat penyimpanan",
        body: [
          "Di komputer saya sendiri. Token disimpan terenkripsi di macOS Keychain, dan video tetap berupa berkas lokal. Alat ini tidak punya server atau database, dan tidak ada yang disalin ke penyimpanan cloud.",
        ],
      },
      {
        id: "sharing",
        h: "Pihak penerima data",
        body: [
          "Data hanya dikirim ke platform tempat posting dipublikasikan. Saya tidak membagikannya ke pihak lain.",
          "Suara narasi video saya dibuat dengan ElevenLabs dari naskah yang saya tulis. Data dari platform tidak dikirim ke sana.",
        ],
      },
      {
        id: "deletion",
        h: "Penyimpanan dan penghapusan data",
        body: [
          "Token disimpan selama akun masih terhubung. Saat saya memutus akun atau berhenti memakai alatnya, tokennya dihapus dari Keychain. ID dan status posting hanya disimpan selama saya perlukan untuk memastikan posting.",
          "Akses bisa dicabut kapan saja dari pengaturan tiap platform:",
          {
            links: [
              { label: "Google dan YouTube: koneksi pihak ketiga", href: "https://myaccount.google.com/connections" },
              { label: "Facebook: aplikasi dan situs web", href: "https://www.facebook.com/settings?tab=applications" },
              { label: "Instagram: aplikasi dan situs web", href: "https://www.instagram.com/accounts/manage_access/" },
              { label: "LinkedIn: layanan yang diizinkan", href: "https://www.linkedin.com/psettings/permitted-services" },
            ],
          },
          {
            list: [
              "TikTok: Pengaturan dan privasi, lalu Keamanan dan izin, lalu Izin aplikasi dan layanan.",
              "Pinterest: bagian aplikasi di pengaturan akun.",
            ],
          },
          `Untuk meminta data tentang Anda dihapus, kirim email ke ${EMAIL}. Saya membalas dalam 7 hari dan menyelesaikan penghapusan dalam 30 hari.`,
        ],
      },
      {
        id: "platforms",
        h: "Ketentuan dan kebijakan platform",
        body: [
          "Ketentuan dan kebijakan privasi tiap platform juga berlaku. Alat ini memakai YouTube API Services: dengan memakai fitur YouTube, Anda setuju dengan Persyaratan Layanan YouTube, dan Kebijakan Privasi Google berlaku.",
          {
            links: [
              { label: "Persyaratan Layanan YouTube", href: "https://www.youtube.com/t/terms" },
              { label: "Kebijakan Privasi Google", href: "https://policies.google.com/privacy" },
              { label: "Kebijakan Privasi TikTok", href: "https://www.tiktok.com/legal/privacy-policy" },
              { label: "Kebijakan Privasi Meta", href: "https://www.facebook.com/privacy/policy/" },
              { label: "Kebijakan Privasi LinkedIn", href: "https://www.linkedin.com/legal/privacy-policy" },
              { label: "Kebijakan Privasi Pinterest", href: "https://policy.pinterest.com/privacy-policy" },
            ],
          },
        ],
      },
      {
        id: "website",
        h: "Situs ini",
        body: [
          "omanlabs.tech tidak memasang cookie dan tidak menjalankan analitik atau iklan. Situs ini di-hosting di Cloudflare, yang memproses data teknis permintaan seperti alamat IP untuk menyajikan dan melindungi situs. Tautan ke WhatsApp, LinkedIn, Instagram, dan GitHub membawa Anda ke layanan itu, dengan kebijakannya sendiri.",
        ],
      },
      {
        id: "children",
        h: "Anak-anak",
        body: ["Alat ini dan situs ini tidak ditujukan untuk anak di bawah 13 tahun."],
      },
      {
        id: "changes",
        h: "Perubahan",
        body: ["Bila kebijakan ini berubah, saya memperbarui halaman ini dan tanggal di bagian atas."],
      },
      {
        id: "contact",
        h: "Kontak",
        body: ["Pertanyaan dan permintaan terkait kebijakan ini dikirim ke email saya:", { links: [{ label: EMAIL, href: `mailto:${EMAIL}` }] }],
      },
    ],
  },
  terms: {
    title: "Ketentuan Layanan",
    description: `Ketentuan untuk ${APPS}, dua alat publikasi pribadi milik Rochman Ramadhani.`,
    intro: `Ketentuan ini berlaku untuk ${APPS}, dua alat publikasi pribadi yang dijalankan Rochman Ramadhani, perorangan yang berdomisili di Jakarta, Indonesia. Menghubungkan akun ke salah satu alat berarti menyetujui ketentuan ini.`,
    sections: [
      {
        id: "service",
        h: "Layanan",
        body: [
          "Alat ini mengunggah video dan caption ke akun media sosial lewat API resmi tiap platform. Sifatnya pribadi: penggunanya hanya saya, dan yang terhubung hanya akun milik atau kelolaan saya. Tidak ada pendaftaran dan tidak ada paket berbayar.",
        ],
      },
      {
        id: "content",
        h: "Konten",
        body: [
          "Saya bertanggung jawab atas semua yang dipublikasikan alat ini. Saya hanya memublikasikan konten buatan saya atau yang hak pakainya saya miliki, dan konten itu mengikuti aturan platform tempatnya diposting.",
        ],
      },
      {
        id: "platforms",
        h: "Aturan platform",
        body: [
          "Alat ini mengikuti ketentuan developer dan kebijakan konten TikTok, YouTube, Meta, LinkedIn, dan Pinterest. Bila platform membatasi atau mengubah API-nya, alat ini ikut menyesuaikan. Memakai fitur YouTube berarti menyetujui Persyaratan Layanan YouTube.",
          {
            links: [
              { label: "Persyaratan Layanan YouTube", href: "https://www.youtube.com/t/terms" },
              { label: "Ketentuan Layanan TikTok", href: "https://www.tiktok.com/legal/terms-of-service" },
              { label: "Ketentuan Layanan Meta", href: "https://www.facebook.com/terms.php" },
              { label: "Perjanjian Pengguna LinkedIn", href: "https://www.linkedin.com/legal/user-agreement" },
              { label: "Ketentuan Layanan Pinterest", href: "https://policy.pinterest.com/terms-of-service" },
            ],
          },
        ],
      },
      {
        id: "not-allowed",
        h: "Penggunaan yang tidak diizinkan",
        body: [
          {
            list: [
              "Menghubungkan akun yang bukan milik atau kelolaan Anda.",
              "Memublikasikan spam, atau konten yang melanggar hak orang lain.",
              "Mengakali batas permintaan, proses review, atau pengaturan privasi platform.",
            ],
          },
        ],
      },
      {
        id: "privacy",
        h: "Privasi",
        body: ["Cara alat ini menangani data dijelaskan di Kebijakan Privasi.", { links: [{ label: "Kebijakan Privasi", href: PATHS.privacy.id }] }],
      },
      {
        id: "ending",
        h: "Mengakhiri akses",
        body: [
          "Akses bisa dicabut kapan saja dari pengaturan platform yang terhubung, seperti dijelaskan di Kebijakan Privasi. Saya bisa berhenti menjalankan alat ini kapan saja, dan saat itu tokennya dihapus.",
        ],
      },
      {
        id: "warranty",
        h: "Tanpa jaminan",
        body: [
          "Alat ini disediakan apa adanya. Publikasi bergantung pada API tiap platform, yang bisa berubah atau gagal, jadi saya tidak menjamin posting tayang pada waktu tertentu.",
        ],
      },
      {
        id: "liability",
        h: "Tanggung jawab",
        body: [
          "Sejauh diizinkan hukum, saya tidak bertanggung jawab atas kerugian tidak langsung dari pemakaian alat ini, termasuk posting yang gagal, tertunda, atau dihapus platform.",
        ],
      },
      {
        id: "law",
        h: "Hukum yang berlaku",
        body: ["Ketentuan ini tunduk pada hukum Republik Indonesia."],
      },
      {
        id: "changes",
        h: "Perubahan",
        body: ["Bila ketentuan ini berubah, saya memperbarui halaman ini dan tanggal di bagian atas."],
      },
      {
        id: "contact",
        h: "Kontak",
        body: ["Pertanyaan tentang ketentuan ini dikirim ke email saya:", { links: [{ label: EMAIL, href: `mailto:${EMAIL}` }] }],
      },
    ],
  },
};
