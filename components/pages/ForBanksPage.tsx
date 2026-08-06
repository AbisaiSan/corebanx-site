'use client';

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';

import { CheckListLight, Checklist, CtaBand, DashList, Layered, Section, Split, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { illustrations } from '@/lib/copy/illustrations';
import { pages } from '@/lib/copy/pages';
import { href, PATHS, type Lang } from '@/lib/i18n';

const mono = (size: number, color: string, weight = 400, lh = 1): CSSProperties => ({
  font: `${weight} ${size}px/${lh} var(--mono)`,
  color,
});

export default function ForBanksPage({ lang }: { lang: Lang }) {
  const c = common[lang];
  const t = pages[lang].bancos;
  const hero = illustrations[lang].banksHero;
  const to = (path: string) => href(lang, path);
  const [tab, setTab] = useState(0);

  const tileBg = ['var(--grey)', 'var(--deep)', 'var(--grey)', 'rgba(240,116,58,.12)'];
  const tileFg = ['var(--navy)', '#fff', 'var(--navy)', 'var(--orange)'];
  const tileSub = [
    'var(--navy-65)',
    'rgba(236,236,234,.65)',
    'var(--navy-65)',
    'var(--navy-70)',
  ];

  const tabVisual = (index: number) => {
    if (index === 0) {
      return (
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <span style={{ height: 10, width: '60%', background: 'rgba(29,63,122,.12)', borderRadius: 5, display: 'block' }} />
          <span style={{ height: 44, background: 'var(--grey)', borderRadius: 11, display: 'block' }} />
          <span style={{ height: 44, background: 'var(--grey)', borderRadius: 11, display: 'block' }} />
          <span style={{ height: 44, background: 'rgba(240,116,58,.16)', borderRadius: 11, display: 'block' }} />
        </div>
      );
    }
    if (index === 1) {
      return (
        <div
          style={{
            background: 'var(--deep)',
            borderRadius: 16,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <span style={mono(11, 'rgba(236,236,234,.6)', 500)}>{t.volumeLabel}</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
            {['40%', '58%', '74%', '90%'].map((h, i) => (
              <span
                key={h}
                style={{
                  flex: 1,
                  height: h,
                  background: i >= 2 ? 'var(--orange)' : 'rgba(236,236,234,.25)',
                  borderRadius: 4,
                  display: 'block',
                }}
              />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 9,
        }}
      >
        {t.isoMessages.map((line, i) => (
          <span key={line} style={mono(11.5, i === 2 ? 'var(--orange)' : 'rgba(29,63,122,.55)', 400, 1.6)}>
            {line}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <Section
        pad="clamp(44px,6cqw,88px) clamp(20px,4cqw,56px)"
        bg="linear-gradient(180deg,#fff,#ECECEA)"
      >
        <Wrap>
          <Split gap="clamp(30px,4cqw,56px)">
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>
                {t.eyebrow}
              </p>
              <h1
                style={{
                  margin: 0,
                  font: '600 clamp(28px,4.8cqw,54px)/1.05 var(--display)',
                  letterSpacing: '-.03em',
                  color: 'var(--navy)',
                  textWrap: 'pretty',
                }}
              >
                {t.title}
              </h1>
              <p
                style={{
                  margin: '18px 0 26px',
                  maxWidth: 520,
                  font: '400 clamp(15px,1.7cqw,18px)/1.6 var(--sans)',
                  color: 'var(--navy-72)',
                }}
              >
                {t.lead}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link href={to(PATHS.contato)} className="btn btn-primary btn-lg">
                  {c.cta.nossoTime}
                </Link>
                <Link href={to(PATHS.produtos)} className="btn btn-secondary btn-lg">
                  {c.cta.verProdutos}
                </Link>
              </div>
            </div>

            <Layered minHeight={320}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 400,
                  background: '#fff',
                  border: '1px solid var(--navy-line)',
                  borderRadius: 20,
                  boxShadow: '0 22px 48px rgba(18,39,77,.14)',
                  padding: 22,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}
                >
                  <span style={{ font: '600 14px/1 var(--display)', color: 'var(--navy)' }}>
                    {hero.title}
                  </span>
                  <span
                    style={{
                      ...mono(11, 'var(--orange)', 500),
                      background: 'rgba(240,116,58,.1)',
                      padding: '6px 9px',
                      borderRadius: 7,
                    }}
                  >
                    {hero.badge}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {hero.tiles.map(([value, label], i) => (
                    <div key={label} style={{ background: tileBg[i], borderRadius: 14, padding: 16 }}>
                      <p style={{ margin: 0, font: '600 24px/1 var(--display)', color: tileFg[i] }}>
                        {value}
                      </p>
                      <p
                        style={{
                          margin: '8px 0 0',
                          font: '400 12.5px/1.4 var(--sans)',
                          color: tileSub[i],
                        }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Layered>
          </Split>
        </Wrap>
      </Section>

      {/* --------------------------------------------------- market context */}
      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            {t.contextEyebrow}
          </p>
          <h2
            style={{
              margin: '0 0 30px',
              maxWidth: 660,
              font: '600 clamp(24px,3.4cqw,38px)/1.12 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {t.contextTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 16,
            }}
          >
            {t.context.map(([title, text], i) => (
              <div
                key={title}
                style={{
                  borderLeft: `2px solid ${i === 0 ? 'var(--orange)' : 'rgba(29,63,122,.15)'}`,
                  padding: '4px 0 4px 18px',
                }}
              >
                <p style={{ margin: 0, font: '600 17px/1.3 var(--display)', color: 'var(--navy)' }}>
                  {title}
                </p>
                <p
                  style={{
                    margin: '8px 0 0',
                    font: '400 14.5px/1.55 var(--sans)',
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

      {/* --------------------------------------------------- before / after */}
      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <h2
            style={{
              margin: '0 0 30px',
              maxWidth: 600,
              font: '600 clamp(24px,3.4cqw,38px)/1.12 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
            }}
          >
            {t.beforeTitle}
          </h2>
          <Split min={280} gap="18px" align="stretch">
            <div style={{ background: '#fff', borderRadius: 20, padding: 'clamp(22px,3cqw,32px)' }}>
              <p
                style={{
                  margin: '0 0 20px',
                  font: '600 15px/1 var(--sans)',
                  color: 'var(--navy-55)',
                }}
              >
                {t.todayTitle}
              </p>
              <DashList items={t.today} />
            </div>
            <div
              style={{ background: 'var(--deep)', borderRadius: 20, padding: 'clamp(22px,3cqw,32px)' }}
            >
              <p
                style={{ margin: '0 0 20px', font: '600 15px/1 var(--sans)', color: 'var(--orange)' }}
              >
                {t.withTitle}
              </p>
              <CheckListLight items={t.with} />
            </div>
          </Split>
        </Wrap>
      </Section>

      {/* ------------------------------------------------------- use cases */}
      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            {t.useCasesEyebrow}
          </p>
          <h2
            style={{
              margin: '0 0 26px',
              maxWidth: 560,
              font: '600 clamp(24px,3.4cqw,38px)/1.12 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
            }}
          >
            {t.useCasesTitle}
          </h2>

          <div
            role="tablist"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 26,
              padding: 5,
              background: 'var(--grey)',
              borderRadius: 13,
              width: 'fit-content',
            }}
          >
            {t.tabs.map((item, i) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`bank-tab-${i}`}
                aria-selected={tab === i}
                aria-controls={`bank-panel-${i}`}
                onClick={() => setTab(i)}
                style={{
                  border: 0,
                  cursor: 'pointer',
                  background: tab === i ? 'var(--orange)' : 'transparent',
                  color: tab === i ? '#fff' : 'var(--navy)',
                  font: '600 14px/1 var(--sans)',
                  padding: '12px 16px',
                  borderRadius: 10,
                  transition: 'background .18s',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {t.tabs.map((item, i) => (
            <div
              key={item.label}
              role="tabpanel"
              id={`bank-panel-${i}`}
              aria-labelledby={`bank-tab-${i}`}
              hidden={tab !== i}
              style={{
                display: tab === i ? 'grid' : 'none',
                gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                gap: 'clamp(24px,3cqw,44px)',
                background: 'var(--grey)',
                borderRadius: 20,
                padding: 'clamp(22px,3cqw,36px)',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ margin: 0, font: '600 20px/1.25 var(--display)', color: 'var(--navy)' }}>
                  {item.title}
                </p>
                <p
                  style={{
                    margin: '10px 0 20px',
                    font: '400 15.5px/1.6 var(--sans)',
                    color: 'var(--navy-72)',
                  }}
                >
                  {item.text}
                </p>
                <Checklist
                  items={item.checks}
                  gap={11}
                  itemStyle={{ font: '400 15px/1.5 var(--sans)', color: 'var(--navy)' }}
                />
              </div>
              {tabVisual(i)}
            </div>
          ))}
        </Wrap>
      </Section>

      {/* ----------------------------------------------------------- trust */}
      <Section pad="clamp(46px,6cqw,88px) clamp(20px,4cqw,56px)" bg="var(--deep)">
        <Wrap>
          <h2
            style={{
              margin: '0 0 30px',
              maxWidth: 560,
              font: '600 clamp(24px,3.4cqw,38px)/1.12 var(--display)',
              letterSpacing: '-.025em',
              color: '#fff',
              textWrap: 'pretty',
            }}
          >
            {t.trustTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
              gap: 16,
            }}
          >
            {t.trust.map(([title, text]) => (
              <div
                key={title}
                style={{ background: 'rgba(236,236,234,.06)', borderRadius: 18, padding: 22 }}
              >
                <p style={{ margin: 0, font: '600 17px/1.3 var(--display)', color: '#fff' }}>
                  {title}
                </p>
                <p
                  style={{
                    margin: '8px 0 0',
                    font: '400 14px/1.55 var(--sans)',
                    color: 'rgba(236,236,234,.68)',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* ----------------------------------------------------- social proof */}
      <Section pad="clamp(30px,3.5cqw,48px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <p
            style={{
              margin: '0 0 20px',
              textAlign: 'center',
              font: '500 13px/1 var(--sans)',
              color: 'var(--navy-60)',
            }}
          >
            {t.proofTitle}
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
                {t.proofLogo}
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      <CtaBand
        title={t.ctaTitle}
        text={t.ctaText}
        label={c.cta.nossoTime}
        href={to(PATHS.contato)}
      />
    </>
  );
}
