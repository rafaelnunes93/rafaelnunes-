import { Injectable, signal, computed, inject } from '@angular/core';
import { Location } from '@angular/common';

export type Lang = 'en' | 'pt';

const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_skills: 'Skills',
    nav_portfolio: 'Portfolio',
    nav_experience: 'Experience',
    nav_contact: 'Contact',

    // Home
    home_badge: 'Full Stack Developer | .NET Developer',
    home_title_welcome: 'Welcome to the',
    home_title_portfolio: 'portfolio of',
    btn_github: 'GitHub',
    btn_linkedin: 'LinkedIn',
    scroll_text: 'scroll',
    home_roles: [
      'Backend Engineer',
      '.NET Developer',
      'Clean Architecture',
      'High-Performance APIs',
      'Computer Science',
      '.NET Systems Architect',
      'Backend Developer',
      'End-to-End SaaS',
      'Game Developer',
      'Mobile Developer',
      'Full Stack Developer',
      'Scalable Web Systems',
      'Flutter Developer',
      'Unity Developer',
    ],

    // About
    about_title: 'ABOUT ME',
    about_name: 'I am Rafael Nunes dos Santos',
    about_role: 'Backend Developer',
    about_bio: 'I work as a {NET} developer specialized in backend, building scalable solutions and critical integrations for logistics operations. I have experience with {TMS}, {EDI} and {modern architectures}, developing high-performance applications focused on reliability, maintainability and continuous system evolution.',
    about_bio2: 'Passionate about technology, I am always looking to sharpen my skills and build solutions that add real value to the business.',
    about_label_stack: 'STACK',
    about_label_status: 'STATUS',
    about_status_text: 'Available for new projects',
    about_btn_message: 'Send message',
    about_label_birth: 'Birthday',
    about_label_age: 'Age',
    about_label_age_value: '33 Years old',
    about_label_residence: 'Residence',
    about_label_email: 'E-mail',
    about_label_phone: 'Phone',
    about_label_github: 'GitHub',
    about_btn_cv: 'Download CV',
    stats_experience: 'Years of experience',
    stats_projects: 'Projects delivered',
    stats_companies: 'Companies served',
    stats_users: 'Users impacted',

    // Services
    services_heading: 'How can I help you?',
    services_subtitle: 'If you need a web system, mobile app or a game, you\'re in the right place!',
    services: [
      {
        id: '01 / 06',
        titleNormal: 'Full Stack',
        titleColored: 'Development',
        description: 'Complete web systems with clean, scalable and secure architecture — robust backend in <b>C# / .NET</b> and modern frontend in <b>Angular</b>.'
      },
      {
        id: '02 / 06',
        titleNormal: 'Mobile',
        titleColored: 'Applications',
        description: 'High-performance cross-platform apps with <b>Flutter</b> or <b>React Native</b>, integrated with REST APIs and ready for Android and iOS.'
      },
      {
        id: '03 / 06',
        titleNormal: 'Game',
        titleColored: 'Development',
        description: '2D and 3D game creation with <b>Unity</b>, developing mechanics, interfaces, interactive systems and publishing for multiple platforms.'
      },
      {
        id: '04 / 06',
        titleNormal: 'End-to-End',
        titleColored: 'SaaS',
        description: 'From idea to production: product discovery, architecture, MVP, scale and operation. I\'ve built solutions from scratch and can build yours too.'
      },
      {
        id: '05 / 06',
        titleNormal: 'APIs &',
        titleColored: 'Integrations',
        description: 'Creation and integration of robust <b>RESTful APIs</b>, webhooks, integrations with legacy systems and third-party services — with documentation and tests.'
      },
      {
        id: '06 / 06',
        titleNormal: 'Strategic',
        titleColored: 'Landing Pages',
        description: 'Creation of modern and responsive <b>landing pages</b> for products and services, focused on conversion, performance and user experience.'
      },
    ],

    // Skills section
    skills_title: 'SKILLS',
    skills_vs: 'VS',
    skills_frontend: 'FRONTEND',
    skills_backend: 'BACKEND',

    // Projects
    projects_title: 'PORTFOLIO',
    modal_back: 'Back',
    modal_view_project: 'View Project',
    projects: [
      {
        id: 'cargo-online',
        subtitle: 'TMS Platform',
        description: 'This project involved the development and maintenance of a complete Transport Management System (TMS) platform. The system enables tracking, invoicing, CT-e and MDF-e issuance, and optimized delivery routing, ensuring logistical efficiency for companies.'
      },
      {
        id: 'edi-ups',
        subtitle: 'EDI Platform',
        description: 'Electronic Data Interchange (EDI) platform developed for UPS. It facilitates and standardizes the exchange of information between customers and suppliers in the logistics sector. The application processes large volumes of data, ensuring reconciliation and integration of daily logistics operations.'
      },
      {
        id: 'art-pisos',
        subtitle: 'Landing Page',
        description: 'Institutional and commercial website developed for Art Pisos E Assoalhos, a company specializing in sanding, caulking, resin application (Bona, Synteko) and complete maintenance of wooden floors, parquet and hardwood. The platform was designed to showcase the portfolio of services and facilitate quick quote requests.'
      },
      {
        id: 'clipnest',
        subtitle: 'Chrome Extension',
        description: 'Google Chrome extension published on the Chrome Web Store. ClipNest detects videos and audio on web pages and downloads them in one click, supporting both direct files and HLS streams, which are automatically converted to MP4.'
      },
      {
        id: 'chef-manager',
        subtitle: 'Web App',
        description: 'Complete restaurant management system. Chef Manager centralizes table orders, delivery, inventory control and financial management. The modern Angular interface provides real-time updates for kitchen and management screens.'
      },
      {
        id: 'worth-viking',
        subtitle: 'Game',
        description: 'Worth Viking is a game focused on adventure and survival set in the Norse universe. Developed entirely in Unity Engine with C#, the project involved programming combat mechanics, inventory, custom physics and AI for enemies.'
      },
    ],

    // Experience
    exp_title: 'EXPERIENCE',
    exp_tab_professional: 'Professional',
    exp_tab_academic: 'Academic',
    trabalhos: [
      {
        titulo: 'Mid-Level Software Developer',
        local: 'Aplicativo.NET',
        periodo: 'Jul, 2026 - Present',
        descricao: 'Development of an ERP platform for medical and dental clinics using .NET and Razor, acting on both the back-end and the front-end of the application. Responsibilities include building business rules, implementing features across layers, and maintaining the full solution cycle — from database modeling to UI rendering. The company operates with an AI First culture, leveraging artificial intelligence to accelerate deliveries, improve code quality and enhance decision-making throughout the development process.'
      },
      {
        titulo: '.NET Developer',
        local: 'Smart Online',
        periodo: 'Oct, 2025 - Jan, 2026',
        descricao: 'Worked on the development and maintenance of applications using .NET 8 and SQL Server, focused on building APIs, improving performance and applying best practices such as SOLID and layered architecture.'
      },
      {
        titulo: 'Junior .NET Developer',
        local: 'Smart Online',
        periodo: 'Dec, 2022 - Oct, 2025',
        descricao: 'Development and maintenance of systems using C#, .NET Framework and .NET (including .NET 8), working on the back-end and front-end of MVC applications. REST API creation, SQL Server integration and participation in feature evolution with a focus on quality, performance and best practices.'
      },
      {
        titulo: '.NET Developer Trainee',
        local: 'Online Applications',
        periodo: 'Nov, 2020 - Dec, 2022',
        descricao: 'Worked on developing applications with .NET Framework, working on the back-end and front-end of MVC systems. Bug fixing support, feature improvements and development, plus practical learning in OOP, APIs and database integration.'
      },
      {
        titulo: 'IT Support',
        local: 'Online Applications',
        periodo: 'Jun, 2020 - Nov, 2020',
        descricao: 'Development support, analyzing tickets via Help Desk and identifying errors reported by clients. Responsible for reproducing bugs, logging them for the development team, assisting in fix validation and performing SQL Server queries, updates and deletes for data analysis.'
      },
      {
        titulo: 'IT Intern',
        local: 'Online Applications',
        periodo: 'Aug, 2019 - Mar, 2020',
        descricao: 'Support for development activities, assisting in identifying system failures, bug reporting and technical team support. Work with SQL Server database queries for data analysis and understanding business rules.'
      }
    ],
    formacoes: [
      {
        titulo: 'POS TECH — .NET Systems Architecture',
        local: 'FIAP',
        periodo: 'Jan, 2025 - May, 2026',
        descricao: ''
      },
      {
        titulo: 'Computer Science',
        local: 'Universidade Paulista UNIP',
        periodo: 'Jan, 2015 - Dec, 2020',
        descricao: ''
      },
      {
        titulo: 'Information Technology Management',
        local: 'Universidade Paulista UNIP',
        periodo: 'Jan, 2011 - Dec, 2013',
        descricao: ''
      }
    ],

    // Contact
    contact_title: 'Contact',
    contact_heading_line1: 'Have a project',
    contact_heading_em: 'in mind',
    contact_description: 'I am available for freelance projects and partnerships. I usually respond within a few hours. The fastest way is via WhatsApp.',
    contact_btn_whatsapp: 'WhatsApp direct',

    // Footer
    footer_headline_light: "Let's create some",
    footer_headline_accent: 'thing exceptional',
    footer_role: 'Backend Developer · BR',
    footer_copy: '© {year} · Handcrafted · Powered by coffee ☕',
  },

  pt: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'Sobre',
    nav_services: 'Serviços',
    nav_skills: 'Skills',
    nav_portfolio: 'Portfólio',
    nav_experience: 'Experiências',
    nav_contact: 'Contato',

    // Home
    home_badge: 'Desenvolvedor Full Stack | .NET Developer',
    home_title_welcome: 'Seja bem-vindo(a) ao',
    home_title_portfolio: 'portfólio de',
    btn_github: 'GitHub',
    btn_linkedin: 'LinkedIn',
    scroll_text: 'scroll',
    home_roles: [
      'Backend Engineer',
      'Desenvolvedor .NET',
      'Clean Architecture',
      'APIs de Alta Performance',
      'Ciência da Computação',
      'Arquitetura de Sistemas .NET',
      'Desenvolvedor Backend',
      'Saas ponta-a-ponta',
      'Desenvolvedor de Games',
      'Desenvolvedor Mobile',
      'Backend Developer',
      'Sistemas Web Escaláveis',
      'Full Stack Developer',
      'Flutter Developer',
      'Unity Developer',
    ],

    // About
    about_title: 'SOBRE MIM',
    about_name: 'Sou Rafael Nunes dos Santos',
    about_role: 'Desenvolvedor backend',
    about_bio: 'Atuo como desenvolvedor {NET} especializado em backend, criando soluções escaláveis e integrações críticas para operações logísticas. Possuo experiência com sistemas {TMS}, {EDI} e {arquiteturas modernas}, desenvolvendo aplicações de alta performance com foco em confiabilidade, manutenção e evolução contínua dos sistemas.',
    about_bio2: 'Apaixonado por tecnologia, estou sempre em busca de aprimorar minhas habilidades e desenvolver soluções que agreguem valor ao negócio.',
    about_label_stack: 'STACK',
    about_label_status: 'STATUS',
    about_status_text: 'Disponível para novos projetos',
    about_btn_message: 'Enviar mensagem',
    about_label_birth: 'Nascimento',
    about_label_age: 'Idade',
    about_label_age_value: '33 Anos',
    about_label_residence: 'Residência',
    about_label_email: 'E-mail',
    about_label_phone: 'Telefone',
    about_label_github: 'GitHub',
    about_btn_cv: 'Baixar Currículo',
    stats_experience: 'Anos de experiência',
    stats_projects: 'Projetos entregues',
    stats_companies: 'Empresas atendidas',
    stats_users: 'Usuários impactados',

    // Services
    services_heading: 'Como posso te ajudar?',
    services_subtitle: 'Se você precisa de um sistema web, aplicativo mobile ou um jogo, está no lugar certo!',
    services: [
      {
        id: '01 / 06',
        titleNormal: 'Desenvolvimento',
        titleColored: 'Full Stack',
        description: 'Sistemas web completos com arquitetura limpa, escalável e segura — back-end robusto em <b>C# / .NET</b> e front-end moderno em <b>Angular</b>.'
      },
      {
        id: '02 / 06',
        titleNormal: 'Aplicativos',
        titleColored: 'Mobile',
        description: 'Apps cross-platform performáticos com <b>Flutter</b> ou <b>React Native</b>, integrados a APIs REST e prontos para Android e iOS com alta performance.'
      },
      {
        id: '03 / 06',
        titleNormal: 'Desenvolvimento',
        titleColored: 'de Jogos',
        description: 'Criação de jogos 2D e 3D com <b>Unity</b>, desenvolvimento de mecânicas, interfaces, sistemas interativos e publicação para múltiplas plataformas.'
      },
      {
        id: '04 / 06',
        titleNormal: 'SaaS',
        titleColored: 'ponta-a-ponta',
        description: 'Da ideia à produção: descoberta de produto, arquitetura, MVP, escala e operação. Já construí soluções do zero e posso construir a sua também.'
      },
      {
        id: '05 / 06',
        titleNormal: 'APIs &',
        titleColored: 'Integrações',
        description: 'Criação e integração de <b>APIs RESTful</b> robustas, webhooks, integrações com sistemas legados e serviços de terceiros — com documentação e testes.'
      },
      {
        id: '06 / 06',
        titleNormal: 'Landing Pages',
        titleColored: 'Estratégicas',
        description: 'Criação de <b>landing pages</b> modernas e responsivas para produtos e serviços, focadas em conversão, performance e experiência do usuário.'
      },
    ],

    // Skills
    skills_title: 'SKILLS',
    skills_vs: 'VS',
    skills_frontend: 'FRONTEND',
    skills_backend: 'BACKEND',

    // Projects
    projects_title: 'PORTFÓLIO',
    modal_back: 'Voltar',
    modal_view_project: 'Ver Projeto',
    projects: [
      {
        id: 'cargo-online',
        subtitle: 'Plataforma TMS',
        description: 'Este projeto consistiu no desenvolvimento e sustentação de uma plataforma completa de Transport Management System (TMS). O sistema permite o rastreamento, faturamento, emissão de CT-e, MDF-e e roteirização das entregas de maneira otimizada, garantindo eficiência logística para as empresas.'
      },
      {
        id: 'edi-ups',
        subtitle: 'Plataforma EDI',
        description: 'Plataforma de intercâmbio eletrônico de dados (EDI) desenvolvida para a UPS. Facilita e padroniza a troca de informações entre clientes e fornecedores do setor logístico. A aplicação processa grandes volumes de dados garantindo a conciliação e integração das operações logísticas diárias.'
      },
      {
        id: 'art-pisos',
        subtitle: 'Landing Page',
        description: 'Website institucional e comercial desenvolvido para a Art Pisos E Assoalhos, empresa especializada em raspagem, calafetação, aplicação de resinas (Bona, Synteko) e manutenção completa de pisos de madeira, tacos e assoalhos. A plataforma foi projetada para apresentar o portfólio de serviços realizados e facilitar o contato para orçamentos rápidos.'
      },
      {
        id: 'clipnest',
        subtitle: 'Extensão Chrome',
        description: 'Extensão para Google Chrome publicada na Chrome Web Store. O ClipNest detecta vídeos e áudios nas páginas e permite baixá-los em um clique, suportando arquivos diretos e streams HLS, que são convertidos automaticamente para MP4.'
      },
      {
        id: 'chef-manager',
        subtitle: 'Web App',
        description: 'Sistema completo para gestão de restaurantes. O Chef Manager centraliza pedidos de mesas, delivery, controle de estoque e controle financeiro. A interface moderna em Angular proporciona atualizações em tempo real para as telas da cozinha e de gerência.'
      },
      {
        id: 'worth-viking',
        subtitle: 'Game',
        description: 'Worth Viking é um jogo focado em aventura e sobrevivência ambientado no universo nórdico. Desenvolvido inteiramente na Unity Engine com C#, o projeto envolveu programação de mecânicas de combate, inventário, física customizada e IA para os inimigos.'
      },
    ],

    // Experience
    exp_title: 'EXPERIÊNCIA',
    exp_tab_professional: 'Profissional',
    exp_tab_academic: 'Acadêmica',
    trabalhos: [
      {
        titulo: 'Desenvolvedor de Software Pleno',
        local: 'Aplicativo.NET',
        periodo: 'Jul, 2026 - Atual',
        descricao: 'Desenvolvimento de um ERP para clínicas médicas e odontológicas utilizando .NET e Razor, com atuação tanto no back-end quanto no front-end da aplicação. Responsável pela implementação de regras de negócio, evolução de funcionalidades em todas as camadas e manutenção do ciclo completo da solução — desde a modelagem do banco de dados até a renderização das interfaces. A empresa possui uma cultura AI First, utilizando inteligência artificial para acelerar entregas, elevar a qualidade do código e aprimorar a tomada de decisões ao longo de todo o processo de desenvolvimento.'
      },
      {
        titulo: 'Desenvolvedor .NET',
        local: 'Smart Online',
        periodo: 'Out, 2025 - Jan, 2026',
        descricao: 'Atuação no desenvolvimento e manutenção de aplicações utilizando .NET 8 e SQL Server, com foco em construção de APIs, melhoria de performance e aplicação de boas práticas como SOLID e arquitetura em camadas.'
      },
      {
        titulo: 'Desenvolvedor .NET Junior',
        local: 'Smart Online',
        periodo: 'Dez, 2022 - Out, 2025',
        descricao: 'Desenvolvimento e sustentação de sistemas utilizando C#, .NET Framework e .NET (incluindo .NET 8), atuando no back-end e front-end de aplicações MVC. Criação de APIs REST, integração com SQL Server e participação na evolução de funcionalidades com foco em qualidade, performance e boas práticas.'
      },
      {
        titulo: 'Desenvolvedor .NET Trainee',
        local: 'Online Applications',
        periodo: 'Nov, 2020- Dez, 2022',
        descricao: 'Atuação no desenvolvimento de aplicações com .NET Framework, trabalhando no back-end e front-end em sistemas MVC. Apoio na correção de bugs, implementação de melhorias e desenvolvimento de funcionalidades, além do aprendizado prático em orientação a objetos, APIs e integração com banco de dados.'
      },
      {
        titulo: 'Suporte em TI',
        local: 'Online Applications',
        periodo: 'jun, 2020 - nov, 2020',
        descricao: 'Atuação no suporte ao desenvolvimento, analisando chamados via Help Desk e identificando erros relatados pelos clientes. Responsável por reproduzir falhas, registrar bugs para o time de desenvolvimento, auxiliar na validação de correções e realizar consultas, updates e deletes em banco de dados SQL Server para análise e ajuste de informações.'
      },
      {
        titulo: 'Estágio em TI',
        local: 'Online Applications',
        periodo: 'Ago, 2019 - mar, 2020',
        descricao: 'Suporte às atividades de desenvolvimento, auxiliando na identificação de falhas em sistemas, registro de bugs e apoio ao time técnico. Atuação com consultas em banco de dados SQL Server para análise de dados e entendimento das regras de negócio.'
      }
    ],
    formacoes: [
      {
        titulo: 'POS TECH - Arquitetura de Sistemas .NET',
        local: 'FIAP',
        periodo: 'JAN, 2025 - Maio, 2026',
        descricao: ''
      },
      {
        titulo: 'Ciência da Computação',
        local: 'Universidade Paulista UNIP',
        periodo: 'Jaz, 2015 - Dez, 2020',
        descricao: ''
      },
      {
        titulo: 'Gestão em Tecnologia da Informação',
        local: 'Universidade Paulista UNIP',
        periodo: 'Jan, 2011 - Dez, 2013',
        descricao: ''
      }
    ],

    // Contact
    contact_title: 'Contato',
    contact_heading_line1: 'Tem um projeto',
    contact_heading_em: 'em mente',
    contact_description: 'Estou disponível para projetos freelance e parcerias. Respondo geralmente em poucas horas. A forma mais rápida é pelo WhatsApp.',
    contact_btn_whatsapp: 'WhatsApp direto',

    // Footer
    footer_headline_light: "Let's create some",
    footer_headline_accent: 'thing exceptional',
    footer_role: 'Desenvolvedor Back-end · BR',
    footer_copy: '© {year} · Construído à mão · Movido a café ☕',
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

/** Texto nos dois idiomas, usado pelos arquivos de conteúdo em src/app/data. */
export type L<T = string> = { pt: T; en: T };

// O idioma vem da URL (`/` = pt, `/en/` = en). Já é lido na criação do serviço para que o header,
// que fica fora do router-outlet, hidrate no mesmo idioma do HTML pré-renderizado; o guard das rotas
// mantém o valor atualizado nas navegações.
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = signal<Lang>(/^\/?en(\/|$|[?#])/.test(inject(Location).path()) ? 'en' : 'pt');

  readonly currentLang = this._lang.asReadonly();

  readonly dict = computed(() => translations[this._lang()]);

  t(key: TranslationKey): any {
    return (translations[this._lang()] as any)[key];
  }

  /** Escolhe a versão do idioma atual de um conteúdo bilíngue. */
  pick<T>(value: L<T>): T {
    return value[this._lang()];
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
  }
}
