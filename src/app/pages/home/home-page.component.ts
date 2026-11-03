import { Component, computed, inject } from '@angular/core';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { CASES } from '../../data/cases';
import { SECTIONS } from '../../data/home';
import { TranslationService } from '../../services/translation.service';
import { HeroComponent } from '../../home/hero.component';
import { StatsProofComponent } from '../../home/stats-proof.component';
import { PainsComponent } from '../../home/pains.component';
import { ServicesGridComponent } from '../../home/services-grid.component';
import { AboutTeaserComponent } from '../../home/about-teaser.component';
import { BlogTeaserComponent } from '../../home/blog-teaser.component';
import { ContactSectionComponent } from '../../forms/contact-section.component';
import { CaseCardComponent } from '../../shared/case-card.component';
import { SectionHeaderComponent } from '../../shared/section-header.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperienciasComponent } from '../../sections/experiencias/experiencias.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    StatsProofComponent,
    PainsComponent,
    ServicesGridComponent,
    AboutTeaserComponent,
    BlogTeaserComponent,
    ContactSectionComponent,
    CaseCardComponent,
    SectionHeaderComponent,
    SkillsComponent,
    ExperienciasComponent,
  ],
  template: `
    <app-hero />
    <app-stats-proof />
    <app-pains />
    <app-services-grid />

    <section class="section" [id]="anchors().cases">
      <div class="container-x">
        <app-section-header
          [eyebrow]="tr.pick(s.cases.eyebrow)"
          [title]="tr.pick(s.cases.title)"
          [subtitle]="tr.pick(s.cases.subtitle)"
          [linkLabel]="tr.pick(s.cases.link)"
          [linkPath]="casesPath()"
        />
        <div class="cases-list">
          @for (c of featured; track c.slug) {
            <app-case-card [item]="c" />
          }
        </div>
      </div>
    </section>

    <!-- Seções do portfólio original: visual e comportamento preservados. -->
    <div class="legacy-dark legacy-block">
      <div class="legacy-section"><app-skills /></div>
      <div class="legacy-section" [id]="anchors().experience"><app-experiencias /></div>
    </div>
    <app-about-teaser />
    <app-blog-teaser />
    <app-contact-section />
  `,
  styles: `
    .cases-list { display: grid; gap: 28px; }
    .legacy-block { position: relative; padding-block: 24px; }
    .legacy-section {
      width: 100%;
      padding: 60px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      z-index: 1;
      > * { width: 100%; min-width: 0; max-width: 100%; }
    }
  `,
})
export class HomePageComponent {
  readonly tr = inject(TranslationService);
  readonly s = SECTIONS;
  readonly featured = CASES.filter((c) => c.featured);
  readonly casesPath = computed(() => pagePath('cases', this.tr.currentLang()));
  readonly anchors = computed(() => {
    const lang = this.tr.currentLang();
    return { cases: HOME_ANCHORS.cases[lang], experience: HOME_ANCHORS.experience[lang] };
  });

  constructor() {
    const lang = this.tr.currentLang();
    inject(SeoService).set({
      title:
        lang === 'en'
          ? 'Rafael Nunes — Full Stack Developer (.NET, Angular) | Custom software'
          : 'Rafael Nunes — Desenvolvedor Full Stack .NET e Angular | Software sob medida',
      description:
        lang === 'en'
          ? 'Full stack developer specialized in .NET and Angular: web systems, APIs, integrations, apps and SaaS from planning to production.'
          : 'Desenvolvedor full stack especializado em .NET e Angular: sistemas web, APIs, integrações, apps e SaaS do planejamento à produção.',
      path: pagePath('home', lang),
      alternates: { pt: '/', en: '/en' },
    });
  }
}
