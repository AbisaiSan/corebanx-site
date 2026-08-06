import Link from 'next/link';

import { AnimatedSection } from '../Anim';
import ProductIllustration from '../ProductIllustration';
import { Checklist, Section, Split, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { href, PATHS, type Lang } from '@/lib/i18n';
import { getGroup, type Product } from '@/lib/products';

export default function ProductPage({ product, lang }: { product: Product; lang: Lang }) {
  const c = common[lang];
  const t = product[lang];
  const group = getGroup(product.group)[lang];

  const copy = (
    <div>
      <p className="eyebrow" style={{ marginBottom: 12 }}>
        {group.name}
      </p>
      <h1
        style={{
          margin: '0 0 14px',
          font: '600 clamp(24px,3.2cqw,36px)/1.12 var(--display)',
          letterSpacing: '-.025em',
          color: 'var(--navy)',
          textWrap: 'pretty',
        }}
      >
        {t.name}
      </h1>
      <p
        style={{
          margin: '0 0 22px',
          maxWidth: 480,
          font: '400 16px/1.6 var(--sans)',
          color: 'var(--navy-72)',
        }}
      >
        {t.lead}
      </p>
      <Checklist items={t.checks} style={{ marginBottom: 26 }} />
      <Link href={href(lang, PATHS.contato)} className="btn btn-primary">
        {c.cta.esteProduto}
      </Link>
    </div>
  );

  const media = <ProductIllustration kind={product.illustration} lang={lang} />;

  return (
    <>
      <Section pad="clamp(26px,3.2cqw,40px) clamp(20px,4cqw,56px) 0" bg="#fff">
        <Wrap>
          <Link
            href={href(lang, PATHS.produtos)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              font: '500 14px/1 var(--sans)',
              color: 'var(--orange)',
              textDecoration: 'none',
            }}
          >
            {c.cta.voltarProdutos}
          </Link>
        </Wrap>
      </Section>

      <AnimatedSection style={{ padding: 'clamp(46px,6cqw,90px) clamp(20px,4cqw,56px)', background: '#fff' }}>
        <Wrap>
          <Split>
            {product.mediaFirst ? media : copy}
            {product.mediaFirst ? copy : media}
          </Split>
        </Wrap>
      </AnimatedSection>
    </>
  );
}
