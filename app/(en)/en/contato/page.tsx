import type { Metadata } from 'next';

import ContactPage from '@/components/pages/ContactPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.en.contato;

export default function Page() {
  return <ContactPage lang="en" />;
}
