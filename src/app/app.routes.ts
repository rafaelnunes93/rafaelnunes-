import { inject } from '@angular/core';
import { CanActivateFn, Routes } from '@angular/router';
import { PAGE_SEGMENTS } from './core/paths';
import { postResolver } from './blog/post.resolver';
import { Lang, TranslationService } from './services/translation.service';

/** O idioma da página vem do prefixo da URL: `/en/...` = inglês, resto = português. */
const setLang =
  (lang: Lang): CanActivateFn =>
  () => {
    inject(TranslationService).setLang(lang);
    return true;
  };

const page = {
  home: () => import('./pages/home/home-page.component').then((m) => m.HomePageComponent),
  services: () => import('./pages/services/services-page.component').then((m) => m.ServicesPageComponent),
  service: () => import('./pages/services/service-detail-page.component').then((m) => m.ServiceDetailPageComponent),
  cases: () => import('./pages/cases/cases-page.component').then((m) => m.CasesPageComponent),
  case: () => import('./pages/cases/case-detail-page.component').then((m) => m.CaseDetailPageComponent),
  about: () => import('./pages/about/about-page.component').then((m) => m.AboutPageComponent),
  facts: () => import('./pages/facts/facts-page.component').then((m) => m.FactsPageComponent),
  privacy: () => import('./pages/privacy/privacy-page.component').then((m) => m.PrivacyPageComponent),
  blog: () => import('./pages/blog/blog-page.component').then((m) => m.BlogPageComponent),
  post: () => import('./pages/blog/post-page.component').then((m) => m.PostPageComponent),
  notFound: () => import('./pages/not-found/not-found-page.component').then((m) => m.NotFoundPageComponent),
};

/**
 * Blog: só em português.
 * A ordem importa: no @angular/ssr 19 a regex de parâmetros é global e guarda `lastIndex` entre rotas,
 * então `blog/pagina/:page` logo antes de `blog/:slug` faz os posts não serem pré-renderizados.
 */
const blogRoutes: Routes = [
  { path: 'blog', loadComponent: page.blog },
  { path: 'blog/:slug', loadComponent: page.post, resolve: { post: postResolver } },
  { path: 'blog/pagina/:page', loadComponent: page.blog },
];

/** Rotas que existem nos dois idiomas, com o segmento traduzido. */
function localizedRoutes(lang: Lang): Routes {
  const seg = (key: keyof typeof PAGE_SEGMENTS) => PAGE_SEGMENTS[key][lang];
  return [
    { path: '', loadComponent: page.home },
    { path: seg('services'), loadComponent: page.services },
    { path: `${seg('services')}/:slug`, loadComponent: page.service },
    { path: seg('cases'), loadComponent: page.cases },
    { path: `${seg('cases')}/:slug`, loadComponent: page.case },
    { path: seg('about'), loadComponent: page.about },
    { path: seg('facts'), loadComponent: page.facts },
    { path: seg('privacy'), loadComponent: page.privacy },
    { path: '404', loadComponent: page.notFound },
  ];
}

export const routes: Routes = [
  {
    path: 'en',
    canActivate: [setLang('en')],
    children: [...localizedRoutes('en'), { path: '**', loadComponent: page.notFound }],
  },
  {
    path: '',
    canActivate: [setLang('pt')],
    children: [...localizedRoutes('pt'), ...blogRoutes, { path: '**', loadComponent: page.notFound }],
  },
];
