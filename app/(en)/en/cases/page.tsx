import type { Metadata } from 'next';

import CasesPage from '@/components/pages/CasesPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.en.cases;

export default function Page() {
  return <CasesPage lang="en" />;
}
