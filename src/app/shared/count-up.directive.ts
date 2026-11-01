import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';

// Conta de 0 até o valor quando entra na tela. O número real já vem no HTML pré-renderizado.
@Directive({ selector: '[countUp]', standalone: true })
export class CountUpDirective implements OnInit, OnDestroy {
  readonly countUp = input.required<number>();

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;
  private frame = 0;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.textContent = String(this.countUp());
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    node.textContent = '0';
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.observer?.disconnect();
      const target = this.countUp();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1200);
        node.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
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
