import type { Metadata } from 'next';

import HomePage from '@/components/pages/HomePage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.pt.home;

export default function Page() {
  return <HomePage lang="pt" />;
}
