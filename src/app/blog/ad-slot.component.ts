import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, PLATFORM_ID, afterNextRender, computed, effect, inject, input, signal, viewChild } from '@angular/core';
import { ConsentService } from '../core/consent.service';
import { BLOG_UI } from '../data/blog-ui';
import { SITE } from '../data/site';
import { TranslationService } from '../services/translation.service';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// Espaço de anúncio do Google AdSense no blog.
// Só aparece quando há um publisher ID em site.ts E o visitante aceitou cookies de marketing (LGPD).
@Component({
  selector: 'app-ad-slot',
  standalone: true,
  template: `
    @if (enabled()) {
      <aside class="ad" [attr.aria-label]="tr.pick(t.ad)">
        <span class="ad-label">{{ tr.pick(t.ad) }}</span>
        <ins
          #ins
          class="adsbygoogle"
          style="display:block"
          [attr.data-ad-client]="client"
          [attr.data-ad-slot]="slot()"
          [attr.data-ad-format]="format()"
          data-full-width-responsive="true"
        ></ins>
      </aside>
    }
  `,
  styles: `
    .ad { margin: 32px 0; padding: 12px; border: 1px dashed var(--line-2); border-radius: 14px; min-height: 120px; }
    .ad-label { display: block; margin-bottom: 6px; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--subtle); }
  `,
})
export class AdSlotComponent {
  readonly tr = inject(TranslationService);
  readonly t = BLOG_UI;
  readonly slot = input.required<string>();
  readonly format = input<'auto' | 'fluid' | 'rectangle'>('auto');
  readonly client = SITE.adsense.client;

  private readonly consent = inject(ConsentService);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly ins = viewChild<ElementRef<HTMLElement>>('ins');
  private pushed = false;

  // `hydrated` evita divergência com o HTML pré-renderizado (onde o anúncio nunca existe).
  private readonly hydrated = signal(false);
  readonly enabled = computed(() => this.hydrated() && !!this.client && !!this.slot() && !!this.consent.choice()?.marketing);

  constructor() {
    if (this.isBrowser) afterNextRender(() => this.hydrated.set(true));
    effect(() => {
      const el = this.ins();
      if (!el || this.pushed) return;
      this.pushed = true;
      this.loadScript();
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // bloqueador de anúncios ou script indisponível: o espaço fica vazio
      }
    });
  }

  private loadScript(): void {
    if (this.doc.getElementById('adsense-js')) return;
    const s = this.doc.createElement('script');
    s.id = 'adsense-js';
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.client}`;
    this.doc.head.appendChild(s);
  }
}
