#!/usr/bin/env bash
# Merakit isi omanlabs.tech ke dist/: landing Next.js (site/, static export), bahasa Inggris di "/" dan
# Indonesia di "/id" (id.html; Cloudflare Pages menyajikannya tanpa .html), plus berkas statis yang sudah
# beredar (assets/, CV PDF, PROFIL.md, llms.txt, robots, sitemap, _redirects). deck.html hanya arsip di repo:
# _redirects mengarahkan /deck ke landing, dan hash lamanya dipetakan ke panel bukti (components/Document.tsx).
#
#   ./scripts/build-site.sh     lalu:  npx wrangler pages deploy dist --project-name rochman-ramadhani --branch main
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$REPO/dist"

cd "$REPO/site"
[ -d node_modules ] || npm ci
npm run build

rm -rf "$DIST"
mkdir -p "$DIST"
# site/public/assets adalah symlink ke ../assets untuk dev server; salinan aslinya diambil dari repo.
rsync -a --exclude assets "$REPO/site/out/" "$DIST/"
rsync -a "$REPO/assets" "$DIST/"
cp "$REPO/PROFIL.md" "$REPO/llms.txt" "$REPO/robots.txt" "$REPO/sitemap.xml" "$REPO/_redirects" "$DIST/"

for f in index.html id.html privacy.html terms.html id/privasi.html id/ketentuan.html assets/flags/gb.svg assets/CV_Rochman_Ramadhani_Product_Engineer.pdf assets/CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf _redirects; do
  [ -s "$DIST/$f" ] || { echo "hilang di dist: $f" >&2; exit 1; }
done
printf 'dist siap: %s (%s)\n' "$DIST" "$(du -sh "$DIST" | cut -f1)"
