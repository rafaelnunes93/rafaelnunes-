// Projetos apresentados como cases (Problema / Solução / Resultado).
// Conteúdo baseado nos projetos do portfólio. Sem números inventados: só fatos verificáveis.
import type { L } from '../services/translation.service';
import type { ServiceSlug } from './service-slugs';

export interface CaseStudy {
  slug: string;
  order: number;
  name: string;
  type: L;
  title: L;
  lead: L;
  domain: string;
  liveUrl?: string;
  image: string;
  imageContain?: boolean;
  imageLogo?: boolean;
  imageAlt: L;
  problem: L;
  solution: L;
  result: L;
  role: L;
  highlights: { value: string; label: L }[];
  problemPoints: L<string[]>;
  solutionPoints: L<string[]>;
  resultPoints: L<string[]>;
  tech: string[];
  keyFeatures: L<string[]>;
  relatedServices: ServiceSlug[];
  featured: boolean;
}

export const CASES: CaseStudy[] = [
  {
    slug: 'clipnest',
    order: 1,
    name: 'ClipNest Video Download',
    type: { pt: 'Extensão para Chrome', en: 'Chrome extension' },
    title: {
      pt: 'Uma extensão que encontra vídeos na página e baixa em um clique',
      en: 'An extension that finds videos on the page and downloads them in one click',
    },
    lead: {
      pt: 'Extensão publicada na Chrome Web Store que detecta vídeos e áudios nas páginas e baixa arquivos diretos e streams HLS, convertidos automaticamente para MP4.',
      en: 'Extension published on the Chrome Web Store that detects videos and audio on web pages and downloads direct files and HLS streams, automatically converted to MP4.',
    },
    domain: 'chromewebstore.google.com',
    liveUrl: 'https://chromewebstore.google.com/detail/clipnest-video-download/omadfedpnhlhanbdekbhmnbhcdeoegel?hl=pt-BR',
    image: 'assets/images/clipnest.png',
    imageContain: true,
    imageAlt: { pt: 'Ícone da extensão ClipNest', en: 'ClipNest extension icon' },
    problem: {
      pt: 'Baixar vídeos de páginas web, principalmente streams HLS divididos em partes, exige ferramentas técnicas e vários passos.',
      en: 'Downloading videos from web pages, especially HLS streams split into chunks, requires technical tools and many steps.',
    },
    solution: {
      pt: 'Extensão para Chrome que detecta as mídias da página, junta os segmentos HLS e entrega um MP4 pronto.',
      en: 'Chrome extension that detects page media, joins HLS segments and delivers a ready MP4.',
    },
    result: {
      pt: 'Produto próprio publicado na Chrome Web Store e disponível para qualquer usuário do Chrome.',
      en: 'Own product published on the Chrome Web Store and available to any Chrome user.',
    },
    role: { pt: 'Produto próprio: ideia, desenvolvimento e publicação', en: 'Own product: idea, development and publishing' },
    highlights: [
      { value: '1 clique', label: { pt: 'para baixar a mídia detectada', en: 'to download detected media' } },
      { value: 'HLS → MP4', label: { pt: 'conversão automática de streams', en: 'automatic stream conversion' } },
      { value: 'Chrome Web Store', label: { pt: 'publicada e disponível', en: 'published and available' } },
    ],
    problemPoints: {
      pt: ['Vídeos em stream não têm um botão de download', 'Streams HLS chegam em dezenas de pedaços', 'Ferramentas existentes são técnicas demais'],
      en: ['Streamed videos have no download button', 'HLS streams arrive in dozens of chunks', 'Existing tools are too technical'],
    },
    solutionPoints: {
      pt: ['Detecção automática de vídeos e áudios na página', 'Download de arquivos diretos', 'Junção dos segmentos HLS e conversão para MP4', 'Interface simples no painel da extensão'],
      en: ['Automatic detection of videos and audio on the page', 'Direct file downloads', 'HLS segment joining and MP4 conversion', 'Simple interface in the extension panel'],
    },
    resultPoints: {
      pt: ['Extensão aprovada e publicada na Chrome Web Store', 'Experiência de download reduzida a um clique'],
      en: ['Extension approved and published on the Chrome Web Store', 'Download experience reduced to a single click'],
    },
    tech: ['JavaScript', 'Chrome Extension', 'HLS'],
    keyFeatures: {
      pt: ['Detecção de mídia', 'Download em um clique', 'Conversão HLS para MP4'],
      en: ['Media detection', 'One-click download', 'HLS to MP4 conversion'],
    },
    relatedServices: ['saas-ponta-a-ponta'],
    featured: true,
  },
  {
    slug: 'controle-odonto',
    order: 2,
    name: 'ControleODONTO',
    type: { pt: 'ERP odontológico (SaaS)', en: 'Dental ERP (SaaS)' },
    title: {
      pt: 'Evolução de um dos maiores softwares de gestão odontológica da América Latina',
      en: 'Evolving one of the largest dental practice management platforms in Latin America',
    },
    lead: {
      pt: 'Software em nuvem para gestão de clínicas odontológicas — agenda, prontuário, financeiro, CRM e odontograma 3D. Atuo no time da Aplicativo.NET desenvolvendo novas funcionalidades e corrigindo bugs em um produto que já está em produção.',
      en: 'Cloud software for managing dental clinics — scheduling, patient records, finance, CRM and a 3D odontogram. I work on the Aplicativo.NET team building new features and fixing bugs in a product already in production.',
    },
    domain: 'controleodonto.com.br',
    liveUrl: 'https://controleodonto.com.br/',
    image: 'assets/images/controle-odonto.png',
    imageLogo: true,
    imageAlt: { pt: 'Logo do ControleODONTO', en: 'ControleODONTO logo' },
    problem: {
      pt: 'Um sistema grande e já usado por milhares de clínicas precisa ganhar recursos novos sem quebrar o que funciona no dia a dia dos dentistas.',
      en: 'A large system already used by thousands of clinics needs new features without breaking what dentists rely on every day.',
    },
    solution: {
      pt: 'Desenvolvimento de novas funcionalidades e correção de bugs em .NET e Razor, no back-end e no front-end, num time com cultura AI First.',
      en: 'Building new features and fixing bugs with .NET and Razor, on both back end and front end, in a team with an AI First culture.',
    },
    result: {
      pt: 'Entregas contínuas em um produto em produção, com foco em estabilidade e qualidade para as clínicas que usam o sistema.',
      en: 'Continuous delivery on a live product, focused on stability and quality for the clinics that use it.',
    },
    role: {
      pt: 'Desenvolvedor no time do produto (Aplicativo.NET): novas funcionalidades e correção de bugs. Não criei o sistema do zero.',
      en: 'Developer on the product team (Aplicativo.NET): new features and bug fixes. I did not build the system from scratch.',
    },
    highlights: [
      { value: '4.000+', label: { pt: 'clínicas usam o sistema (dado do produto)', en: 'clinics use the system (product data)' } },
      { value: '100% nuvem', label: { pt: 'computador, tablet e celular', en: 'desktop, tablet and phone' } },
      { value: '.NET + Razor', label: { pt: 'back-end e front-end', en: 'back end and front end' } },
    ],
    problemPoints: {
      pt: ['Produto grande, com muitas regras de negócio de clínicas', 'Usuários que dependem do sistema todos os dias', 'Novos recursos precisam conviver com os existentes'],
      en: ['A large product with many clinic business rules', 'Users who depend on the system every day', 'New features must coexist with existing ones'],
    },
    solutionPoints: {
      pt: ['Implementação de novas funcionalidades em todas as camadas', 'Investigação e correção de bugs reportados', 'Evolução de regras de negócio do back-end à interface', 'Uso de IA no fluxo de desenvolvimento, com revisão técnica'],
      en: ['Implementing new features across all layers', 'Investigating and fixing reported bugs', 'Evolving business rules from back end to UI', 'AI in the development workflow, with technical review'],
    },
    resultPoints: {
      pt: ['Funcionalidades novas entregues em produção', 'Mais estabilidade para as clínicas que usam o sistema'],
      en: ['New features shipped to production', 'More stability for the clinics using the system'],
    },
    tech: ['.NET', 'C#', 'Razor', 'SQL Server'],
    keyFeatures: {
      pt: ['Agenda e prontuário', 'Financeiro', 'CRM', 'Odontograma 3D'],
      en: ['Scheduling and records', 'Finance', 'CRM', '3D odontogram'],
    },
    relatedServices: ['desenvolvimento-full-stack'],
    featured: true,
  },
  {
    slug: 'cargo-online',
    order: 3,
    name: 'Cargo Online',
    type: { pt: 'Plataforma TMS', en: 'TMS platform' },
    title: {
      pt: 'Uma plataforma de gestão de transporte, do rastreio ao documento fiscal',
      en: 'A transport management platform, from tracking to tax documents',
    },
    lead: {
      pt: 'Desenvolvimento e sustentação de um Transport Management System (TMS) completo: rastreamento, faturamento, emissão de CT-e e MDF-e e roteirização de entregas.',
      en: 'Development and maintenance of a complete Transport Management System (TMS): tracking, billing, CT-e and MDF-e issuing and delivery routing.',
    },
    domain: 'Cargo Online · TMS',
    image: 'assets/images/cargo.png',
    imageAlt: { pt: 'Tela inicial da plataforma Cargo Online', en: 'Cargo Online platform landing screen' },
    problem: {
      pt: 'Transportadoras e embarcadores precisavam controlar entregas, documentos fiscais e faturamento em um só lugar.',
      en: 'Carriers and shippers needed to manage deliveries, tax documents and billing in one place.',
    },
    solution: {
      pt: 'Back-end em .NET 8 e C# com SQL Server, front-end em Angular e publicação no Azure, cobrindo o ciclo inteiro da operação.',
      en: '.NET 8 and C# back end with SQL Server, Angular front end and Azure deployment, covering the full operational cycle.',
    },
    result: {
      pt: 'Plataforma em produção com rastreio, CT-e, MDF-e e roteirização integrados, evoluindo continuamente.',
      en: 'Platform in production with integrated tracking, CT-e, MDF-e and routing, under continuous evolution.',
    },
    role: { pt: 'Desenvolvimento e sustentação full stack (.NET e Angular)', en: 'Full stack development and maintenance (.NET and Angular)' },
    highlights: [
      { value: 'CT-e · MDF-e', label: { pt: 'documentos fiscais de transporte emitidos pela plataforma', en: 'transport tax documents issued by the platform' } },
      { value: '.NET 8', label: { pt: 'back-end moderno com suporte de longo prazo', en: 'modern back end with long-term support' } },
      { value: 'Azure', label: { pt: 'infraestrutura em nuvem', en: 'cloud infrastructure' } },
    ],
    problemPoints: {
      pt: ['Operação logística com muitos documentos fiscais e prazos apertados', 'Necessidade de acompanhar cada entrega e faturar com precisão', 'Roteirização manual gerando custo e atraso'],
      en: ['Logistics operation with many tax documents and tight deadlines', 'Need to track every delivery and bill accurately', 'Manual routing causing cost and delays'],
    },
    solutionPoints: {
      pt: ['APIs em .NET 8 com regras de negócio de transporte e faturamento', 'Emissão de CT-e e MDF-e integrada ao fluxo da entrega', 'Telas em Angular para rastreamento e gestão operacional', 'Consultas otimizadas no SQL Server para alto volume de dados', 'Publicação e ambientes no Azure'],
      en: ['.NET 8 APIs with transport and billing business rules', 'CT-e and MDF-e issuing integrated into the delivery flow', 'Angular screens for tracking and operational management', 'Optimized SQL Server queries for high data volume', 'Deployment and environments on Azure'],
    },
    resultPoints: {
      pt: ['Ciclo completo da operação de transporte em um único sistema', 'Base de código moderna, preparada para novas funcionalidades', 'Sustentação contínua com correções e melhorias em produção'],
      en: ['Full transport operation cycle in a single system', 'Modern codebase ready for new features', 'Continuous maintenance with fixes and improvements in production'],
    },
    tech: ['.NET 8', 'C#', 'SQL Server', 'Angular', 'Azure'],
    keyFeatures: {
      pt: ['Rastreamento de entregas', 'Emissão de CT-e e MDF-e', 'Faturamento', 'Roteirização'],
      en: ['Delivery tracking', 'CT-e and MDF-e issuing', 'Billing', 'Routing'],
    },
    relatedServices: ['desenvolvimento-full-stack', 'apis-e-integracoes'],
    featured: true,
  },
  {
    slug: 'edi-ups',
    order: 4,
    name: 'EDI UPS',
    type: { pt: 'Plataforma EDI', en: 'EDI platform' },
    title: {
      pt: 'Troca eletrônica de dados para a operação logística da UPS',
      en: 'Electronic data interchange for UPS logistics operations',
    },
    lead: {
      pt: 'Plataforma de EDI desenvolvida para a UPS, que padroniza a troca de informações entre clientes e fornecedores e processa grandes volumes de dados todos os dias.',
      en: 'EDI platform built for UPS that standardizes information exchange between customers and suppliers and processes large data volumes every day.',
    },
    domain: 'UPS · EDI',
    image: 'assets/images/ups.jpg',
    imageAlt: { pt: 'Logotipo da UPS', en: 'UPS logo' },
    problem: {
      pt: 'Clientes e fornecedores do setor logístico trocavam informações em formatos diferentes, exigindo conciliação manual.',
      en: 'Logistics customers and suppliers exchanged information in different formats, requiring manual reconciliation.',
    },
    solution: {
      pt: 'Plataforma em .NET Framework com SQL Server que recebe, valida, converte e integra os arquivos EDI automaticamente.',
      en: '.NET Framework platform with SQL Server that receives, validates, converts and integrates EDI files automatically.',
    },
    result: {
      pt: 'Troca de dados padronizada e conciliação das operações logísticas diárias com menos intervenção manual.',
      en: 'Standardized data exchange and reconciliation of daily logistics operations with less manual work.',
    },
    role: { pt: 'Desenvolvimento back-end e front-end (.NET Framework)', en: 'Back-end and front-end development (.NET Framework)' },
    highlights: [
      { value: 'EDI', label: { pt: 'padrão de troca eletrônica de dados entre empresas', en: 'standard for electronic data exchange between companies' } },
      { value: 'UPS', label: { pt: 'operação logística de grande porte', en: 'large-scale logistics operation' } },
      { value: 'SQL Server', label: { pt: 'processamento e conciliação de alto volume', en: 'high-volume processing and reconciliation' } },
    ],
    problemPoints: {
      pt: ['Formatos de dados diferentes entre clientes e fornecedores', 'Grande volume de arquivos diários', 'Conciliação manual sujeita a erros'],
      en: ['Different data formats between customers and suppliers', 'Large daily file volume', 'Error-prone manual reconciliation'],
    },
    solutionPoints: {
      pt: ['Recebimento e validação automática dos arquivos EDI', 'Conversão para o formato interno e integração com o banco', 'Telas web para acompanhamento das trocas', 'Rotinas de conciliação das operações diárias'],
      en: ['Automatic reception and validation of EDI files', 'Conversion to the internal format and database integration', 'Web screens to monitor exchanges', 'Daily operations reconciliation routines'],
    },
    resultPoints: {
      pt: ['Troca de informações padronizada entre os participantes', 'Menos retrabalho manual na conciliação', 'Integração estável das operações logísticas diárias'],
      en: ['Standardized information exchange between participants', 'Less manual rework in reconciliation', 'Stable integration of daily logistics operations'],
    },
    tech: ['.NET Framework', 'C#', 'HTML', 'CSS', 'JavaScript', 'SQL Server'],
    keyFeatures: {
      pt: ['Importação de arquivos EDI', 'Validação e conversão', 'Conciliação diária', 'Monitoramento das trocas'],
      en: ['EDI file import', 'Validation and conversion', 'Daily reconciliation', 'Exchange monitoring'],
    },
    relatedServices: ['apis-e-integracoes', 'desenvolvimento-full-stack'],
    featured: true,
  },
  {
    slug: 'app-shapeon',
    order: 5,
    name: 'App ShapeOn',
    type: { pt: 'Aplicativo mobile (Flutter)', en: 'Mobile app (Flutter)' },
    title: {
      pt: 'Um app fitness com treinos, dieta e agenda com o personal na palma da mão',
      en: 'A fitness app with workouts, diet and personal trainer scheduling in your pocket',
    },
    lead: {
      pt: 'Aplicativo multiplataforma para o segmento fitness: treinos personalizados, registro de desempenho diário, acompanhamento de dieta e agendamento de aulas com personal trainers, com uma única base de código em Flutter.',
      en: 'Cross-platform app for the fitness market: personalized workouts, daily performance tracking, diet follow-up and class scheduling with personal trainers, from a single Flutter codebase.',
    },
    domain: 'app-shapeon',
    image: 'assets/images/AppShapeOn.png',
    imageContain: true,
    imageAlt: { pt: 'Telas do App ShapeOn', en: 'App ShapeOn screens' },
    problem: {
      pt: 'Alunos e personal trainers controlavam treinos, dietas e horários em planilhas, papel e mensagens soltas.',
      en: 'Students and personal trainers tracked workouts, diets and schedules on spreadsheets, paper and scattered messages.',
    },
    solution: {
      pt: 'App em Flutter para Android e iOS que reúne treinos, desempenho, dieta e agenda em um só lugar, com Firebase no back-end.',
      en: 'A Flutter app for Android and iOS that brings workouts, performance, diet and scheduling together, with Firebase on the back end.',
    },
    result: {
      pt: 'Uma experiência fluida e consistente nas duas plataformas, a partir de um único código.',
      en: 'A smooth, consistent experience on both platforms from a single codebase.',
    },
    role: { pt: 'Desenvolvimento do aplicativo (Flutter e Firebase)', en: 'App development (Flutter and Firebase)' },
    highlights: [
      { value: 'Android + iOS', label: { pt: 'com um único código', en: 'from a single codebase' } },
      { value: 'Flutter', label: { pt: 'interface fluida e consistente', en: 'smooth, consistent UI' } },
      { value: 'Firebase', label: { pt: 'login, dados e sincronização', en: 'login, data and sync' } },
    ],
    problemPoints: {
      pt: ['Treinos passados em papel ou por mensagem', 'Sem histórico de desempenho do aluno', 'Agendamento de aulas feito na conversa'],
      en: ['Workouts shared on paper or by message', 'No history of student performance', 'Class scheduling done over chat'],
    },
    solutionPoints: {
      pt: ['Treinos personalizados por aluno', 'Registro de desempenho diário', 'Acompanhamento de dieta', 'Agendamento de aulas com personal trainers'],
      en: ['Personalized workouts per student', 'Daily performance tracking', 'Diet follow-up', 'Class scheduling with personal trainers'],
    },
    resultPoints: {
      pt: ['Treino, dieta e agenda reunidos em um só app', 'Mesma experiência em Android e iOS'],
      en: ['Workouts, diet and scheduling in a single app', 'Same experience on Android and iOS'],
    },
    tech: ['Flutter', 'Dart', 'Firebase'],
    keyFeatures: {
      pt: ['Treinos personalizados', 'Desempenho diário', 'Dieta', 'Agenda com personal'],
      en: ['Personalized workouts', 'Daily performance', 'Diet', 'Trainer scheduling'],
    },
    relatedServices: ['aplicativos-mobile'],
    featured: true,
  },
  {
    slug: 'art-pisos',
    order: 6,
    name: 'Art Pisos E Assoalhos',
    type: { pt: 'Site e landing page', en: 'Website and landing page' },
    title: {
      pt: 'Um site que apresenta o serviço e leva o visitante direto ao orçamento',
      en: 'A website that presents the service and takes visitors straight to a quote',
    },
    lead: {
      pt: 'Site institucional e comercial para a Art Pisos E Assoalhos, especializada em raspagem, calafetação, resinas e manutenção de pisos de madeira, tacos e assoalhos.',
      en: 'Business website for Art Pisos E Assoalhos, a company specialized in sanding, caulking, resin finishes and maintenance of wooden floors and parquet.',
    },
    domain: 'artpisoseassoalhos.com.br',
    liveUrl: 'https://www.artpisoseassoalhos.com.br/',
    image: 'assets/images/ArtPisosEAssoalhos.png',
    imageAlt: { pt: 'Página inicial do site Art Pisos E Assoalhos', en: 'Art Pisos E Assoalhos homepage' },
    problem: {
      pt: 'A empresa precisava apresentar os serviços e o portfólio de trabalhos e facilitar pedidos de orçamento.',
      en: 'The company needed to present its services and past work and make quote requests easy.',
    },
    solution: {
      pt: 'Site em Angular, responsivo, com seções de serviços, portfólio e botões diretos para orçamento pelo WhatsApp.',
      en: 'Responsive Angular website with services and portfolio sections and direct WhatsApp quote buttons.',
    },
    result: {
      pt: 'Site no ar, com o portfólio de serviços organizado e um caminho curto do visitante até o contato.',
      en: 'Website live, with the service portfolio organized and a short path from visitor to contact.',
    },
    role: { pt: 'Planejamento, design e desenvolvimento do site', en: 'Planning, design and development of the website' },
    highlights: [
      { value: 'Angular', label: { pt: 'site rápido e responsivo', en: 'fast, responsive website' } },
      { value: 'WhatsApp', label: { pt: 'orçamento direto em um clique', en: 'one-click quote requests' } },
      { value: 'Online', label: { pt: 'publicado e em uso pela empresa', en: 'live and used by the company' } },
    ],
    problemPoints: {
      pt: ['Serviços especializados difíceis de explicar sem mostrar o resultado', 'Clientes chegando só por indicação', 'Pedido de orçamento sem um canal claro'],
      en: ['Specialized services hard to explain without showing results', 'Customers arriving only through referrals', 'No clear channel for quote requests'],
    },
    solutionPoints: {
      pt: ['Seções claras para cada tipo de serviço', 'Portfólio de trabalhos realizados', 'Botões de orçamento pelo WhatsApp em pontos estratégicos', 'Layout responsivo para celular'],
      en: ['Clear sections for each type of service', 'Portfolio of completed work', 'WhatsApp quote buttons at key points', 'Mobile-friendly layout'],
    },
    resultPoints: {
      pt: ['Presença online própria, independente das redes sociais', 'Visitante entende o serviço e chega ao contato rapidamente'],
      en: ['Own online presence, independent of social media', 'Visitors understand the service and reach contact quickly'],
    },
    tech: ['Angular', 'TypeScript', 'SCSS'],
    keyFeatures: {
      pt: ['Catálogo de serviços', 'Portfólio de trabalhos', 'Orçamento pelo WhatsApp', 'Design responsivo'],
      en: ['Service catalog', 'Work portfolio', 'WhatsApp quotes', 'Responsive design'],
    },
    relatedServices: ['landing-pages'],
    featured: true,
  },
  {
    slug: 'chef-manager',
    order: 7,
    name: 'Chef Manager',
    type: { pt: 'Sistema web de gestão', en: 'Management web app' },
    title: {
      pt: 'Gestão de restaurante com pedidos, estoque e financeiro em tempo real',
      en: 'Restaurant management with orders, inventory and finances in real time',
    },
    lead: {
      pt: 'Sistema de gestão para restaurantes que centraliza pedidos de mesa, delivery, estoque e financeiro, com telas atualizadas em tempo real para cozinha e gerência.',
      en: 'Restaurant management system that centralizes table orders, delivery, inventory and finances, with real-time screens for the kitchen and management.',
    },
    domain: 'Chef Manager',
    image: 'assets/images/chafManager.png',
    imageAlt: { pt: 'Tela de login do Chef Manager', en: 'Chef Manager login screen' },
    problem: {
      pt: 'Restaurantes perdem pedidos e controle de estoque quando salão, cozinha e delivery usam canais separados.',
      en: 'Restaurants lose orders and inventory control when dining room, kitchen and delivery use separate channels.',
    },
    solution: {
      pt: 'Aplicação em Angular com back-end .NET Core e SQL Server, com telas em tempo real para cozinha e gerência.',
      en: 'Angular application with a .NET Core back end and SQL Server, with real-time screens for kitchen and management.',
    },
    result: {
      pt: 'Pedidos, estoque e financeiro no mesmo sistema, com a cozinha vendo cada pedido assim que é feito.',
      en: 'Orders, inventory and finances in one system, with the kitchen seeing each order as soon as it is placed.',
    },
    role: { pt: 'Desenvolvimento full stack', en: 'Full stack development' },
    highlights: [
      { value: 'Tempo real', label: { pt: 'pedidos chegando na tela da cozinha', en: 'orders arriving on the kitchen screen' } },
      { value: 'Mesa + delivery', label: { pt: 'todos os canais em um só fluxo', en: 'every channel in a single flow' } },
      { value: 'Angular', label: { pt: 'interface moderna para salão e gerência', en: 'modern UI for floor and management' } },
    ],
    problemPoints: {
      pt: ['Pedidos de mesa e delivery em canais diferentes', 'Estoque controlado à mão', 'Financeiro sem visão do dia'],
      en: ['Table and delivery orders in different channels', 'Inventory tracked by hand', 'No daily financial overview'],
    },
    solutionPoints: {
      pt: ['Comanda digital para mesas e delivery', 'Tela da cozinha atualizada em tempo real', 'Baixa automática de estoque', 'Controle financeiro e relatórios para a gerência'],
      en: ['Digital order pad for tables and delivery', 'Kitchen screen updated in real time', 'Automatic inventory deduction', 'Financial control and reports for management'],
    },
    resultPoints: {
      pt: ['Fluxo único do pedido até o caixa', 'Visão do estoque e do financeiro em tempo real'],
      en: ['Single flow from order to checkout', 'Real-time view of inventory and finances'],
    },
    tech: ['Angular', 'TypeScript', '.NET Core', 'SQL Server'],
    keyFeatures: {
      pt: ['Pedidos de mesa e delivery', 'Tela da cozinha', 'Controle de estoque', 'Financeiro'],
      en: ['Table and delivery orders', 'Kitchen screen', 'Inventory control', 'Finances'],
    },
    relatedServices: ['desenvolvimento-full-stack', 'saas-ponta-a-ponta'],
    featured: false,
  },
  {
    slug: 'worth-viking',
    order: 8,
    name: 'Worth Viking',
    type: { pt: 'Jogo em Unity', en: 'Unity game' },
    title: {
      pt: 'Um jogo de aventura e sobrevivência ambientado no universo nórdico',
      en: 'An adventure and survival game set in the Norse universe',
    },
    lead: {
      pt: 'Jogo desenvolvido inteiramente na Unity com C#, com mecânicas de combate, inventário, física customizada e inteligência artificial para os inimigos.',
      en: 'Game built entirely in Unity with C#, featuring combat mechanics, inventory, custom physics and enemy artificial intelligence.',
    },
    domain: 'Worth Viking · Unity',
    image: 'assets/images/worthViking.png',
    imageAlt: { pt: 'Cena do jogo Worth Viking', en: 'Worth Viking game scene' },
    problem: {
      pt: 'Criar um jogo completo de plataforma e sobrevivência, com sistemas que conversam entre si.',
      en: 'Create a complete platform and survival game with systems that work together.',
    },
    solution: {
      pt: 'Programação em C# na Unity de combate, inventário, física e IA de inimigos, com game design próprio.',
      en: 'C# programming in Unity for combat, inventory, physics and enemy AI, with original game design.',
    },
    result: {
      pt: 'Jogo jogável que demonstra domínio de Unity, C# e game design.',
      en: 'A playable game that shows command of Unity, C# and game design.',
    },
    role: { pt: 'Programação e game design', en: 'Programming and game design' },
    highlights: [
      { value: 'Unity', label: { pt: 'engine usada no desenvolvimento', en: 'engine used for development' } },
      { value: 'C#', label: { pt: 'toda a lógica de jogo', en: 'all gameplay logic' } },
      { value: 'IA', label: { pt: 'comportamento dos inimigos', en: 'enemy behavior' } },
    ],
    problemPoints: {
      pt: ['Combinar combate, inventário e física de forma coerente', 'Inimigos com comportamento convincente'],
      en: ['Combine combat, inventory and physics coherently', 'Enemies with convincing behavior'],
    },
    solutionPoints: {
      pt: ['Sistema de combate e coleta de itens', 'Inventário e progressão', 'Física customizada de plataforma', 'IA para patrulha e ataque dos inimigos'],
      en: ['Combat and item collection system', 'Inventory and progression', 'Custom platform physics', 'AI for enemy patrol and attack'],
    },
    resultPoints: {
      pt: ['Jogo completo e jogável', 'Base reaproveitável para novos projetos em Unity'],
      en: ['Complete, playable game', 'Reusable foundation for new Unity projects'],
    },
    tech: ['Unity', 'C#', 'Game Design', '3D Modeling'],
    keyFeatures: {
      pt: ['Combate', 'Inventário', 'Física customizada', 'IA de inimigos'],
      en: ['Combat', 'Inventory', 'Custom physics', 'Enemy AI'],
    },
    relatedServices: ['desenvolvimento-de-jogos'],
    featured: false,
  },
];

// Espaços reservados na página de projetos: convidam o visitante a ser o próximo case.
export interface FutureSlot {
  icon: string;
  title: L;
  text: L;
  service: ServiceSlug;
}

export const FUTURE_SLOTS: FutureSlot[] = [
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: { pt: 'Seu app mobile', en: 'Your mobile app' },
    text: { pt: 'Um app em Flutter ou React Native para seus clientes ou sua equipe em campo.', en: 'A Flutter or React Native app for your customers or field team.' },
    service: 'aplicativos-mobile',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: { pt: 'Seu SaaS', en: 'Your SaaS' },
    text: { pt: 'Da ideia ao MVP no ar, com planos, cobrança e multiempresa.', en: 'From idea to a live MVP, with plans, billing and multi-tenancy.' },
    service: 'saas-ponta-a-ponta',
  },
  {
    icon: 'fa-solid fa-plug',
    title: { pt: 'Sua integração', en: 'Your integration' },
    text: { pt: 'Sistemas, parceiros e fornecedores trocando dados sem digitação manual.', en: 'Systems, partners and suppliers exchanging data with no manual typing.' },
    service: 'apis-e-integracoes',
  },
  {
    icon: 'fa-solid fa-window-maximize',
    title: { pt: 'Seu site', en: 'Your website' },
    text: { pt: 'Uma landing page ou site rápido, pensado para gerar contatos.', en: 'A fast landing page or website built to generate leads.' },
    service: 'landing-pages',
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
