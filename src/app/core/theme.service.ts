import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

// O tema inicial é aplicado por um script inline no <head> (index.html) para não piscar.
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.readInitial());

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    this.doc.documentElement.setAttribute('data-theme', theme);
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // armazenamento indisponível: o tema vale só para esta visita
    }
    this.doc
      .querySelector('meta[name="theme-color"]:not([media])')
      ?.setAttribute('content', theme === 'dark' ? '#050816' : '#f5f8f6');
  }

  private readInitial(): Theme {
    const fromDom = this.doc.documentElement.getAttribute('data-theme');
    return fromDom === 'light' ? 'light' : 'dark';
  }
}
