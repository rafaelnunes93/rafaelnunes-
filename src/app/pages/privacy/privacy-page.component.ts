import { Component, computed, inject } from '@angular/core';
import { pagePath } from '../../core/paths';
import { ConsentService } from '../../core/consent.service';
import { SeoService } from '../../core/seo.service';
import { PRIVACY_PAGE } from '../../data/institutional';
import { CRUMB_HOME } from '../../data/pages';
import { TranslationService } from '../../services/translation.service';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [BreadcrumbsComponent],
  template: `
    <header class="page-hero">
      <div class="container-x narrow">
        <app-breadcrumbs [items]="crumbs()" />
        <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
        <h1>{{ tr.pick(t.title) }}</h1>
        <p class="lead">{{ tr.pick(t.updated) }}</p>
      </div>
    </header>
    <div class="container-x narrow body">
      <aside class="summary">
        <h2>{{ tr.pick(t.summaryTitle) }}</h2>
        <p>{{ tr.pick(t.summary) }}</p>
      </aside>
      @for (s of t.sections; track $index) {
        <section>
          <h2>{{ tr.pick(s.title) }}</h2>
          <p>{{ tr.pick(s.text) }}</p>
        </section>
      }
      <button type="button" class="ui-btn ui-btn--secondary" (click)="consent.reopen()">
        <i class="fa-solid fa-cookie-bite" aria-hidden="true"></i> {{ tr.pick(t.reopen) }}
      </button>
    </div>
  `,
  styles: `
    .narrow { max-width: 820px; }
    .body { padding-block: 48px 96px; display: grid; gap: 28px; justify-items: start; }
    h2 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
    p { color: var(--muted); }
    .summary { width: 100%; padding: 20px 22px; border-radius: 16px; border-left: 4px solid var(--accent); background: var(--accent-soft); p { color: var(--ink-2); } }
  `,
})
export class PrivacyPageComponent {
  readonly tr = inject(TranslationService);
  readonly consent = inject(ConsentService);
  readonly t = PRIVACY_PAGE;
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.tr.currentLang()) },
    { label: this.tr.pick(PRIVACY_PAGE.crumb), path: pagePath('privacy', this.tr.currentLang()) },
  ]);

  constructor() {
    inject(SeoService).set({
      title: this.tr.pick(PRIVACY_PAGE.seoTitle),
      description: this.tr.pick(PRIVACY_PAGE.seoDescription),
      path: pagePath('privacy', this.tr.currentLang()),
      alternates: { pt: pagePath('privacy', 'pt'), en: pagePath('privacy', 'en') },
      jsonLd: [breadcrumbJsonLd(this.crumbs())],
    });
  }
}
