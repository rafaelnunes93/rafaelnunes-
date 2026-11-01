import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pagePath } from '../../core/paths';
import { PERSON_ID, SeoService, absoluteUrl } from '../../core/seo.service';
import { CASES } from '../../data/cases';
import { FACTS_PAGE } from '../../data/institutional';
import { CRUMB_HOME } from '../../data/pages';
import { SERVICES } from '../../data/services';
import { SITE } from '../../data/site';
import { TranslationService } from '../../services/translation.service';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';

// Página objetiva para buscadores de IA, imprensa e quem precisa citar (GEO).
@Component({
  selector: 'app-facts-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  template: `
    <header class="page-hero">
      <div class="container-x narrow">
        <app-breadcrumbs [items]="crumbs()" />
        <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
        <h1>{{ tr.pick(t.title) }}</h1>
        <p class="lead">{{ lead() }}</p>
      </div>
    </header>

    <div class="container-x narrow body">
      <section>
        <h2>{{ tr.pick(t.whoTitle) }}</h2>
        <p>{{ tr.pick(t.who) }}</p>
      </section>

      <section>
        <h2>{{ tr.pick(t.factsTitle) }}</h2>
        <table class="ui-card facts">
          <tbody>
            @for (f of t.facts; track $index) {
              <tr><th scope="row">{{ tr.pick(f.k) }}</th><td>{{ tr.pick(f.v) }}</td></tr>
            }
            <tr><th scope="row">{{ tr.pick(t.site) }}</th><td><a [href]="siteUrl">{{ siteUrl }}</a></td></tr>
            <tr><th scope="row">{{ tr.pick(t.email) }}</th><td><a [href]="'mailto:' + site.email">{{ site.email }}</a></td></tr>
            <tr><th scope="row">WhatsApp</th><td>{{ site.whatsappDisplay }}</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>{{ tr.pick(t.servicesTitle) }}</h2>
        <ul>
          @for (s of services(); track s.path) { <li><a [routerLink]="s.path">{{ s.title }}</a> — {{ s.benefit }}</li> }
        </ul>
      </section>

      <section>
        <h2>{{ tr.pick(t.casesTitle) }}</h2>
        <ul>
          @for (c of cases(); track c.path) { <li><a [routerLink]="c.path">{{ c.name }}</a> — {{ c.type }}</li> }
        </ul>
      </section>

      <section>
        <h2>{{ tr.pick(t.profilesTitle) }}</h2>
        <ul>
          <li><a [href]="site.social.linkedin" rel="me noopener" target="_blank">LinkedIn</a></li>
          <li><a [href]="site.social.github" rel="me noopener" target="_blank">GitHub</a></li>
        </ul>
      </section>
    </div>
  `,
  styles: `
    .narrow { max-width: 860px; }
    .body { padding-block: 48px 96px; display: grid; gap: 40px; }
    h2 { font-size: 1.4rem; font-weight: 800; margin-bottom: 14px; }
    p, li { color: var(--muted); }
    ul { padding-left: 20px; display: grid; gap: 8px; margin: 0; }
    .facts {
      width: 100%; padding: 0; border-collapse: separate; border-spacing: 0; overflow: hidden;
      th, td { padding: 12px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); font-size: 0.92rem; }
      tr:last-child th, tr:last-child td { border-bottom: 0; }
      th { width: 34%; color: var(--ink); font-weight: 600; background: var(--surface-2); }
      td { color: var(--ink-2); }
    }
  `,
})
export class FactsPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = FACTS_PAGE;
  readonly site = SITE;
  readonly siteUrl = `${SITE.url}/`;
  readonly lang = this.tr.currentLang;
  readonly lead = computed(() => {
    const date = new Date(`${FACTS_PAGE.updated}T12:00:00-03:00`).toLocaleDateString(this.lang() === 'en' ? 'en-US' : 'pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    return this.tr.pick(FACTS_PAGE.lead).replace('{date}', date);
  });
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.lang()) },
    { label: this.tr.pick(FACTS_PAGE.crumb), path: pagePath('facts', this.lang()) },
  ]);
  readonly services = computed(() =>
    SERVICES.map((s) => ({ title: this.tr.pick(s.shortTitle), benefit: this.tr.pick(s.benefit), path: pagePath('services', this.lang(), s.slug) })),
  );
  readonly cases = computed(() => CASES.map((c) => ({ name: c.name, type: this.tr.pick(c.type), path: pagePath('cases', this.lang(), c.slug) })));

  constructor() {
    const path = pagePath('facts', this.lang());
    inject(SeoService).set({
      title: this.tr.pick(FACTS_PAGE.seoTitle),
      description: this.tr.pick(FACTS_PAGE.seoDescription),
      path,
      alternates: { pt: pagePath('facts', 'pt'), en: pagePath('facts', 'en') },
      jsonLd: [
        { '@type': 'ProfilePage', url: absoluteUrl(path), dateModified: FACTS_PAGE.updated, mainEntity: { '@id': PERSON_ID } },
        breadcrumbJsonLd(this.crumbs()),
      ],
    });
  }
}
