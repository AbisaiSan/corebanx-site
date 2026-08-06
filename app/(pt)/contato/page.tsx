import type { Metadata } from 'next';

import ContactPage from '@/components/pages/ContactPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.pt.contato;

export default function Page() {
  return <ContactPage lang="pt" />;
}
