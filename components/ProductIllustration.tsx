import type { CSSProperties, ReactNode } from 'react';

import { Counter } from './Anim';
import { Layered } from './ui';
import { illustrations } from '@/lib/copy/illustrations';
import type { Lang } from '@/lib/i18n';
import type { IllustrationKey } from '@/lib/products';

/* The illustrated card that sits beside every product's copy — recreated
   one-for-one from the prototype, including the three animated ones (BaaS card
   slide, Dashboard bars, Card shine + counters). */

const front: CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: 400,
  borderRadius: 20,
  padding: 22,
  display: 'flex',
  flexDirection: 'column',
};

const mono = (size: number, color: string, weight = 400, lh = 1): CSSProperties => ({
  font: `${weight} ${size}px/${lh} var(--mono)`,
  color,
});

const cardTitle: CSSProperties = {
  font: '600 14px/1 var(--display)',
  color: 'var(--navy)',
};

const badgeOrange: CSSProperties = {
  ...mono(11, 'var(--orange)', 500),
  background: 'rgba(240,116,58,.1)',
  padding: '6px 9px',
  borderRadius: 7,
};

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={mono(11.5, 'rgba(29,63,122,.55)', 400, 1.4)}>{label}</span>
      <span style={mono(11.5, 'var(--navy)', 500, 1.4)}>{value}</span>
    </div>
  );
}

function Chip({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      style={{
        ...mono(11.5, 'var(--navy)', 500),
        background: 'var(--grey)',
        padding: '9px 11px',
        borderRadius: 9,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default function ProductIllustration({
  kind,
  lang,
}: {
  kind: IllustrationKey;
  lang: Lang;
}) {
  const t = illustrations[lang];
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';

  switch (kind) {
    /* -------------------------------------------------------------- BaaS */
    case 'baas':
      return (
        <Layered glow="radial-gradient(circle at 70% 30%,rgba(240,116,58,.16),transparent 65%)">
          <div style={{ ...front, background: 'var(--grey)', gap: 12 }}>
            {/* the account row slides out and back, like a card leaving a wallet */}
            <div
              className="anim-slide"
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: 16,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={cardTitle}>{t.baas.account}</span>
              <span style={mono(11, 'var(--orange)', 500)}>{t.baas.active}</span>
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <span style={{ height: 8, width: '70%', background: 'rgba(29,63,122,.12)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 8, width: '52%', background: 'rgba(29,63,122,.12)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 8, width: '84%', background: 'rgba(240,116,58,.5)', borderRadius: 4, display: 'block' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: 'var(--navy)', borderRadius: 14, padding: 14 }}>
                <p style={{ margin: 0, ...mono(10.5, 'rgba(236,236,234,.6)', 500) }}>
                  {t.baas.ledger}
                </p>
                <p style={{ margin: '6px 0 0', font: '600 16px/1 var(--display)', color: '#fff' }}>
                  {t.baas.ledgerValue}
                </p>
              </div>
              <div style={{ background: '#fff', borderRadius: 14, padding: 14 }}>
                <p style={{ margin: 0, ...mono(10.5, 'rgba(29,63,122,.5)', 500) }}>{t.baas.iso}</p>
                <p
                  style={{
                    margin: '6px 0 0',
                    font: '600 16px/1 var(--display)',
                    color: 'var(--navy)',
                  }}
                >
                  {t.baas.isoValue}
                </p>
              </div>
            </div>
          </div>
        </Layered>
      );

    /* --------------------------------------------------------- Dashboard */
    case 'dashboard': {
      const bars = [
        { h: '42%', bg: 'rgba(29,63,122,.14)' },
        { h: '64%', bg: 'rgba(29,63,122,.14)' },
        { h: '50%', bg: 'var(--orange)' },
        { h: '78%', bg: 'rgba(29,63,122,.14)' },
        { h: '92%', bg: 'var(--navy)' },
      ];
      return (
        <Layered>
          <div
            style={{
              ...front,
              background: '#fff',
              gap: 12,
              boxShadow: '0 16px 40px rgba(18,39,77,.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={cardTitle}>{t.dashboard.title}</span>
              <span style={badgeOrange}>{t.dashboard.badge}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                [t.dashboard.balanceLabel, t.dashboard.balanceValue],
                [t.dashboard.reconLabel, t.dashboard.reconValue],
              ].map(([label, value]) => (
                <div key={label} style={{ background: 'var(--grey)', borderRadius: 12, padding: '12px 13px' }}>
                  <p style={{ margin: 0, ...mono(10.5, 'rgba(29,63,122,.55)', 500) }}>{label}</p>
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
            {/* bars grow from the baseline each time the block scrolls in */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 70 }}>
              {bars.map((b, i) => (
                <span
                  key={i}
                  className="anim-grow"
                  style={{ flex: 1, height: b.h, background: b.bg, borderRadius: 4, display: 'block' }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {t.dashboard.rows.map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={mono(11.5, 'rgba(29,63,122,.55)', 400, 1.4)}>{label}</span>
                  <span
                    style={mono(11.5, i === 2 ? 'var(--orange)' : 'var(--navy)', 500, 1.4)}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Layered>
      );
    }

    /* ------------------------------------------------------------- rails */
    case 'rails':
      return (
        <Layered>
          <div
            style={{
              ...front,
              background: '#fff',
              gap: 10,
              boxShadow: '0 16px 40px rgba(18,39,77,.1)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.rails.chips.map((chip, i) => (
                <span
                  key={chip}
                  style={{
                    ...mono(12, i === 0 ? '#fff' : 'var(--navy)', 500),
                    background: i === 0 ? 'var(--orange)' : 'var(--grey)',
                    padding: '9px 11px',
                    borderRadius: 9,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 8, background: 'var(--deep)', borderRadius: 14, padding: 16 }}>
              <p style={{ margin: '0 0 12px', ...mono(11, 'rgba(236,236,234,.6)', 500) }}>
                {t.rails.splitTitle}
              </p>
              <div style={{ display: 'flex', height: 12, borderRadius: 6, overflow: 'hidden' }}>
                <span style={{ flex: 6, background: 'var(--orange)', display: 'block' }} />
                <span style={{ flex: 3, background: 'rgba(236,236,234,.55)', display: 'block' }} />
                <span style={{ flex: 1, background: 'rgba(236,236,234,.25)', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                {t.rails.splitParts.map((p) => (
                  <span key={p} style={mono(11, 'rgba(236,236,234,.6)')}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Layered>
      );

    /* ------------------------------------------------------------- cards */
    case 'cards':
      return (
        <Layered glow="radial-gradient(circle at 60% 40%,rgba(240,116,58,.16),transparent 65%)">
          <div style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
            <div
              style={{
                background: 'var(--deep)',
                borderRadius: 20,
                padding: 26,
                boxShadow: '0 20px 44px rgba(18,39,77,.18)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* diagonal light sweeping across the card face */}
              <span
                className="anim-shine"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(115deg,transparent 32%,rgba(255,255,255,.26) 46%,rgba(255,255,255,.06) 58%,transparent 72%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 34,
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 22,
                    borderRadius: 5,
                    background: 'rgba(236,236,234,.35)',
                    display: 'block',
                  }}
                />
                <span style={mono(11, 'rgba(236,236,234,.6)', 500)}>{t.cards.virtual}</span>
              </div>
              <p style={{ margin: 0, ...mono(18, '#fff', 500), letterSpacing: '.08em' }}>
                {t.cards.number}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22 }}>
                <span style={mono(11.5, 'rgba(236,236,234,.55)')}>{t.cards.holder}</span>
                <span style={mono(11.5, 'var(--orange)')}>{t.cards.kind}</span>
              </div>
            </div>
            <div
              style={{
                background: 'var(--grey)',
                borderRadius: 20,
                padding: 22,
                margin: '-8px 22px 0',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={mono(11.5, 'rgba(29,63,122,.6)', 400, 1.4)}>
                  {t.cards.activeLabel}
                </span>
                <span style={mono(11.5, 'var(--navy)', 500, 1.4)}>
                  <Counter value={t.cards.activeValue} locale={locale} />
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                <span style={mono(11.5, 'rgba(29,63,122,.6)', 400, 1.4)}>{t.cards.authLabel}</span>
                <span style={mono(11.5, 'var(--navy)', 500, 1.4)}>
                  <Counter value={t.cards.authValue} locale={locale} />
                </span>
              </div>
            </div>
          </div>
        </Layered>
      );

    /* ------------------------------------------------------- investments */
    case 'investments':
      return (
        <Layered>
          <div style={{ ...front, background: '#fff', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={cardTitle}>{t.investments.title}</span>
              <span style={mono(11, 'var(--orange)', 500)}>{t.investments.badge}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {t.investments.rows.map(([name, value], i) => {
                const last = i === 2;
                return (
                  <div
                    key={name}
                    style={{
                      background: last ? 'rgba(240,116,58,.12)' : 'var(--grey)',
                      borderRadius: 12,
                      padding: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ font: '500 13px/1 var(--sans)', color: 'var(--navy)' }}>
                      {name}
                    </span>
                    <span style={mono(13, last ? 'var(--orange)' : 'var(--navy)', 500)}>
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64 }}>
              {['36%', '52%', '68%', '86%'].map((h, i) => (
                <span
                  key={h}
                  style={{
                    flex: 1,
                    height: h,
                    background: i === 3 ? 'var(--orange)' : 'rgba(29,63,122,.14)',
                    borderRadius: 4,
                    display: 'block',
                  }}
                />
              ))}
            </div>
          </div>
        </Layered>
      );

    /* -------------------------------------------------------- agreements */
    case 'agreements':
      return (
        <Layered>
          <div style={{ ...front, background: 'var(--grey)', gap: 14 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 10,
                alignItems: 'center',
              }}
            >
              {[t.agreements.a, null, t.agreements.b].map((label, i) =>
                label ? (
                  <div
                    key={label}
                    style={{
                      background: '#fff',
                      borderRadius: 12,
                      padding: 14,
                      textAlign: 'center',
                      font: '500 12.5px/1.3 var(--sans)',
                      color: 'var(--navy)',
                    }}
                  >
                    {label}
                  </div>
                ) : (
                  <span
                    key="link"
                    style={{ width: 22, height: 2, background: 'var(--orange)', display: 'block' }}
                  />
                ),
              )}
            </div>
            <div style={{ background: 'var(--deep)', borderRadius: 14, padding: 16 }}>
              <p style={{ margin: '0 0 12px', ...mono(11, 'rgba(236,236,234,.6)', 500) }}>
                {t.agreements.ruleTitle}
              </p>
              <div style={{ display: 'flex', height: 12, borderRadius: 6, overflow: 'hidden' }}>
                <span style={{ flex: 7, background: 'var(--orange)', display: 'block' }} />
                <span style={{ flex: 2, background: 'rgba(236,236,234,.5)', display: 'block' }} />
                <span style={{ flex: 1, background: 'rgba(236,236,234,.25)', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                {t.agreements.ruleParts.map((p) => (
                  <span key={p} style={mono(11, 'rgba(236,236,234,.6)')}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.agreements.chips.map((chip) => (
                <Chip key={chip} style={{ background: '#fff' }}>
                  {chip}
                </Chip>
              ))}
            </div>
          </div>
        </Layered>
      );

    /* ----------------------------------------------------------- billing */
    case 'billing': {
      // barcode: alternating navy bars and gaps
      const barcode = [1, 1, 2, 1, 1, 2, 3, 1, 1, 2, 2];
      return (
        <Layered>
          <div style={{ ...front, background: '#fff', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={cardTitle}>{t.billing.title}</span>
              <span style={badgeOrange}>{t.billing.badge}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 52 }}>
              {barcode.map((flex, i) => (
                <span
                  key={i}
                  style={{
                    flex,
                    height: '100%',
                    background: i % 2 === 0 ? 'var(--navy)' : 'transparent',
                    display: 'block',
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {t.billing.rows.map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={mono(11.5, 'rgba(29,63,122,.55)', 400, 1.4)}>{label}</span>
                  <span style={mono(11.5, i === 0 ? 'var(--orange)' : 'var(--navy)', 500, 1.4)}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Layered>
      );
    }

    /* ------------------------------------------------------- white label */
    case 'whitelabel':
      return (
        <Layered minHeight={300} style={{ gap: 14 }}>
          <div
            style={{
              position: 'relative',
              width: 150,
              background: 'var(--deep)',
              borderRadius: 22,
              padding: 12,
              boxShadow: '0 18px 40px rgba(18,39,77,.18)',
            }}
          >
            <div
              style={{
                height: 5,
                width: 34,
                background: 'rgba(236,236,234,.3)',
                borderRadius: 3,
                margin: '2px auto 12px',
              }}
            />
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: 8, background: 'var(--orange)', display: 'block' }} />
              <span style={{ height: 7, width: '72%', background: 'rgba(29,63,122,.14)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 7, width: '50%', background: 'rgba(29,63,122,.14)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 32, background: 'var(--grey)', borderRadius: 9, display: 'block' }} />
              <span style={{ height: 32, background: 'var(--grey)', borderRadius: 9, display: 'block' }} />
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              width: 150,
              background: 'var(--grey)',
              borderRadius: 22,
              padding: 12,
            }}
          >
            <div
              style={{
                height: 5,
                width: 34,
                background: 'rgba(29,63,122,.2)',
                borderRadius: 3,
                margin: '2px auto 12px',
              }}
            />
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--navy)', display: 'block' }} />
              <span style={{ height: 7, width: '64%', background: 'rgba(29,63,122,.14)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 7, width: '44%', background: 'rgba(29,63,122,.14)', borderRadius: 4, display: 'block' }} />
              <span style={{ height: 32, background: 'rgba(240,116,58,.14)', borderRadius: 9, display: 'block' }} />
              <span style={{ height: 32, background: 'var(--grey)', borderRadius: 9, display: 'block' }} />
            </div>
          </div>
        </Layered>
      );

    /* ---------------------------------------------------------- security */
    case 'security':
      return (
        <Layered>
          <div style={{ ...front, background: 'var(--deep)', padding: 24, gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  width: 22,
                  height: 22,
                  border: '2px solid var(--orange)',
                  borderRadius: '50%',
                  display: 'block',
                }}
              />
              <span style={{ font: '600 14px/1 var(--display)', color: '#fff' }}>
                {t.security.title}
              </span>
            </div>
            <div
              style={{
                background: 'rgba(236,236,234,.07)',
                borderRadius: 13,
                padding: 14,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {t.security.rows.map(([label, value]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={mono(12, 'rgba(236,236,234,.62)', 400, 1.4)}>{label}</span>
                  <span style={mono(12, 'var(--orange)', 500, 1.4)}>{value}</span>
                </div>
              ))}
            </div>
            <span style={mono(12, 'rgba(236,236,234,.45)', 500)}>{t.security.trail}</span>
          </div>
        </Layered>
      );

    /* --------------------------------------------------------- antifraud */
    case 'antifraud':
      return (
        <Layered glow="radial-gradient(circle at 60% 40%,rgba(240,116,58,.14),transparent 65%)">
          <div
            style={{
              ...front,
              background: '#fff',
              border: '1px solid var(--navy-line)',
              gap: 12,
              boxShadow: '0 16px 40px rgba(18,39,77,.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={cardTitle}>{t.antifraud.title}</span>
              <span style={mono(11, 'var(--orange)', 500)}>{t.antifraud.badge}</span>
            </div>
            {t.antifraud.rows.map(([label, status], i) => {
              const blocked = i === 2;
              return (
                <div
                  key={label}
                  style={{
                    background: blocked ? 'rgba(240,116,58,.12)' : 'var(--grey)',
                    borderRadius: 12,
                    padding: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={mono(12, blocked ? 'rgba(29,63,122,.7)' : 'rgba(29,63,122,.6)', 400, 1.3)}>
                    {label}
                  </span>
                  <span
                    style={{
                      ...mono(11, blocked ? '#fff' : 'var(--navy)', 500),
                      background: blocked ? 'var(--orange)' : '#fff',
                      padding: '6px 9px',
                      borderRadius: 7,
                    }}
                  >
                    {status}
                  </span>
                </div>
              );
            })}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
              {t.antifraud.chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    ...mono(11.5, 'var(--navy)', 500),
                    border: '1px solid rgba(29,63,122,.16)',
                    padding: '8px 10px',
                    borderRadius: 9,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Layered>
      );

    /* -------------------------------------------------------- regulatory */
    case 'regulatory':
      return (
        <Layered>
          <div
            style={{
              ...front,
              background: '#fff',
              gap: 14,
              boxShadow: '0 16px 40px rgba(18,39,77,.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={cardTitle}>{t.regulatory.title}</span>
              <span style={badgeOrange}>{t.regulatory.badge}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {t.regulatory.rows.map(([label, value], i) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={mono(11.5, 'rgba(29,63,122,.55)', 400, 1.4)}>{label}</span>
                  <span style={mono(11.5, i === 0 ? 'var(--orange)' : 'var(--navy)', 500, 1.4)}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.regulatory.chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          </div>
        </Layered>
      );

    /* ----------------------------------------------------------- sandbox */
    case 'sandbox':
      return (
        <Layered>
          <div style={{ ...front, background: 'var(--deep)', padding: 24, gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ font: '600 14px/1 var(--display)', color: '#fff' }}>
                {t.sandbox.title}
              </span>
              <span
                style={{
                  ...mono(11, 'var(--orange)', 500),
                  background: 'rgba(240,116,58,.16)',
                  padding: '6px 9px',
                  borderRadius: 7,
                }}
              >
                {t.sandbox.badge}
              </span>
            </div>
            <div
              style={{
                background: 'rgba(236,236,234,.07)',
                borderRadius: 13,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
              }}
            >
              {t.sandbox.code.map((line, i) => (
                <span
                  key={line}
                  style={{
                    ...mono(11.5, i === 2 ? 'var(--orange)' : 'rgba(236,236,234,.55)', 400, 1.5),
                    whiteSpace: 'pre',
                  }}
                >
                  {line}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {t.sandbox.chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    ...mono(11.5, 'var(--grey)', 500),
                    border: '1px solid rgba(236,236,234,.22)',
                    padding: '8px 10px',
                    borderRadius: 9,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Layered>
      );
  }
}
