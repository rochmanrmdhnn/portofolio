import { Mark } from "./Mark";
import { Reveal } from "./Reveal";

// Alat yang dipakai sehari-hari, supaya orang kenal orangnya, bukan hanya CV-nya.
// Hanya perangkat yang disebut pemiliknya; model iPhone dan iPad sengaja tidak ditulis karena tidak disebut.
const ITEMS = [
  { name: "iPhone", what: "Tombol WhatsApp di situs ini berakhir di sini." },
  { name: "iPad", what: "Layar kedua di samping Mac." },
  { name: "AirPods Pro", what: "Pindah sendiri dari Mac ke iPhone saat ada telepon masuk." },
  {
    name: "Plaud Note Pro",
    what: "Perekam suara AI. Obrolan panjang jadi transkrip dan ringkasan, jadi saya bisa fokus mendengarkan.",
    note: "satu-satunya yang bukan Apple",
  },
  { name: "Claude", what: "Teman berpikir dan menulis kode, setiap hari." },
];

export function Gear() {
  return (
    <section id="gear" className="gear">
      <div className="wrap">
        <div className="gear-head">
          <Reveal>
            <h2 className="h2">
              Yang selalu ikut <em className="it">kerja.</em>
            </h2>
          </Reveal>
          <p className="gear-lead">
            Ya, saya anak Apple. Semuanya satu akun, jadi pekerjaan pindah dari laptop ke ponsel tanpa mengirim file ke diri
            sendiri.
          </p>
        </div>

        <div className="gear-grid">
          <article className="gear-main">
            <p className="gear-role">Mesin utama</p>
            <h3 className="gear-name">MacBook Pro</h3>
            <p className="gear-spec">
              <span className="gear-spec-v">
                96 GB
                <Mark kind="circle" className="mark-big" delay={0.2} />
              </span>
              <span className="gear-spec-l">memori, chip M3 Max</span>
            </p>
            <p className="note">lega untuk model AI yang jalan langsung di laptop</p>
          </article>

          <ul className="gear-list">
            {ITEMS.map((it, i) => (
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
