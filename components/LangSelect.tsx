'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Flag } from './Flags';
import s from './LangSelect.module.css';
import { href, LANG_LABEL, LANG_TAG, LANGS, stripLang, type Lang } from '@/lib/i18n';

/** Language picker: a trigger showing the current flag and code, opening a
 *  panel with every locale. Built as a custom dropdown rather than a native
 *  <select> because an <option> can only hold text — it cannot carry the flag.
 *  The options are real links, so each language is crawlable and opens in a new
 *  tab like any other navigation. */
export default function LangSelect({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  // navigating away closes the panel
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // the switch keeps the reader on the same page in the new language
  const shared = stripLang(pathname);

  return (
    <div className={s.root} ref={root}>
      <button
        type="button"
        className={s.trigger}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((o) => !o)}
      >
        <Flag lang={lang} className={s.flag} />
        <span className={s.code}>{LANG_LABEL[lang]}</span>
        <span className={`${s.caret} ${open ? s.caretOpen : ''}`} />
      </button>

      {open && (
        <div className={s.panel} role="listbox" aria-label={label}>
          {LANGS.map((code) => (
            <Link
              key={code}
              href={href(code, shared)}
              hrefLang={LANG_TAG[code]}
              role="option"
              aria-selected={code === lang}
              className={`${s.option} ${code === lang ? s.optionOn : ''}`}
            >
              <Flag lang={code} className={s.flag} />
              <span className={s.code}>{LANG_LABEL[code]}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
