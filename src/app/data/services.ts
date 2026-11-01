// Serviços oferecidos. Cada um tem página própria em /servicos/{slug} e /en/services/{slug}.
// Sem imports do Angular: também é lido pelos scripts de build (sitemap, llms.txt, blog-meta.json).
import type { L } from '../services/translation.service';
import type { FaqItem } from './blog-types';
import type { ServiceSlug } from './service-slugs';

export type FormType = 'sistema-web' | 'api-integracao' | 'saas' | 'app-mobile' | 'site-landing' | 'jogo' | 'outro';

export interface ServiceSummary {
  slug: ServiceSlug;
  icon: string; // classe Font Awesome
  shortTitle: L;
}

export interface Service extends ServiceSummary {
  title: L;
  benefit: L;
  definitionQuestion: L;
  definition: L;
  homeBullets: L<string[]>;
  forWho: L<string[]>;
  pains: L<string[]>;
  features: { icon: string; text: L }[];
  steps: L<{ title: string; text: string }[]>;
  deliverables: L<string[]>;
  price: L;
  timeline: L;
  faq: L<FaqItem[]>;
  relatedCases: string[];
  relatedPostTags: string[];
  formType: FormType;
  stack: string[];
  seoTitle: L;
  seoDescription: L;
}

// Etapas comuns, reaproveitadas pelos serviços que seguem o mesmo fluxo.
const STEPS_SYSTEM: L<{ title: string; text: string }[]> = {
  pt: [
    { title: 'Conversa inicial', text: 'Entendo o problema, quem usa o sistema e o que significa sucesso para você.' },
    { title: 'Escopo por escrito', text: 'Definimos o que entra na primeira versão e o que fica para depois.' },
    { title: 'Arquitetura e protótipo', text: 'Modelo os dados e as telas principais antes de escrever o código definitivo.' },
    { title: 'Entregas em ciclos', text: 'Versões curtas que você testa e valida, sem caixa-preta.' },
    { title: 'Publicação e suporte', text: 'Deploy, acompanhamento das primeiras semanas e documentação.' },
  ],
  en: [
    { title: 'Kick-off call', text: 'I learn the problem, who uses the system and what success looks like for you.' },
    { title: 'Written scope', text: 'We define what goes into the first version and what comes later.' },
    { title: 'Architecture and prototype', text: 'I model the data and main screens before writing production code.' },
    { title: 'Iterative deliveries', text: 'Short releases you test and approve — no black box.' },
    { title: 'Release and support', text: 'Deployment, close follow-up in the first weeks and documentation.' },
  ],
};

const PRICE_DEFAULT: L = {
  pt: 'O valor depende do escopo: quantidade de telas e regras de negócio, integrações e prazo. Depois da conversa inicial você recebe uma proposta por escrito, com o que está incluído e o que não está — sem surpresa no meio do projeto.',
  en: 'The price depends on scope: number of screens and business rules, integrations and deadline. After the kick-off call you get a written proposal stating what is included and what is not — no surprises halfway through.',
};

export const SERVICES: Service[] = [
  {
    slug: 'desenvolvimento-full-stack',
    icon: 'fa-solid fa-layer-group',
    shortTitle: { pt: 'Desenvolvimento full stack', en: 'Full stack development' },
    title: { pt: 'Desenvolvimento full stack com .NET e Angular', en: 'Full stack development with .NET and Angular' },
    benefit: {
      pt: 'Sistemas web completos, com back-end robusto em C# e interface moderna em Angular.',
      en: 'Complete web systems with a solid C# back end and a modern Angular interface.',
    },
    definitionQuestion: { pt: 'O que é desenvolvimento full stack?', en: 'What is full stack development?' },
    definition: {
      pt: 'Desenvolvimento full stack é construir todas as camadas de um sistema web: o banco de dados, as regras de negócio e APIs no back-end e as telas que o usuário vê no front-end. No meu caso, isso significa C# e .NET com SQL Server no back-end e Angular no front-end, com uma única pessoa responsável pela solução de ponta a ponta.',
      en: 'Full stack development means building every layer of a web system: the database, business rules and APIs on the back end, and the screens users see on the front end. In my case that means C# and .NET with SQL Server on the back end and Angular on the front end, with one person accountable for the whole solution.',
    },
    homeBullets: {
      pt: ['Back-end em C# / .NET 8 com arquitetura em camadas', 'Front-end em Angular, responsivo', 'Banco SQL Server modelado para o seu processo'],
      en: ['C# / .NET 8 back end with layered architecture', 'Responsive Angular front end', 'SQL Server database modeled around your process'],
    },
    forWho: {
      pt: ['Empresas que controlam a operação em planilhas e precisam de um sistema próprio', 'Times que querem evoluir ou reescrever um sistema MVC antigo', 'Negócios com regras específicas que sistemas prontos não atendem', 'Empresas de logística, saúde e serviços que precisam de ERP sob medida'],
      en: ['Companies running operations on spreadsheets that need their own system', 'Teams that want to evolve or rewrite an old MVC system', 'Businesses with specific rules that off-the-shelf software does not cover', 'Logistics, healthcare and service companies that need a custom ERP'],
    },
    pains: {
      pt: ['Informação espalhada entre planilhas, e-mails e sistemas que não conversam', 'Sistema antigo lento, difícil de manter e que ninguém quer mexer', 'Licenças caras de sistemas prontos que não se encaixam no processo', 'Retrabalho manual e erros de digitação no dia a dia'],
      en: ['Information scattered across spreadsheets, emails and disconnected systems', 'A slow legacy system that is hard to maintain and nobody wants to touch', 'Expensive licenses for software that does not fit the process', 'Manual rework and typing errors every day'],
    },
    features: [
      { icon: 'fa-solid fa-table-columns', text: { pt: 'Painéis e telas de cadastro com regras de negócio validadas', en: 'Dashboards and forms with validated business rules' } },
      { icon: 'fa-solid fa-user-shield', text: { pt: 'Login, perfis de acesso e permissões por função', en: 'Login, access profiles and role-based permissions' } },
      { icon: 'fa-solid fa-file-invoice', text: { pt: 'Relatórios, exportação para Excel/PDF e filtros', en: 'Reports, Excel/PDF export and filters' } },
      { icon: 'fa-solid fa-gauge-high', text: { pt: 'Consultas otimizadas no SQL Server para alto volume', en: 'Optimized SQL Server queries for high volume' } },
      { icon: 'fa-solid fa-plug', text: { pt: 'Integração com APIs, ERPs e serviços externos', en: 'Integration with APIs, ERPs and external services' } },
      { icon: 'fa-solid fa-cloud', text: { pt: 'Publicação em nuvem (Azure) com ambientes separados', en: 'Cloud deployment (Azure) with separate environments' } },
    ],
    steps: STEPS_SYSTEM,
    deliverables: {
      pt: ['Sistema web responsivo publicado', 'API documentada', 'Banco de dados modelado e versionado', 'Código-fonte e acessos em nome da sua empresa', 'Documentação técnica e de uso', 'Período de acompanhamento após a entrega'],
      en: ['Responsive web system in production', 'Documented API', 'Modeled and versioned database', 'Source code and credentials in your company’s name', 'Technical and user documentation', 'Follow-up period after delivery'],
    },
    price: PRICE_DEFAULT,
    timeline: {
      pt: 'Uma primeira versão utilizável costuma ficar pronta em semanas, não em meses. Sistemas maiores são entregues por módulos, para que a equipe comece a usar cedo. O prazo exato vai na proposta.',
      en: 'A first usable version is usually ready in weeks, not months. Larger systems are delivered module by module so your team can start using them early. The exact timeline goes in the proposal.',
    },
    faq: {
      pt: [
        { q: 'Por que .NET e Angular?', a: 'São tecnologias maduras, com suporte de longo prazo da Microsoft e do Google, ótima performance e muitos profissionais no mercado. Isso reduz o risco de o sistema ficar sem manutenção no futuro.' },
        { q: 'Você consegue evoluir um sistema que já existe?', a: 'Sim. Tenho experiência com sistemas em .NET Framework, MVC e Razor. Avalio o código atual e proponho evoluir por partes ou reescrever, conforme o custo e o risco de cada caminho.' },
        { q: 'O código fica com a minha empresa?', a: 'Sim. Repositório, banco de dados e acessos de nuvem ficam em nome da sua empresa desde o início.' },
        { q: 'O sistema funciona no celular?', a: 'Sim. As telas são responsivas. Se o uso em campo for intenso, também posso desenvolver um app em Flutter ou React Native consumindo a mesma API.' },
      ],
      en: [
        { q: 'Why .NET and Angular?', a: 'They are mature technologies with long-term support from Microsoft and Google, great performance and a large talent pool. That lowers the risk of your system ending up without maintenance.' },
        { q: 'Can you evolve an existing system?', a: 'Yes. I have experience with .NET Framework, MVC and Razor systems. I review the current code and suggest evolving it step by step or rewriting it, based on the cost and risk of each path.' },
        { q: 'Does my company own the code?', a: 'Yes. Repository, database and cloud accounts belong to your company from day one.' },
        { q: 'Does the system work on mobile?', a: 'Yes, the screens are responsive. If field usage is heavy, I can also build a Flutter or React Native app on top of the same API.' },
      ],
    },
    relatedCases: ['controle-odonto', 'cargo-online', 'chef-manager'],
    relatedPostTags: ['.net', 'angular', 'arquitetura'],
    formType: 'sistema-web',
    stack: ['C#', '.NET 8', 'ASP.NET Core', 'SQL Server', 'Angular', 'TypeScript', 'Azure'],
    seoTitle: { pt: 'Desenvolvimento full stack .NET e Angular', en: 'Full stack .NET and Angular development' },
    seoDescription: {
      pt: 'Sistemas web completos com back-end em C#/.NET, SQL Server e front-end em Angular, do escopo à produção, com o código em nome da sua empresa.',
      en: 'Complete web systems with a C#/.NET back end, SQL Server and an Angular front end, from scope to production, with code owned by your company.',
    },
  },
  {
    slug: 'apis-e-integracoes',
    icon: 'fa-solid fa-plug',
    shortTitle: { pt: 'APIs e integrações', en: 'APIs and integrations' },
    title: { pt: 'APIs REST e integração entre sistemas', en: 'REST APIs and system integration' },
    benefit: {
      pt: 'Seus sistemas, parceiros e fornecedores trocando dados sozinhos, sem digitação manual.',
      en: 'Your systems, partners and suppliers exchanging data automatically, with no manual typing.',
    },
    definitionQuestion: { pt: 'O que é uma integração entre sistemas?', en: 'What is a system integration?' },
    definition: {
      pt: 'Uma integração entre sistemas é uma ponte automática que faz dois ou mais softwares trocarem informações — por API REST, webhooks, arquivos ou padrões como EDI. Em vez de alguém copiar dados de uma tela para outra, o próprio sistema envia, recebe, valida e registra cada troca.',
      en: 'A system integration is an automatic bridge that lets two or more software products exchange information — via REST APIs, webhooks, files or standards such as EDI. Instead of someone copying data from one screen to another, the system itself sends, receives, validates and logs every exchange.',
    },
    homeBullets: {
      pt: ['APIs RESTful documentadas e testadas', 'Integrações com ERPs, sistemas legados e terceiros', 'Troca de dados EDI para logística'],
      en: ['Documented and tested RESTful APIs', 'Integrations with ERPs, legacy systems and third parties', 'EDI data exchange for logistics'],
    },
    forWho: {
      pt: ['Empresas que digitam os mesmos dados em mais de um sistema', 'Operações logísticas que trocam arquivos com clientes e transportadoras', 'Produtos que precisam expor uma API para parceiros', 'Times com sistemas legados que precisam conversar com serviços novos'],
      en: ['Companies typing the same data into more than one system', 'Logistics operations exchanging files with customers and carriers', 'Products that need to expose an API to partners', 'Teams with legacy systems that must talk to new services'],
    },
    pains: {
      pt: ['Dados divergentes entre sistemas e conciliação manual no fim do dia', 'Erros de digitação que viram prejuízo ou retrabalho', 'Parceiros cobrando uma API que você não tem', 'Integrações frágeis que quebram sem ninguém perceber'],
      en: ['Data mismatches between systems and manual reconciliation at the end of the day', 'Typing errors that become losses or rework', 'Partners asking for an API you do not have', 'Fragile integrations that break without anyone noticing'],
    },
    features: [
      { icon: 'fa-solid fa-code', text: { pt: 'APIs REST em ASP.NET Core com documentação Swagger', en: 'ASP.NET Core REST APIs with Swagger documentation' } },
      { icon: 'fa-solid fa-right-left', text: { pt: 'Webhooks e filas para processar eventos com segurança', en: 'Webhooks and queues to process events safely' } },
      { icon: 'fa-solid fa-truck-fast', text: { pt: 'EDI e troca de arquivos com clientes e transportadoras', en: 'EDI and file exchange with customers and carriers' } },
      { icon: 'fa-solid fa-key', text: { pt: 'Autenticação por token, chaves de API e limites de uso', en: 'Token authentication, API keys and rate limits' } },
      { icon: 'fa-solid fa-clipboard-check', text: { pt: 'Logs de cada troca, reprocessamento e alertas de falha', en: 'Logs for every exchange, reprocessing and failure alerts' } },
      { icon: 'fa-solid fa-database', text: { pt: 'Integração com SQL Server e sistemas legados', en: 'Integration with SQL Server and legacy systems' } },
    ],
    steps: {
      pt: [
        { title: 'Mapeamento', text: 'Levanto quais sistemas trocam quais dados, com que frequência e em que formato.' },
        { title: 'Contrato da integração', text: 'Defino endpoints, campos, validações e o que acontece quando algo falha.' },
        { title: 'Desenvolvimento e testes', text: 'Construo a API ou o conector com testes automatizados e ambiente de homologação.' },
        { title: 'Validação com dados reais', text: 'Rodamos em paralelo com o processo atual até a conciliação bater.' },
        { title: 'Monitoramento', text: 'Logs, alertas e documentação para a integração não virar caixa-preta.' },
      ],
      en: [
        { title: 'Mapping', text: 'I map which systems exchange which data, how often and in what format.' },
        { title: 'Integration contract', text: 'I define endpoints, fields, validations and what happens when something fails.' },
        { title: 'Development and tests', text: 'I build the API or connector with automated tests and a staging environment.' },
        { title: 'Validation with real data', text: 'We run it alongside the current process until reconciliation matches.' },
        { title: 'Monitoring', text: 'Logs, alerts and documentation so the integration never becomes a black box.' },
      ],
    },
    deliverables: {
      pt: ['API ou conector publicado', 'Documentação Swagger/OpenAPI', 'Testes automatizados', 'Logs e rotina de reprocessamento', 'Guia de uso para parceiros', 'Código-fonte em nome da sua empresa'],
      en: ['API or connector in production', 'Swagger/OpenAPI documentation', 'Automated tests', 'Logs and reprocessing routine', 'Usage guide for partners', 'Source code owned by your company'],
    },
    price: PRICE_DEFAULT,
    timeline: {
      pt: 'Uma integração pontual entre dois sistemas costuma levar poucas semanas. APIs completas ou integrações EDI com vários parceiros são entregues por etapas, começando pelo fluxo de maior volume.',
      en: 'A single integration between two systems usually takes a few weeks. Full APIs or EDI integrations with several partners are delivered in stages, starting with the highest-volume flow.',
    },
    faq: {
      pt: [
        { q: 'Dá para integrar com um sistema que não tem API?', a: 'Muitas vezes sim: por banco de dados, troca de arquivos ou automação. Avalio o que o sistema oferece e escolho o caminho mais estável.' },
        { q: 'O que é EDI?', a: 'EDI (troca eletrônica de dados) é um padrão para empresas trocarem documentos como pedidos, notas e status de entrega de forma automática. Já desenvolvi uma plataforma EDI para a UPS.' },
        { q: 'E se a integração falhar de madrugada?', a: 'Cada troca fica registrada, falhas geram alerta e podem ser reprocessadas sem perder dados.' },
        { q: 'Você documenta a API para os meus parceiros?', a: 'Sim. Entrego documentação OpenAPI/Swagger e um guia de uso com exemplos.' },
      ],
      en: [
        { q: 'Can you integrate with a system that has no API?', a: 'Often yes: through the database, file exchange or automation. I review what the system offers and pick the most stable path.' },
        { q: 'What is EDI?', a: 'EDI (electronic data interchange) is a standard for companies to exchange documents such as orders, invoices and delivery status automatically. I have built an EDI platform for UPS.' },
        { q: 'What if the integration fails at night?', a: 'Every exchange is logged, failures trigger alerts and can be reprocessed without losing data.' },
        { q: 'Will you document the API for my partners?', a: 'Yes. I deliver OpenAPI/Swagger documentation and a usage guide with examples.' },
      ],
    },
    relatedCases: ['edi-ups', 'cargo-online'],
    relatedPostTags: ['api', 'integração', 'edi'],
    formType: 'api-integracao',
    stack: ['ASP.NET Core', 'C#', 'REST', 'Webhooks', 'EDI', 'SQL Server', 'Swagger'],
    seoTitle: { pt: 'APIs REST e integração entre sistemas', en: 'REST APIs and system integration' },
    seoDescription: {
      pt: 'Desenvolvimento de APIs REST em .NET, webhooks e integrações com ERPs, sistemas legados e EDI para logística, com logs, testes e documentação.',
      en: 'REST API development in .NET, webhooks and integrations with ERPs, legacy systems and logistics EDI, with logs, tests and documentation.',
    },
  },
  {
    slug: 'saas-ponta-a-ponta',
    icon: 'fa-solid fa-rocket',
    shortTitle: { pt: 'SaaS ponta a ponta', en: 'End-to-end SaaS' },
    title: { pt: 'SaaS ponta a ponta: da ideia à operação', en: 'End-to-end SaaS: from idea to operation' },
    benefit: {
      pt: 'Do MVP ao produto em escala: arquitetura, cobrança, multiempresa e operação.',
      en: 'From MVP to product at scale: architecture, billing, multi-tenancy and operations.',
    },
    definitionQuestion: { pt: 'O que é um SaaS?', en: 'What is a SaaS?' },
    definition: {
      pt: 'SaaS (software como serviço) é um sistema acessado pela internet e vendido por assinatura, em que várias empresas clientes usam a mesma aplicação com os dados separados (multi-tenant). Construir um SaaS envolve, além das telas, cadastro de contas, planos, cobrança recorrente, segurança e uma arquitetura que aguente crescer.',
      en: 'SaaS (software as a service) is a system accessed over the internet and sold by subscription, where many customer companies use the same application with separated data (multi-tenant). Building a SaaS involves, beyond the screens, account sign-up, plans, recurring billing, security and an architecture that can grow.',
    },
    homeBullets: {
      pt: ['MVP para validar a ideia rápido', 'Arquitetura multiempresa (multi-tenant)', 'Planos, cobrança recorrente e painel administrativo'],
      en: ['MVP to validate the idea fast', 'Multi-tenant architecture', 'Plans, recurring billing and admin panel'],
    },
    forWho: {
      pt: ['Empreendedores com uma ideia de produto digital', 'Empresas que querem transformar um sistema interno em produto', 'Startups que precisam de um desenvolvedor sênior para o MVP', 'SaaS existentes que precisam evoluir a arquitetura'],
      en: ['Founders with a digital product idea', 'Companies that want to turn an internal system into a product', 'Startups that need a senior developer for the MVP', 'Existing SaaS products that need to evolve their architecture'],
    },
    pains: {
      pt: ['Ideia parada por não saber por onde começar a parte técnica', 'MVP que demorou demais e ficou caro antes de validar', 'Produto que não aguenta novos clientes sem gambiarras', 'Cobrança e gestão de contas feitas à mão'],
      en: ['An idea stuck because you do not know where to start technically', 'An MVP that took too long and cost too much before validation', 'A product that cannot onboard new customers without hacks', 'Billing and account management done by hand'],
    },
    features: [
      { icon: 'fa-solid fa-building-user', text: { pt: 'Cadastro de contas, convites de equipe e multiempresa', en: 'Account sign-up, team invites and multi-tenancy' } },
      { icon: 'fa-solid fa-credit-card', text: { pt: 'Planos, período de teste e cobrança recorrente', en: 'Plans, free trial and recurring billing' } },
      { icon: 'fa-solid fa-chart-pie', text: { pt: 'Painel administrativo com métricas de uso', en: 'Admin panel with usage metrics' } },
      { icon: 'fa-solid fa-lock', text: { pt: 'Segurança, isolamento de dados e auditoria', en: 'Security, data isolation and auditing' } },
      { icon: 'fa-solid fa-robot', text: { pt: 'Recursos com IA quando fazem sentido para o produto', en: 'AI features when they make sense for the product' } },
      { icon: 'fa-solid fa-server', text: { pt: 'Infraestrutura em nuvem pronta para escalar', en: 'Cloud infrastructure ready to scale' } },
    ],
    steps: {
      pt: [
        { title: 'Descoberta do produto', text: 'Quem é o cliente, qual dor resolve e qual o menor produto que já entrega valor.' },
        { title: 'Arquitetura', text: 'Defino a base multiempresa, autenticação e cobrança pensando no crescimento.' },
        { title: 'MVP', text: 'Construo o núcleo do produto para colocar nas mãos dos primeiros clientes.' },
        { title: 'Lançamento', text: 'Publicação, monitoramento e ajustes com base no uso real.' },
        { title: 'Escala e operação', text: 'Novas funcionalidades, performance e suporte conforme a base cresce.' },
      ],
      en: [
        { title: 'Product discovery', text: 'Who the customer is, which pain it solves and the smallest product that already delivers value.' },
        { title: 'Architecture', text: 'I design the multi-tenant base, authentication and billing with growth in mind.' },
        { title: 'MVP', text: 'I build the product core to put it in the hands of the first customers.' },
        { title: 'Launch', text: 'Release, monitoring and adjustments based on real usage.' },
        { title: 'Scale and operations', text: 'New features, performance and support as the customer base grows.' },
      ],
    },
    deliverables: {
      pt: ['MVP publicado e pronto para clientes', 'Arquitetura multi-tenant documentada', 'Cobrança recorrente integrada', 'Painel administrativo', 'Código e infraestrutura em seu nome', 'Plano de evolução do produto'],
      en: ['MVP live and ready for customers', 'Documented multi-tenant architecture', 'Integrated recurring billing', 'Admin panel', 'Code and infrastructure in your name', 'Product evolution roadmap'],
    },
    price: PRICE_DEFAULT,
    timeline: {
      pt: 'Um MVP focado costuma ir ao ar em algumas semanas. A partir daí o produto evolui em ciclos curtos, guiado pelo que os primeiros clientes realmente usam.',
      en: 'A focused MVP usually goes live in a few weeks. From there the product evolves in short cycles, guided by what the first customers actually use.',
    },
    faq: {
      pt: [
        { q: 'Você ajuda a definir o que entra no MVP?', a: 'Sim. Parte do trabalho é cortar o que não é essencial para validar a ideia com clientes reais o quanto antes.' },
        { q: 'O SaaS aguenta crescer?', a: 'A arquitetura é pensada desde o início para multiempresa e escala, sem exagerar na complexidade antes da hora.' },
        { q: 'Dá para ter app mobile junto?', a: 'Sim. A mesma API pode atender o painel web em Angular e um app em Flutter ou React Native para Android e iOS.' },
        { q: 'Você continua depois do lançamento?', a: 'Posso seguir na evolução e operação do produto, ou preparar a documentação para o seu time assumir.' },
      ],
      en: [
        { q: 'Do you help define what goes into the MVP?', a: 'Yes. Part of the job is cutting what is not essential so you can validate the idea with real customers as soon as possible.' },
        { q: 'Can the SaaS grow?', a: 'The architecture is designed for multi-tenancy and scale from the start, without over-engineering too early.' },
        { q: 'Can there be a mobile app too?', a: 'Yes. The same API can serve the Angular web panel and a Flutter or React Native app for Android and iOS.' },
        { q: 'Do you stay after launch?', a: 'I can keep evolving and operating the product, or prepare the documentation for your team to take over.' },
      ],
    },
    relatedCases: ['chef-manager', 'clipnest'],
    relatedPostTags: ['saas', 'mvp', 'produto'],
    formType: 'saas',
    stack: ['.NET 8', 'Angular', 'SQL Server', 'Flutter', 'React Native', 'Azure', 'Multi-tenant'],
    seoTitle: { pt: 'Desenvolvimento de SaaS e MVP', en: 'SaaS and MVP development' },
    seoDescription: {
      pt: 'Desenvolvimento de SaaS ponta a ponta: MVP, arquitetura multi-tenant, cobrança recorrente, painel administrativo e operação, com .NET e Angular.',
      en: 'End-to-end SaaS development: MVP, multi-tenant architecture, recurring billing, admin panel and operations, with .NET and Angular.',
    },
  },
  {
    slug: 'aplicativos-mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    shortTitle: { pt: 'Aplicativos mobile', en: 'Mobile apps' },
    title: { pt: 'Aplicativos mobile com Flutter ou React Native', en: 'Mobile apps with Flutter or React Native' },
    benefit: {
      pt: 'Um único código para Android e iOS, integrado às suas APIs e com performance nativa.',
      en: 'One codebase for Android and iOS, connected to your APIs with native performance.',
    },
    definitionQuestion: { pt: 'O que é um aplicativo cross-platform?', en: 'What is a cross-platform app?' },
    definition: {
      pt: 'Um aplicativo cross-platform é escrito uma única vez e publicado para Android e iOS. Com Flutter ou React Native, o app tem desempenho próximo do nativo e interface consistente nas duas plataformas, o que reduz o custo de desenvolvimento e de manutenção em comparação com dois apps separados.',
      en: 'A cross-platform app is written once and published to both Android and iOS. With Flutter or React Native, the app performs close to native and looks consistent on both platforms, which lowers development and maintenance costs compared with two separate apps.',
    },
    homeBullets: {
      pt: ['Android e iOS com um só código (Flutter ou React Native)', 'Integração com APIs REST e Firebase', 'Publicação nas lojas'],
      en: ['Android and iOS from one codebase (Flutter or React Native)', 'REST API and Firebase integration', 'App store publishing'],
    },
    forWho: {
      pt: ['Empresas com equipe em campo que precisa registrar dados no celular', 'Negócios que querem um app próprio para os clientes', 'SaaS que precisa de uma versão mobile', 'Academias, clínicas e serviços com agendamento'],
      en: ['Companies with field teams that record data on their phones', 'Businesses that want their own customer app', 'SaaS products that need a mobile version', 'Gyms, clinics and services with scheduling'],
    },
    pains: {
      pt: ['Equipe em campo anotando em papel ou mandando foto no WhatsApp', 'Orçamento dobrado para fazer um app Android e outro iOS', 'App antigo travando e com avaliações ruins na loja', 'Clientes sem um canal próprio para falar com a empresa'],
      en: ['Field teams writing on paper or sending photos over WhatsApp', 'Double budget to build one Android app and another for iOS', 'An old app that freezes and gets bad store reviews', 'Customers without a dedicated channel to reach the company'],
    },
    features: [
      { icon: 'fa-solid fa-mobile-screen', text: { pt: 'Interface fluida e consistente em Android e iOS', en: 'Smooth, consistent UI on Android and iOS' } },
      { icon: 'fa-solid fa-bell', text: { pt: 'Notificações push e lembretes', en: 'Push notifications and reminders' } },
      { icon: 'fa-solid fa-wifi', text: { pt: 'Uso offline com sincronização posterior', en: 'Offline use with later sync' } },
      { icon: 'fa-solid fa-camera', text: { pt: 'Câmera, fotos, assinatura e localização', en: 'Camera, photos, signature and location' } },
      { icon: 'fa-solid fa-fire', text: { pt: 'Firebase para login, banco e análises', en: 'Firebase for login, database and analytics' } },
      { icon: 'fa-solid fa-store', text: { pt: 'Publicação na Google Play e App Store', en: 'Publishing on Google Play and the App Store' } },
    ],
    steps: STEPS_SYSTEM,
    deliverables: {
      pt: ['App publicado nas lojas', 'Integração com a sua API ou Firebase', 'Telas responsivas para celular e tablet', 'Contas das lojas em nome da sua empresa', 'Código-fonte e documentação', 'Acompanhamento após a publicação'],
      en: ['App published on the stores', 'Integration with your API or Firebase', 'Screens for phones and tablets', 'Store accounts in your company’s name', 'Source code and documentation', 'Follow-up after release'],
    },
    price: PRICE_DEFAULT,
    timeline: {
      pt: 'Um app focado em poucas funções principais costuma ficar pronto em algumas semanas, mais o tempo de revisão das lojas. Funcionalidades extras entram em versões seguintes.',
      en: 'An app focused on a few core features is usually ready in a few weeks, plus store review time. Extra features come in later versions.',
    },
    faq: {
      pt: [
        { q: 'Flutter ou React Native: qual você usa?', a: 'Os dois. Flutter costuma ser a escolha para interfaces ricas e desempenho consistente; React Native encaixa bem quando a empresa já usa JavaScript/TypeScript ou React na web. Nos dois casos é um único código para Android e iOS — metade do esforço de manter dois apps.' },
        { q: 'O app conversa com o meu sistema atual?', a: 'Sim, por API. Se o sistema não tiver API, posso criá-la em .NET.' },
        { q: 'Você publica nas lojas?', a: 'Sim. Cuido da publicação na Google Play e App Store, com as contas em nome da sua empresa.' },
        { q: 'Funciona sem internet?', a: 'Pode funcionar. Dados ficam no aparelho e sincronizam quando a conexão volta.' },
      ],
      en: [
        { q: 'Flutter or React Native: which do you use?', a: 'Both. Flutter is usually the pick for rich interfaces and consistent performance; React Native fits well when your company already uses JavaScript/TypeScript or React on the web. Either way it is a single codebase for Android and iOS — half the effort of maintaining two apps.' },
        { q: 'Will the app talk to my current system?', a: 'Yes, through an API. If your system has no API, I can build one in .NET.' },
        { q: 'Do you publish to the stores?', a: 'Yes. I handle publishing on Google Play and the App Store, with accounts in your company’s name.' },
        { q: 'Does it work offline?', a: 'It can. Data stays on the device and syncs when the connection is back.' },
      ],
    },
    relatedCases: ['app-shapeon', 'chef-manager'],
    relatedPostTags: ['flutter', 'react-native', 'mobile', 'app'],
    formType: 'app-mobile',
    stack: ['Flutter', 'Dart', 'React Native', 'TypeScript', 'Firebase', 'REST', '.NET'],
    seoTitle: { pt: 'Aplicativos mobile em Flutter e React Native', en: 'Flutter and React Native mobile apps' },
    seoDescription: {
      pt: 'Desenvolvimento de aplicativos Android e iOS com Flutter ou React Native, integrados a APIs REST e Firebase, com publicação nas lojas e código em nome da sua empresa.',
      en: 'Android and iOS app development with Flutter or React Native, connected to REST APIs and Firebase, with store publishing and code owned by your company.',
    },
  },
  {
    slug: 'landing-pages',
    icon: 'fa-solid fa-window-maximize',
    shortTitle: { pt: 'Landing pages e sites', en: 'Landing pages and websites' },
    title: { pt: 'Landing pages e sites institucionais', en: 'Landing pages and business websites' },
    benefit: {
      pt: 'Páginas rápidas, responsivas e pensadas para transformar visitas em contatos.',
      en: 'Fast, responsive pages designed to turn visits into leads.',
    },
    definitionQuestion: { pt: 'O que é uma landing page?', en: 'What is a landing page?' },
    definition: {
      pt: 'Uma landing page é uma página criada com um único objetivo — gerar um contato, um orçamento ou uma venda. Diferente de um site com muitas seções soltas, ela conduz o visitante por uma sequência clara: problema, solução, prova e chamada para ação, carregando rápido e bem posicionada no Google.',
      en: 'A landing page is a page built for a single goal — generating a lead, a quote request or a sale. Unlike a website with many loose sections, it guides visitors through a clear sequence: problem, solution, proof and call to action, while loading fast and ranking well on Google.',
    },
    homeBullets: {
      pt: ['Design responsivo e foco em conversão', 'Carregamento rápido e SEO técnico', 'Botões de WhatsApp e formulários de orçamento'],
      en: ['Responsive design focused on conversion', 'Fast loading and technical SEO', 'WhatsApp buttons and quote forms'],
    },
    forWho: {
      pt: ['Prestadores de serviço que dependem de indicação e querem aparecer no Google', 'Empresas lançando um produto ou serviço novo', 'Negócios com site antigo, lento ou que não funciona no celular', 'Profissionais que querem um portfólio próprio'],
      en: ['Service providers who rely on referrals and want to show up on Google', 'Companies launching a new product or service', 'Businesses with an old, slow website that breaks on mobile', 'Professionals who want their own portfolio'],
    },
    pains: {
      pt: ['Site que não aparece nas buscas', 'Página lenta que perde visitante antes de carregar', 'Visitas que não viram contato nem orçamento', 'Depender só de redes sociais para ser encontrado'],
      en: ['A website that does not show up in search', 'A slow page that loses visitors before it loads', 'Visits that never turn into leads or quotes', 'Relying only on social media to be found'],
    },
    features: [
      { icon: 'fa-solid fa-mobile-retro', text: { pt: 'Layout responsivo para celular, tablet e desktop', en: 'Responsive layout for phone, tablet and desktop' } },
      { icon: 'fa-solid fa-bolt', text: { pt: 'Páginas pré-renderizadas e otimizadas para velocidade', en: 'Prerendered pages optimized for speed' } },
      { icon: 'fa-solid fa-magnifying-glass', text: { pt: 'SEO técnico: metadados, dados estruturados e sitemap', en: 'Technical SEO: metadata, structured data and sitemap' } },
      { icon: 'fa-brands fa-whatsapp', text: { pt: 'Botões de WhatsApp com mensagem pronta', en: 'WhatsApp buttons with prefilled messages' } },
      { icon: 'fa-solid fa-envelope-open-text', text: { pt: 'Formulários de orçamento integrados ao seu e-mail ou CRM', en: 'Quote forms connected to your email or CRM' } },
      { icon: 'fa-solid fa-chart-simple', text: { pt: 'Google Analytics e métricas de conversão', en: 'Google Analytics and conversion tracking' } },
    ],
    steps: {
      pt: [
        { title: 'Briefing', text: 'Entendo o público, o objetivo da página e o que diferencia o seu serviço.' },
        { title: 'Estrutura e textos', text: 'Monto a sequência de seções e ajudo a escrever textos claros e diretos.' },
        { title: 'Design e desenvolvimento', text: 'Desenvolvo a página responsiva, rápida e com SEO técnico.' },
        { title: 'Revisão', text: 'Você revisa no ar, em um endereço de teste, antes da publicação.' },
        { title: 'Publicação', text: 'Domínio, hospedagem, Analytics e Search Console configurados.' },
      ],
      en: [
        { title: 'Briefing', text: 'I learn the audience, the page goal and what sets your service apart.' },
        { title: 'Structure and copy', text: 'I lay out the section flow and help write clear, direct copy.' },
        { title: 'Design and development', text: 'I build a responsive, fast page with technical SEO.' },
        { title: 'Review', text: 'You review it live on a staging address before release.' },
        { title: 'Launch', text: 'Domain, hosting, Analytics and Search Console set up.' },
      ],
    },
    deliverables: {
      pt: ['Página publicada no seu domínio', 'Layout responsivo', 'SEO técnico configurado', 'Integração com WhatsApp e formulário', 'Analytics e Search Console', 'Acesso total aos arquivos'],
      en: ['Page live on your domain', 'Responsive layout', 'Technical SEO set up', 'WhatsApp and form integration', 'Analytics and Search Console', 'Full access to the files'],
    },
    price: {
      pt: 'Uma landing page tem escopo mais fechado: o valor depende do número de seções, de textos e imagens prontos ou não, e de integrações como formulário e blog. Você recebe o valor fechado por escrito antes de começar.',
      en: 'A landing page has a tighter scope: the price depends on the number of sections, whether copy and images are ready, and integrations such as forms and a blog. You get a fixed written quote before we start.',
    },
    timeline: {
      pt: 'Com os textos e imagens definidos, uma landing page costuma ir ao ar em poucos dias a duas semanas.',
      en: 'With copy and images defined, a landing page usually goes live in a few days to two weeks.',
    },
    faq: {
      pt: [
        { q: 'Você escreve os textos?', a: 'Ajudo a estruturar e revisar. Você conhece o seu negócio; eu organizo a mensagem para ficar clara e convencer.' },
        { q: 'A página aparece no Google?', a: 'Ela sai com SEO técnico completo. O posicionamento depende também de conteúdo e tempo, mas a base fica pronta.' },
        { q: 'Dá para editar depois?', a: 'Sim. Você recebe todos os arquivos, e ajustes podem ser feitos sob demanda.' },
        { q: 'Você já fez algum site parecido?', a: 'Sim, por exemplo o site da Art Pisos E Assoalhos, que está no ar e aparece na lista de projetos.' },
      ],
      en: [
        { q: 'Do you write the copy?', a: 'I help structure and review it. You know your business; I organize the message so it is clear and convincing.' },
        { q: 'Will the page show up on Google?', a: 'It ships with complete technical SEO. Ranking also depends on content and time, but the foundation is ready.' },
        { q: 'Can it be edited later?', a: 'Yes. You get all the files, and changes can be made on demand.' },
        { q: 'Have you built a similar website?', a: 'Yes, for example the Art Pisos E Assoalhos website, which is live and listed in my projects.' },
      ],
    },
    relatedCases: ['art-pisos'],
    relatedPostTags: ['seo', 'landing page', 'site'],
    formType: 'site-landing',
    stack: ['Angular', 'TypeScript', 'SCSS', 'SEO', 'Google Analytics'],
    seoTitle: { pt: 'Landing pages e sites institucionais', en: 'Landing pages and business websites' },
    seoDescription: {
      pt: 'Criação de landing pages e sites institucionais responsivos, rápidos e com SEO técnico, integrados ao WhatsApp e a formulários de orçamento.',
      en: 'Responsive, fast landing pages and business websites with technical SEO, connected to WhatsApp and quote forms.',
    },
  },
  {
    slug: 'desenvolvimento-de-jogos',
    icon: 'fa-solid fa-gamepad',
    shortTitle: { pt: 'Desenvolvimento de jogos', en: 'Game development' },
    title: { pt: 'Desenvolvimento de jogos com Unity', en: 'Game development with Unity' },
    benefit: {
      pt: 'Jogos 2D e 3D com mecânicas, interface e publicação para várias plataformas.',
      en: '2D and 3D games with mechanics, UI and multi-platform publishing.',
    },
    definitionQuestion: { pt: 'O que envolve desenvolver um jogo com Unity?', en: 'What does building a game with Unity involve?' },
    definition: {
      pt: 'Desenvolver um jogo com Unity envolve programar em C# as mecânicas de jogo, a física, a inteligência dos inimigos, o inventário e as interfaces, além de integrar arte, som e publicar para PC, web ou mobile. A Unity é uma das engines mais usadas do mundo, o que facilita encontrar recursos e portar o jogo para outras plataformas.',
      en: 'Building a game with Unity involves programming gameplay mechanics, physics, enemy AI, inventory and UI in C#, as well as integrating art and sound and publishing to PC, web or mobile. Unity is one of the most widely used engines in the world, which makes it easier to find resources and port the game to other platforms.',
    },
    homeBullets: {
      pt: ['Jogos 2D e 3D em Unity com C#', 'Mecânicas, física, inventário e IA de inimigos', 'Jogos educativos e advergames'],
      en: ['2D and 3D Unity games in C#', 'Mechanics, physics, inventory and enemy AI', 'Educational games and advergames'],
    },
    forWho: {
      pt: ['Estúdios independentes que precisam de um programador Unity', 'Empresas que querem um advergame ou jogo para eventos', 'Escolas e projetos de jogos educativos', 'Criadores com um protótipo para tirar do papel'],
      en: ['Indie studios that need a Unity programmer', 'Companies that want an advergame or event game', 'Schools and educational game projects', 'Creators with a prototype to bring to life'],
    },
    pains: {
      pt: ['Ideia de jogo parada por falta de programação', 'Protótipo que funciona, mas trava ou não escala', 'Mecânicas difíceis de ajustar e balancear', 'Dificuldade para publicar em lojas e plataformas'],
      en: ['A game idea stuck for lack of programming', 'A prototype that works but stutters or does not scale', 'Mechanics that are hard to tune and balance', 'Trouble publishing to stores and platforms'],
    },
    features: [
      { icon: 'fa-solid fa-person-running', text: { pt: 'Mecânicas de movimento, combate e plataforma', en: 'Movement, combat and platforming mechanics' } },
      { icon: 'fa-solid fa-box-open', text: { pt: 'Inventário, coleta de itens e progressão', en: 'Inventory, item collection and progression' } },
      { icon: 'fa-solid fa-ghost', text: { pt: 'Inteligência artificial para inimigos', en: 'Enemy artificial intelligence' } },
      { icon: 'fa-solid fa-atom', text: { pt: 'Física customizada e colisões', en: 'Custom physics and collisions' } },
      { icon: 'fa-solid fa-display', text: { pt: 'Interfaces, menus e HUD', en: 'Interfaces, menus and HUD' } },
      { icon: 'fa-solid fa-upload', text: { pt: 'Build para PC, web e mobile', en: 'Builds for PC, web and mobile' } },
    ],
    steps: {
      pt: [
        { title: 'Conceito', text: 'Definimos o gênero, o público, a mecânica principal e o escopo.' },
        { title: 'Protótipo jogável', text: 'Uma versão simples para testar se a mecânica é divertida.' },
        { title: 'Produção', text: 'Fases, inimigos, itens, interface e integração de arte e som.' },
        { title: 'Testes e balanceamento', text: 'Ajustes de dificuldade, performance e correção de bugs.' },
        { title: 'Publicação', text: 'Build final e publicação na plataforma escolhida.' },
      ],
      en: [
        { title: 'Concept', text: 'We define the genre, audience, core mechanic and scope.' },
        { title: 'Playable prototype', text: 'A simple version to test whether the mechanic is fun.' },
        { title: 'Production', text: 'Levels, enemies, items, UI and art and sound integration.' },
        { title: 'Testing and balancing', text: 'Difficulty tuning, performance work and bug fixing.' },
        { title: 'Release', text: 'Final build and publishing on the chosen platform.' },
      ],
    },
    deliverables: {
      pt: ['Jogo jogável na plataforma escolhida', 'Projeto Unity organizado', 'Scripts C# documentados', 'Builds para as plataformas combinadas', 'Apoio na publicação', 'Código-fonte em seu nome'],
      en: ['Playable game on the chosen platform', 'Organized Unity project', 'Documented C# scripts', 'Builds for the agreed platforms', 'Publishing support', 'Source code in your name'],
    },
    price: PRICE_DEFAULT,
    timeline: {
      pt: 'Um protótipo jogável costuma sair em poucas semanas. O jogo completo depende do número de fases, da arte e das plataformas.',
      en: 'A playable prototype usually comes out in a few weeks. The full game depends on the number of levels, art and platforms.',
    },
    faq: {
      pt: [
        { q: 'Você faz a arte do jogo?', a: 'Meu foco é a programação e o game design. A arte pode vir de um artista parceiro ou de pacotes de assets licenciados.' },
        { q: 'Dá para publicar no celular?', a: 'Sim. A Unity gera builds para Android e iOS, além de PC e web.' },
        { q: 'Você já desenvolveu algum jogo?', a: 'Sim, o Worth Viking, um jogo de aventura e sobrevivência em Unity que está na lista de projetos.' },
        { q: 'Faz jogos educativos ou para empresas?', a: 'Sim. Jogos educativos e advergames seguem o mesmo processo, com foco no objetivo pedagógico ou de marca.' },
      ],
      en: [
        { q: 'Do you create the game art?', a: 'My focus is programming and game design. Art can come from a partner artist or licensed asset packs.' },
        { q: 'Can it be published on mobile?', a: 'Yes. Unity builds for Android and iOS, as well as PC and web.' },
        { q: 'Have you developed a game before?', a: 'Yes, Worth Viking, an adventure and survival game built in Unity that is listed in my projects.' },
        { q: 'Do you build educational or corporate games?', a: 'Yes. Educational games and advergames follow the same process, focused on the learning or brand goal.' },
      ],
    },
    relatedCases: ['worth-viking'],
    relatedPostTags: ['unity', 'jogos', 'game'],
    formType: 'jogo',
    stack: ['Unity', 'C#', 'Game Design', '2D', '3D'],
    seoTitle: { pt: 'Desenvolvimento de jogos com Unity', en: 'Unity game development' },
    seoDescription: {
      pt: 'Desenvolvimento de jogos 2D e 3D com Unity e C#: mecânicas, física, IA de inimigos, interfaces e publicação para PC, web e mobile.',
      en: '2D and 3D game development with Unity and C#: mechanics, physics, enemy AI, interfaces and publishing for PC, web and mobile.',
    },
  },
];

export const SERVICE_SUMMARIES: ServiceSummary[] = SERVICES.map(({ slug, icon, shortTitle }) => ({ slug, icon, shortTitle }));

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
