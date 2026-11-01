import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../core/paths';
import { ABOUT_TEASER } from '../data/home';
import { SITE } from '../data/site';
import { TranslationService } from '../services/translation.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about-teaser',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  template: `
    <section class="section" [id]="anchor()">
      <div class="container-x about">
        <figure class="photo" reveal>
          <img [src]="site.photo" [alt]="site.fullName" width="667" height="883" loading="lazy" />
          <figcaption class="pill"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ tr.pick(t.location) }}</figcaption>
        </figure>
        <div reveal="80">
          <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
          <h2 class="h-section">{{ tr.pick(t.title) }}</h2>
          @for (p of tr.pick(t.paragraphs); track $index) {
            <p class="text">{{ p }}</p>
          }
          <ul class="values">
            @for (v of t.values; track v.icon) {
              <li>
                <span class="icon-box"><i [class]="v.icon" aria-hidden="true"></i></span>
                <div><strong>{{ tr.pick(v.title) }}</strong><span>{{ tr.pick(v.text) }}</span></div>
              </li>
            }
          </ul>
          <div class="ctas">
            <a class="ui-btn ui-btn--secondary" [routerLink]="aboutPath()">{{ tr.pick(t.ctaPrimary) }} <i class="fa-solid fa-arrow-right arrow" aria-hidden="true"></i></a>
            <a class="ui-btn ui-btn--primary" [routerLink]="home()" [fragment]="contact()">{{ tr.pick(t.ctaSecondary) }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about { display: grid; gap: 48px; align-items: center; @media (min-width: 992px) { grid-template-columns: 0.75fr 1.25fr; gap: 72px; } }
    .photo {
      position: relative; margin: 0; justify-self: center; width: min(100%, 360px);
      img { width: 100%; height: auto; border-radius: 24px; border: 1px solid var(--line); background: radial-gradient(circle at 50% 30%, #12304a, #050816 75%); box-shadow: var(--shadow-lg); }
      .pill { position: absolute; left: 50%; bottom: -16px; transform: translateX(-50%); white-space: nowrap; i { color: var(--primary); } }
    }
    .h-section { max-width: 22ch; }
    .text { margin-top: 16px; color: var(--muted); max-width: 64ch; }
    .values {
      display: grid; gap: 20px; margin: 32px 0; padding: 0; list-style: none;
      @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
      li { display: flex; gap: 14px; }
      div { display: flex; flex-direction: column; }
      strong { color: var(--ink); font-size: 0.95rem; }
      span:not(.icon-box) { color: var(--muted); font-size: 0.88rem; }
    }
    .ctas { display: flex; flex-wrap: wrap; gap: 12px; }
  `,
})
export class AboutTeaserComponent {
  readonly tr = inject(TranslationService);
  readonly t = ABOUT_TEASER;
  readonly site = SITE;
  readonly anchor = computed(() => HOME_ANCHORS.about[this.tr.currentLang()]);
  readonly aboutPath = computed(() => pagePath('about', this.tr.currentLang()));
  readonly home = computed(() => pagePath('home', this.tr.currentLang()));
  readonly contact = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);
}
