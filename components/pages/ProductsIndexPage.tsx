import Link from 'next/link';

import { Icon } from '../Icons';
import { CtaBand, Section, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { pages } from '@/lib/copy/pages';
import { href, PATHS, type Lang } from '@/lib/i18n';
import { GROUPS, productsOfGroup } from '@/lib/products';

export default function ProductsIndexPage({ lang }: { lang: Lang }) {
  const c = common[lang];
  const t = pages[lang].produtos;
  const to = (path: string) => href(lang, path);

  return (
    <>
      <Section pad="clamp(44px,6cqw,84px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            {t.eyebrow}
          </p>
          <h1
            style={{
              margin: 0,
              maxWidth: 820,
              font: '600 clamp(28px,4.6cqw,52px)/1.06 var(--display)',
              letterSpacing: '-.03em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              margin: '18px 0 0',
              maxWidth: 600,
              font: '400 clamp(15px,1.7cqw,18px)/1.6 var(--sans)',
              color: 'var(--navy-72)',
            }}
          >
            {t.lead}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {GROUPS.map((g) => (
              <span
                key={g.id}
                style={{
                  font: '500 13px/1 var(--sans)',
                  color: 'var(--navy)',
                  background: '#fff',
                  padding: '11px 14px',
                  borderRadius: 10,
                }}
              >
                {g[lang].name}
              </span>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* One section per group, alternating white and grey. */}
      {GROUPS.map((group, i) => {
        const g = group[lang];
        return (
          <Section
            key={group.id}
            pad="clamp(36px,4.5cqw,60px) clamp(20px,4cqw,56px)"
            bg={i % 2 === 0 ? '#fff' : 'var(--grey)'}
          >
            <Wrap>
              <div
                style={{
                  borderTop: '2px solid var(--orange)',
                  paddingTop: 22,
                  marginBottom: 24,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px 26px',
                  alignItems: 'baseline',
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    font: '600 clamp(22px,2.8cqw,32px)/1.15 var(--display)',
                    letterSpacing: '-.02em',
                    color: 'var(--navy)',
                  }}
                >
                  {g.name}
                </h2>
                <p
                  style={{
                    margin: 0,
                    font: '400 15.5px/1.5 var(--sans)',
                    color: 'var(--navy-60)',
                  }}
                >
                  {g.tagline}
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
                  gap: 16,
                }}
              >
                {productsOfGroup(group.id).map((product) => {
                  const p = product[lang];
                  return (
                    <Link
                      key={product.slug}
                      href={to(PATHS.produto(product.slug))}
                      className="card"
                      style={{ padding: 24 }}
                    >
                      <span className="icon-tile">
                        <Icon name={product.icon} />
                      </span>
                      <p className="card-title-sm">{p.name}</p>
                      <p className="card-desc">{p.desc}</p>
                      <span className="card-more">{c.cta.saibaMais}</span>
                    </Link>
                  );
                })}
              </div>
            </Wrap>
          </Section>
        );
      })}

      <CtaBand
        title={t.ctaTitle}
        text={t.ctaText}
        label={c.cta.especialista}
        href={to(PATHS.contato)}
      />
    </>
  );
}
