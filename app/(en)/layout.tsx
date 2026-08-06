import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '../globals.css';
import SiteShell from '@/components/SiteShell';
import { fontClass } from '@/lib/fonts';
import { seo } from '@/lib/seo';

export const metadata: Metadata = {
  title: { default: seo.en.home.title, template: '%s · Corebanx' },
  description: seo.en.home.description,
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontClass}>
      <body>
        <SiteShell lang="en">{children}</SiteShell>
      </body>
    </html>
  );
}
