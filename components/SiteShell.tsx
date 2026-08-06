import type { ReactNode } from 'react';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import type { Lang } from '@/lib/i18n';

export default function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <div className="site">
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </div>
  );
}
