import { Component, input } from '@angular/core';
import type { FaqItem } from '../data/blog-types';

// FAQ com <details>/<summary> nativo. O JSON-LD FAQPage é montado pela página que usa o componente.
@Component({
  selector: 'app-accordion',
  standalone: true,
  template: `
    <div class="accordion">
      @for (item of items(); track item.q; let i = $index) {
        <details [attr.open]="openFirst() && i === 0 ? '' : null">
          <summary>
            <span>{{ item.q }}</span>
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </summary>
          <p>{{ item.a }}</p>
        </details>
      }
    </div>
  `,
  styles: `
    .accordion {
      border: 1px solid var(--line);
      border-radius: var(--radius-card);
      background: var(--surface);
      box-shadow: var(--shadow);
      overflow: hidden;
      interpolate-size: allow-keywords;
    }
    details {
      border-bottom: 1px solid var(--line);
      &:last-child { border-bottom: 0; }
      &::details-content {
        height: 0;
        overflow: hidden;
        transition: height 0.25s var(--ease), content-visibility 0.25s allow-discrete;
      }
      &[open]::details-content { height: auto; }
      &[open] summary i { transform: rotate(180deg); }
    }
    summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 20px;
      cursor: pointer;
      list-style: none;
      font-weight: 600;
      color: var(--ink);
      &::-webkit-details-marker { display: none; }
      &:hover { color: var(--primary); }
      i {
        flex: none;
        display: grid;
        place-items: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--primary-soft);
        color: var(--primary);
        font-size: 0.7rem;
        transition: transform 0.25s var(--ease);
      }
    }
    p {
      padding: 0 20px 20px;
      color: var(--muted);
      font-size: 0.95rem;
    }
  `,
})
export class AccordionComponent {
  readonly items = input.required<FaqItem[]>();
  readonly openFirst = input(false);
}

/** Nó JSON-LD FAQPage com as perguntas visíveis na página. */
export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
