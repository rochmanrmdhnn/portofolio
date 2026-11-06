import { CHANNELS, type Copy } from "@/lib/content";
import { Phrase } from "./Phrase";
import { Reveal } from "./Reveal";

export function Contact({ t, wa }: { t: Copy["contact"]; wa: string }) {
  const rows = [{ label: "WhatsApp", value: "+62 813 8103 9158", href: wa }, ...CHANNELS];
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal>
          <h2 className="contact-title">
            <Phrase h={t.head} />
          </h2>
        </Reveal>
        <p className="contact-lead">{t.lead}</p>
        <a className="btn btn-primary btn-xl" href={wa} target="_blank" rel="noopener">
          <span className="roll" data-text={t.cta}>
            <span>{t.cta}</span>
          </span>
        </a>

        <div className="contact-grid">
          <ul className="rows" aria-label={t.channels}>
            {rows.map((c) => (
              <li key={c.label}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                  <span className="rows-l">{c.label}</span>
                  <span className="rows-v">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="rows" aria-label={t.docsLabel}>
            {t.docs.map((d) => (
              <li key={d.href}>
                <a href={d.href} hrefLang={d.lang} target="_blank" rel="noopener">
                  <span className="rows-l">{d.label}</span>
                  <span className="rows-v">{d.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="foot wrap">
        <span>© 2026 Rochman Ramadhani Chiefto Irawan</span>
        <a href="#top">{t.top}</a>
      </footer>
    </section>
  );
}
