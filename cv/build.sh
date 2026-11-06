#!/usr/bin/env bash
# Merender cv.html (Indonesia) dan cv-en.html (English) jadi PDF lewat Chrome
# headless, lalu mengecek hasilnya masih terbaca sebagai teks oleh parser ATS.
#
#   ./build.sh        keduanya
#   ./build.sh id     hanya CV_Rochman_Ramadhani_Product_Engineer.pdf
#   ./build.sh en     hanya CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf
#
# Chrome dipilih karena: nol dependensi baru (sudah terpasang), sumbernya
# plain-text yang bisa di-diff di git, dan hasilnya teks asli satu kolom —
# bukan gambar teks. Pandoc/LaTeX/Typst/WeasyPrint tidak ada di mesin ini.
set -euo pipefail

CV="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
WHICH="${1:-all}"

case "$WHICH" in id|en|all) ;; *) echo "pakai: $0 [id|en]" >&2; exit 2;; esac
[ -x "$CHROME" ] || { echo "Google Chrome tidak ditemukan di $CHROME" >&2; exit 1; }

# render <sumber html> <nama pdf di assets/> <probe ATS, satu per baris>
render() {
  local src="$CV/$1" out="$CV/../assets/$2" probes="$3"
  mkdir -p "$(dirname "$out")"

  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --export-tagged-pdf \
    --virtual-time-budget=10000 \
    --print-to-pdf="$out" \
    "file://$src" 2>/dev/null

  [ -s "$out" ] || { echo "PDF gagal dibuat: $out" >&2; exit 1; }
  printf 'PDF   : %s (%s)\n' "$out" "$(du -h "$out" | cut -f1)"

  # ---------- regresi ATS ----------
  # Kalau salah satu baris ini hilang, berarti PDF-nya tidak terbaca sebagai teks
  # biasa dan CV-nya akan tersaring sebelum sampai ke mata manusia.
  if ! command -v pdftotext >/dev/null 2>&1; then
    echo "LEWAT : pdftotext tidak terpasang, cek ATS dilewati (brew install poppler)" >&2
    return 0
  fi

  local txt probe fail=0
  txt="$(pdftotext -layout "$out" - )"
  while IFS= read -r probe; do
    [ -z "$probe" ] && continue
    if printf '%s' "$txt" | grep -qF "$probe"; then
      printf '  ok   %s\n' "$probe"
    else
      printf '  GAGAL %s\n' "$probe" >&2; fail=1
    fi
  done <<<"$probes"

  # ---------- tautan harus benar-benar bisa diklik ----------
  # Teks URL saja tidak cukup: yang membuat email/WhatsApp/GitHub bisa dibuka
  # langsung dari PDF adalah anotasi /URI. Anotasinya bisa berada di dalam stream
  # terkompresi, jadi semua stream di-inflate dulu sebelum diperiksa.
  python3 - "$out" <<'PYEOF' || { echo "TAUTAN: ada yang tidak tertanam" >&2; exit 1; }
import re, sys, zlib
raw = open(sys.argv[1], 'rb').read()
found = set()
for m in re.finditer(rb'stream\r?\n', raw):
    s = m.end(); e = raw.find(b'endstream', s)
    if e < 0: continue
    try: data = zlib.decompress(raw[s:e])
    except Exception: data = raw[s:e]
    found |= {u.decode('latin1') for u in re.findall(rb'/URI\s*\((.*?)\)', data, re.S)}
found |= {u.decode('latin1') for u in re.findall(rb'/URI\s*\((.*?)\)', raw, re.S)}
harus = ['mailto:', 'wa.me/', 'linkedin.com/in/', 'github.com/', 'omanlabs.tech']
gagal = [w for w in harus if not any(w in f for f in found)]
for w in harus:
    print(('  ok   tautan ' if w not in gagal else '  GAGAL tautan ') + w)
sys.exit(1 if gagal else 0)
PYEOF

  local pages
  pages=$(pdfinfo "$out" 2>/dev/null | awk '/^Pages:/{print $2}')
  printf 'Halaman: %s\n' "${pages:-?}"
  [ "$fail" = 0 ] && echo "ATS   : lolos" || { echo "ATS   : ADA YANG HILANG" >&2; exit 1; }
}

if [ "$WHICH" != en ]; then
  render cv.html CV_Rochman_Ramadhani_Product_Engineer.pdf "\
Rochman Ramadhani Chiefto Irawan
FORWARD DEPLOYED ENGINEER · PRODUCT ENGINEER · TECH FOUNDER
+62 813 8103 9158
rochmanramadhani12@gmail.com
linkedin.com/in/rochmanrmdhnn
github.com/rochmanrmdhnn
omanlabs.tech
PENGALAMAN PROFESIONAL
PENDIDIKAN
Peringkat 1 — kategori Supporter"
fi

if [ "$WHICH" != id ]; then
  render cv-en.html CV_Rochman_Ramadhani_Forward_Deployed_Engineer.pdf "\
Rochman Ramadhani Chiefto Irawan
FORWARD DEPLOYED ENGINEER · PRODUCT ENGINEER · TECH FOUNDER
+62 813 8103 9158
rochmanramadhani12@gmail.com
linkedin.com/in/rochmanrmdhnn
github.com/rochmanrmdhnn
omanlabs.tech
PROFESSIONAL EXPERIENCE
EDUCATION
1st place — Supporter category"
fi
