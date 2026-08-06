import type { Metadata } from 'next';

import ForBanksPage from '@/components/pages/ForBanksPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.en.bancos;

export default function Page() {
  return <ForBanksPage lang="en" />;
}
