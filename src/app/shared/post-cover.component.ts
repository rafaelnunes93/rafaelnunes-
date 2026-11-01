import { Component, computed, input } from '@angular/core';
import { getCategory } from '../data/categorias';

/** Hash simples e estável do slug: cada capa fica levemente diferente. */
export function seedFrom(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

// Capa gerada em SVG (sem imagem): gradiente da categoria + ondas + círculos.
@Component({
  selector: 'app-post-cover',
  standalone: true,
  template: `
    <div class="cover" [class.cover--image]="!!image()">
      @if (image()) {
        <img [src]="image()" [alt]="alt() ?? ''" loading="lazy" />
      } @else {
        <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient [attr.id]="gradId()" x1="0" y1="0" x2="1" y2="1">
              @for (c of category().gradient; track $index; let i = $index; let count = $count) {
                <stop [attr.offset]="count > 1 ? i / (count - 1) : 0" [attr.stop-color]="c" />
              }
            </linearGradient>
          </defs>
          <rect width="400" height="160" [attr.fill]="'url(#' + gradId() + ')'" />
          @for (w of shapes().waves; track $index) {
            <path [attr.d]="w.d" fill="none" stroke="#fff" [attr.stroke-opacity]="w.o" stroke-width="1.5" />
          }
          @for (c of shapes().circles; track $index) {
            <circle [attr.cx]="c.x" [attr.cy]="c.y" [attr.r]="c.r" fill="#fff" [attr.fill-opacity]="c.o" />
          }
        </svg>
      }
      @if (!image()) {
        <span class="cat">{{ category().name }}</span>
      }
    </div>
  `,
  styles: `
    .cover { position: relative; aspect-ratio: 5 / 2; overflow: hidden; background: var(--surface-2); }
    .cover--image { aspect-ratio: 40 / 21; }
    svg, img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .cat {
      position: absolute; left: 12px; bottom: 12px;
      padding: 3px 10px; border-radius: 9999px;
      background: rgba(255, 255, 255, 0.92); color: #0b1d14;
      font-size: 0.7rem; font-weight: 700;
    }
  `,
})
export class PostCoverComponent {
  readonly categorySlug = input.required<string>({ alias: 'category' });
  readonly seed = input.required<string>();
  readonly image = input<string>();
  readonly alt = input<string>();

  readonly category = computed(() => getCategory(this.categorySlug()));
  readonly gradId = computed(() => `g-${seedFrom(this.seed()).toString(36)}`);

  readonly shapes = computed(() => {
    let s = seedFrom(this.seed());
    const rnd = () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) >>> 0) % 1000) / 1000;
    const waves = [0, 1, 2].map((i) => {
      const y = 70 + i * 24 + rnd() * 16;
      const a = 20 + rnd() * 30;
      return { d: `M0 ${y} C 100 ${y - a}, 200 ${y + a}, 400 ${y - a / 2}`, o: 0.15 + rnd() * 0.12 };
    });
    const circles = [0, 1].map(() => ({ x: 260 + rnd() * 120, y: 20 + rnd() * 50, r: 18 + rnd() * 28, o: 0.1 + rnd() * 0.1 }));
    return { waves, circles };
  });
}
