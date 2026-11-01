import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';

export interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
  v: 1;
  ts: string;
}

const STORAGE_KEY = 'consent';

// Consentimento LGPD. Analytics (GA4/Clarity) e anúncios (AdSense) só carregam depois da escolha.
@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly choice = signal<ConsentChoice | null>(this.read());
  /** Banner visível: primeira visita ou reaberto pelo footer. */
  readonly bannerOpen = signal(false);

  constructor() {
    // Só depois da hidratação: o banner não existe no HTML pré-renderizado.
    if (this.isBrowser) afterNextRender(() => this.bannerOpen.set(!this.choice()));
  }

  save(analytics: boolean, marketing: boolean): void {
    const choice: ConsentChoice = { analytics, marketing, v: 1, ts: new Date().toISOString() };
    this.choice.set(choice);
    this.bannerOpen.set(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
    } catch {
      // sem armazenamento: a escolha vale só para esta visita
    }
  }

  reopen(): void {
    this.bannerOpen.set(true);
  }

  private read(): ConsentChoice | null {
    if (!this.isBrowser) return null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as ConsentChoice) : null;
      return parsed?.v === 1 ? parsed : null;
    } catch {
      return null;
    }
  }
}
