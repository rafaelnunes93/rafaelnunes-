import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { absoluteUrl } from '../core/seo.service';

export interface Crumb {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        @for (c of items(); track c.path; let last = $last) {
          <li>
            @if (last) {
              <span aria-current="page">{{ c.label }}</span>
            } @else {
              <a [routerLink]="c.path">{{ c.label }}</a>
              <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    ol { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0 0 20px; font-size: 0.8rem; }
    li { display: flex; align-items: center; gap: 8px; color: var(--subtle); }
    a { color: var(--subtle); &:hover { color: var(--primary); } }
    span { color: var(--ink-2); }
    i { font-size: 0.55rem; }
  `,
})
export class BreadcrumbsComponent {
  readonly items = input.required<Crumb[]>();
}

export function breadcrumbJsonLd(items: Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: absoluteUrl(c.path) })),
  };
}
