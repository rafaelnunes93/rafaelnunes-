import { Component } from '@angular/core';
import {
  StatsCounterComponent,
  StatItem,
} from '../../components/stats-counter/stats-counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [StatsCounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  stats: StatItem[] = [
    { value: 5,   suffix: '+', label: 'Anos de experiência', duration: 1400 },
    { value: 10,  suffix: '+', label: 'Projetos entregues',  duration: 1600 },
    { value: 5,   suffix: '+', label: 'Empresas atendidas',  duration: 1500 },
    { value: 100, suffix: '+', label: 'Usuários impactados', duration: 2000 },
  ];
}
