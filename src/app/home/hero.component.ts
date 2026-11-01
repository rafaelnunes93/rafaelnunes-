import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, PLATFORM_ID, computed, inject, signal, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../core/paths';
import { HERO } from '../data/home';
import { SITE } from '../data/site';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnDestroy {
  readonly tr = inject(TranslationService);
  readonly t = HERO;
  readonly site = SITE;
  readonly lang = this.tr.currentLang;
  readonly home = computed(() => pagePath('home', this.lang()));
  readonly contactAnchor = computed(() => HOME_ANCHORS.contact[this.lang()]);
  readonly casesAnchor = computed(() => HOME_ANCHORS.cases[this.lang()]);

  // Linha "digitando" com os cargos (identidade do portfólio anterior).
  readonly typed = signal(this.tr.pick(HERO.roles)[0]);
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      this.loop(0, this.typed().length, true);
    });
  }

  private loop(index: number, chars: number, deleting: boolean): void {
    const roles = this.tr.pick(HERO.roles);
    const word = roles[index % roles.length];
    this.typed.set(word.slice(0, chars));
    let next: () => void;
    let delay = deleting ? 35 : 70;
    if (!deleting && chars === word.length) {
      delay = 1800;
      next = () => this.loop(index, chars, true);
    } else if (deleting && chars === 0) {
      delay = 300;
      next = () => this.loop(index + 1, 0, false);
    } else {
      next = () => this.loop(index, chars + (deleting ? -1 : 1), deleting);
    }
    this.timer = setTimeout(next, delay);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
