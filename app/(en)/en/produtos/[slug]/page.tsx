import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductPage from '@/components/pages/ProductPage';
import { getProduct, PRODUCTS } from '@/lib/products';

const LANG = 'en' as const;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const t = product[LANG];
  return { title: t.name, description: t.lead };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductPage product={product} lang={LANG} />;
}
