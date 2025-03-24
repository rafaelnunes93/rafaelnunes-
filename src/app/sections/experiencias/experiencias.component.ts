import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent {
  faGraduation = faGraduationCap;
  faWork = faBriefcase;
  faCalendar = faCalendar;

  activeTab: string = 'trabalhos';

  trabalhos = [
    { 
      titulo: "Desenvolvedor .NET Júnior", 
      local: "Smart Online", 
      periodo: "Jan, 2023 - Atual", 
      descricao: ""
    },
    { 
      titulo: "Desenvolvedor .NET Trainee", 
      local: "Online Applications", 
      periodo: "Nov, 2021 - Dez, 2022", 
      descricao: ""
    },
    { 
      titulo: "Suporte em TI", 
      local: "Online Applications", 
      periodo: "jun, 2020 - nov, 2020", 
      descricao: ""
    },
    { 
      titulo: "Estágio em TI", 
      local: "Online Applications", 
      periodo: "Ago, 2019 - mar, 2020", 
      descricao: ""
    }
  ];

  formacoes = [
    { 
      titulo: "POS TECH- Arquitetura de Sistemas .NET", 
      local: "FIAP", 
      periodo: "JAN, 2025 - Dez, 2025", 
      descricao: ""
    },
    { 
      titulo: "Ciencia da Computação (Curso não Concluido)", 
      local: "Universidade Paulista UNIP", 
      periodo: "Jaz, 2015 - Dez, 2020", 
      descricao: ""
    },
    { 
      titulo: "Gestão em Tecnologia da Informação", 
      local: "Universidade Paulista UNIP", 
      periodo: "Jan, 2011 - Dez, 2013", 
      descricao: ""
    }
  ];

  getFilteredItems() {
    return this.activeTab === 'trabalhos' ? this.trabalhos : this.formacoes;
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}
