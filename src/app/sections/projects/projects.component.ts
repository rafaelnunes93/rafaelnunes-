import { Component, HostListener } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
  projects: Project[] = [
    {
      id: 'cargo-online',
      title: 'Cargo Online',
      subtitle: 'Plataforma TMS',
      image: 'assets/images/cargo.png',
      description: 'Este projeto consistiu no desenvolvimento e sustentação de uma plataforma completa de Transport Management System (TMS). O sistema permite o rastreamento, faturamento, emissão de CT-e, MDF-e e roteirização das entregas de maneira otimizada, garantindo eficiência logística para as empresas.',
      techStack: ['.NET 8', 'C#', 'SQL Server', 'Angular', 'Azure']
    },
    {
      id: 'edi-ups',
      title: 'EDI UPS',
      subtitle: 'Plataforma EDI',
      image: 'assets/images/ups.jpg',
      description: 'Plataforma de intercâmbio eletrônico de dados (EDI) desenvolvida para a UPS. Facilita e padroniza a troca de informações entre clientes e fornecedores do setor logístico. A aplicação processa grandes volumes de dados garantindo a conciliação e integração das operações logísticas diárias.',
      techStack: ['.NET Framework', 'HTML', 'CSS', 'JavaScript', 'SQL Server']
    },
    {
      id: 'art-pisos',
      title: 'Art Pisos E Assoalhos',
      subtitle: 'Landing Page',
      image: 'assets/images/ArtPisosEAssoalhos.png',
      description: 'Website institucional e comercial desenvolvido para a Art Pisos E Assoalhos, empresa especializada em raspagem, calafetação, aplicação de resinas (Bona, Synteko) e manutenção completa de pisos de madeira, tacos e assoalhos. A plataforma foi projetada para apresentar o portfólio de serviços realizados e facilitar o contato para orçamentos rápidos.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://www.artpisoseassoalhos.com.br/'
    },
    {
      id: 'app-shapeon',
      title: 'App ShapeOn',
      subtitle: 'Mobile App',
      image: 'assets/images/AppShapeOn.png',
      description: 'Aplicativo mobile multiplataforma voltado ao segmento fitness. O App ShapeOn permite aos usuários acessar treinos personalizados, registrar desempenho diário, acompanhar dietas e agendar aulas com personal trainers, tudo com uma interface fluida em Flutter.',
      techStack: ['Flutter', 'Dart', 'Firebase']
    },
    {
      id: 'chef-manager',
      title: 'Chef Manager',
      subtitle: 'Web App',
      image: 'assets/images/chafManager.png',
      description: 'Sistema completo para gestão de restaurantes. O Chef Manager centraliza pedidos de mesas, delivery, controle de estoque e controle financeiro. A interface moderna em Angular proporciona atualizações em tempo real para as telas da cozinha e de gerência.',
      techStack: ['Angular', 'TypeScript', '.NET Core', 'SQL Server']
    },
    {
      id: 'worth-viking',
      title: 'Worth Viking',
      subtitle: 'Game',
      image: 'assets/images/worthViking.png',
      description: 'Worth Viking é um jogo focado em aventura e sobrevivência ambientado no universo nórdico. Desenvolvido inteiramente na Unity Engine com C#, o projeto envolveu programação de mecânicas de combate, inventário, física customizada e IA para os inimigos.',
      techStack: ['Unity 5', 'C#', 'Game Design', '3D Modeling']
    }
  ];

  selectedProject: Project | null = null;
  isModalOpen = false;

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    // Evita o scroll na página de fundo quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedProject = null;
      document.body.style.overflow = 'auto';
    }, 300); // Aguarda o tempo da animação de saída
  }

  // Permite fechar o modal com a tecla ESC
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }
}
