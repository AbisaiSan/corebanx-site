import Link from 'next/link';

import s from './SiteFooter.module.css';
import { common } from '@/lib/copy/common';
import { href, PATHS, type Lang } from '@/lib/i18n';

export default function SiteFooter({ lang }: { lang: Lang }) {
  const c = common[lang];
  const f = c.footer;
  const to = (path: string) => href(lang, path);

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.cols}>
          <div className={s.brandCol}>
            <Link href={to(PATHS.home)} className={s.logo} aria-label={c.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-corebanx-negativo.png" alt={c.brand} />
            </Link>
            <p className={s.tagline}>{f.tagline}</p>
          </div>

          <div>
            <p className={s.colTitle}>{f.produtos}</p>
            <div className={s.links}>
              {f.produtoLinks.map((l) => (
                <Link key={l.label} href={to(l.path)} className={s.link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>{f.solucoes}</p>
            <div className={s.links}>
              {/* Only "Para Bancos" was built as a segment page; the prototype
                  points the other three at it too. */}
              {f.solucaoLinks.map((label) => (
                <Link key={label} href={to(PATHS.bancos)} className={s.link}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>{f.empresa}</p>
            <div className={s.links}>
              {f.empresaLinks.map((l) =>
                l.path ? (
                  <Link key={l.label} href={to(l.path)} className={s.link}>
                    {l.label}
                  </Link>
                ) : (
                  <span key={l.label} className={s.link}>
                    {l.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <p className={s.colTitle}>{f.contato}</p>
            <div className={s.links}>
              <a href={`mailto:${f.email}`} className={s.contactLine}>
                {f.email}
              </a>
              <span className={s.contactLine}>{f.phone}</span>
              <span className={s.address}>
                {f.address[0]}
                <br />
                {f.address[1]}
              </span>
            </div>
            <div className={s.social}>
              {['in', 'ig', 'yt'].map((n) => (
                <a key={n} href="#" className={s.socialLink}>
                  {n}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.legal}>{f.rights}</span>
          <div className={s.legalLinks}>
            <a href="#" className={s.legal}>
              {f.terms}
            </a>
            <a href="#" className={s.legal}>
              {f.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
