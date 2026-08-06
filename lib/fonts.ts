import { DM_Mono, DM_Sans, Figtree } from 'next/font/google';

/** Figtree for headings — geometric with the soft curves the brand asked for. */
export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

/** DM Sans for body copy. */
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

/** DM Mono for eyebrows, labels and numeric readouts. */
export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const fontClass = `${figtree.variable} ${dmSans.variable} ${dmMono.variable}`;
