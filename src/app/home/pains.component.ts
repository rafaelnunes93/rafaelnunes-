import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../core/paths';
import { PAINS } from '../data/home';
import { TranslationService } from '../services/translation.service';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeaderComponent } from '../shared/section-header.component';

@Component({
  selector: 'app-pains',
  standalone: true,
  imports: [RouterLink, RevealDirective, SectionHeaderComponent],
  template: `
    <section class="section" [id]="anchor()">
      <div class="container-x">
        <app-section-header [eyebrow]="tr.pick(t.eyebrow)" [title]="tr.pick(t.title)" [subtitle]="tr.pick(t.subtitle)" />
        <div class="grid-3 hscroller">
          @for (p of t.items; track p.icon; let i = $index) {
            <article class="ui-card ui-card--hover pain" [reveal]="(i % 3) * 60">
              <span class="icon-box"><i [class]="p.icon" aria-hidden="true"></i></span>
              <h3>{{ tr.pick(p.quote) }}</h3>
              <p>{{ tr.pick(p.consequence) }}</p>
              <p class="fix"><i class="fa-solid fa-check" aria-hidden="true"></i> {{ tr.pick(p.solution) }}</p>
            </article>
          }
          <article class="pain-cta" reveal="120">
            <p>{{ tr.pick(t.ctaTitle) }}</p>
            <a class="ui-btn ui-btn--primary" [routerLink]="home()" [fragment]="contact()">
              {{ tr.pick(t.ctaButton) }} <i class="fa-solid fa-arrow-right arrow" aria-hidden="true"></i>
            </a>
          </article>
        </div>
        <p class="swipe-hint"><i class="fa-solid fa-hand-pointer" aria-hidden="true"></i> {{ tr.pick(t.swipe) }}</p>
      </div>
    </section>
  `,
  styles: `
    .pain { display: flex; flex-direction: column; }
    h3 { margin-top: 18px; font-size: 1.08rem; font-weight: 700; line-height: 1.35; }
    p { margin-top: 10px; color: var(--muted); font-size: 0.92rem; }
    .fix {
      margin-top: auto;
      padding-top: 16px;
      border-top: 1px solid var(--line);
      color: var(--ink-2);
      display: flex;
      gap: 10px;
      i { color: var(--success); margin-top: 4px; font-size: 0.8rem; }
    }
    .pain p:nth-of-type(1) { margin-bottom: 16px; }
    .pain-cta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 24px;
      padding: 28px;
      border-radius: var(--radius-card);
      background:
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 32px 32px,
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px) 0 0 / 32px 32px,
        linear-gradient(135deg, #04261a, #065f46 55%, #0e7490);
      color: #fff;
      box-shadow: var(--shadow-lg);
      p { color: #fff; font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; line-height: 1.35; margin: 0; }
      .ui-btn { align-self: flex-start; }
    }
  `,
})
export class PainsComponent {
  readonly tr = inject(TranslationService);
  readonly t = PAINS;
  readonly anchor = computed(() => HOME_ANCHORS.pains[this.tr.currentLang()]);
  readonly home = computed(() => pagePath('home', this.tr.currentLang()));
  readonly contact = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);
}
