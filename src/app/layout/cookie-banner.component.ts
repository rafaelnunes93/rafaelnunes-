import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../core/consent.service';
import { pagePath } from '../core/paths';
import { TranslationService } from '../services/translation.service';

const T = {
  title: { pt: 'Sua privacidade', en: 'Your privacy' },
  text: {
    pt: 'Uso cookies essenciais para o site funcionar e, com a sua permissão, cookies de análise (métricas anônimas) e de marketing (anúncios no blog).',
    en: 'I use essential cookies for the site to work and, with your permission, analytics cookies (anonymous metrics) and marketing cookies (ads on the blog).',
  },
  more: { pt: 'Saiba mais', en: 'Learn more' },
  acceptAll: { pt: 'Aceitar todos', en: 'Accept all' },
  essential: { pt: 'Só essenciais', en: 'Essential only' },
  customize: { pt: 'Personalizar', en: 'Customize' },
  save: { pt: 'Salvar escolhas', en: 'Save choices' },
  catEssential: { pt: 'Essenciais', en: 'Essential' },
  catEssentialText: { pt: 'Tema, preferências e formulário. Sempre ativos.', en: 'Theme, preferences and form. Always on.' },
  catAnalytics: { pt: 'Análise', en: 'Analytics' },
  catAnalyticsText: { pt: 'Métricas de uso anônimas e mapas de calor.', en: 'Anonymous usage metrics and heatmaps.' },
  catMarketing: { pt: 'Marketing', en: 'Marketing' },
  catMarketingText: { pt: 'Anúncios do Google AdSense no blog.', en: 'Google AdSense ads on the blog.' },
};

// Banner de consentimento (LGPD). Reaberto pelo botão "Preferências de cookies" do footer.
@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (consent.bannerOpen()) {
      <section class="banner" role="region" [attr.aria-label]="tr.pick(t.title)">
        <h2>{{ tr.pick(t.title) }}</h2>
        <p>{{ tr.pick(t.text) }} <a [routerLink]="privacyPath()">{{ tr.pick(t.more) }}</a></p>

        @if (custom()) {
          <fieldset class="cats">
            <label><input type="checkbox" checked disabled /> <span><strong>{{ tr.pick(t.catEssential) }}</strong> {{ tr.pick(t.catEssentialText) }}</span></label>
            <label><input type="checkbox" [checked]="analytics()" (change)="analytics.set($any($event.target).checked)" /> <span><strong>{{ tr.pick(t.catAnalytics) }}</strong> {{ tr.pick(t.catAnalyticsText) }}</span></label>
            <label><input type="checkbox" [checked]="marketing()" (change)="marketing.set($any($event.target).checked)" /> <span><strong>{{ tr.pick(t.catMarketing) }}</strong> {{ tr.pick(t.catMarketingText) }}</span></label>
          </fieldset>
        }

        <div class="actions">
          @if (custom()) {
            <button type="button" class="ui-btn ui-btn--primary ui-btn--sm" (click)="consent.save(analytics(), marketing())">{{ tr.pick(t.save) }}</button>
          } @else {
            <button type="button" class="ui-btn ui-btn--primary ui-btn--sm" (click)="consent.save(true, true)">{{ tr.pick(t.acceptAll) }}</button>
            <button type="button" class="ui-btn ui-btn--secondary ui-btn--sm" (click)="consent.save(false, false)">{{ tr.pick(t.essential) }}</button>
            <button type="button" class="ui-btn ui-btn--ghost ui-btn--sm" (click)="custom.set(true)">{{ tr.pick(t.customize) }}</button>
          }
        </div>
      </section>
    }
  `,
  styles: `
    .banner {
      position: fixed; left: 16px; right: 16px; bottom: 16px; z-index: 90;
      max-width: 460px; padding: 20px;
      border-radius: 18px; border: 1px solid var(--line-2);
      background: var(--surface); color: var(--ink); box-shadow: var(--shadow-lg);
      @media (min-width: 640px) { left: 24px; bottom: 24px; right: auto; }
    }
    h2 { font-size: 1rem; font-weight: 700; }
    p { margin-top: 6px; font-size: 0.85rem; color: var(--muted); a { text-decoration: underline; } }
    .cats { border: 0; padding: 0; margin: 14px 0 0; display: grid; gap: 10px; }
    label { display: flex; gap: 10px; font-size: 0.82rem; color: var(--muted); input { margin-top: 3px; accent-color: var(--primary); } strong { color: var(--ink); } }
    .actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 16px; }
  `,
})
export class CookieBannerComponent {
  readonly tr = inject(TranslationService);
  readonly consent = inject(ConsentService);
  readonly t = T;
  readonly custom = signal(false);
  readonly analytics = signal(false);
  readonly marketing = signal(false);
  readonly privacyPath = computed(() => pagePath('privacy', this.tr.currentLang()));

  constructor() {
    // Ao reabrir, mostra a escolha atual.
    effect(() => {
      if (!this.consent.bannerOpen()) return;
      const c = this.consent.choice();
      this.analytics.set(!!c?.analytics);
      this.marketing.set(!!c?.marketing);
      this.custom.set(!!c);
    });
  }
}
