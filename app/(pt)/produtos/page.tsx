import type { Metadata } from 'next';

import ProductsIndexPage from '@/components/pages/ProductsIndexPage';
import { seo } from '@/lib/seo';

export const metadata: Metadata = seo.pt.produtos;

export default function Page() {
  return <ProductsIndexPage lang="pt" />;
}
