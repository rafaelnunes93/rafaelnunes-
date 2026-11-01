import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject } from '@angular/core';
import { SITE } from '../data/site';
import { ConsentService } from './consent.service';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clarity?: (...args: unknown[]) => void;
  }
}

// GA4 + Microsoft Clarity carregados só depois do consentimento de "Análise" (LGPD),
// com Google Consent Mode v2 começando tudo como "denied".
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly doc = inject(DOCUMENT);
  private readonly consent = inject(ConsentService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private loaded = false;

  constructor() {
    if (!this.isBrowser) return;
    effect(() => {
      const choice = this.consent.choice();
      if (choice?.analytics) this.load(choice.marketing);
      else if (this.loaded) this.updateConsent(false, !!choice?.marketing);
    });
    // Cliques em WhatsApp e e-mail em qualquer lugar do site.
    this.doc.addEventListener('click', (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a');
      const href = a?.getAttribute('href') ?? '';
      if (href.includes('wa.me/')) this.track('whatsapp_click', { page: location.pathname });
      else if (href.startsWith('mailto:')) this.track('email_click', { page: location.pathname });
    });
  }

  /** Registra um evento (ignorado enquanto não houver consentimento de análise). */
  track(name: string, params: Record<string, unknown> = {}): void {
    if (!this.isBrowser || !this.loaded || !window.gtag) return;
    window.gtag('event', name, params);
  }

  private load(marketing: boolean): void {
    if (this.loaded) {
      this.updateConsent(true, marketing);
      return;
    }
    const { ga4, clarity } = SITE.analytics as { ga4: string; clarity: string };
    if (!ga4 && !clarity) return;
    this.loaded = true;

    if (ga4) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      this.updateConsent(true, marketing);
      window.gtag('js', new Date());
      window.gtag('config', ga4, { anonymize_ip: true });
      this.addScript(`https://www.googletagmanager.com/gtag/js?id=${ga4}`);
    }

    if (clarity) {
      const s = this.doc.createElement('script');
      s.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`;
      this.doc.head.appendChild(s);
    }
  }

  private updateConsent(analytics: boolean, marketing: boolean): void {
    window.gtag?.('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    });
  }

  private addScript(src: string): void {
    const s = this.doc.createElement('script');
    s.async = true;
    s.src = src;
    this.doc.head.appendChild(s);
  }
}
