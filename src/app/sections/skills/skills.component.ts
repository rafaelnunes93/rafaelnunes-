import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  faCsharp = faMicrosoft; // Ícone da Microsoft (representa C#)
}
