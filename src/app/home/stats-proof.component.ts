import { Component, inject } from '@angular/core';
import { PROOF, STATS_LABELS } from '../data/home';
import { SITE } from '../data/site';
import { TranslationService } from '../services/translation.service';
import { CountUpDirective } from '../shared/count-up.directive';
import { RevealDirective } from '../shared/reveal.directive';

// Números com count-up + faixa de prova com dois marquees em sentidos opostos.
@Component({
  selector: 'app-stats-proof',
  standalone: true,
  imports: [CountUpDirective, RevealDirective],
  template: `
    <div class="container-x">
      <dl class="stats" reveal>
        @for (s of site.stats; track s.key) {
          <div class="stat">
            <dt class="visually-hidden">{{ tr.pick(labels[s.key]) }}</dt>
            <dd>
              <span class="num"><span [countUp]="s.value">{{ s.value }}</span><span class="suffix">{{ s.suffix }}</span></span>
              <span class="label" aria-hidden="true">{{ tr.pick(labels[s.key]) }}</span>
            </dd>
          </div>
        }
      </dl>
    </div>

    <section class="proof" [attr.aria-label]="tr.pick(proof.title)">
      <p class="proof-title">{{ tr.pick(proof.title) }}</p>
      <div class="marquee">
        <ul class="track">
          @for (c of proof.companies; track c) { <li class="company">{{ c }}</li> }
        </ul>
        <ul class="track" aria-hidden="true">
          @for (c of proof.companies; track c) { <li class="company">{{ c }}</li> }
        </ul>
      </div>
      <div class="marquee marquee--reverse">
        <ul class="track">
          @for (c of tr.pick(proof.chips); track c) { <li class="pill"><span class="dot"></span>{{ c }}</li> }
        </ul>
        <ul class="track" aria-hidden="true">
          @for (c of tr.pick(proof.chips); track c) { <li class="pill"><span class="dot"></span>{{ c }}</li> }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin: 0;
      padding-top: 32px;
      border-top: 1px solid var(--line);
      @media (min-width: 768px) { grid-template-columns: repeat(4, 1fr); }
    }
    dd { margin: 0; display: flex; flex-direction: column; gap: 4px; }
    .num {
      font-family: var(--font-display);
      font-size: clamp(2rem, 3.5vw, 2.6rem);
      font-weight: 800;
      line-height: 1;
      color: var(--ink);
    }
    .suffix { color: var(--accent); margin-left: 4px; }
    .label { color: var(--muted); font-size: 0.85rem; max-width: 18ch; line-height: 1.4; }

    .proof {
      margin-top: 72px;
      padding: 40px 0;
      border-block: 1px solid var(--line);
      background: var(--bg-2);
    }
    .proof-title {
      text-align: center;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--subtle);
      padding-inline: 16px;
      margin-bottom: 24px;
    }
    .marquee {
      display: flex;
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
      & + .marquee { margin-top: 18px; }
      &:hover .track { animation-play-state: paused; }
    }
    .track {
      display: flex;
      flex: none;
      align-items: center;
      gap: 48px;
      padding: 0 24px;
      margin: 0;
      list-style: none;
      animation: marquee 40s linear infinite;
    }
    .marquee--reverse .track { gap: 12px; padding: 0 6px; animation-duration: 50s; animation-direction: reverse; }
    .company {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--subtle);
      white-space: nowrap;
    }
    .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--primary); }
  `,
})
export class StatsProofComponent {
  readonly tr = inject(TranslationService);
  readonly site = SITE;
  readonly labels = STATS_LABELS;
  readonly proof = PROOF;
}
