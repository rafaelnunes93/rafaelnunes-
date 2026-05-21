import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Skill {
  name: string;
  letter: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'Angular', letter: 'A' },
        { name: 'TypeScript', letter: 'Ts' },
        { name: 'JavaScript', letter: 'Js' },
        { name: 'HTML/CSS', letter: 'H' },
        { name: 'Flutter', letter: 'F' }
       
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'C#', letter: 'C#' },
        { name: '.NET', letter: '.N' },
        { name: 'APIs', letter: 'A' },
        { name: 'EntityFramework', letter: 'EF' },
        { name: 'Node.js', letter: 'N' }
      ]
    },
    {
      title: 'ARQUITETURA',
      skills: [
        { name: 'Microsserviços', letter: 'M' },
        { name: 'CQRS', letter: 'C' },
        { name: 'SOLID', letter: 'S' },
        { name: 'Clean Code', letter: 'Cc' },
        { name: 'TDD', letter: 'T' }
      ]
    },
    {
      title: 'BANCOS',
      skills: [
        { name: 'SQL Server', letter: 'Sq' },
        { name: 'PostgreSQL', letter: 'Pg' },
        { name: 'Redis', letter: 'R' },
        { name: 'MongoDB', letter: 'Mo' },
        { name: 'Firebase', letter: 'Fb' }

      ]
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: [
        { name: 'AWS', letter: 'Aw' },
        { name: 'Azure', letter: 'Az' },
        { name: 'Docker', letter: 'D' },
        { name: 'CI/CD', letter: 'Ci' },
        { name: 'GIT', letter: 'G' }
      ]
    },
     {
      title: 'Games',
      skills: [
        { name: 'Unity 5', letter: 'U' },
         { name: 'Construct', letter: 'C' }
      ]
    }
  ];
}
