import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../core/paths';
import { SECTIONS } from '../data/home';
import { SERVICES } from '../data/services';
import { TranslationService } from '../services/translation.service';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeaderComponent } from '../shared/section-header.component';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [RouterLink, RevealDirective, SectionHeaderComponent],
  template: `
    <section class="section section--tinted" [id]="anchor()">
      <div class="container-x">
        <app-section-header
          [eyebrow]="tr.pick(t.eyebrow)"
          [title]="tr.pick(t.title)"
          [subtitle]="tr.pick(t.subtitle)"
          [linkLabel]="showLink() ? tr.pick(t.link) : undefined"
          [linkPath]="servicesPath()"
        />
        <div class="grid-4 hscroller">
          @for (s of services; track s.slug; let i = $index) {
            <a class="ui-card ui-card--hover service" [routerLink]="link(s.slug)" [reveal]="(i % 4) * 60">
              <span class="icon-box"><i [class]="s.icon" aria-hidden="true"></i></span>
              <h3>{{ tr.pick(s.shortTitle) }}</h3>
              <p>{{ tr.pick(s.benefit) }}</p>
              <ul class="check-list">
                @for (b of tr.pick(s.homeBullets); track b) { <li>{{ b }}</li> }
              </ul>
              <span class="more">{{ tr.pick(t.more) }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </a>
          }
          <div class="ui-card service service--unsure" reveal="180">
            <span class="icon-box"><i class="fa-regular fa-comment-dots" aria-hidden="true"></i></span>
            <h3>{{ tr.pick(t.unsureTitle) }}</h3>
            <p>{{ tr.pick(t.unsureText) }}</p>
            <a class="more" [routerLink]="home()" [fragment]="contact()">{{ tr.pick(t.unsureLink) }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .service { display: flex; flex-direction: column; color: inherit; }
    h3 { margin-top: 18px; font-size: 1.08rem; font-weight: 700; }
    p { margin-top: 8px; color: var(--muted); font-size: 0.9rem; }
    .check-list { margin: 16px 0 20px; li { font-size: 0.84rem; } }
    .more {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      color: var(--primary);
      font-size: 0.84rem;
      font-weight: 600;
      i { font-size: 0.75rem; transition: transform 0.2s var(--ease); }
    }
    .service:hover .more i { transform: translateX(3px); }
    .service--unsure { border-style: dashed; background: transparent; box-shadow: none; p { margin-bottom: 20px; } }
  `,
})
export class ServicesGridComponent {
  readonly tr = inject(TranslationService);
  readonly showLink = input(true);
  readonly t = SECTIONS.services;
  readonly services = SERVICES;
  readonly anchor = computed(() => HOME_ANCHORS.services[this.tr.currentLang()]);
  readonly servicesPath = computed(() => pagePath('services', this.tr.currentLang()));
  readonly home = computed(() => pagePath('home', this.tr.currentLang()));
  readonly contact = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);

  link(slug: string): string {
    return pagePath('services', this.tr.currentLang(), slug);
  }
}
