import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '../globals.css';
import SiteShell from '@/components/SiteShell';
import { fontClass } from '@/lib/fonts';
import { LANG_TAG } from '@/lib/i18n';
import { seo } from '@/lib/seo';

export const metadata: Metadata = {
  title: { default: seo.es.home.title, template: '%s · Corebanx' },
  description: seo.es.home.description,
};

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={LANG_TAG.es} className={fontClass}>
      <body>
        <SiteShell lang="es">{children}</SiteShell>
      </body>
    </html>
  );
}
