import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pagePath } from '../core/paths';
import { CaseStudy } from '../data/cases';
import { SECTIONS } from '../data/home';
import { TranslationService } from '../services/translation.service';
import { BrowserFrameComponent } from './browser-frame.component';
import { RevealDirective } from './reveal.directive';

// Card grande horizontal: texto à esquerda (Problema/Solução/Resultado) e print à direita.
// `compact` = card vertical para grades (páginas de serviço).
@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [RouterLink, BrowserFrameComponent, RevealDirective],
  template: `
    <article class="ui-card case" [class.case--compact]="compact()" reveal>
      <div class="case-body">
        <span class="badge-cat">{{ tr.pick(item().type) }}</span>
        <h3>
          <a [routerLink]="link()"><span class="client">{{ item().name }}:</span> {{ tr.pick(item().title) }}</a>
        </h3>
        @if (!compact()) {
          <dl class="psr">
            <div><dt class="p">{{ tr.pick(t.problem) }}</dt><dd>{{ tr.pick(item().problem) }}</dd></div>
            <div><dt class="s">{{ tr.pick(t.solution) }}</dt><dd>{{ tr.pick(item().solution) }}</dd></div>
            <div><dt class="r">{{ tr.pick(t.result) }}</dt><dd>{{ tr.pick(item().result) }}</dd></div>
          </dl>
        }
        <ul class="chip-list">
          @for (tech of item().tech; track tech) {
            <li class="chip">{{ tech }}</li>
          }
        </ul>
        <div class="case-links">
          <a class="link-arrow" [routerLink]="link()">{{ tr.pick(t.readMore) }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          @if (item().liveUrl) {
            <a class="link-arrow live" [href]="item().liveUrl" target="_blank" rel="noopener noreferrer">
              {{ tr.pick(t.live) }} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          }
        </div>
      </div>
      <a class="case-media" [routerLink]="link()" tabindex="-1" aria-hidden="true">
        <app-browser-frame [src]="item().image" [alt]="tr.pick(item().imageAlt)" [domain]="item().domain" [contain]="!!item().imageContain" [logo]="!!item().imageLogo" />
      </a>
    </article>
  `,
  styles: `
    .case {
      display: grid;
      gap: 32px;
      align-items: center;
      padding: 24px;
      @media (min-width: 992px) {
        grid-template-columns: 1.05fr 1fr;
        padding: 40px;
      }
    }
    .case--compact {
      grid-template-columns: 1fr !important;
      padding: 20px !important;
      gap: 20px;
      .case-media { order: -1; }
      h3 { font-size: 1.1rem; }
    }
    h3 {
      margin-top: 14px;
      font-size: clamp(1.25rem, 2.2vw, 1.6rem);
      font-weight: 700;
      line-height: 1.25;
      a { color: var(--ink); }
      a:hover { color: var(--primary); }
    }
    .client { color: var(--primary); }
    .psr {
      display: grid;
      gap: 12px;
      margin: 20px 0;
      div { display: grid; grid-template-columns: 92px 1fr; gap: 12px; }
      dt { font-size: 0.85rem; font-weight: 700; }
      dd { margin: 0; color: var(--muted); font-size: 0.92rem; line-height: 1.55; }
      .p { color: var(--danger); }
      .s { color: var(--primary); }
      .r { color: var(--success); }
    }
    .chip-list { margin-top: 16px; }
    .case-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 24px;
      margin-top: 20px;
      .live { color: var(--ink-2); }
    }
    .case-media { display: block; }
  `,
})
export class CaseCardComponent {
  readonly tr = inject(TranslationService);
  readonly item = input.required<CaseStudy>();
  readonly compact = input(false);
  readonly t = SECTIONS.cases;
  readonly link = computed(() => pagePath('cases', this.tr.currentLang(), this.item().slug));
}
