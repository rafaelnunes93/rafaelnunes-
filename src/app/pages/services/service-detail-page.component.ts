import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SERVICE_ID, SeoService, absoluteUrl } from '../../core/seo.service';
import { CASES } from '../../data/cases';
import { CRUMB_HOME, SERVICES_PAGE, SERVICE_PAGE } from '../../data/pages';
import { SERVICES, Service, getService } from '../../data/services';
import { whatsappLink } from '../../data/site';
import { POSTS } from '../../generated/blog-index';
import { TranslationService } from '../../services/translation.service';
import { ContactSectionComponent } from '../../forms/contact-section.component';
import { AccordionComponent, faqJsonLd } from '../../shared/accordion.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { CaseCardComponent } from '../../shared/case-card.component';
import { PostCardComponent } from '../../shared/post-card.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, AccordionComponent, CaseCardComponent, PostCardComponent, ContactSectionComponent, RevealDirective],
  templateUrl: './service-detail-page.component.html',
  styleUrl: './service-detail-page.component.scss',
})
export class ServiceDetailPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = SERVICE_PAGE;
  readonly lang = this.tr.currentLang;
  readonly service: Service;

  readonly title = computed(() => this.tr.pick(this.service.shortTitle));
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', this.lang()) },
    { label: this.tr.pick(SERVICES_PAGE.crumb), path: pagePath('services', this.lang()) },
    { label: this.title(), path: pagePath('services', this.lang(), this.service.slug) },
  ]);
  readonly whatsappMessage = computed(() => this.tr.pick(SERVICE_PAGE.whatsappMessage).replace('{service}', this.title().toLowerCase()));
  readonly whatsapp = computed(() => whatsappLink(this.lang(), this.whatsappMessage()));
  readonly contactTitle = computed(() => this.tr.pick(SERVICE_PAGE.contactTitle).replace('{service}', this.title().toLowerCase()));
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.lang()]);
  readonly others = computed(() =>
    SERVICES.filter((s) => s.slug !== this.service.slug).map((s) => ({ icon: s.icon, label: this.tr.pick(s.shortTitle), path: pagePath('services', this.lang(), s.slug) })),
  );
  readonly cases = computed(() => CASES.filter((c) => this.service.relatedCases.includes(c.slug)));
  readonly posts = computed(() => {
    const related = POSTS.filter((p) => p.relatedServices.includes(this.service.slug));
    return (related.length ? related : POSTS).slice(0, 3);
  });

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';
    const found = getService(slug);
    if (!found) {
      inject(Router).navigate([pagePath('home', this.lang()), '404'], { skipLocationChange: true });
    }
    this.service = found ?? SERVICES[0];

    const s = this.service;
    const lang = this.lang();
    inject(SeoService).set({
      title: this.tr.pick(s.seoTitle),
      description: this.tr.pick(s.seoDescription),
      path: pagePath('services', lang, s.slug),
      alternates: { pt: pagePath('services', 'pt', s.slug), en: pagePath('services', 'en', s.slug) },
      jsonLd: [
        {
          '@type': 'Service',
          name: this.tr.pick(s.title),
          serviceType: this.tr.pick(s.shortTitle),
          description: this.tr.pick(s.definition),
          provider: { '@id': SERVICE_ID },
          areaServed: 'BR',
          url: absoluteUrl(pagePath('services', lang, s.slug)),
        },
        breadcrumbJsonLd(this.crumbs()),
        faqJsonLd(s.faq[lang]),
      ],
    });
  }
}
