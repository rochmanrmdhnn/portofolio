import type { Head } from "@/lib/content";

// Judul dengan satu frasa italic Instrument Serif (.it), lihat DESIGN.md.
export function Phrase({ h }: { h: Head }) {
  return (
    <>
      {h[0]}
      <em className="it">{h[1]}</em>
      {h[2]}
    </>
  );
}
