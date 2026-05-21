import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('reveal');
    if (this.revealDelay) {
      this.el.nativeElement.style.transitionDelay = `${this.revealDelay}s`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('revealed');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
