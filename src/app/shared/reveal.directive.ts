import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';

// Reveal on scroll: opacidade + deslocamento + blur → nítido. Sem JS fica tudo visível (ver styles.scss).
@Directive({
  selector: '[reveal]',
  standalone: true,
  host: { 'data-reveal': '' },
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Atraso em ms (para escalonar itens de uma grade). */
  readonly reveal = input<number | string>('');

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    const delay = Number(this.reveal());
    if (delay > 0) node.style.transitionDelay = `${delay}ms`;
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
