import Link from 'next/link';
import type { CSSProperties } from 'react';

import { Section, Split, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { illustrations } from '@/lib/copy/illustrations';
import { pages } from '@/lib/copy/pages';
import { href, PATHS, type Lang } from '@/lib/i18n';

const mono = (size: number, color: string, weight = 400, lh = 1): CSSProperties => ({
  font: `${weight} ${size}px/${lh} var(--mono)`,
  color,
});

/** Elements of the phone screen appear in sequence when the page loads. */
const rise = (delay: number): CSSProperties => ({
  animation: `cbxRise .6s cubic-bezier(.2,.8,.2,1) ${delay}s both`,
});

function PhoneMock({ lang }: { lang: Lang }) {
  const t = illustrations[lang].phone;
  const rowColor = ['var(--navy)', 'rgba(29,63,122,.6)', 'var(--orange)'];

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 340,
        padding: '10px 0',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '78%',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 42% 38%,rgba(240,116,58,.24),rgba(240,116,58,0) 68%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '52%',
          aspectRatio: '1',
          borderRadius: '38%',
          background: 'linear-gradient(150deg,rgba(29,63,122,.14),rgba(29,63,122,0))',
          transform: 'rotate(-14deg) translate(-14%,12%)',
        }}
      />

      <div
        className="float"
        style={{
          position: 'relative',
          width: 274,
          maxWidth: '82%',
          background: 'var(--navy)',
          borderRadius: 40,
          padding: 12,
          boxShadow: '0 30px 60px rgba(18,39,77,.24)',
        }}
      >
        <div
          style={{
            height: 5,
            width: 64,
            background: 'rgba(236,236,234,.32)',
            borderRadius: 3,
            margin: '3px auto 10px',
          }}
        />
        <div
          style={{
            background: '#fff',
            borderRadius: 30,
            padding: '18px 16px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            className="rise"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              ...rise(0.05),
            }}
          >
            <span style={mono(10, 'rgba(29,63,122,.45)', 500)}>{t.time}</span>
            <span style={{ display: 'flex', gap: 3 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: i === 2 ? 'var(--orange)' : 'rgba(29,63,122,.3)',
                    display: 'block',
                  }}
                />
              ))}
            </span>
          </div>

          <div
            className="rise"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              ...rise(0.15),
            }}
          >
            <span style={{ font: '600 17px/1.2 var(--display)', color: 'var(--navy)' }}>
              {t.greeting}
            </span>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'var(--grey)',
                display: 'block',
              }}
            />
          </div>

          <div
            className="rise"
            style={{ background: 'var(--grey)', borderRadius: 18, padding: 16, ...rise(0.28) }}
          >
            <p style={{ margin: 0, ...mono(10, 'rgba(29,63,122,.55)', 500), letterSpacing: '.08em' }}>
              {t.balanceLabel}
            </p>
            <p
              style={{
                margin: '10px 0 0',
                font: '600 24px/1 var(--display)',
                letterSpacing: '-.02em',
                color: 'var(--navy)',
              }}
            >
              {t.balanceValue}
            </p>
          </div>

          <div className="rise" style={{ display: 'flex', gap: 8, ...rise(0.4) }}>
            {t.actions.map((action, i) => (
              <span
                key={action}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  background: i === 0 ? 'var(--orange)' : '#fff',
                  border: i === 0 ? undefined : '1px solid rgba(29,63,122,.16)',
                  color: i === 0 ? '#fff' : 'var(--navy)',
                  font: '600 12px/1 var(--sans)',
                  padding: '12px 0',
                  borderRadius: 12,
                }}
              >
                {action}
              </span>
            ))}
          </div>

          <div
            className="rise"
            style={{ display: 'flex', flexDirection: 'column', gap: 11, ...rise(0.52) }}
          >
            {t.rows.map(([label, value], i) => (
              <div
                key={label}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <span style={{ font: '400 12px/1.3 var(--sans)', color: 'var(--navy-70)' }}>
                  {label}
                </span>
                <span style={mono(12, rowColor[i], 500, 1.3)}>{value}</span>
              </div>
            ))}
          </div>

          <div
            className="rise"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 14px 2px',
              borderTop: '1px solid rgba(29,63,122,.08)',
              ...rise(0.64),
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  width: 18,
                  height: 3,
                  borderRadius: 2,
                  background: i === 0 ? 'var(--orange)' : 'rgba(29,63,122,.18)',
                  display: 'block',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage({ lang }: { lang: Lang }) {
  const c = common[lang];
  const t = pages[lang].quemSomos;
  const to = (path: string) => href(lang, path);

  return (
    <>
      <Section pad="clamp(44px,6cqw,84px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <Split gap="clamp(28px,4cqw,56px)">
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>
                {t.eyebrow}
              </p>
              <h1
                style={{
                  margin: 0,
                  maxWidth: 760,
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
                  maxWidth: 560,
                  font: '400 clamp(15px,1.7cqw,18px)/1.6 var(--sans)',
                  color: 'var(--navy-72)',
                }}
              >
                {t.lead}
              </p>
            </div>
            <PhoneMock lang={lang} />
          </Split>
        </Wrap>
      </Section>

      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 26 }}>
            {t.timelineEyebrow}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: 18,
            }}
          >
            {t.timeline.map(([year, title, text], i) => (
              <div
                key={year}
                style={{
                  borderTop: `2px solid ${i === 0 ? 'var(--orange)' : 'rgba(29,63,122,.15)'}`,
                  padding: '18px 0 0',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    font: '600 22px/1 var(--display)',
                    color: i === 0 ? 'var(--orange)' : 'var(--navy)',
                  }}
                >
                  {year}
                </p>
                <p
                  style={{
                    margin: '10px 0 0',
                    font: '600 15.5px/1.3 var(--display)',
                    color: 'var(--navy)',
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    margin: '6px 0 0',
                    font: '400 14px/1.55 var(--sans)',
                    color: 'var(--navy-70)',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <Split min={280} gap="clamp(26px,4cqw,52px)" align="stretch">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                {t.missionEyebrow}
              </p>
              <h2
                style={{
                  margin: 0,
                  font: '600 clamp(23px,3cqw,34px)/1.15 var(--display)',
                  letterSpacing: '-.02em',
                  color: 'var(--navy)',
                  textWrap: 'pretty',
                }}
              >
                {t.missionTitle}
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
                gap: 12,
              }}
            >
              {t.values.map(([title, text]) => (
                <div key={title} style={{ background: '#fff', borderRadius: 16, padding: 20 }}>
                  <p style={{ margin: 0, font: '600 16px/1.3 var(--display)', color: 'var(--navy)' }}>
                    {title}
                  </p>
                  <p
                    style={{
                      margin: '6px 0 0',
                      font: '400 13.5px/1.5 var(--sans)',
                      color: 'rgba(29,63,122,.68)',
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </Split>
        </Wrap>
      </Section>

      <Section pad="clamp(40px,5cqw,72px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            {t.partnersEyebrow}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))',
              gap: 12,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="logo-ph">
                {t.partnerLogo}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 'clamp(30px,4cqw,52px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--grey)',
              borderRadius: 20,
              padding: 'clamp(24px,3cqw,36px)',
            }}
          >
            <p
              style={{
                margin: 0,
                flex: '1 1 240px',
                font: '600 clamp(19px,2.4cqw,26px)/1.25 var(--display)',
                color: 'var(--navy)',
                textWrap: 'pretty',
              }}
            >
              {t.closingTitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link href={to(PATHS.produtos)} className="btn btn-primary">
                {c.cta.verProdutos}
              </Link>
              <Link href={to(PATHS.contato)} className="btn btn-secondary">
                {c.cta.contato}
              </Link>
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
