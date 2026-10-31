import { Component, inject, computed } from '@angular/core';
import {
  StatsCounterComponent,
  StatItem,
} from '../../components/stats-counter/stats-counter.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StatsCounterComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly tr = inject(TranslationService);

  stats = computed<StatItem[]>(() => [
    { value: 5,   suffix: '+', label: this.tr.t('stats_experience'), duration: 1400 },
    { value: 10,  suffix: '+', label: this.tr.t('stats_projects'),   duration: 1600 },
    { value: 5,   suffix: '+', label: this.tr.t('stats_companies'),  duration: 1500 },
    { value: 100, suffix: '+', label: this.tr.t('stats_users'),      duration: 2000 },
  ]);
}
