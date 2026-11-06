import type { Copy } from "@/lib/content";
import { Contact } from "./Contact";
import { Gear } from "./Gear";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { Manifesto } from "./Manifesto";
import { Now } from "./Now";
import { Owners } from "./Owners";
import { Proofs } from "./Proofs";
import { WorkTrack } from "./WorkTrack";

// Satu halaman, dua bahasa: isi yang sama, copy dari lib/copy/{en,id}.ts.
export function Site({ t }: { t: Copy }) {
  return (
    <>
      <a className="skip" href="#work">
        {t.ui.skip}
      </a>
      <Header t={t} />
      <main>
        <Hero t={t.hero} wa={t.wa} />
        <Manifesto t={t.manifesto} />
        <WorkTrack t={t.work} ui={t.ui} />
        <Journey t={t.journey} ui={t.ui} />
        <Owners t={t.owners} wa={t.wa} />
        <Now t={t.now} ui={t.ui} />
        <Gear t={t.gear} />
        <Contact t={t.contact} wa={t.wa} legal={t.legal} lang={t.lang} />
      </main>
      <Proofs proofs={t.proofs} ui={t.ui} />
    </>
  );
}
