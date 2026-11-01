import type { Lang } from '../services/translation.service';

// Segmentos de URL por idioma. PT fica na raiz, EN em /en/.
export const PAGE_SEGMENTS = {
  home: { pt: '', en: '' },
  services: { pt: 'servicos', en: 'services' },
  cases: { pt: 'cases', en: 'cases' },
  about: { pt: 'sobre', en: 'about' },
  facts: { pt: 'rafael-nunes', en: 'rafael-nunes' },
  privacy: { pt: 'politica-de-privacidade', en: 'privacy-policy' },
  thanks: { pt: 'obrigado', en: 'thank-you' },
  blog: { pt: 'blog', en: '' }, // blog só existe em português
} as const;

export type PageKey = keyof typeof PAGE_SEGMENTS;

/** Páginas sem versão em inglês (o seletor de idioma leva para a home EN). */
export const PT_ONLY: readonly PageKey[] = ['blog'];

/** Caminho absoluto dentro do app (sem o base href), ex.: `/en/services/landing-pages`. */
export function pagePath(key: PageKey, lang: Lang, ...rest: (string | number)[]): string {
  const effectiveLang = PT_ONLY.includes(key) ? 'pt' : lang;
  const segment = PAGE_SEGMENTS[key][effectiveLang];
  const parts = [effectiveLang === 'en' ? 'en' : '', segment, ...rest.map(String)].filter(Boolean);
  return '/' + parts.join('/');
}

/** Âncora na home do idioma, ex.: `/#contato` ou `/en#contact`. */
export function homeAnchor(lang: Lang, anchor: keyof typeof HOME_ANCHORS): { path: string; fragment: string } {
  return { path: pagePath('home', lang), fragment: HOME_ANCHORS[anchor][lang] };
}

export const HOME_ANCHORS = {
  pains: { pt: 'dores', en: 'pains' },
  services: { pt: 'servicos', en: 'services' },
  cases: { pt: 'cases', en: 'cases' },
  skills: { pt: 'skills', en: 'skills' },
  experience: { pt: 'experiencia', en: 'experience' },
  about: { pt: 'sobre', en: 'about' },
  blog: { pt: 'blog', en: 'blog' },
  faq: { pt: 'faq', en: 'faq' },
  contact: { pt: 'contato', en: 'contact' },
} as const;
