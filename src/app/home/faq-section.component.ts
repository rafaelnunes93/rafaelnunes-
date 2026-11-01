import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../core/paths';
import { FAQ } from '../data/home';
import { TranslationService } from '../services/translation.service';
import { AccordionComponent } from '../shared/accordion.component';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [RouterLink, AccordionComponent, RevealDirective],
  template: `
    <section class="section" [id]="anchor()">
      <div class="container-x faq">
        <div reveal>
          <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
          <h2 class="h-section">{{ tr.pick(t.title) }}</h2>
          <p class="lead">
            {{ tr.pick(t.subtitlePre) }}
            <a [routerLink]="home()" [fragment]="contact()">{{ tr.pick(t.subtitleLink) }}</a>.
          </p>
        </div>
        <div reveal="80"><app-accordion [items]="tr.pick(t.items)" /></div>
      </div>
    </section>
  `,
  styles: `
    .faq { display: grid; gap: 40px; @media (min-width: 992px) { grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; } }
    .lead { margin-top: 16px; a { text-decoration: underline; text-underline-offset: 3px; } }
  `,
})
export class FaqSectionComponent {
  readonly tr = inject(TranslationService);
  readonly t = FAQ;
  readonly anchor = computed(() => HOME_ANCHORS.faq[this.tr.currentLang()]);
  readonly home = computed(() => pagePath('home', this.tr.currentLang()));
  readonly contact = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);
}
