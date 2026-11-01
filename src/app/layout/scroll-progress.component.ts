import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, NgZone, OnDestroy, PLATFORM_ID, afterNextRender, inject, viewChild } from '@angular/core';

// Barra de 2px no topo que acompanha o progresso de rolagem da página.
@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div #bar class="bar" aria-hidden="true"></div>`,
  styles: `
    .bar {
      position: fixed;
      inset: 0 0 auto;
      z-index: 80;
      height: 2px;
      background: linear-gradient(90deg, var(--cta), var(--accent));
      transform-origin: 0 50%;
      transform: scaleX(0);
    }
  `,
})
export class ScrollProgressComponent implements OnDestroy {
  private readonly bar = viewChild.required<ElementRef<HTMLElement>>('bar');
  private readonly zone = inject(NgZone);
  private frame = 0;
  private readonly onScroll = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.bar().nativeElement.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    });
  };

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    afterNextRender(() => {
      this.zone.runOutsideAngular(() => window.addEventListener('scroll', this.onScroll, { passive: true }));
      this.onScroll();
    });
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') window.removeEventListener('scroll', this.onScroll);
  }
}
