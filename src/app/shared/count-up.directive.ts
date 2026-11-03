import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { TranslationService } from '../services/translation.service';

// Conta de 0 até o valor quando entra na tela. O número real já vem no HTML pré-renderizado.
// Milhares no formato do idioma: 1.000 (pt) / 1,000 (en).
@Directive({ selector: '[countUp]', standalone: true })
export class CountUpDirective implements OnInit, OnDestroy {
  readonly countUp = input.required<number>();

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private frame = 0;
  private readonly format = new Intl.NumberFormat(inject(TranslationService).currentLang() === 'en' ? 'en-US' : 'pt-BR');

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.textContent = this.format.format(this.countUp());
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;

    node.textContent = this.format.format(0);
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.observer?.disconnect();
      const target = this.countUp();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1200);
        node.textContent = this.format.format(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) this.frame = requestAnimationFrame(tick);
      };
      this.frame = requestAnimationFrame(tick);
    });
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.isBrowser) cancelAnimationFrame(this.frame);
  }
}
