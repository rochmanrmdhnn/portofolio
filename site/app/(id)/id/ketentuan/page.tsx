import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { PATHS } from "@/lib/content";
import { ID } from "@/lib/copy/id";
import { LEGAL_ID } from "@/lib/copy/legal-id";

export const metadata = legalMetadata(ID, LEGAL_ID.terms, PATHS.terms);

export default function Page() {
  return <LegalPage t={ID} doc={LEGAL_ID.terms} paths={PATHS.terms} />;
}
