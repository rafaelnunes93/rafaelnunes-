import { Component, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Skill {
  name: string;
  letter: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillDetail {
  name: string;
  whatIs: string;
  whatFor: string;
  howTo: string;
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
      title: 'GAMES',
      skills: [
        { name: 'Unity 5', letter: 'U' },
        { name: 'Construct', letter: 'C' },
        { name: 'Photon', letter: 'P' }
      ]
    }
  ];

  skillDetails: Record<string, SkillDetail> = {
    'Angular': {
      name: 'Angular',
      whatIs: 'Framework web de código aberto mantido pelo Google para desenvolvimento de aplicações SPA (Single Page Applications) robustas e escaláveis utilizando TypeScript.',
      whatFor: 'Construção de painéis administrativos de alta complexidade, dashboards SaaS, e sistemas empresariais que demandam arquitetura rígida, modularização e controle de estado eficiente.',
      howTo: 'Criação de componentes standalone, injeção de dependências robusta, uso de Signals para gerenciamento de estado reativo e roteamento dinâmico com lazy loading.<br><br><strong>Estrutura de pastas típica de um projeto Angular:</strong><pre>src/app/\n├── components/     (Componentes reutilizáveis)\n├── directives/     (Diretivas customizadas, ex: appReveal)\n├── models/         (Interfaces e modelos TypeScript)\n├── services/       (Comunicação HTTP e lógica global)\n└── sections/       (Seções principais da página principal)</pre>'
    },
    'TypeScript': {
      name: 'TypeScript',
      whatIs: 'Um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional e recursos avançados à linguagem, compilando para JavaScript limpo.',
      whatFor: 'Garantir a segurança e robustez do código em tempo de compilação, fornecer auto-complete avançado (IntelliSense) no editor e simplificar a manutenção de grandes bases de código.',
      howTo: 'Definir interfaces explícitas, enums, genéricos (Generics) e tipos utilitários para modelar a consistência dos dados que trafegam entre componentes ou serviços da aplicação.'
    },
    'JavaScript': {
      name: 'JavaScript',
      whatIs: 'Linguagem de programação leve, interpretada e multiparadigma, essencial para trazer interatividade a páginas web e também usada amplamente no lado do servidor.',
      whatFor: 'Manipulação dinâmica do DOM, requisições assíncronas (APIs/Promises), animações na interface e processamento de regras de negócios no lado do cliente ou do servidor.',
      howTo: 'Manipular objetos estruturados, utilizar métodos modernos de iteração de arrays (como map, filter, reduce), e gerenciar fluxos assíncronos e concorrência via async/await.'
    },
    'HTML/CSS': {
      name: 'HTML/CSS',
      whatIs: 'HTML é a linguagem de marcação padrão para estruturar conteúdos na web. O CSS é a folha de estilos usada para gerenciar o layout, design visual e a responsividade da interface.',
      whatFor: 'Estruturar páginas semânticas para melhor acessibilidade e SEO, e construir layouts complexos que se adaptam a diferentes tamanhos de tela com estilos visuais polidos.',
      howTo: 'Usar tags semânticas estruturadas (header, nav, main, section) no HTML, e usar CSS Grid, Flexbox, Custom Properties (variáveis CSS) e media queries no CSS.'
    },
    'Flutter': {
      name: 'Flutter',
      whatIs: 'SDK de interface de usuário de código aberto desenvolvido pela Google para construir aplicações compiladas nativamente para mobile (Android e iOS), web e desktop.',
      whatFor: 'Desenvolvimento ágil e multiplataforma de aplicativos móveis nativos com renderização rápida de 60fps, alto desempenho gráfico e UI altamente customizada e consistente.',
      howTo: 'Montagem de uma árvore de widgets aninhados (Stateless e Stateful Widgets), gerenciamento de estados dinâmicos (Provider, Bloc ou Signals) e comunicação com APIs nativas ou web.'
    },
    'C#': {
      name: 'C#',
      whatIs: 'Linguagem de programação moderna, fortemente tipada e puramente <strong>Orientada a Objetos (POO)</strong> desenvolvida pela Microsoft e otimizada para o ecossistema .NET.',
      whatFor: 'Desenvolvimento de APIs robustas, microsserviços de alto desempenho, aplicativos de nível corporativo e lógica de jogos utilizando o motor de jogos Unity.',
      howTo: 'Aplicar rigorosamente os <strong>4 pilares da POO</strong> no desenvolvimento:<ul><li><strong>Abstração:</strong> Representação de características essenciais de um objeto sem incluir detalhes de implementação de baixo nível.</li><li><strong>Encapsulamento:</strong> Ocultação de detalhes internos e restrição de acesso direto ao estado do objeto, expondo apenas o necessário por métodos ou propriedades públicas.</li><li><strong>Herança:</strong> Permite que novas classes herdem propriedades e comportamentos de outras classes base, evitando repetição de código.</li><li><strong>Polimorfismo:</strong> Capacidade de um objeto ser tratado como uma instância de sua classe pai, mas executando métodos específicos sobrescritos na classe filha.</li></ul>'
    },
    '.NET': {
      name: '.NET',
      whatIs: 'Uma plataforma de desenvolvimento de código aberto, gratuita e multiplataforma mantida pela Microsoft, usada para criar uma ampla gama de aplicações modernas.',
      whatFor: 'Hospedar microsserviços Linux ou Windows com alto throughput, desenvolver Web APIs RESTful seguras e integrar sistemas complexos de nível empresarial.',
      howTo: 'Configurar o host da aplicação (WebApplication), registrar serviços usando injeção de dependência nativa do .NET, e criar middlewares customizados para requisições.'
    },
    'APIs': {
      name: 'APIs',
      whatIs: 'Application Programming Interfaces (Interfaces de Programação de Aplicações) são contratos que permitem que diferentes sistemas se comuniquem e compartilhem recursos.',
      whatFor: 'Interligar o frontend web ou mobile ao banco de dados no backend, conectar microsserviços distribuídos e permitir a integração segura de sistemas de terceiros.',
      howTo: 'Projetar endpoints semânticos e RESTful usando verbos HTTP adequados, retornar códigos de status correspondentes (200, 201, 400, 404, 500), documentar com OpenAPI e proteger com JWT.'
    },
    'EntityFramework': {
      name: 'EntityFramework',
      whatIs: 'Entity Framework Core (EF Core) é um mapeador objeto-relacional (ORM) leve, extensível e multiplataforma oficial da Microsoft para o ecossistema .NET.',
      whatFor: 'Abstrair a camada de dados, permitindo consultar e salvar informações no banco de dados usando objetos C# e consultas LINQ fortemente tipadas, evitando códigos SQL manuais.',
      howTo: 'Configurar classes DbContext, modelar tabelas e mapeamentos via Fluent API, gerar e aplicar Migrations por terminal e otimizar queries com AsNoTracking() para leitura rápida.'
    },
    'Node.js': {
      name: 'Node.js',
      whatIs: 'Um ambiente de execução Javascript assíncrono e orientado a eventos construído sobre o motor V8 do Google Chrome, permitindo rodar códigos JS fora do navegador.',
      whatFor: 'Criar servidores de API rápidos, construir ferramentas de linha de comando (CLIs), processar streaming de dados e criar microsserviços de entrada e saída (I/O) intensa.',
      howTo: 'Usar gerenciadores de pacotes (npm/yarn), gerenciar bibliotecas, configurar rotas assíncronas com frameworks rápidos (Express ou Fastify) e tratar dados de forma não-bloqueante.'
    },
    'Microsserviços': {
      name: 'Microsserviços',
      whatIs: 'Uma abordagem arquitetural para desenvolver um aplicativo como uma série de pequenos serviços independentes, cada um rodando em seu próprio processo.',
      whatFor: 'Melhorar a escalabilidade modular do sistema, isolar possíveis falhas em serviços críticos, dar flexibilidade tecnológica para equipes e agilizar entregas contínuas.',
      howTo: 'Dividir os serviços por contextos de negócio delimitados (Bounded Contexts), implementar comunicação assíncrona (RabbitMQ/Kafka) ou síncrona (gRPC/HTTP), e orquestrar via Docker/K8s.'
    },
    'CQRS': {
      name: 'CQRS',
      whatIs: '<strong>Command Query Responsibility Segregation</strong> (Segregação de Responsabilidade de Comando e Consulta) é um padrão arquitetural que separa as rotas de leitura (Queries) e as rotas de escrita (Commands) de dados.',
      whatFor: 'Otimizar o desempenho, a segurança e a escalabilidade de aplicações de alta concorrência, permitindo otimizar o modelo de leitura de forma independente do modelo de escrita.',
      howTo: 'Organizar a estrutura do projeto separando as responsabilidades de escrita e leitura por casos de uso:<br><pre>src/Application/\n└── Features/Customers/\n    ├── Commands/\n    │   ├── CreateCustomer/\n    │   │   ├── CreateCustomerCommand.cs\n    │   │   ├── CreateCustomerCommandHandler.cs\n    │   │   └── CreateCustomerCommandValidator.cs\n    │   └── UpdateCustomer/\n    └── Queries/\n        ├── GetCustomerById/\n        │   ├── GetCustomerByIdQuery.cs\n        │   └── GetCustomerByIdQueryHandler.cs\n        └── GetCustomersList/</pre><strong>Commands:</strong> Executam regras de negócio e modificam estado.<br><strong>Queries:</strong> Retornam DTOs otimizados para a tela de forma rápida.'
    },
    'SOLID': {
      name: 'SOLID',
      whatIs: 'Acrônimo para cinco princípios fundamentais de design de software orientado a objetos que promovem a criação de códigos mais limpos, flexíveis, modulares e fáceis de manter.',
      whatFor: 'Evitar o acúmulo de débito técnico, reduzir acoplamento prejudicial entre componentes e guiar a extensibilidade de grandes sistemas corporativos.',
      howTo: 'Implementar e respeitar os cinco princípios fundamentais no dia a dia do desenvolvimento:<ul><li><strong>S - Single Responsibility:</strong> Uma classe ou arquivo deve ter um, e apenas um, motivo para mudar.</li><li><strong>O - Open/Closed:</strong> Entidades de software devem estar abertas para extensão, mas fechadas para modificação.</li><li><strong>L - Liskov Substitution:</strong> Objetos de uma superclasse devem ser substituíveis por objetos de suas subclasses sem quebrar o comportamento do sistema.</li><li><strong>I - Interface Segregation:</strong> Uma classe não deve ser forçada a depender de interfaces e métodos que ela não utiliza.</li><li><strong>D - Dependency Inversion:</strong> Dependa de abstrações (interfaces/classes abstratas) e não de implementações concretas (injeção de dependências).</li></ul>'
    },
    'Clean Code': {
      name: 'Clean Code',
      whatIs: 'Filosofia e conjunto de boas práticas focados na legibilidade, clareza, expressividade e manutenibilidade do código-fonte.',
      whatFor: 'Garantir que o código seja autoexplicativo, diminuir a curva de aprendizado de novos desenvolvedores, reduzir a taxa de bugs e minimizar custos de manutenção de software no longo prazo.',
      howTo: 'Adotar regras claras de escrita (como nomes significativos, métodos curtos que fazem apenas uma coisa, evitar comentários redundantes) organizando o projeto em uma arquitetura limpa (<strong>Clean Architecture</strong>):<br><pre>src/\n├── Domain/          (Entidades de negócio, Value Objects e regras core)\n├── Application/     (Casos de uso da aplicação, CQRS e interfaces)\n├── Infrastructure/  (EF Core DbContext, logs, integrações e caches)\n└── WebAPI/          (Pontos de entrada HTTP, controllers e middlewares)</pre>'
    },
    'TDD': {
      name: 'TDD',
      whatIs: 'Test-Driven Development (Desenvolvimento Guiado por Testes) é uma técnica de design de software em que os testes unitários são escritos antes do próprio código de produção.',
      whatFor: 'Garantir que os requisitos sejam cumpridos de ponta a ponta, construir uma cobertura sólida contra regressões de bugs e guiar o desenvolvedor para códigos desacoplados.',
      howTo: 'Ciclo Red-Green-Refactor: Escrever um teste que falhe (Red), escrever o código mínimo que faça o teste passar (Green), e refatorar o código sob segurança (Refactor).'
    },
    'SQL Server': {
      name: 'SQL Server',
      whatIs: 'Sistema de Gerenciamento de Banco de Dados Relacional (RDBMS) corporativo desenvolvido pela Microsoft, amplamente utilizado no mercado devido ao seu alto desempenho.',
      whatFor: 'Armazenar dados transacionais cruciais de forma segura e estruturada sob os princípios ACID, atendendo a sistemas ERP, financeiros e de logística em larga escala.',
      howTo: 'Modelar tabelas normalizadas, criar índices não-clusterizados para acelerar a leitura de campos muito pesquisados e criar Stored Procedures seguras.'
    },
    'PostgreSQL': {
      name: 'PostgreSQL',
      whatIs: 'Banco de dados relacional de código aberto extremamente avançado e extensível, conhecido por sua robustez e excelente conformidade com padrões SQL modernos.',
      whatFor: 'Armazenamento seguro de transações corporativas complexas, projetos com dados espciais (PostGIS) e casos de uso híbridos que combinam dados SQL e JSON.',
      howTo: 'Criar esquemas de tabelas relacionais, indexar colunas JSONB usando índices GIN para buscas rápidas em documentos não estruturados, e utilizar Window Functions.'
    },
    'Redis': {
      name: 'Redis',
      whatIs: 'Armazenamento de estruturas de dados na memória RAM do servidor de código aberto, utilizado como banco de dados NoSQL temporário, cache de alta performance e message broker.',
      whatFor: 'Reduzir drasticamente o tempo de resposta e carga em bancos de dados relacionais principais salvando em cache o resultado de consultas pesadas ou sessões de usuários.',
      howTo: 'Instanciar um cliente Redis, serializar objetos complexos para formato string JSON, e persistir chaves com um tempo limite de validade adequado (TTL).'
    },
    'MongoDB': {
      name: 'MongoDB',
      whatIs: 'Banco de dados NoSQL orientado a documentos de alta performance, que armazena dados em estruturas flexíveis semelhantes a objetos JSON chamadas de documentos BSON.',
      whatFor: 'Armazenar dados que requerem um esquema altamente dinâmico, alto throughput de escrita/leitura e necessidade de escalabilidade horizontal simplificada.',
      howTo: '<strong>Por que usar o MongoDB em vez de bancos de dados relacionais (SQL)?</strong><ul><li><strong>Esquema Dinâmico e Flexível:</strong> Diferente de tabelas SQL que exigem migrações de esquema rígidas e alteração de colunas globais, documentos MongoDB em uma mesma coleção podem possuir formatos e campos diferentes sem interrupções.</li><li><strong>Escalabilidade Horizontal Nativa (Sharding):</strong> Suporta distribuição de dados automática por particionamento horizontal (sharding) através de múltiplos clusters, ideal para Big Data, enquanto bancos SQL exigem grande esforço para escalar além de um servidor principal.</li><li><strong>Consultas Atômicas sem JOINs complexos:</strong> Os dados relacionados podem ser aninhados de forma hierárquica em um único documento principal, eliminando consultas lentas e custosas com JOINs SQL em tabelas de grande escala.</li><li><strong>Performance Extrema:</strong> Otimizado para leitura e escrita massiva e em alta velocidade por persistir dados estruturados em memória de forma flexível.</li></ul>'
    },
    'Firebase': {
      name: 'Firebase',
      whatIs: 'Plataforma BaaS (Backend as a Service) desenvolvida pela Google que fornece infraestrutura gerenciada, ferramentas e SDKs prontos para agilizar o desenvolvimento.',
      whatFor: 'Construir e hospedar aplicações móveis ou web de forma acelerada, eliminando a necessidade de construir e manter uma infraestrutura de backend complexa desde o início.',
      howTo: '<strong>Quando é melhor usar o Firebase?</strong><ul><li><strong>MVP e Prototipagem Rápida:</strong> Quando o principal objetivo é a velocidade de entrega para validar um produto no mercado rapidamente.</li><li><strong>Sincronização em Tempo Real (Realtime):</strong> Para aplicações como chats, jogos cooperativos simples ou painéis colaborativos que exigem sincronismo instantâneo de dados no cliente via WebSockets integrados.</li><li><strong>Autenticação sem Esforço:</strong> Perfeito para habilitar de imediato sistemas de login com e-mail/senha ou OAuth (Google, Facebook, Apple) seguro e sem código backend customizado.</li><li><strong>Foco Total no Frontend/Mobile:</strong> Indicado para pequenas e médias aplicações onde a equipe deseja focar 100% no desenvolvimento de telas de alta qualidade, delegando infraestrutura, hosting e banco para a nuvem da Google.</li></ul>'
    },
    'AWS': {
      name: 'AWS',
      whatIs: 'Amazon Web Services é a plataforma de serviços em nuvem mais robusta, segura e líder global de mercado, oferecendo centenas de recursos integrados.',
      whatFor: 'Hospedar infraestruturas em nuvem elásticas de nível global, automatizar a escalabilidade de microsserviços, armazenar arquivos e rodar código serverless.',
      howTo: '<strong>Principais serviços utilizados na AWS e suas finalidades:</strong><ul><li><strong>EC2 (Elastic Compute Cloud):</strong> Servidores virtuais escaláveis sob demanda (computação virtualizada Linux/Windows).</li><li><strong>S3 (Simple Storage Service):</strong> Armazenamento de arquivos, backups e mídias estáticas altamente durável, seguro e econômico.</li><li><strong>RDS (Relational Database Service):</strong> Bancos de dados relacionais gerenciados (PostgreSQL, SQL Server, MySQL) com backups automáticos e alta disponibilidade.</li><li><strong>DynamoDB:</strong> Banco de dados NoSQL chave-valor totalmente gerenciado com latência ultra baixa e escalabilidade contínua.</li><li><strong>Lambda:</strong> Computação Serverless que executa trechos de códigos acionados por eventos sem custos com servidores ociosos.</li><li><strong>IAM (Identity and Access Management):</strong> Controle de acessos granular e políticas de segurança rigorosas para usuários e serviços AWS.</li><li><strong>ECS / EKS:</strong> Serviços altamente otimizados para orquestração de contêineres Docker e clusters Kubernetes (Elastic Kubernetes Service).</li></ul>'
    },
    'Azure': {
      name: 'Azure',
      whatIs: 'A plataforma de computação em nuvem da Microsoft que oferece uma vasta gama de serviços para criação, implantação e gerenciamento de aplicações.',
      whatFor: 'Integrar perfeitamente servidores virtuais à infraestrutura de desenvolvimento C# / .NET, implantar aplicativos web com o App Services e gerenciar chaves no Key Vault.',
      howTo: 'Configurar pipelines de deployment no Azure DevOps, hospedar APIs no Azure App Services, usar funções serverless (Azure Functions) e bancos gerenciados SQL Azure.'
    },
    'Docker': {
      name: 'Docker',
      whatIs: 'Plataforma de contêineres de código aberto que permite criar, implantar e gerenciar aplicações dentro de ambientes isolados e idênticos chamados contêineres.',
      whatFor: 'Padronizar o ambiente de desenvolvimento e produção, resolvendo o problema clássico de incompatibilidade de sistemas operacionais e bibliotecas instaladas localmente.',
      howTo: 'Escrever arquivos Dockerfile com imagens base otimizadas e multi-stage builds (reduzindo o tamanho da imagem de produção), e usar o Docker Compose para subir ambientes locais.'
    },
    'CI/CD': {
      name: 'CI/CD',
      whatIs: 'Integração Contínua (CI) e Entrega Contínua (CD) são práticas de automação que permitem testar, compilar e implantar códigos novos continuamente na nuvem.',
      whatFor: 'Evitar falhas manuais no deploy de aplicações, garantir a validação de testes unitários em pull requests abertos e entregar valor em produção de maneira estável.',
      howTo: 'Escrever fluxos de passos estruturados (pipelines) em arquivos YAML do GitHub Actions ou Azure Pipelines, integrando etapas de build, restore, testes e comandos ssh/deploy.'
    },
    'GIT': {
      name: 'GIT',
      whatIs: 'O sistema de controle de versão distribuído mais utilizado no mundo para gerenciar e acompanhar o histórico de modificações nos arquivos de um projeto.',
      whatFor: 'Trabalhar em equipe organizando ramificações de tarefas (branches), manter cópias de segurança do histórico do código e isolar recursos em desenvolvimento.',
      howTo: 'Utilizar comandos via terminal para gerenciar arquivos modificados, estruturar commits semânticos sobre o que foi feito, resolver conflitos visuais e criar branches.'
    },
    'Unity 5': {
      name: 'Unity 5',
      whatIs: 'Motor de desenvolvimento de jogos (Game Engine) multiplataforma robusto para criar mundos 2D, 3D, realidade virtual e simulações complexas de física.',
      whatFor: 'Criar jogos interativos de alto desempenho compilados para PC, console, web e celulares, integrando áudio, animações, luz e física sob scripts C#.',
      howTo: 'Criar scripts que herdam da classe MonoBehaviour, usar o loop do Update() para ler entradas do teclado/mouse, e aplicar forças físicas usando Rigidbody.'
    },
    'Construct': {
      name: 'Construct',
      whatIs: 'Motor de jogos 2D focado em programação visual baseada em planilhas de eventos e lógica declarativa HTML5, eliminando a digitação textual de código na criação de jogos.',
      whatFor: 'Desenvolver jogos 2D rápidos, criar protótipos de mecânicas de física, exportar de forma instantânea para navegadores e criar jogos educativos de forma simplificada.',
      howTo: 'Configurar o layout de objetos, associar behaviors padrões (como plataforma ou projétil) aos elementos visuais e definir gatilhos de eventos na Event Sheet.'
    },
    'Photon': {
      name: 'Photon',
      whatIs: 'Framework e serviço na nuvem (Photon Engine) de alta performance especializado em conexões multijogador em tempo real e de latência extremamente baixa.',
      whatFor: 'Sincronizar conexões entre jogadores em salas online, gerenciar emparelhamento (matchmaking) e transmitir informações de movimentos e dados de jogo na rede.',
      howTo: 'Importar o pacote Photon Pun na Unity, conectar-se ao servidor na nuvem, gerenciar salas através da API e sincronizar movimentos usando componentes PhotonView.'
    }
  };

  selectedSkillDetail: SkillDetail | null = null;
  isModalOpen = false;

  openSkillModal(skillName: string): void {
    const detail = this.skillDetails[skillName];
    if (detail) {
      this.selectedSkillDetail = detail;
      this.isModalOpen = true;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  closeSkillModal(): void {
    this.isModalOpen = false;
    setTimeout(() => {
      if (!this.isModalOpen) {
        this.selectedSkillDetail = null;
      }
    }, 300); // tempo correspondente ao fade out

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(): void {
    if (this.isModalOpen) {
      this.closeSkillModal();
    }
  }
}
