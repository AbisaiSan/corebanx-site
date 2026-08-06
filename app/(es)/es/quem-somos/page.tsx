import type { Metadata } from 'next';

import AboutPage from '@/components/pages/AboutPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.es.quemSomos;

export default function Page() {
  return <AboutPage lang="es" />;
}
