import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { CRUMB_HOME, SERVICES_PAGE } from '../../data/pages';
import { SERVICES } from '../../data/services';
import { TranslationService } from '../../services/translation.service';
import { ContactSectionComponent } from '../../forms/contact-section.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, RevealDirective, ContactSectionComponent],
  template: `
    <header class="page-hero">
      <div class="container-x">
        <app-breadcrumbs [items]="crumbs()" />
        <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
        <h1>{{ tr.pick(t.title) }}</h1>
        <p class="lead">{{ tr.pick(t.lead) }}</p>
      </div>
    </header>

    <section class="section">
      <div class="container-x grid-2">
        @for (s of services; track s.slug; let i = $index) {
          <article class="ui-card ui-card--hover svc" [reveal]="(i % 2) * 60">
            <span class="icon-box"><i [class]="s.icon" aria-hidden="true"></i></span>
            <div>
              <h2><a [routerLink]="link(s.slug)">{{ tr.pick(s.title) }}</a></h2>
              <p class="benefit">{{ tr.pick(s.benefit) }}</p>
              <p class="def">{{ tr.pick(s.definition) }}</p>
              <span class="link-arrow">{{ tr.pick(t.details) }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </div>
          </article>
        }
      </div>
    </section>
    <app-contact-section />
  `,
  styles: `
    .svc { display: flex; gap: 18px; align-items: flex-start; }
    h2 {
      font-size: 1.15rem; font-weight: 700;
      a { color: var(--ink); &::after { content: ''; position: absolute; inset: 0; } }
      a:hover { color: var(--primary); }
    }
    .benefit { margin-top: 6px; color: var(--ink-2); font-size: 0.95rem; }
    .def { margin-top: 10px; color: var(--muted); font-size: 0.86rem; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
    .link-arrow { margin-top: 14px; font-size: 0.88rem; }
  `,
})
export class ServicesPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = SERVICES_PAGE;
  readonly services = SERVICES;
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.tr.currentLang()) },
    { label: this.tr.pick(SERVICES_PAGE.crumb), path: pagePath('services', this.tr.currentLang()) },
  ]);

  constructor() {
    const lang = this.tr.currentLang();
    inject(SeoService).set({
      title: this.tr.pick(SERVICES_PAGE.seoTitle),
      description: this.tr.pick(SERVICES_PAGE.seoDescription),
      path: pagePath('services', lang),
      alternates: { pt: pagePath('services', 'pt'), en: pagePath('services', 'en') },
      jsonLd: [breadcrumbJsonLd(this.crumbs())],
    });
  }

  link(slug: string): string {
    return pagePath('services', this.tr.currentLang(), slug);
  }
}
