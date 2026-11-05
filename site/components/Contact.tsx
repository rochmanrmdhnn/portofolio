import { CONTACTS, CV, WA } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="hubungi" className="contact">
      <div className="wrap">
        <Reveal>
          <h2 className="contact-title">Punya bisnis dan penasaran AI cocoknya di bagian mana?</h2>
        </Reveal>
        <p className="contact-lead">Chat saja lewat WhatsApp, atau DM di Instagram.</p>
        <a className="btn btn-primary btn-xl" href={WA} target="_blank" rel="noopener">
          <span className="roll" data-text="Chat di WhatsApp">
            <span>Chat di WhatsApp</span>
          </span>
        </a>

        <div className="contact-grid">
          <ul className="rows" aria-label="Kontak">
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                  <span className="rows-l">{c.label}</span>
                  <span className="rows-v">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="rows" aria-label="Dokumen">
            <li>
              <a href={CV} target="_blank" rel="noopener">
                <span className="rows-l">CV, tiga halaman (PDF)</span>
                <span className="rows-v">Hasil, angka, dan apa saja yang saya kerjakan.</span>
              </a>
            </li>
            <li>
              <a href="/deck">
                <span className="rows-l">Deck lengkap, 39 slide</span>
                <span className="rows-v">Buktinya, ceritanya, dan artefaknya.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="foot wrap">
        <span>© 2026 Rochman Ramadhani Chiefto Irawan</span>
        <a href="#top">Kembali ke atas</a>
      </footer>
    </section>
  );
}
