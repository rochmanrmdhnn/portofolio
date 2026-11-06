import { Document, VIEWPORT, metadataFor } from "@/components/Document";
import { ID } from "@/lib/copy/id";

export const metadata = metadataFor(ID);
export const viewport = VIEWPORT;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document t={ID}>{children}</Document>;
}
