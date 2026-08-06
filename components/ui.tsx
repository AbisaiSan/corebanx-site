import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

/* Small building blocks shared by the pages. Sizing and colour values are the
   ones from the prototype's design-system screen. */

export function Section({
  children,
  pad,
  bg,
  id,
  style,
}: {
  children: ReactNode;
  /** Full `padding` value — sections vary, so it stays explicit. */
  pad: string;
  bg?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section id={id} style={{ padding: pad, background: bg, ...style }}>
      {children}
    </section>
  );
}

export function Wrap({
  children,
  style,
  max = 1180,
}: {
  children: ReactNode;
  style?: CSSProperties;
  max?: number;
}) {
  return <div style={{ maxWidth: max, margin: '0 auto', ...style }}>{children}</div>;
}

export function Eyebrow({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="eyebrow" style={style}>
      {children}
    </p>
  );
}

export function Checklist({
  items,
  style,
  itemStyle,
  gap = 12,
}: {
  items: string[];
  style?: CSSProperties;
  itemStyle?: CSSProperties;
  gap?: number;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
      {items.map((item) => (
        <div key={item} className="check">
          <span className="check-mark" aria-hidden="true">
            ✓
          </span>
          <span className="check-text" style={itemStyle}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/** "Without Corebanx" column — flat dashes instead of ticks. */
export function DashList({ items, color }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span className="dash" />
          <span
            style={{
              font: '400 15.5px/1.5 var(--sans)',
              color: color ?? 'rgba(29,63,122,.62)',
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Checklist rendered on a dark panel. */
export function CheckListLight({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span className="check-mark" aria-hidden="true">
            ✓
          </span>
          <span style={{ font: '400 15.5px/1.5 var(--sans)', color: 'var(--grey)' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

/** Full-width orange closing band. */
export function CtaBand({
  title,
  text,
  label,
  href,
}: {
  title: string;
  text: string;
  label: string;
  href: string;
}) {
  return (
    <Section pad="clamp(48px,6cqw,84px) clamp(20px,4cqw,56px)" bg="var(--orange)">
      <Wrap max={900} style={{ textAlign: 'center' }}>
        <h2
          style={{
            margin: 0,
            font: '600 clamp(26px,3.6cqw,40px)/1.1 var(--display)',
            letterSpacing: '-.025em',
            color: '#fff',
            textWrap: 'pretty',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: '14px 0 26px',
            font: '400 clamp(15px,1.7cqw,18px)/1.6 var(--sans)',
            color: 'rgba(255,255,255,.88)',
          }}
        >
          {text}
        </p>
        <Link href={href} className="btn btn-onorange">
          {label}
        </Link>
      </Wrap>
    </Section>
  );
}

/** Striped stand-in for a partner or client logo. */
export function LogoPlaceholder({ label, height = 56 }: { label: string; height?: number }) {
  return (
    <div className="logo-ph" style={{ height }}>
      {label}
    </div>
  );
}

/**
 * Layered hero composition: two tilted blanks behind an upright card. Only the
 * blanks rotate, so anything animating inside `children` is unaffected.
 */
export function Layered({
  children,
  minHeight = 280,
  glow,
  style,
}: {
  children: ReactNode;
  minHeight?: number;
  /** Optional soft orange wash behind the card. */
  glow?: string;
  style?: CSSProperties;
}) {
  return (
    <div className="stack" style={{ minHeight, ...style }}>
      <div className="layer-a" aria-hidden="true" />
      <div className="layer-b" aria-hidden="true" />
      {glow ? (
        <div style={{ position: 'absolute', inset: 0, background: glow }} aria-hidden="true" />
      ) : null}
      {children}
    </div>
  );
}

/** Two-column grid used by every hero and product block. */
export function Split({
  children,
  gap = 'clamp(30px,4cqw,60px)',
  min = 290,
  align = 'center',
  style,
}: {
  children: ReactNode;
  gap?: string;
  min?: number;
  align?: CSSProperties['alignItems'];
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`,
        gap,
        alignItems: align,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
