import type { CSSProperties } from 'react';

/**
 * The prototype draws every product icon out of plain geometric primitives —
 * squares, circles, diamonds and bars — rather than an icon font. These render
 * the same shapes at the two sizes the design uses: `lg` inside the 48px tiles
 * on the product grids, `sm` inside the 34/36px tiles in the menus.
 */
export type IconName =
  | 'square'
  | 'lines'
  | 'bars'
  | 'card'
  | 'growth'
  | 'circles'
  | 'barcode'
  | 'diamond'
  | 'circle'
  | 'doc'
  | 'dashed';

export type IconSize = 'lg' | 'sm';

const bar = (w: number, h: number, color: string): CSSProperties => ({
  width: w,
  height: h,
  background: color,
  display: 'block',
});

export function Icon({
  name,
  size = 'lg',
  color = '#F0743A',
}: {
  name: IconName;
  size?: IconSize;
  color?: string;
}) {
  const lg = size === 'lg';

  switch (name) {
    case 'square':
      return (
        <span
          style={{
            width: lg ? 20 : 15,
            height: lg ? 20 : 15,
            border: `2px solid ${color}`,
            borderRadius: lg ? 6 : 5,
            display: 'block',
          }}
        />
      );

    case 'lines':
      return (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <span style={bar(lg ? 22 : 16, 2, color)} />
          <span style={bar(lg ? 15 : 11, 2, color)} />
          <span style={bar(lg ? 19 : 14, 2, color)} />
        </span>
      );

    case 'bars':
      return (
        <span style={{ display: 'flex', alignItems: 'flex-end', gap: lg ? 4 : 3 }}>
          <span style={bar(4, lg ? 8 : 6, color)} />
          <span style={bar(4, lg ? 14 : 10, color)} />
          <span style={bar(4, lg ? 20 : 14, color)} />
        </span>
      );

    case 'card':
      return (
        <span
          style={{
            width: lg ? 22 : 17,
            height: lg ? 15 : 12,
            border: `2px solid ${color}`,
            borderRadius: lg ? 4 : 3,
            display: 'block',
          }}
        />
      );

    case 'growth':
      return (
        <span style={{ display: 'flex', alignItems: 'flex-end', gap: lg ? 4 : 3 }}>
          <span style={bar(lg ? 5 : 4, lg ? 10 : 8, color)} />
          <span style={bar(lg ? 5 : 4, lg ? 18 : 14, color)} />
        </span>
      );

    case 'circles':
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              width: lg ? 11 : 9,
              height: lg ? 11 : 9,
              border: `2px solid ${color}`,
              borderRadius: '50%',
              display: 'block',
            }}
          />
          <span
            style={{
              width: lg ? 11 : 9,
              height: lg ? 11 : 9,
              border: `2px solid ${color}`,
              borderRadius: '50%',
              display: 'block',
            }}
          />
        </span>
      );

    case 'barcode':
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: lg ? 3 : 2 }}>
          <span style={bar(2, lg ? 18 : 14, color)} />
          <span style={bar(lg ? 4 : 3, lg ? 18 : 14, color)} />
          <span style={bar(2, lg ? 18 : 14, color)} />
          <span style={bar(lg ? 5 : 4, lg ? 18 : 14, color)} />
        </span>
      );

    case 'diamond':
      return (
        <span
          style={{
            width: lg ? 18 : 14,
            height: lg ? 18 : 14,
            border: `2px solid ${color}`,
            transform: 'rotate(45deg)',
            display: 'block',
          }}
        />
      );

    case 'circle':
      return (
        <span
          style={{
            width: lg ? 20 : 15,
            height: lg ? 20 : 15,
            border: `2px solid ${color}`,
            borderRadius: '50%',
            display: 'block',
          }}
        />
      );

    case 'doc':
      return (
        <span
          style={{
            width: lg ? 15 : 12,
            height: lg ? 20 : 16,
            border: `2px solid ${color}`,
            borderRadius: 3,
            display: 'block',
          }}
        />
      );

    case 'dashed':
      return (
        <span
          style={{
            width: lg ? 19 : 15,
            height: lg ? 19 : 15,
            border: `2px dashed ${color}`,
            borderRadius: lg ? 6 : 5,
            display: 'block',
          }}
        />
      );
  }
}
