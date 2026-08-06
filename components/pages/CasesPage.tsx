import { Section, Wrap } from '../ui';
import { pages } from '@/lib/copy/pages';
import type { Lang } from '@/lib/i18n';

export default function CasesPage({ lang }: { lang: Lang }) {
  const t = pages[lang].cases;

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
              maxWidth: 700,
              font: '600 clamp(28px,4.6cqw,50px)/1.06 var(--display)',
              letterSpacing: '-.03em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {t.title}
          </h1>
        </Wrap>
      </Section>

      <Section pad="clamp(40px,5cqw,72px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))',
              gap: 12,
              marginBottom: 'clamp(30px,4cqw,52px)',
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="logo-ph" style={{ height: 64 }}>
                {t.logo}
              </div>
            ))}
          </div>

          {/* Client names and results stay as editable placeholders until real
              cases are cleared for publication. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 16,
            }}
          >
            {t.cards.map(([segment, name, result], i) => (
              <div key={i} className="card-quiet">
                <span
                  style={{
                    font: '500 11.5px/1 var(--mono)',
                    color: 'var(--orange)',
                    background: 'rgba(240,116,58,.1)',
                    padding: '7px 10px',
                    borderRadius: 8,
                  }}
                >
                  {segment}
                </span>
                <p
                  style={{
                    margin: '16px 0 0',
                    font: '600 18px/1.3 var(--display)',
                    color: 'var(--navy)',
                  }}
                >
                  {name}
                </p>
                <p
                  style={{
                    margin: '8px 0 0',
                    font: '400 14.5px/1.55 var(--sans)',
                    color: 'var(--navy-70)',
                  }}
                >
                  {result}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  );
}
