import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { SERVICE_SUMMARIES } from '../../data/services';
import { TranslationService } from '../../services/translation.service';

const T = {
  title: { pt: 'Esta página não existe (ou mudou de lugar)', en: 'This page does not exist (or has moved)' },
  text: {
    pt: 'O portfólio foi reorganizado. O que você procura provavelmente está em um destes caminhos:',
    en: 'The portfolio was reorganized. What you are looking for is probably in one of these places:',
  },
  search: { pt: 'Buscar artigos no blog…', en: 'Search blog articles (PT)…' },
  searchBtn: { pt: 'Buscar', en: 'Search' },
  services: { pt: 'Serviços', en: 'Services' },
  servicesText: { pt: 'Sistemas web, APIs, SaaS, apps, sites e jogos.', en: 'Web systems, APIs, SaaS, apps, websites and games.' },
  cases: { pt: 'Projetos', en: 'Projects' },
  casesText: { pt: 'TMS, EDI, sites, extensões e experiência profissional.', en: 'TMS, EDI, websites, extensions and work experience.' },
  blog: { pt: 'Blog', en: 'Blog' },
  blogText: { pt: 'Arquitetura, integrações, custos e contratação.', en: 'Architecture, integrations, costs and hiring (in Portuguese).' },
  cta: { pt: 'Falar comigo sobre o seu projeto', en: 'Talk to me about your project' },
};

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {
  readonly tr = inject(TranslationService);
  private readonly router = inject(Router);
  readonly t = T;
  query = '';

  readonly lang = this.tr.currentLang;
  readonly cards = computed(() => [
    { icon: 'fa-solid fa-layer-group', title: this.tr.pick(T.services), text: this.tr.pick(T.servicesText), path: pagePath('services', this.lang()) },
    { icon: 'fa-solid fa-chart-line', title: this.tr.pick(T.cases), text: this.tr.pick(T.casesText), path: pagePath('cases', this.lang()) },
    { icon: 'fa-regular fa-message', title: this.tr.pick(T.blog), text: this.tr.pick(T.blogText), path: pagePath('blog', 'pt') },
  ]);
  readonly services = computed(() =>
    SERVICE_SUMMARIES.map((s) => ({ label: this.tr.pick(s.shortTitle), path: pagePath('services', this.lang(), s.slug) })),
  );
  readonly contact = computed(() => ({ path: pagePath('home', this.lang()), fragment: HOME_ANCHORS.contact[this.lang()] }));

  constructor() {
    const lang = this.lang();
    inject(SeoService).set({
      title: lang === 'en' ? 'Page not found' : 'Página não encontrada',
      description: this.tr.pick(T.text),
      path: lang === 'en' ? '/en/404' : '/404',
      alternates: { pt: '/404', en: '/en/404' },
      noindex: true,
    });
  }

  search(): void {
    const q = this.query.trim();
    this.router.navigate([pagePath('blog', 'pt')], { queryParams: q ? { q } : {} });
  }
}
