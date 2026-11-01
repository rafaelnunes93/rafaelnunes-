import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { PERSON_ID, SeoService, absoluteAsset, absoluteUrl } from '../../core/seo.service';
import { CASES, CaseStudy, getCase } from '../../data/cases';
import { CASES_PAGE, CASE_PAGE, CRUMB_HOME } from '../../data/pages';
import { SERVICES } from '../../data/services';
import { TranslationService } from '../../services/translation.service';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { BrowserFrameComponent } from '../../shared/browser-frame.component';
import { CaseCardComponent } from '../../shared/case-card.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-case-detail-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, BrowserFrameComponent, CaseCardComponent, RevealDirective],
  templateUrl: './case-detail-page.component.html',
  styleUrl: './case-detail-page.component.scss',
})
export class CaseDetailPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = CASE_PAGE;
  readonly lang = this.tr.currentLang;
  readonly item: CaseStudy;

  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.lang()) },
    { label: this.tr.pick(CASES_PAGE.crumb), path: pagePath('cases', this.lang()) },
    { label: this.item.name, path: pagePath('cases', this.lang(), this.item.slug) },
  ]);
  readonly services = computed(() =>
    SERVICES.filter((s) => this.item.relatedServices.includes(s.slug)).map((s) => ({
      icon: s.icon,
      label: this.tr.pick(s.shortTitle),
      path: pagePath('services', this.lang(), s.slug),
    })),
  );
  readonly others = computed(() => CASES.filter((c) => c.slug !== this.item.slug).slice(0, 2));
  readonly home = computed(() => pagePath('home', this.lang()));
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.lang()]);

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';
    const found = getCase(slug);
    if (!found) inject(Router).navigate([pagePath('home', this.lang()), '404'], { skipLocationChange: true });
    this.item = found ?? CASES[0];

    const c = this.item;
    const lang = this.lang();
    const path = pagePath('cases', lang, c.slug);
    inject(SeoService).set({
      title: `${c.name}: ${this.tr.pick(c.type)}`,
      description: this.tr.pick(c.lead).slice(0, 160),
      path,
      alternates: { pt: pagePath('cases', 'pt', c.slug), en: pagePath('cases', 'en', c.slug) },
      image: c.image,
      jsonLd: [
        {
          '@type': 'CreativeWork',
          name: `${c.name} — ${this.tr.pick(c.title)}`,
          description: this.tr.pick(c.lead),
          image: absoluteAsset(c.image),
          url: absoluteUrl(path),
          creator: { '@id': PERSON_ID },
          keywords: c.tech.join(', '),
          inLanguage: lang === 'en' ? 'en' : 'pt-BR',
          ...(c.liveUrl ? { sameAs: c.liveUrl } : {}),
        },
        breadcrumbJsonLd(this.crumbs()),
      ],
    });
  }
}
