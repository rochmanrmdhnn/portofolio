import type { Copy } from "@/lib/content";
import { Mark } from "./Mark";
import { Phrase } from "./Phrase";
import { Reveal } from "./Reveal";

// Alat yang dipakai sehari-hari, supaya orang kenal orangnya, bukan hanya CV-nya.
// Hanya perangkat yang disebut pemiliknya; model iPhone dan iPad sengaja tidak ditulis karena tidak disebut.
export function Gear({ t }: { t: Copy["gear"] }) {
  return (
    <section id="gear" className="gear">
      <div className="wrap">
        <div className="gear-head">
          <Reveal>
            <h2 className="h2">
              <Phrase h={t.head} />
            </h2>
          </Reveal>
          <p className="gear-lead">{t.lead}</p>
        </div>

        <div className="gear-grid">
          <article className="gear-main">
            <p className="gear-role">{t.role}</p>
            <h3 className="gear-name">MacBook Pro</h3>
            <p className="gear-spec">
              <span className="gear-spec-v">
                96 GB
                <Mark kind="circle" className="mark-big" delay={0.2} />
              </span>
              <span className="gear-spec-l">{t.specLabel}</span>
            </p>
            <p className="note">{t.note}</p>
          </article>

          <ul className="gear-list">
            {t.items.map((it, i) => (
              <li key={it.name}>
                <Reveal delay={i * 0.06}>
                  <div className="gear-item">
                    <h3 className="gear-item-name">{it.name}</h3>
                    <p className="gear-item-what">{it.what}</p>
                    {it.note && <p className="note">{it.note}</p>}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
