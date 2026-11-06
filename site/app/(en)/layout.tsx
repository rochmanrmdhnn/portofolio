import { Document, VIEWPORT, metadataFor } from "@/components/Document";
import { EN } from "@/lib/copy/en";

export const metadata = metadataFor(EN);
export const viewport = VIEWPORT;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document t={EN}>{children}</Document>;
}
