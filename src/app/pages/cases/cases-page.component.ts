import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { CASES, FUTURE_SLOTS } from '../../data/cases';
import type { ServiceSlug } from '../../data/service-slugs';
import { CASES_PAGE, CRUMB_HOME } from '../../data/pages';
import { TranslationService } from '../../services/translation.service';
import { ContactSectionComponent } from '../../forms/contact-section.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { CaseCardComponent } from '../../shared/case-card.component';
import { ExperienciasComponent } from '../../sections/experiencias/experiencias.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-cases-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, CaseCardComponent, ContactSectionComponent, ExperienciasComponent, RevealDirective],
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
      <div class="container-x list">
        @for (c of cases; track c.slug) {
          <app-case-card [item]="c" />
        }
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container-x">
        <span class="eyebrow">{{ tr.pick(t.slotsEyebrow) }}</span>
        <h2 class="h-section">{{ tr.pick(t.slotsTitle) }}</h2>
        <p class="slots-lead">{{ tr.pick(t.slotsLead) }}</p>
        <div class="slots">
          @for (s of slots; track s.service; let i = $index) {
            <a class="slot" [routerLink]="slotLink(s.service)" [fragment]="contactAnchor()" [reveal]="i * 60">
              <span class="slot-tag">{{ tr.pick(t.slotTag) }}</span>
              <span class="icon-box"><i [class]="s.icon" aria-hidden="true"></i></span>
              <h3>{{ tr.pick(s.title) }}</h3>
              <p>{{ tr.pick(s.text) }}</p>
              <span class="link-arrow">{{ tr.pick(t.slotCta) }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Timeline de experiência do portfólio original (visual preservado). -->
    <div class="legacy-dark legacy-section" [id]="experienceAnchor()"><app-experiencias /></div>

    <app-contact-section />
  `,
  styles: `
    .list { display: grid; gap: 28px; }
    .slots-lead { max-width: 640px; margin-top: 12px; color: var(--muted); }
    .slots { display: grid; gap: 20px; margin-top: 36px; @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); } @media (min-width: 1100px) { grid-template-columns: repeat(4, 1fr); } }
    .slot {
      position: relative; display: flex; flex-direction: column; gap: 12px; padding: 28px 24px;
      border: 2px dashed var(--line-2); border-radius: var(--radius-card, 20px); background: transparent; color: var(--ink);
      transition: border-color 0.2s, transform 0.2s, background 0.2s;
      h3 { font-size: 1.1rem; font-weight: 700; margin: 4px 0 0; }
      p { margin: 0; color: var(--muted); font-size: 0.92rem; line-height: 1.55; flex: 1; }
      .link-arrow { margin-top: 4px; }
      &:hover { border-color: var(--primary); background: var(--surface); transform: translateY(-3px); color: var(--ink); }
    }
    .slot-tag { position: absolute; top: 16px; right: 16px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--subtle); }
    .legacy-section {
      width: 100%;
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      text-align: center;
      > * { width: 100%; min-width: 0; max-width: 100%; }
    }
  `,
})
export class CasesPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = CASES_PAGE;
  readonly cases = CASES;
  readonly slots = FUTURE_SLOTS;
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);
  slotLink(service: ServiceSlug) {
    return pagePath('services', this.tr.currentLang(), service);
  }
  readonly experienceAnchor = computed(() => HOME_ANCHORS.experience[this.tr.currentLang()]);
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.tr.currentLang()) },
    { label: this.tr.pick(CASES_PAGE.crumb), path: pagePath('cases', this.tr.currentLang()) },
  ]);

  constructor() {
    inject(SeoService).set({
      title: this.tr.pick(CASES_PAGE.seoTitle),
      description: this.tr.pick(CASES_PAGE.seoDescription),
      path: pagePath('cases', this.tr.currentLang()),
      alternates: { pt: pagePath('cases', 'pt'), en: pagePath('cases', 'en') },
      jsonLd: [breadcrumbJsonLd(this.crumbs())],
    });
  }
}
