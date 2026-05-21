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
      titulo: "Desenvolvedor .NET",
      local: "Smart Online",
      periodo: "Out, 2025 - Jan, 2026",
      descricao: "Atuação no desenvolvimento e manutenção de aplicações utilizando .NET 8 e SQL Server, com foco em construção de APIs, melhoria de performance e aplicação de boas práticas como SOLID e arquitetura em camadas."
    },
    {
      titulo: "Desenvolvedor .NET Junior",
      local: "Smart Online",
      periodo: "Dez, 2022 - Out, 2025",
      descricao: "Desenvolvimento e sustentação de sistemas utilizando C#, .NET Framework e .NET (incluindo .NET 8), atuando no back-end e front-end de aplicações MVC. Criação de APIs REST, integração com SQL Server e participação na evolução de funcionalidades com foco em qualidade, performance e boas práticas."
    },
    {
      titulo: "Desenvolvedor .NET Trainee",
      local: "Online Applications",
      periodo: "Nov, 2020- Dez, 2022",
      descricao: "Atuação no desenvolvimento de aplicações com .NET Framework, trabalhando no back-end e front-end em sistemas MVC. Apoio na correção de bugs, implementação de melhorias e desenvolvimento de funcionalidades, além do aprendizado prático em orientação a objetos, APIs e integração com banco de dados."
    },
    {
      titulo: "Suporte em TI",
      local: "Online Applications",
      periodo: "jun, 2020 - nov, 2020",
      descricao: "Atuação no suporte ao desenvolvimento, analisando chamados via Help Desk e identificando erros relatados pelos clientes. Responsável por reproduzir falhas, registrar bugs para o time de desenvolvimento, auxiliar na validação de correções e realizar consultas, updates e deletes em banco de dados SQL Server para análise e ajuste de informações."
    },
    {
      titulo: "Estágio em TI",
      local: "Online Applications",
      periodo: "Ago, 2019 - mar, 2020",
      descricao: "Suporte às atividades de desenvolvimento, auxiliando na identificação de falhas em sistemas, registro de bugs e apoio ao time técnico. Atuação com consultas em banco de dados SQL Server para análise de dados e entendimento das regras de negócio."
    }
  ];

  formacoes = [
    {
      titulo: "POS TECH - Arquitetura de Sistemas .NET",
      local: "FIAP",
      periodo: "JAN, 2025 - Maio, 2026",
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
