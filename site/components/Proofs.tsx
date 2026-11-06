"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";
import type { Block, Copy, Proof } from "@/lib/content";
import { Clip } from "./Clip";

type UI = Copy["ui"];

// Tombol pembuka panel bukti. commandfor/command (Invoker Commands) membuka <dialog> tanpa JS;
// browser yang belum mendukungnya ditangani fallback di Proofs.
export function ProofOpen({ id, label }: { id: string; label: string }) {
  return (
    <button type="button" className="proof-open" commandfor={id} command="show-modal" aria-haspopup="dialog">
      {label}
    </button>
  );
}

// Panel bukti: satu <dialog> modal per proyek, isinya disusun dari slide deck. Dialog native memberi focus trap,
// Escape, latar inert, dan fokus kembali ke tombol pembuka. Di sini hanya yang tidak diberi browser:
// - hash = id panel (omanlabs.tech/#hris, juga hasil pemetaan alias deck lama) membuka panelnya;
// - saat terbuka, hash ikut berganti supaya bisa dibagikan, dan Lenis dihentikan supaya halaman di belakang diam;
// - klik di luar lembar (backdrop) menutup.
export function Proofs({ proofs, ui }: { proofs: Proof[]; ui: UI }) {
  const lenis = useLenis();

  useEffect(() => {
    const off: (() => void)[] = [];
    const dialogs = Array.from(document.querySelectorAll<HTMLDialogElement>("dialog.proof"));

    for (const d of dialogs) {
      const onToggle = () => {
        const hash = `#${d.id}`;
        if (d.open) {
          // Isinya panjang: fokus ke judul (bukan tombol Tutup) supaya pembaca layar mulai dari judulnya.
          d.scrollTop = 0;
          d.querySelector<HTMLElement>(".proof-title")?.focus();
          lenis?.stop();
          if (location.hash !== hash) history.replaceState(null, "", hash);
        } else {
          lenis?.start();
          if (location.hash === hash) history.replaceState(null, "", location.pathname + location.search);
        }
      };
      const onClick = (e: MouseEvent) => e.target === d && d.close();
      d.addEventListener("toggle", onToggle);
      d.addEventListener("click", onClick);
      off.push(() => {
        d.removeEventListener("toggle", onToggle);
        d.removeEventListener("click", onClick);
      });
    }

    const fromHash = () => {
      const d = dialogs.find((x) => `#${x.id}` === location.hash);
      if (d && !d.open) d.showModal();
    };
    fromHash();
    // Lenis bisa baru tersedia setelah panel dari hash sudah terbuka.
    if (dialogs.some((d) => d.open)) lenis?.stop();
    window.addEventListener("hashchange", fromHash);
    off.push(() => window.removeEventListener("hashchange", fromHash));

    if (!("commandForElement" in HTMLButtonElement.prototype)) {
      const onInvoke = (e: MouseEvent) => {
        const b = e.target instanceof Element ? e.target.closest("button[commandfor]") : null;
        const d = dialogs.find((x) => x.id === b?.getAttribute("commandfor"));
        if (!b || !d) return;
        if (b.getAttribute("command") === "close") d.close();
        else if (!d.open) d.showModal();
      };
      document.addEventListener("click", onInvoke);
      off.push(() => document.removeEventListener("click", onInvoke));
    }

    return () => off.forEach((f) => f());
  }, [lenis]);

  return (
    <>
      {proofs.map((p) => (
        <dialog key={p.id} id={p.id} className="proof" aria-labelledby={`${p.id}-title`} data-lenis-prevent>
          <div className="proof-sheet">
            <div className="proof-top">
              <p className="proof-org">{p.org}</p>
              <button type="button" className="proof-close" commandfor={p.id} command="close">
                {ui.proofClose}
              </button>
            </div>
            <h2 id={`${p.id}-title`} className="proof-title" tabIndex={-1}>
              {p.title}
            </h2>
            {p.kicker && <p className="proof-kicker">{p.kicker}</p>}
            {p.lead?.map((l) => (
              <p key={l} className="proof-lead">
                {l}
              </p>
            ))}
            {p.media && (
              <div className="proof-media">
                {p.media.map((m) =>
                  m.kind === "video" ? (
                    <Clip key={m.src} className="proof-clip" src={m.src} poster={m.poster} w={m.w} h={m.h} label={m.label} ui={ui} />
                  ) : (
                    <figure key={m.src} className="proof-img">
                      <img src={m.src} width={m.w} height={m.h} alt={m.alt} loading="lazy" decoding="async" />
                    </figure>
                  ),
                )}
              </div>
            )}
            {p.blocks.map((b, i) => (
              <ProofBlock key={i} b={b} />
            ))}
            {p.caveat && (
              <aside className="proof-caveat">
                <p className="proof-caveat-t">{p.caveat.t}</p>
                <p>{p.caveat.d}</p>
              </aside>
            )}
            {p.note && <p className="note proof-note">{p.note}</p>}
          </div>
        </dialog>
      ))}
    </>
  );
}

function ProofBlock({ b }: { b: Block }) {
  if (b.kind === "compare") {
    return (
      <table className="proof-cmp">
        <thead>
          <tr>
            <td />
            <th scope="col">{b.a}</th>
            <th scope="col">{b.b}</th>
          </tr>
        </thead>
        <tbody>
          {b.rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              <td data-h={b.a}>{r.a}</td>
              <td data-h={b.b}>{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const List = b.kind === "entries" && b.steps ? "ol" : "ul";
  return (
    <section className="proof-block">
      {b.title && <h3 className="proof-h">{b.title}</h3>}
      {b.kind === "list" ? (
        <ul className="proof-list">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      ) : (
        <List className={`proof-entries${b.steps ? " steps" : ""}`}>
          {b.items.map((it) => (
            <li key={it.t}>
              {it.k && <p className="proof-entry-k">{it.k}</p>}
              <p className="proof-entry-t">{it.t}</p>
              <p className="proof-entry-d">{it.d}</p>
            </li>
          ))}
        </List>
      )}
    </section>
  );
}
