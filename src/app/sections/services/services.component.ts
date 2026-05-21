import { Component, ViewEncapsulation, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface ServiceItem {
  id: string;
  iconSvg: SafeHtml;
  titleNormal: string;
  titleColored: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  private sanitizer = inject(DomSanitizer);

  rawServices = [
    {
      id: '01 / 06',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      titleNormal: 'Desenvolvimento',
      titleColored: 'Full Stack',
      description: 'Sistemas web completos com arquitetura limpa, escalável e segura — back-end robusto em <b>C# / .NET</b>  e front-end moderno em <b>Angular</b>.'
    },
    {
      id: '02 / 06',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
      titleNormal: 'Aplicativos',
      titleColored: 'Mobile',
      description: 'Apps cross-platform performáticos com <b>Flutter</b>, integrados a APIs REST e prontos para Android e iOS com alta performance.'
    },
    {
      id: '03 / 06',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="12 22.08 12 17"></polyline><polyline points="12 17 16.5 14.6"></polyline><polyline points="12 17 7.5 14.6"></polyline><polyline points="12 6.81 12 12"></polyline></svg>',
      titleNormal: 'Desenvolvimento',
      titleColored: 'de Jogos',
      description: 'Criação de jogos 2D e 3D com <b>Unity</b>, desenvolvimento de mecânicas, interfaces, sistemas interativos e publicação para múltiplas plataformas.'
    },
     {
      id: '04 / 06',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
      titleNormal: 'SaaS',
      titleColored: 'ponta-a-ponta',
      description: 'Da ideia à produção: descoberta de produto, arquitetura, MVP, escala e operação. Já construí soluções do zero e posso construir a sua também.'
    },
    {
      id: '05 / 06',
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
      titleNormal: 'APIs &',
      titleColored: 'Integrações',
      description: 'Criação e integração de <b>APIs RESTful</b> robustas, webhooks, integrações com sistemas legados e serviços de terceiros — com documentação e testes.'
    },  
    {
    id: '06 / 06',
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    titleNormal: 'Landing Pages',
    titleColored: 'Estratégicas',
    description: 'Criação de <b>landing pages</b> modernas e responsivas para produtos e serviços, focadas em conversão, performance e experiência do usuário.'
    }
  ];

  services: ServiceItem[] = [];

  constructor() {
    this.services = this.rawServices.map(s => ({
      ...s,
      iconSvg: this.sanitizer.bypassSecurityTrustHtml(s.iconSvg)
    }));
  }
}
