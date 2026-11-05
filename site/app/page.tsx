import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Manifesto } from "@/components/Manifesto";
import { Now } from "@/components/Now";
import { Owners } from "@/components/Owners";
import { WorkTrack } from "@/components/WorkTrack";

export default function Page() {
  return (
    <>
      <a className="skip" href="#kerja">
        Lewati ke bukti kerja
      </a>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <WorkTrack />
        <Journey />
        <Owners />
        <Now />
        <Contact />
      </main>
    </>
  );
}
