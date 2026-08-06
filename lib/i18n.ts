export const LANGS = ['pt', 'en', 'es'] as const;

export type Lang = (typeof LANGS)[number];

/** All locales share the same URL structure. Portuguese is the default and
 *  carries no prefix; every other locale sits under its own segment. */
const PREFIX: Record<Lang, string> = { pt: '', en: '/en', es: '/es' };

/** Matches a locale segment at the start of a path — the lookahead keeps it
 *  from eating the first segment of a path that merely starts with those
 *  letters. */
const PREFIX_RE = /^\/(en|es)(?=\/|$)/;

export function href(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path;
  return `${PREFIX[lang]}${clean}` || '/';
}

/** Drop the locale prefix, leaving the path shared by every language — used by
 *  the header switch to stay on the same page when changing language. */
export function stripLang(pathname: string): string {
  return pathname.replace(PREFIX_RE, '') || '/';
}

/** Label shown in the header switch. */
export const LANG_LABEL: Record<Lang, string> = { pt: 'PT', en: 'EN', es: 'ES' };

/** Value for the `hreflang` attribute and the `<html lang>` of each layout. */
export const LANG_TAG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

/** Locale used to format animated numbers. Spanish follows the peninsular and
 *  South American convention (dot thousands, comma decimals), which matches the
 *  figures as they are authored in Portuguese. */
export const LANG_LOCALE: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

export const PATHS = {
  home: '/',
  produtos: '/produtos',
  produto: (slug: string) => `/produtos/${slug}`,
  bancos: '/solucoes/para-bancos',
  quemSomos: '/quem-somos',
  cases: '/cases',
  contato: '/contato',
};

/** Locale-keyed dictionary. EN and ES are typed against PT, so a missing
 *  translation is a compile error rather than a silently untranslated string. */
export type Dict<T> = Record<Lang, T>;

export function pick<T>(dict: Dict<T>, lang: Lang): T {
  return dict[lang];
}
