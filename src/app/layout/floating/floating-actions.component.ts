import { Component, HostListener, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { LAYOUT } from '../../data/layout';
import { whatsappLink } from '../../data/site';
import { TranslationService } from '../../services/translation.service';

// Botão flutuante de WhatsApp (desktop) e barra fixa com 2 botões (mobile, após rolar o hero).
@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      class="wa-fab"
      [class.is-hidden]="barVisible()"
      [href]="whatsapp()"
      target="_blank"
      rel="noopener noreferrer"
      [attr.aria-label]="tr.pick(t.whatsappAria)"
    >
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>

    <div class="mobile-bar" [class.is-visible]="barVisible()" [attr.aria-hidden]="!barVisible()">
      <a class="ui-btn ui-btn--whatsapp" [href]="whatsapp()" target="_blank" rel="noopener noreferrer" [attr.tabindex]="barVisible() ? null : -1">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> {{ tr.pick(t.mobileBar.whatsapp) }}
      </a>
      <a class="ui-btn ui-btn--primary" [routerLink]="homePath()" [fragment]="contactAnchor()" [attr.tabindex]="barVisible() ? null : -1">
        {{ tr.pick(t.mobileBar.contact) }}
      </a>
    </div>
  `,
  styles: `
    .wa-fab {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 40;
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #0b7a3e;
      color: #fff;
      font-size: 1.6rem;
      box-shadow: 0 0 0 8px rgba(11, 122, 62, 0.18), 0 10px 24px -8px rgba(0, 0, 0, 0.5);
      transition: transform 0.2s, opacity 0.2s;

      &:hover { color: #fff; transform: scale(1.06); }
      &.is-hidden { opacity: 0; pointer-events: none; }
    }

    .mobile-bar {
      display: none;
    }

    @media (max-width: 768px) {
      .mobile-bar {
        position: fixed;
        inset: auto 0 0;
        z-index: 45;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
        background: var(--header-bg-scrolled);
        backdrop-filter: blur(12px);
        border-top: 1px solid var(--line);
        transform: translateY(110%);
        transition: transform 0.3s var(--ease);

        &.is-visible { transform: none; }
        .ui-btn { --btn-h: 46px; padding-inline: 12px; font-size: 0.9rem; }
      }
    }
  `,
})
export class FloatingActionsComponent {
  readonly tr = inject(TranslationService);
  readonly t = LAYOUT;
  /** Mensagem personalizada do WhatsApp (ex.: páginas de serviço). */
  readonly message = input<string>();

  readonly barVisible = signal(false);
  readonly whatsapp = computed(() => whatsappLink(this.tr.currentLang(), this.message()));
  readonly homePath = computed(() => pagePath('home', this.tr.currentLang()));
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);

  @HostListener('window:scroll')
  @HostListener('window:resize')
  update(): void {
    this.barVisible.set(window.innerWidth <= 768 && window.scrollY > window.innerHeight * 0.6);
  }
}
