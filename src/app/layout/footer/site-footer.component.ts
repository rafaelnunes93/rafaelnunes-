import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { ConsentService } from '../../core/consent.service';
import { LAYOUT } from '../../data/layout';
import { SERVICE_SUMMARIES } from '../../data/services';
import { SITE, whatsappLink } from '../../data/site';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly tr = inject(TranslationService);
  readonly consent = inject(ConsentService);
  private readonly seo = inject(SeoService);

  readonly t = LAYOUT.footer;
  readonly site = SITE;
  readonly year = new Date().getFullYear();
  readonly lang = this.tr.currentLang;

  readonly services = computed(() =>
    SERVICE_SUMMARIES.map((s) => ({ label: this.tr.pick(s.shortTitle), path: pagePath('services', this.lang(), s.slug) })),
  );

  readonly links = computed(() => {
    const lang = this.lang();
    const other = lang === 'pt' ? 'en' : 'pt';
    const items = [
      { label: this.tr.pick(this.t.home), path: pagePath('home', lang) },
      { label: this.tr.pick(this.t.allServices), path: pagePath('services', lang) },
      { label: this.tr.pick(this.t.cases), path: pagePath('cases', lang) },
      { label: this.tr.pick(this.t.blog), path: pagePath('blog', 'pt') },
      { label: this.tr.pick(this.t.about), path: pagePath('about', lang) },
      { label: this.tr.pick(this.t.facts), path: pagePath('facts', lang) },
      { label: this.tr.pick(this.t.otherLang), path: this.seo.alternates()[other] ?? pagePath('home', other) },
    ];
    return items;
  });

  readonly whatsapp = computed(() => whatsappLink(this.lang()));
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.lang()]);
  readonly homePath = computed(() => pagePath('home', this.lang()));
  readonly privacyPath = computed(() => pagePath('privacy', this.lang()));
}
