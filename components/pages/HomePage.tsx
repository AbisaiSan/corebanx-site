import Link from 'next/link';
import type { CSSProperties } from 'react';

import { AnimatedSection, Counter } from '../Anim';
import { Icon } from '../Icons';
import { CheckListLight, CtaBand, DashList, Section, Split, Wrap } from '../ui';
import { common } from '@/lib/copy/common';
import { home } from '@/lib/copy/home';
import { illustrations } from '@/lib/copy/illustrations';
import { href, PATHS, type Lang } from '@/lib/i18n';
import { getGroup, HOME_GROUP_ORDER } from '@/lib/products';

const mono = (size: number, color: string, weight = 400, lh = 1): CSSProperties => ({
  font: `${weight} ${size}px/${lh} var(--mono)`,
  color,
});

/** Home hero: a ledger panel up front with a Pix receipt and a card tilted
 *  behind it, on a soft orange/navy wash. */
function HeroArt({ lang }: { lang: Lang }) {
  const t = illustrations[lang].homeHero;
  const bars = ['38%', '56%', '44%', '72%', '60%', '88%', '66%'];
  const barColor = (i: number) =>
    i === 3 ? 'var(--orange)' : i === 5 ? 'var(--navy)' : 'rgba(29,63,122,.16)';

  return (
    <div
      style={{
        position: 'relative',
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '62%',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 35% 30%,rgba(240,116,58,.28),rgba(240,116,58,0) 70%)',
          top: '-6%',
          right: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '38%',
          aspectRatio: '1',
          borderRadius: 34,
          background: 'linear-gradient(140deg,rgba(29,63,122,.16),rgba(29,63,122,0))',
          bottom: '2%',
          left: '2%',
          transform: 'rotate(-12deg)',
        }}
      />

      {/* Pix receipt, tilted left */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '4%',
          width: '66%',
          maxWidth: 290,
          background: '#fff',
          border: '1px solid var(--navy-line)',
          borderRadius: 18,
          boxShadow: '0 16px 40px rgba(18,39,77,.12)',
          padding: 16,
          transform: 'rotate(-7deg) translateX(-10%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={mono(11, 'rgba(29,63,122,.55)', 500)}>{t.pixLabel}</span>
          <span style={mono(11, 'var(--orange)', 500)}>{t.pixBadge}</span>
        </div>
        <p style={{ margin: '12px 0 0', font: '600 20px/1 var(--display)', color: 'var(--navy)' }}>
          {t.pixValue}
        </p>
        <p style={{ margin: '8px 0 0', ...mono(11, 'rgba(29,63,122,.5)', 400, 1.4) }}>{t.pixMeta}</p>
      </div>

      {/* card, tilted right */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '52%',
          maxWidth: 230,
          background: 'var(--deep)',
          borderRadius: 18,
          boxShadow: '0 18px 40px rgba(18,39,77,.2)',
          padding: 16,
          transform: 'rotate(6deg) translateX(12%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 24,
              height: 17,
              borderRadius: 4,
              background: 'rgba(236,236,234,.35)',
              display: 'block',
            }}
          />
          <span style={mono(10, 'rgba(236,236,234,.6)', 500)}>{t.cardVirtual}</span>
        </div>
        <p style={{ margin: 0, ...mono(14, '#fff', 500), letterSpacing: '.06em' }}>
          {t.cardNumber}
        </p>
      </div>

      {/* ledger panel, front and floating */}
      <div
        className="float"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 430,
          background: '#fff',
          border: '1px solid var(--navy-line)',
          borderRadius: 20,
          boxShadow: '0 24px 60px rgba(18,39,77,.16)',
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 18,
          }}
        >
          <span style={{ font: '600 14px/1 var(--display)', color: 'var(--navy)' }}>
            {t.ledgerTitle}
          </span>
          <span
            style={{
              ...mono(11, 'var(--orange)', 500),
              background: 'rgba(240,116,58,.1)',
              padding: '6px 9px',
              borderRadius: 7,
            }}
          >
            {t.ledgerBadge}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 7,
            height: 96,
            padding: '0 2px',
            marginBottom: 18,
          }}
        >
          {bars.map((h, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                height: h,
                background: barColor(i),
                borderRadius: 5,
                display: 'block',
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            [t.tpsLabel, t.tpsValue],
            [t.latencyLabel, t.latencyValue],
          ].map(([label, value]) => (
            <div key={label} style={{ background: 'var(--grey)', borderRadius: 12, padding: '12px 13px' }}>
              <p style={{ margin: 0, ...mono(11, 'rgba(29,63,122,.55)', 500) }}>{label}</p>
              <p
                style={{
                  margin: '6px 0 0',
                  font: '600 20px/1 var(--display)',
                  color: 'var(--navy)',
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            background: 'var(--deep)',
            borderRadius: 12,
            padding: '13px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={mono(11.5, 'rgba(236,236,234,.55)', 400, 1.5)}>{t.request}</span>
          <span style={mono(11.5, 'var(--orange)', 400, 1.5)}>{t.response}</span>
        </div>
      </div>
    </div>
  );
}

/** Small navy glyphs on the security cards. */
function SecurityGlyph({ index }: { index: number }) {
  const base: CSSProperties = { display: 'block', marginBottom: 14, border: '2px solid var(--navy)' };
  switch (index) {
    case 0:
      return <span style={{ ...base, width: 16, height: 16, borderRadius: 5 }} />;
    case 1:
      return <span style={{ ...base, width: 16, height: 16, borderRadius: '50%' }} />;
    case 2:
      return <span style={{ ...base, width: 16, height: 16, transform: 'rotate(45deg)' }} />;
    case 3:
      return (
        <span
          style={{ display: 'block', marginBottom: 14, width: 16, height: 2, background: 'var(--navy)' }}
        />
      );
    case 4:
      return <span style={{ ...base, width: 16, height: 16, transform: 'rotate(45deg)' }} />;
    case 5:
      return <span style={{ ...base, width: 16, height: 16, borderRadius: 5 }} />;
    default:
      return <span style={{ ...base, width: 13, height: 17, borderRadius: 3 }} />;
  }
}

export default function HomePage({ lang }: { lang: Lang }) {
  const c = common[lang];
  const t = home[lang];
  const to = (path: string) => href(lang, path);
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <Section
        pad="clamp(44px,7cqw,96px) clamp(20px,4cqw,56px)"
        bg="linear-gradient(180deg,#fff 0%,#ECECEA 100%)"
      >
        <Wrap>
          <Split min={300} gap="clamp(32px,4cqw,56px)">
            <div>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                {t.hero.eyebrow}
              </p>
              <h1
                style={{
                  margin: 0,
                  font: '600 clamp(30px,5.4cqw,58px)/1.04 var(--display)',
                  letterSpacing: '-.03em',
                  color: 'var(--navy)',
                  textWrap: 'pretty',
                }}
              >
                {t.hero.title}
              </h1>
              <p
                style={{
                  margin: '20px 0 0',
                  maxWidth: 520,
                  font: '400 clamp(15px,1.7cqw,18px)/1.6 var(--sans)',
                  color: 'var(--navy-72)',
                  textWrap: 'pretty',
                }}
              >
                {t.hero.lead}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
                <Link href={to(PATHS.contato)} className="btn btn-primary btn-lg">
                  {c.cta.especialista}
                </Link>
                <Link href={to(PATHS.produtos)} className="btn btn-secondary btn-lg">
                  {c.cta.solucoes}
                </Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 22px', marginTop: 30 }}>
                {t.hero.chips.map((chip) => (
                  <span key={chip} style={mono(13, 'rgba(29,63,122,.55)', 500, 1.4)}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <HeroArt lang={lang} />
          </Split>
        </Wrap>
      </Section>

      {/* -------------------------------------------------------- partners */}
      <Section
        pad="clamp(28px,3.5cqw,44px) clamp(20px,4cqw,56px)"
        bg="var(--grey)"
        style={{ borderTop: '1px solid rgba(29,63,122,.07)' }}
      >
        <Wrap>
          <p
            style={{
              margin: '0 0 20px',
              textAlign: 'center',
              font: '500 13px/1 var(--sans)',
              letterSpacing: '.04em',
              color: 'var(--navy-60)',
            }}
          >
            {t.partners.title}
          </p>
          {/* the set is duplicated so the -50% loop is seamless; hover pauses it */}
          <div className="marquee">
            <div className="marquee-track">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="marquee-item logo-ph"
                  aria-hidden={i >= 6 ? 'true' : undefined}
                >
                  {t.partners.logo}
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </Section>

      {/* --------------------------------------------------- before / after */}
      <Section pad="clamp(48px,6.5cqw,96px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            {t.beforeAfter.eyebrow}
          </p>
          <h2
            style={{
              margin: '0 0 34px',
              maxWidth: 620,
              font: '600 clamp(26px,3.6cqw,40px)/1.1 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {t.beforeAfter.title}
          </h2>
          <Split min={280} gap="18px" align="stretch">
            <div style={{ background: 'var(--grey)', borderRadius: 20, padding: 'clamp(22px,3cqw,34px)' }}>
              <p
                style={{
                  margin: '0 0 20px',
                  font: '600 15px/1 var(--sans)',
                  color: 'var(--navy-55)',
                }}
              >
                {t.beforeAfter.withoutTitle}
              </p>
              <DashList items={t.beforeAfter.without} />
            </div>
            <div
              style={{
                background: 'var(--deep)',
                borderRadius: 20,
                padding: 'clamp(22px,3cqw,34px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: 220,
                  height: 220,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle,rgba(240,116,58,.22),transparent 70%)',
                  top: -70,
                  right: -60,
                }}
              />
              <p
                style={{ margin: '0 0 20px', font: '600 15px/1 var(--sans)', color: 'var(--orange)' }}
              >
                {t.beforeAfter.withTitle}
              </p>
              <CheckListLight items={t.beforeAfter.with} />
            </div>
          </Split>
        </Wrap>
      </Section>

      {/* --------------------------------------------------- product groups */}
      <Section pad="clamp(48px,6.5cqw,96px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                {t.products.eyebrow}
              </p>
              <h2
                style={{
                  margin: 0,
                  maxWidth: 560,
                  font: '600 clamp(26px,3.6cqw,40px)/1.1 var(--display)',
                  letterSpacing: '-.025em',
                  color: 'var(--navy)',
                  textWrap: 'pretty',
                }}
              >
                {t.products.title}
              </h2>
            </div>
            <Link href={to(PATHS.produtos)} className="btn-link">
              {c.cta.todosProdutos}
            </Link>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 16,
            }}
          >
            {HOME_GROUP_ORDER.map((id) => {
              const group = getGroup(id);
              const g = group[lang];
              return (
                <Link key={id} href={to(PATHS.produtos)} className="card">
                  <span className="icon-tile">
                    <Icon name={group.icon} />
                  </span>
                  <p className="card-title">{g.name}</p>
                  <p className="card-desc">{g.homeDesc}</p>
                  <span className="card-more">{c.cta.saibaMais}</span>
                </Link>
              );
            })}
          </div>
        </Wrap>
      </Section>

      {/* ------------------------------------------------- white label steps */}
      <Section pad="clamp(48px,6.5cqw,96px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            {t.whiteLabel.eyebrow}
          </p>
          <h2
            style={{
              margin: '0 0 34px',
              maxWidth: 560,
              font: '600 clamp(26px,3.6cqw,40px)/1.1 var(--display)',
              letterSpacing: '-.025em',
              color: 'var(--navy)',
            }}
          >
            {t.whiteLabel.title}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
              gap: 16,
            }}
          >
            {t.whiteLabel.steps.map(([title, text], i) => (
              <div
                key={title}
                style={{
                  borderTop: `2px solid ${i === 0 ? 'var(--orange)' : 'rgba(29,63,122,.15)'}`,
                  padding: '20px 0 0',
                }}
              >
                <p style={{ margin: '0 0 14px', ...mono(12, 'rgba(29,63,122,.45)', 500) }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p style={{ margin: 0, font: '600 18px/1.25 var(--display)', color: 'var(--navy)' }}>
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

      {/* ----------------------------------------------------------- stats */}
      <AnimatedSection
        style={{ padding: 'clamp(44px,5.5cqw,80px) clamp(20px,4cqw,56px)', background: 'var(--deep)' }}
      >
        <Wrap
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: 'clamp(20px,3cqw,36px)',
          }}
        >
          {t.stats.map(([value, label], i) => (
            <div key={label}>
              <p
                style={{
                  margin: 0,
                  font: '600 clamp(30px,4cqw,46px)/1 var(--display)',
                  letterSpacing: '-.03em',
                  color: i === 4 ? 'var(--orange)' : '#fff',
                }}
              >
                <Counter value={value} locale={locale} />
              </p>
              <p style={{ margin: '8px 0 0', ...mono(13, 'rgba(236,236,234,.6)', 500, 1.4) }}>
                {label}
              </p>
            </div>
          ))}
        </Wrap>
      </AnimatedSection>

      {/* -------------------------------------------------------- security */}
      <Section pad="clamp(48px,6.5cqw,96px) clamp(20px,4cqw,56px)" bg="#fff">
        <Wrap>
          <Split min={280} gap="clamp(30px,4cqw,56px)">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                {t.security.eyebrow}
              </p>
              <h2
                style={{
                  margin: '0 0 16px',
                  font: '600 clamp(26px,3.6cqw,38px)/1.1 var(--display)',
                  letterSpacing: '-.025em',
                  color: 'var(--navy)',
                  textWrap: 'pretty',
                }}
              >
                {t.security.title}
              </h2>
              <p
                style={{
                  margin: '0 0 26px',
                  maxWidth: 460,
                  font: '400 16px/1.6 var(--sans)',
                  color: 'var(--navy-72)',
                }}
              >
                {t.security.text}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      ...mono(12.5, 'var(--navy)', 500),
                      border: '1px solid rgba(29,63,122,.18)',
                      padding: '9px 12px',
                      borderRadius: 9,
                    }}
                  >
                    {t.security.seal}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
                gap: 12,
              }}
            >
              {t.security.cards.map(([title, text], i) => (
                <div key={title} style={{ background: 'var(--grey)', borderRadius: 16, padding: 20 }}>
                  <SecurityGlyph index={i} />
                  <p
                    style={{ margin: 0, font: '600 15.5px/1.3 var(--display)', color: 'var(--navy)' }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      margin: '6px 0 0',
                      font: '400 13.5px/1.5 var(--sans)',
                      color: 'var(--navy-65)',
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

      {/* ----------------------------------------------------- testimonial */}
      <Section pad="clamp(40px,5cqw,72px) clamp(20px,4cqw,56px)" bg="var(--grey)">
        <Wrap
          max={900}
          style={{
            background: '#fff',
            borderRadius: 22,
            padding: 'clamp(26px,3.5cqw,44px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
            gap: 'clamp(22px,3cqw,36px)',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: 120 }}>
            <div
              className="logo-ph"
              style={{
                aspectRatio: '1',
                height: 'auto',
                borderRadius: 18,
                textAlign: 'center',
                padding: 8,
              }}
            >
              {t.testimonial.photo}
            </div>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                font: '500 clamp(17px,2.2cqw,22px)/1.45 var(--display)',
                color: 'var(--navy)',
                textWrap: 'pretty',
              }}
            >
              {t.testimonial.quote}
            </p>
            <p
              style={{
                margin: '16px 0 0',
                font: '600 14px/1.3 var(--sans)',
                color: 'var(--navy)',
              }}
            >
              {t.testimonial.name}
            </p>
            <p
              style={{
                margin: '3px 0 0',
                font: '400 13.5px/1.3 var(--sans)',
                color: 'var(--navy-60)',
              }}
            >
              {t.testimonial.role}
            </p>
          </div>
        </Wrap>
      </Section>

      <CtaBand
        title={t.cta.title}
        text={t.cta.text}
        label={c.cta.nossoTime}
        href={to(PATHS.contato)}
      />
    </>
  );
}
