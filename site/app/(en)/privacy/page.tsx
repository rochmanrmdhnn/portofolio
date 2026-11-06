import { LegalPage, legalMetadata } from "@/components/LegalPage";
import { PATHS } from "@/lib/content";
import { EN } from "@/lib/copy/en";
import { LEGAL_EN } from "@/lib/copy/legal-en";

export const metadata = legalMetadata(EN, LEGAL_EN.privacy, PATHS.privacy);

export default function Page() {
  return <LegalPage t={EN} doc={LEGAL_EN.privacy} paths={PATHS.privacy} />;
}
