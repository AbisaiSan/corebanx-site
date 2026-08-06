'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Icon } from './Icons';
import LangSelect from './LangSelect';
import s from './SiteHeader.module.css';
import { common } from '@/lib/copy/common';
import { href, PATHS, type Lang } from '@/lib/i18n';
import { getGroup, getProduct, type GroupId } from '@/lib/products';

type Mega = 'produtos' | 'solucoes' | null;

/** Columns of the Produtos mega panel. White Label rides along in the first
 *  column here, exactly as in the design, even though the products index gives
 *  it a group of its own. */
const MEGA_COLUMNS: { group: GroupId; slugs: string[] }[] = [
  { group: 'nucleo', slugs: ['baas-core-bancario', 'dashboard-de-gestao', 'white-label'] },
  { group: 'pagamentos', slugs: ['trilhos-de-pagamento', 'integracao-de-cartoes'] },
  { group: 'avancadas', slugs: ['investimentos', 'convenios', 'cobranca'] },
  {
    group: 'seguranca',
    slugs: ['seguranca-e-compliance', 'antifraude-e-pld', 'regulatorio', 'sandbox'],
  },
];

/** Flat order used by the mobile accordion. */
const MOBILE_ORDER = [
  'baas-core-bancario',
  'dashboard-de-gestao',
  'trilhos-de-pagamento',
  'integracao-de-cartoes',
  'white-label',
  'investimentos',
  'convenios',
  'cobranca',
  'seguranca-e-compliance',
  'antifraude-e-pld',
  'regulatorio',
  'sandbox',
];

export default function SiteHeader({ lang }: { lang: Lang }) {
  const c = common[lang];
  const pathname = usePathname();

  const [mega, setMega] = useState<Mega>(null);
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState<Mega>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Any navigation closes whatever is open.
  useEffect(() => {
    setMega(null);
    setOpen(false);
    setAcc(null);
  }, [pathname]);

  useEffect(() => {
    if (!open && !mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMega(null);
      setOpen(false);
      setAcc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, mega]);

  const to = useCallback((path: string) => href(lang, path), [lang]);

  const productLink = (slug: string, variant: 'mega' | 'acc') => {
    const product = getProduct(slug);
    if (!product) return null;
    const t = product[lang];
    return (
      <Link
        key={slug}
        href={to(PATHS.produto(slug))}
        className={variant === 'mega' ? s.megaLink : s.accLink}
      >
        <span className={variant === 'mega' ? 'icon-tile-sm' : 'icon-tile-md'}>
          <Icon name={product.icon} size="sm" />
        </span>
        <span style={{ display: 'block' }}>
          <span className={variant === 'mega' ? s.megaName : s.accName}>{t.name}</span>
          <span className={variant === 'mega' ? s.megaDesc : s.accDesc}>{t.desc}</span>
        </span>
      </Link>
    );
  };

  const segmentLink = (index: number, variant: 'mega' | 'acc') => {
    const seg = c.segments[index];
    const icons = ['square', 'circle', 'diamond', 'lines'] as const;
    return (
      <Link
        key={seg.label}
        href={to(PATHS.bancos)}
        className={variant === 'mega' ? `${s.megaLink} ${s.megaLinkWide}` : s.accLink}
      >
        <span className={variant === 'mega' ? 'icon-tile-grey' : 'icon-tile-md'} style={variant === 'acc' ? { background: 'var(--grey)' } : undefined}>
          <Icon name={icons[index]} size="sm" color="#1D3F7A" />
        </span>
        <span style={{ display: 'block' }}>
          <span className={variant === 'mega' ? s.megaName : s.accName}>{seg.label}</span>
          <span className={variant === 'mega' ? s.megaDesc : s.accDesc}>{seg.desc}</span>
        </span>
      </Link>
    );
  };

  return (
    <header
      className={`${s.header} ${scrolled ? s.scrolled : ''}`}
      onMouseLeave={() => setMega(null)}
    >
      <div className={s.bar}>
        <Link href={to(PATHS.home)} className={s.logo} aria-label={c.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-corebanx.png" alt={c.brand} />
        </Link>

        <nav className={s.nav} aria-label={c.nav.produtos}>
          <button
            type="button"
            className={`${s.navItem} ${mega === 'produtos' ? s.navItemOpen : ''}`}
            aria-expanded={mega === 'produtos'}
            onMouseEnter={() => setMega('produtos')}
            onClick={() => setMega((m) => (m === 'produtos' ? null : 'produtos'))}
          >
            {c.nav.produtos}
            <span className={`${s.caret} ${mega === 'produtos' ? s.caretOpen : ''}`} />
          </button>
          <button
            type="button"
            className={`${s.navItem} ${mega === 'solucoes' ? s.navItemOpen : ''}`}
            aria-expanded={mega === 'solucoes'}
            onMouseEnter={() => setMega('solucoes')}
            onClick={() => setMega((m) => (m === 'solucoes' ? null : 'solucoes'))}
          >
            {c.nav.solucoes}
            <span className={`${s.caret} ${mega === 'solucoes' ? s.caretOpen : ''}`} />
          </button>
          <Link href={to(PATHS.quemSomos)} className={s.navItem} onMouseEnter={() => setMega(null)}>
            {c.nav.quemSomos}
          </Link>
          <Link href={to(PATHS.cases)} className={s.navItem} onMouseEnter={() => setMega(null)}>
            {c.nav.cases}
          </Link>
        </nav>

        <Link href={to(PATHS.contato)} className={s.cta} onMouseEnter={() => setMega(null)}>
          {c.cta.especialista}
        </Link>

        <div className={s.langSlot} onMouseEnter={() => setMega(null)}>
          <LangSelect lang={lang} label={c.nav.idioma} />
        </div>

        <button
          type="button"
          className={`${s.burger} ${open ? s.burgerOpen : ''}`}
          aria-expanded={open}
          aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
          onClick={() => {
            setOpen((o) => !o);
            setMega(null);
            setAcc(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mega && (
        <div className={s.mega}>
          <div className={s.megaInner}>
            {mega === 'produtos' ? (
              <div className={s.megaProducts}>
                {MEGA_COLUMNS.map((col) => (
                  <div key={col.group}>
                    <p className={s.megaGroup}>{getGroup(col.group)[lang].name}</p>
                    {col.slugs.map((slug) => productLink(slug, 'mega'))}
                  </div>
                ))}
              </div>
            ) : (
              <div className={s.megaSegments}>
                {c.segments.map((_, i) => segmentLink(i, 'mega'))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={`${s.overlay} ${open ? s.overlayOpen : ''}`}>
        <div className={s.overlayScroll}>
          <button
            type="button"
            className={s.accToggle}
            aria-expanded={acc === 'produtos'}
            onClick={() => setAcc((a) => (a === 'produtos' ? null : 'produtos'))}
          >
            {c.nav.produtos}
            <span className={`${s.accCaret} ${acc === 'produtos' ? s.accCaretOpen : ''}`} />
          </button>
          {acc === 'produtos' && (
            <div className={s.accPanel}>{MOBILE_ORDER.map((slug) => productLink(slug, 'acc'))}</div>
          )}

          <button
            type="button"
            className={s.accToggle}
            aria-expanded={acc === 'solucoes'}
            onClick={() => setAcc((a) => (a === 'solucoes' ? null : 'solucoes'))}
          >
            {c.nav.solucoes}
            <span className={`${s.accCaret} ${acc === 'solucoes' ? s.accCaretOpen : ''}`} />
          </button>
          {acc === 'solucoes' && (
            <div className={s.accPanel}>{c.segments.map((_, i) => segmentLink(i, 'acc'))}</div>
          )}

          <Link href={to(PATHS.quemSomos)} className={s.accDirect}>
            {c.nav.quemSomos}
          </Link>
          <Link href={to(PATHS.cases)} className={s.accDirect}>
            {c.nav.cases}
          </Link>

          <Link href={to(PATHS.contato)} className={s.overlayCta}>
            {c.cta.especialista}
          </Link>

          <div className={s.overlayLangs}>
            <LangSelect lang={lang} label={c.nav.idioma} />
          </div>
        </div>
      </div>
    </header>
  );
}
