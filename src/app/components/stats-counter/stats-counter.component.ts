import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface StatItem {
  value: number;    // target number
  suffix: string;   // e.g. '+'
  label: string;    // e.g. 'Anos de experiência'
  duration?: number; // ms, default 1800
}

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [],
  templateUrl: './stats-counter.component.html',
  styleUrls: ['./stats-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCounterComponent implements OnInit, OnDestroy {
  @Input() stats: StatItem[] = [];

  displayed: number[] = [];
  isVisible = signal(false);

  private observer: IntersectionObserver | null = null;
  private rafIds: number[] = [];
  private hasAnimated = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.displayed = this.stats.map(() => 0);
    if (!isPlatformBrowser(this.platformId)) return;

    // Run observer OUTSIDE Angular zone to avoid unnecessary CD cycles
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.observer?.disconnect();

            // Re-enter Angular zone to update signal + trigger CD
            this.ngZone.run(() => {
              this.isVisible.set(true);
              this.cdr.markForCheck();
            });

            // Keep animation frames outside zone (performance)
            this.animateAll();
          }
        },
        { threshold: 0.2 }
      );

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.rafIds.forEach((id) => cancelAnimationFrame(id));
  }

  private animateAll(): void {
    this.stats.forEach((stat, i) => {
      this.animateStat(i, stat.value, stat.duration ?? 1800);
    });
  }

  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  private animateStat(index: number, target: number, duration: number): void {
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = this.easeOutQuart(progress);
      const current = Math.round(eased * target);

      // Run in zone so OnPush detects the change
      this.ngZone.run(() => {
        this.displayed[index] = current;
        this.cdr.markForCheck();
      });

      if (progress < 1) {
        this.rafIds[index] = requestAnimationFrame(step);
      }
    };

    this.rafIds[index] = requestAnimationFrame(step);
  }
}
