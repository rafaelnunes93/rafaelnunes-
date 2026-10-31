import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent {
  readonly tr = inject(TranslationService);

  faGraduation = faGraduationCap;
  faWork = faBriefcase;
  faCalendar = faCalendar;

  activeTab: string = 'trabalhos';

  trabalhos = computed(() => this.tr.t('trabalhos') as Array<{titulo: string; local: string; periodo: string; descricao: string}>);
  formacoes = computed(() => this.tr.t('formacoes') as Array<{titulo: string; local: string; periodo: string; descricao: string}>);

  getFilteredItems() {
    return this.activeTab === 'trabalhos' ? this.trabalhos() : this.formacoes();
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}
