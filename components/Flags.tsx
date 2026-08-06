import type { ReactElement } from 'react';

import type { Lang } from '@/lib/i18n';

/** Flags for the market each locale addresses: Brazil, the United States and
 *  Spain.
 *
 *  Drawn inline rather than written as emoji because Windows ships no flag
 *  glyphs — 🇧🇷 falls back to the bare letters "BR" there, which is exactly the
 *  redundancy the flag was added to avoid. Inline SVG renders the same
 *  everywhere.
 *
 *  At 20×14 the detailed emblems are illegible, so each flag keeps only what
 *  identifies it at a glance: the star field reduces to a texture of dots and
 *  the Spanish coat of arms to a single mark. */

const W = 20;
const H = 14;

function Brazil() {
  return (
    <>
      <rect width={W} height={H} fill="#009B3A" />
      <polygon points="10,1.6 18.2,7 10,12.4 1.8,7" fill="#FEDF00" />
      <circle cx="10" cy="7" r="2.7" fill="#002776" />
    </>
  );
}

function UnitedStates() {
  const stripe = H / 13;
  // the field is red; the six white stripes sit on top of it
  const white = [1, 3, 5, 7, 9, 11].map((i) => (
    <rect key={i} y={i * stripe} width={W} height={stripe} fill="#FFFFFF" />
  ));
  const stars = [0, 1, 2].flatMap((row) =>
    [0, 1, 2, 3].map((col) => (
      <circle
        key={`${row}-${col}`}
        cx={1.4 + col * 2.1}
        cy={1.4 + row * 2.2}
        r="0.42"
        fill="#FFFFFF"
      />
    )),
  );
  return (
    <>
      <rect width={W} height={H} fill="#B22234" />
      {white}
      <rect width="8.6" height={stripe * 7} fill="#3C3B6E" />
      {stars}
    </>
  );
}

function Spain() {
  const band = H / 4;
  return (
    <>
      <rect width={W} height={H} fill="#AA151B" />
      <rect y={band} width={W} height={band * 2} fill="#F1BF00" />
      {/* the coat of arms sits a third in from the hoist */}
      <rect x="5.2" y="5.4" width="2.4" height="3.2" rx="1.1" fill="#AA151B" />
    </>
  );
}

const SHAPES: Record<Lang, () => ReactElement> = {
  pt: Brazil,
  en: UnitedStates,
  es: Spain,
};

export function Flag({ lang, className }: { lang: Lang; className?: string }) {
  const Shape = SHAPES[lang];
  return (
    <svg
      className={className}
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      focusable="false"
    >
      <Shape />
      {/* hairline keeps the white bands of the US and Mexican flags from
          dissolving into the white header */}
      <rect
        x="0.5"
        y="0.5"
        width={W - 1}
        height={H - 1}
        rx="2"
        fill="none"
        stroke="rgba(18, 39, 77, 0.22)"
      />
    </svg>
  );
}
