import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '../globals.css';
import SiteShell from '@/components/SiteShell';
import { fontClass } from '@/lib/fonts';
import { seo } from '@/lib/seo';

export const metadata: Metadata = {
  title: { default: seo.pt.home.title, template: '%s · Corebanx' },
  description: seo.pt.home.description,
};

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={fontClass}>
      <body>
        <SiteShell lang="pt">{children}</SiteShell>
      </body>
    </html>
  );
}
