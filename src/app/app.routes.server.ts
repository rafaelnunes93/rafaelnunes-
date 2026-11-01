import { RenderMode, ServerRoute } from '@angular/ssr';
import { CASES } from './data/cases';
import { SERVICE_SLUGS } from './data/service-slugs';
import { SITE } from './data/site';
import { POSTS } from './generated/blog-index';

// Todas as páginas são pré-renderizadas (site estático no GitHub Pages).
const slugs = (list: readonly string[]) => async () => list.map((slug) => ({ slug }));
const caseSlugs = CASES.map((c) => c.slug);
const blogPages = Math.max(1, Math.ceil(POSTS.length / SITE.postsPerPage));

export const serverRoutes: ServerRoute[] = [
  { path: 'servicos/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs(SERVICE_SLUGS) },
  { path: 'en/services/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs(SERVICE_SLUGS) },
  { path: 'cases/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs(caseSlugs) },
  { path: 'en/cases/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs(caseSlugs) },
  { path: 'blog/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs(POSTS.map((p) => p.slug)) },
  {
    path: 'blog/pagina/:page',
    renderMode: RenderMode.Prerender,
    // A página 1 é /blog; as demais só existem quando há mais posts que SITE.postsPerPage.
    getPrerenderParams: async () => Array.from({ length: blogPages - 1 }, (_, i) => ({ page: String(i + 2) })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
