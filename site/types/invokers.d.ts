// Invoker Commands API (commandfor/command): tombol membuka <dialog> tanpa JS. @types/react 19.3 belum memuatnya;
// React meneruskan atribut huruf kecil yang tidak dikenal apa adanya ke DOM.
import "react";

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    command?: "show-modal" | "close";
    commandfor?: string;
  }
}
