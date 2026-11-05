import type { NextConfig } from "next";

// Static export: Cloudflare Pages menyajikan out/ apa adanya (lihat scripts/build-site.sh).
// Gambar tidak dioptimasi di build karena tidak ada image server; aset sudah diperkecil oleh scripts/build-assets.sh.
const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default config;
