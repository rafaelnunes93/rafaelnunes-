// Textos da home (e seções reaproveitadas em outras páginas). Sempre pt + en.
import type { L } from '../services/translation.service';
import type { FaqItem } from './blog-types';

export const HERO = {
  pill: { pt: 'Desenvolvedor Full Stack · .NET e Angular', en: 'Full Stack Developer · .NET and Angular' },
  titleStart: { pt: 'Sistemas, APIs e apps que', en: 'Systems, APIs and apps that' },
  titleHighlight: { pt: 'resolvem problemas reais', en: 'solve real problems' },
  titleEnd: { pt: 'do seu negócio', en: 'for your business' },
  roles: {
    pt: ['Backend Engineer', 'Desenvolvedor .NET', 'APIs de alta performance', 'Integrações e EDI', 'SaaS ponta a ponta', 'Flutter & React Native', 'Unity Developer'],
    en: ['Backend Engineer', '.NET Developer', 'High-performance APIs', 'Integrations and EDI', 'End-to-end SaaS', 'Flutter & React Native', 'Unity Developer'],
  },
  lead: {
    pt: 'Back-end robusto em C# e .NET, front-end em Angular, integrações críticas e experiência em logística (TMS e EDI). Do planejamento à produção, com código limpo e entregas que você acompanha.',
    en: 'Solid C# and .NET back ends, Angular front ends, critical integrations and logistics experience (TMS and EDI). From planning to production, with clean code and deliveries you can follow.',
  },
  ctaPrimary: { pt: 'Conversar sobre o meu projeto', en: 'Talk about my project' },
  ctaSecondary: { pt: 'Ver projetos', en: 'See projects' },
  micro: { pt: 'Conversa inicial sem compromisso · resposta em poucas horas pelo WhatsApp', en: 'No-commitment first call · reply within a few hours on WhatsApp' },
  chipStatus: { pt: 'Disponível para projetos', en: 'Available for projects' },
  photoAlt: { pt: 'Foto de Rafael Nunes', en: 'Photo of Rafael Nunes' },
  mobileCaption: { pt: 'Dev Full Stack · .NET, Angular, Flutter, React Native e Unity', en: 'Full Stack Dev · .NET, Angular, Flutter, React Native and Unity' },
};

export const STATS_LABELS: Record<string, L> = {
  years: { pt: 'anos de experiência em desenvolvimento', en: 'years of software development' },
  projects: { pt: 'projetos entregues', en: 'projects delivered' },
  companies: { pt: 'empresas atendidas', en: 'companies served' },
  coffee: { pt: 'xícaras de café', en: 'cups of coffee' },
};

export const PROOF = {
  title: { pt: 'Empresas e projetos em que o meu código roda ou já rodou', en: 'Companies and projects where my code runs or has run' },
  companies: ['UPS', 'Cargo Online', 'Aplicativo.NET', 'Smart Online', 'Online Applications', 'Art Pisos E Assoalhos', 'ClipNest'],
  chips: {
    pt: ['.NET 8', 'APIs REST', 'TMS', 'EDI', 'ERP sob medida', 'SQL Server', 'Angular', 'Flutter', 'React Native', 'SaaS multiempresa', 'Integrações', 'Landing pages', 'Unity'],
    en: ['.NET 8', 'REST APIs', 'TMS', 'EDI', 'Custom ERP', 'SQL Server', 'Angular', 'Flutter', 'React Native', 'Multi-tenant SaaS', 'Integrations', 'Landing pages', 'Unity'],
  },
};

export interface Pain {
  icon: string;
  quote: L;
  consequence: L;
  solution: L;
}

export const PAINS = {
  eyebrow: { pt: 'Você se identifica?', en: 'Sound familiar?' },
  title: { pt: 'Algum desses problemas está travando a sua operação?', en: 'Is one of these problems holding your operation back?' },
  subtitle: {
    pt: 'Tecnologia boa é a que resolve um problema de negócio. Estes são os que eu mais resolvo no dia a dia.',
    en: 'Good technology is the kind that solves a business problem. These are the ones I solve most often.',
  },
  items: [
    {
      icon: 'fa-solid fa-table-cells',
      quote: { pt: '“A empresa roda em planilhas que ninguém confia.”', en: '“The company runs on spreadsheets nobody trusts.”' },
      consequence: { pt: 'Versões diferentes do mesmo arquivo, dado perdido e decisão tomada no escuro.', en: 'Different versions of the same file, lost data and decisions made in the dark.' },
      solution: { pt: 'Um sistema web com cadastro único, histórico e permissões.', en: 'A web system with a single source of truth, history and permissions.' },
    },
    {
      icon: 'fa-solid fa-link-slash',
      quote: { pt: '“Nossos sistemas não conversam entre si.”', en: '“Our systems don’t talk to each other.”' },
      consequence: { pt: 'Alguém digita o mesmo dado duas vezes e a conciliação nunca bate.', en: 'Someone types the same data twice and reconciliation never matches.' },
      solution: { pt: 'APIs e integrações que trocam dados sozinhas, com logs.', en: 'APIs and integrations that exchange data on their own, with logs.' },
    },
    {
      icon: 'fa-solid fa-hourglass-half',
      quote: { pt: '“O sistema é lento e ninguém quer mexer nele.”', en: '“The system is slow and nobody wants to touch it.”' },
      consequence: { pt: 'Cada mudança vira risco, e o legado trava o crescimento.', en: 'Every change becomes a risk, and the legacy code blocks growth.' },
      solution: { pt: 'Refatoração por partes, consultas otimizadas e .NET moderno.', en: 'Step-by-step refactoring, optimized queries and modern .NET.' },
    },
    {
      icon: 'fa-solid fa-truck',
      quote: { pt: '“A logística vive de e-mail, papel e telefone.”', en: '“Our logistics run on email, paper and phone calls.”' },
      consequence: { pt: 'Entregas sem rastreio, documento fiscal atrasado e cliente perguntando status.', en: 'Untracked deliveries, late tax documents and customers asking for status.' },
      solution: { pt: 'TMS, EDI e automações de quem já desenvolveu para o setor.', en: 'TMS, EDI and automation from someone who has built for the industry.' },
    },
    {
      icon: 'fa-solid fa-lightbulb',
      quote: { pt: '“Tenho a ideia de um SaaS, mas não sei por onde começar.”', en: '“I have a SaaS idea but don’t know where to start.”' },
      consequence: { pt: 'A ideia fica parada ou vira um projeto caro antes de ser validada.', en: 'The idea stalls or becomes an expensive project before it is validated.' },
      solution: { pt: 'Um MVP enxuto, com arquitetura preparada para crescer.', en: 'A lean MVP with an architecture ready to grow.' },
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      quote: { pt: '“Minha equipe em campo anota tudo no papel.”', en: '“My field team writes everything on paper.”' },
      consequence: { pt: 'Informação chega atrasada, incompleta ou se perde no caminho.', en: 'Information arrives late, incomplete or gets lost on the way.' },
      solution: { pt: 'Um app em Flutter ou React Native para Android e iOS ligado ao seu sistema.', en: 'A Flutter or React Native app for Android and iOS connected to your system.' },
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      quote: { pt: '“Meu negócio não aparece no Google.”', en: '“My business doesn’t show up on Google.”' },
      consequence: { pt: 'Você depende de indicação e de redes sociais para ser encontrado.', en: 'You rely on referrals and social media to be found.' },
      solution: { pt: 'Um site rápido, com SEO técnico e contato pelo WhatsApp.', en: 'A fast website with technical SEO and WhatsApp contact.' },
    },
  ] satisfies Pain[],
  ctaTitle: {
    pt: 'Nenhum desses problemas se resolve sozinho. Vamos conversar sobre o seu?',
    en: 'None of these problems solves itself. Shall we talk about yours?',
  },
  ctaButton: { pt: 'Contar meu problema', en: 'Tell me your problem' },
  swipe: { pt: 'Deslize para ver mais', en: 'Swipe to see more' },
};

export const SECTIONS = {
  services: {
    eyebrow: { pt: 'Serviços', en: 'Services' },
    title: { pt: 'O que eu desenvolvo para você', en: 'What I build for you' },
    subtitle: {
      pt: 'Cada projeto começa pelo problema de negócio e termina com software em produção, documentado e com o código em seu nome.',
      en: 'Every project starts with the business problem and ends with software in production, documented and with the code in your name.',
    },
    link: { pt: 'Ver todos os serviços', en: 'See all services' },
    more: { pt: 'Como funciona, prazo e investimento', en: 'How it works, timeline and pricing' },
    unsureTitle: { pt: 'Não sabe qual é o seu caso?', en: 'Not sure which one fits?' },
    unsureText: {
      pt: 'Conte o problema com as suas palavras. Eu indico o caminho mais simples — mesmo que seja usar algo pronto.',
      en: 'Describe the problem in your own words. I will point out the simplest path — even if it means using something off the shelf.',
    },
    unsureLink: { pt: 'Contar meu projeto', en: 'Tell me your project' },
  },
  cases: {
    eyebrow: { pt: 'Projetos', en: 'Projects' },
    title: { pt: 'Projetos reais, em produção', en: 'Real projects, in production' },
    subtitle: {
      pt: 'Extensões, apps mobile, sites, plataformas de logística, sistemas de gestão e jogos — com o problema, a solução e o resultado de cada um.',
      en: 'Extensions, mobile apps, websites, logistics platforms, management systems and games — with the problem, solution and result of each.',
    },
    link: { pt: 'Todos os projetos', en: 'All projects' },
    problem: { pt: 'Problema', en: 'Problem' },
    solution: { pt: 'Solução', en: 'Solution' },
    result: { pt: 'Resultado', en: 'Result' },
    readMore: { pt: 'Ler o case completo', en: 'Read the full case' },
    live: { pt: 'Ver ao vivo', en: 'See it live' },
  },
  skills: {
    eyebrow: { pt: 'Stack', en: 'Stack' },
    title: { pt: 'As tecnologias que uso em produção', en: 'The technologies I use in production' },
  },
  experience: {
    eyebrow: { pt: 'Experiência', en: 'Experience' },
    title: { pt: 'Onde o meu código roda em produção', en: 'Where my code runs in production' },
    subtitle: {
      pt: 'Trajetória profissional e formação acadêmica — a base de experiência que levo para cada projeto.',
      en: 'Professional path and academic background — the experience I bring to every project.',
    },
    link: { pt: 'Ver a trajetória completa', en: 'See the full journey' },
  },
  blog: {
    eyebrow: { pt: 'Blog', en: 'Blog' },
    title: { pt: 'Últimos posts', en: 'Latest posts' },
    link: { pt: 'Todos os artigos', en: 'All articles (in Portuguese)' },
  },
};

export const ABOUT_TEASER = {
  eyebrow: { pt: 'Sobre mim', en: 'About me' },
  title: { pt: 'Oi, eu sou o Rafael. Quem vai construir o seu sistema sou eu.', en: 'Hi, I’m Rafael. I’m the one who will build your system.' },
  location: { pt: 'Paulínia/SP · atendo todo o Brasil', en: 'Paulínia, Brazil · working remotely' },
  paragraphs: {
    pt: [
      'Sou desenvolvedor full stack especializado em .NET. Comecei em 2019 como estagiário, passei por suporte, trainee e júnior até chegar a pleno — hoje desenvolvo um ERP para clínicas médicas e odontológicas em .NET e Razor, numa empresa com cultura AI First, em que a inteligência artificial faz parte do dia a dia do desenvolvimento.',
      'Grande parte da minha trajetória foi em logística: sistemas TMS, emissão de CT-e e MDF-e e uma plataforma EDI para a UPS. Também construo apps em Flutter e React Native, sites em Angular e jogos em Unity, e sou pós-graduado em Arquitetura de Sistemas .NET pela FIAP.',
    ],
    en: [
      'I am a full stack developer specialized in .NET. I started in 2019 as an intern, moved through support, trainee and junior roles to mid-level — today I build an ERP for medical and dental clinics with .NET and Razor at an AI First company, where artificial intelligence is part of everyday development.',
      'Much of my career has been in logistics: TMS systems, CT-e and MDF-e tax documents and an EDI platform for UPS. I also build Flutter and React Native apps, Angular websites and Unity games, and I hold a postgraduate degree in .NET Systems Architecture from FIAP.',
    ],
  },
  values: [
    { icon: 'fa-solid fa-user', title: { pt: 'Contato direto', en: 'Direct contact' }, text: { pt: 'Você fala com quem escreve o código.', en: 'You talk to the person writing the code.' } },
    { icon: 'fa-solid fa-arrows-rotate', title: { pt: 'Entregas que você vê', en: 'Visible deliveries' }, text: { pt: 'Demonstração a cada ciclo, com o sistema funcionando.', en: 'A demo every cycle, with the system running.' } },
    { icon: 'fa-solid fa-unlock', title: { pt: 'Sem dependência', en: 'No lock-in' }, text: { pt: 'Código, dados e acessos em nome da sua empresa.', en: 'Code, data and credentials in your company’s name.' } },
    { icon: 'fa-solid fa-scale-balanced', title: { pt: 'Transparência', en: 'Transparency' }, text: { pt: 'Escopo, prazo e valor combinados por escrito.', en: 'Scope, timeline and price agreed in writing.' } },
  ],
  ctaPrimary: { pt: 'Minha trajetória completa', en: 'My full journey' },
  ctaSecondary: { pt: 'Falar comigo', en: 'Contact me' },
};

export const FAQ = {
  eyebrow: { pt: 'Perguntas frequentes', en: 'FAQ' },
  title: { pt: 'O que costumam me perguntar antes de contratar', en: 'What people usually ask before hiring me' },
  subtitlePre: { pt: 'Não achou a sua dúvida?', en: 'Didn’t find your question?' },
  subtitleLink: { pt: 'Pergunte direto', en: 'Ask me directly' },
  items: {
    pt: [
      { q: 'Quanto custa desenvolver um sistema?', a: 'Depende do escopo: telas, regras de negócio, integrações e prazo. Depois de uma conversa inicial eu envio uma proposta por escrito com valor fechado ou por etapas — sem surpresas no meio do caminho.' },
      { q: 'Quanto tempo leva?', a: 'Uma primeira versão utilizável costuma ficar pronta em semanas. Projetos maiores são entregues por módulos para que você comece a usar cedo.' },
      { q: 'Com quais tecnologias você trabalha?', a: 'No dia a dia: C#, .NET 8, ASP.NET Core, SQL Server e Angular. Também desenvolvo apps em Flutter e React Native, jogos em Unity e publico na Azure.' },
      { q: 'O código e os dados ficam com a minha empresa?', a: 'Sim. Repositório, banco de dados, domínio e contas de nuvem ficam em nome da sua empresa desde o início.' },
      { q: 'Você consegue dar manutenção em um sistema que já existe?', a: 'Sim. Tenho experiência com sistemas legados em .NET Framework, MVC e Razor. Avalio o código e proponho evoluir por partes ou reescrever.' },
      { q: 'Você atende empresas de outras cidades?', a: 'Sim. Trabalho de forma remota a partir de Paulínia/SP, com reuniões por vídeo e acompanhamento pelo WhatsApp.' },
      { q: 'Como funciona o suporte depois da entrega?', a: 'Todo projeto inclui um período de acompanhamento. Depois, você pode contratar evolução contínua ou chamados sob demanda.' },
      { q: 'Você trabalha com contrato?', a: 'Sim. Escopo, prazo, valor, propriedade do código e confidencialidade ficam definidos por escrito antes de começar.' },
    ],
    en: [
      { q: 'How much does it cost to build a system?', a: 'It depends on scope: screens, business rules, integrations and timeline. After a first call I send a written proposal with a fixed or staged price — no surprises along the way.' },
      { q: 'How long does it take?', a: 'A first usable version is usually ready in weeks. Larger projects are delivered module by module so you can start using them early.' },
      { q: 'Which technologies do you work with?', a: 'Day to day: C#, .NET 8, ASP.NET Core, SQL Server and Angular. I also build Flutter and React Native apps, Unity games and deploy on Azure.' },
      { q: 'Does my company own the code and data?', a: 'Yes. Repository, database, domain and cloud accounts belong to your company from day one.' },
      { q: 'Can you maintain an existing system?', a: 'Yes. I have experience with legacy .NET Framework, MVC and Razor systems. I review the code and suggest evolving it step by step or rewriting it.' },
      { q: 'Do you work with clients outside Brazil?', a: 'Yes. I work remotely, with video calls and follow-up over WhatsApp or email, in Portuguese or English.' },
      { q: 'How does support work after delivery?', a: 'Every project includes a follow-up period. After that you can hire ongoing development or on-demand support.' },
      { q: 'Do you work under contract?', a: 'Yes. Scope, timeline, price, code ownership and confidentiality are defined in writing before we start.' },
    ],
  } as L<FaqItem[]>,
};

export const CONTACT = {
  eyebrow: { pt: 'Vamos conversar', en: 'Let’s talk' },
  title: { pt: 'Vamos tirar o seu projeto do papel?', en: 'Shall we get your project off the ground?' },
  subtitle: {
    pt: 'Conte o que você precisa. Se um sistema sob medida não for o melhor caminho, eu digo — e indico o que faz sentido.',
    en: 'Tell me what you need. If custom software is not the best path, I will say so — and point you to what makes sense.',
  },
  steps: [
    { pt: 'Você conta o projeto em 2 minutos.', en: 'You describe the project in 2 minutes.' },
    { pt: 'Eu respondo em poucas horas e marcamos uma conversa.', en: 'I reply within a few hours and we schedule a call.' },
    { pt: 'Você recebe uma avaliação honesta e, se fizer sentido, uma proposta com escopo, prazo e valor.', en: 'You get an honest assessment and, if it makes sense, a proposal with scope, timeline and price.' },
  ],
  otherChannel: { pt: 'Prefere outro canal?', en: 'Prefer another channel?' },
  whatsappTitle: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
  whatsappText: { pt: 'Resposta mais rápida', en: 'Fastest reply' },
  emailTitle: { pt: 'E-mail', en: 'Email' },
};
