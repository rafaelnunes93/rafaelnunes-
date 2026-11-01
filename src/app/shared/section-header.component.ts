import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from './reveal.directive';

// Eyebrow + H2 + subtítulo, com link opcional alinhado à direita.
@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  template: `
    <div class="section-head" [class.section-head--center]="center()" reveal>
      <div>
        <span class="eyebrow">{{ eyebrow() }}</span>
        <h2 class="h-section" [id]="headingId()">{{ title() }}</h2>
        @if (subtitle()) {
          <p class="lead">{{ subtitle() }}</p>
        }
      </div>
      @if (linkLabel() && linkPath()) {
        <a class="link-arrow" [routerLink]="linkPath()" [fragment]="linkFragment()">
          {{ linkLabel() }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      }
      <ng-content />
    </div>
  `,
})
export class SectionHeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly headingId = input<string>();
  readonly center = input(false);
  readonly linkLabel = input<string>();
  readonly linkPath = input<string>();
  readonly linkFragment = input<string>();
}
