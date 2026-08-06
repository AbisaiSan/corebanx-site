export const LANGS = ['pt', 'en'] as const;

export type Lang = (typeof LANGS)[number];

/** Both locales share the same URL structure; English is prefixed with /en. */
export function href(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path;
  return lang === 'pt' ? clean || '/' : `/en${clean}`;
}

/** Same page, other language — used by the header language switch. */
export function otherLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}

export const PATHS = {
  home: '/',
  produtos: '/produtos',
  produto: (slug: string) => `/produtos/${slug}`,
  bancos: '/solucoes/para-bancos',
  quemSomos: '/quem-somos',
  cases: '/cases',
  contato: '/contato',
};

/** Locale-aware pair of dictionaries. EN is typed against PT, so a missing
 *  translation is a compile error rather than a silently untranslated string. */
export type Dict<T> = { pt: T; en: T };

export function pick<T>(dict: Dict<T>, lang: Lang): T {
  return dict[lang];
}
