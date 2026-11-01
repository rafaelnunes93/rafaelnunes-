import { Component, computed, inject } from '@angular/core';
import { pagePath } from '../../core/paths';
import { PERSON_ID, SeoService } from '../../core/seo.service';
import { STATS_LABELS } from '../../data/home';
import { ABOUT_PAGE } from '../../data/institutional';
import { CRUMB_HOME } from '../../data/pages';
import { SITE } from '../../data/site';
import { TranslationService } from '../../services/translation.service';
import { ContactSectionComponent } from '../../forms/contact-section.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { CountUpDirective } from '../../shared/count-up.directive';
import { RevealDirective } from '../../shared/reveal.directive';
import { ExperienciasComponent } from '../../sections/experiencias/experiencias.component';
import { SkillsComponent } from '../../sections/skills/skills.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [BreadcrumbsComponent, CountUpDirective, RevealDirective, ContactSectionComponent, ExperienciasComponent, SkillsComponent],
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
      <div class="container-x story">
        <div class="photo-col" reveal>
          <img [src]="site.photo" [alt]="site.fullName" width="667" height="883" />
          <dl class="stats">
            @for (s of site.stats; track s.key) {
              <div class="ui-card">
                <dt class="visually-hidden">{{ tr.pick(labels[s.key]) }}</dt>
                <dd><strong><span [countUp]="s.value">{{ s.value }}</span>{{ s.suffix }}</strong><span aria-hidden="true">{{ tr.pick(labels[s.key]) }}</span></dd>
              </div>
            }
          </dl>
        </div>
        <div class="text" reveal="80">
          <h2>{{ tr.pick(t.storyTitle) }}</h2>
          @for (p of tr.pick(t.story); track $index) { <p>{{ p }}</p> }
          <h2>{{ tr.pick(t.aiTitle) }}</h2>
          @for (p of tr.pick(t.ai); track $index) { <p>{{ p }}</p> }
          <h2>{{ tr.pick(t.whyTitle) }}</h2>
          @for (p of tr.pick(t.why); track $index) { <p>{{ p }}</p> }
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container-x">
        <h2 class="h-section">{{ tr.pick(t.principlesTitle) }}</h2>
        <div class="grid-4 principles">
          @for (p of t.principles; track p.icon; let i = $index) {
            <div class="ui-card" [reveal]="i * 60">
              <span class="icon-box"><i [class]="p.icon" aria-hidden="true"></i></span>
              <h3>{{ tr.pick(p.title) }}</h3>
              <p>{{ tr.pick(p.text) }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <div class="legacy-dark legacy-section"><app-experiencias /></div>

    <div class="legacy-dark legacy-section"><app-skills /></div>

    <app-contact-section />
  `,
  styles: `
    .story { display: grid; gap: 48px; @media (min-width: 992px) { grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; } }
    .photo-col img { width: 100%; max-width: 380px; height: auto; border-radius: 24px; border: 1px solid var(--line); box-shadow: var(--shadow-lg); background: radial-gradient(circle at 50% 30%, #12304a, #050816 75%); }
    .stats {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0 0; max-width: 380px;
      .ui-card { padding: 16px; }
      dd { margin: 0; display: flex; flex-direction: column; gap: 2px; }
      strong { font-family: var(--font-display); font-size: 1.6rem; color: var(--primary); }
      span[aria-hidden] { font-size: 0.78rem; color: var(--muted); line-height: 1.35; }
    }
    .text {
      h2 { font-size: clamp(1.4rem, 2.4vw, 1.8rem); font-weight: 800; margin: 0 0 16px; }
      h2:not(:first-child) { margin-top: 40px; }
      p { color: var(--muted); margin-bottom: 14px; }
    }
    .principles { margin-top: 32px; h3 { margin-top: 14px; font-size: 1.05rem; font-weight: 700; } p { margin-top: 6px; color: var(--muted); font-size: 0.9rem; } }
    .legacy-section { width: 100%; padding: 60px 20px; display: flex; justify-content: center; text-align: center; > * { width: 100%; min-width: 0; max-width: 100%; } }
  `,
})
export class AboutPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = ABOUT_PAGE;
  readonly site = SITE;
  readonly labels = STATS_LABELS;
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.tr.currentLang()) },
    { label: this.tr.pick(ABOUT_PAGE.crumb), path: pagePath('about', this.tr.currentLang()) },
  ]);

  constructor() {
    inject(SeoService).set({
      title: this.tr.pick(ABOUT_PAGE.seoTitle),
      description: this.tr.pick(ABOUT_PAGE.seoDescription),
      path: pagePath('about', this.tr.currentLang()),
      alternates: { pt: pagePath('about', 'pt'), en: pagePath('about', 'en') },
      jsonLd: [breadcrumbJsonLd(this.crumbs()), { '@type': 'AboutPage', mainEntity: { '@id': PERSON_ID } }],
    });
  }
}
