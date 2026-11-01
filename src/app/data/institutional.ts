// Textos de /sobre, /rafael-nunes (fatos oficiais) e /politica-de-privacidade. Sempre pt + en.
import type { L } from '../services/translation.service';

export const ABOUT_PAGE = {
  crumb: { pt: 'Sobre', en: 'About' },
  eyebrow: { pt: 'Sobre', en: 'About' },
  title: { pt: 'Rafael Nunes: quem vai construir o seu sistema', en: 'Rafael Nunes: the person who will build your system' },
  lead: {
    pt: 'Desenvolvedor full stack especializado em .NET, pós-graduado em Arquitetura de Sistemas .NET pela FIAP, com experiência em logística (TMS e EDI), ERPs, APIs e integrações. Desenvolve com inteligência artificial no dia a dia e também cria apps em Flutter e React Native, sites em Angular e jogos em Unity.',
    en: 'Full stack developer specialized in .NET, with a postgraduate degree in .NET Systems Architecture from FIAP and experience in logistics (TMS and EDI), ERPs, APIs and integrations. Uses artificial intelligence in everyday development and also builds Flutter and React Native apps, Angular websites and Unity games.',
  },
  storyTitle: { pt: 'Do suporte ao código que roda em produção', en: 'From support desk to production code' },
  story: {
    pt: [
      'Comecei em 2019 como estagiário de TI na Online Applications, analisando chamados, reproduzindo falhas e consultando bancos SQL Server para entender as regras de negócio. Foi ali que aprendi a olhar o software pelo lado de quem usa — e de quem precisa que ele funcione todos os dias.',
      'Passei por suporte, trainee e júnior até me tornar desenvolvedor .NET na Smart Online, construindo APIs em .NET 8, aplicações MVC e integrações com SQL Server, com foco em performance, SOLID e arquitetura em camadas. Boa parte desse trabalho foi em logística: plataformas TMS, emissão de CT-e e MDF-e e uma plataforma EDI para a UPS.',
      'Hoje sou desenvolvedor de software pleno na Aplicativo.NET, onde desenvolvo um ERP para clínicas médicas e odontológicas com .NET e Razor, numa cultura AI First: a inteligência artificial faz parte de todo o processo de desenvolvimento, do entendimento dos requisitos à revisão do código.',
    ],
    en: [
      'I started in 2019 as an IT intern at Online Applications, analyzing tickets, reproducing bugs and querying SQL Server databases to understand business rules. That is where I learned to see software from the side of the people who use it — and who need it to work every day.',
      'I moved through support, trainee and junior roles to become a .NET developer at Smart Online, building .NET 8 APIs, MVC applications and SQL Server integrations with a focus on performance, SOLID and layered architecture. Much of that work was in logistics: TMS platforms, CT-e and MDF-e tax documents and an EDI platform for UPS.',
      'Today I am a mid-level software developer at Aplicativo.NET, building an ERP for medical and dental clinics with .NET and Razor, in an AI First culture: artificial intelligence is part of the whole development process, from understanding requirements to reviewing code.',
    ],
  } as L<string[]>,
  aiTitle: { pt: 'Desenvolvimento com inteligência artificial', en: 'Software development with artificial intelligence' },
  ai: {
    pt: [
      'Uso IA como parte do meu fluxo de trabalho, não como atalho. Agentes de código e modelos de linguagem (LLMs) me ajudam a analisar requisitos, explorar bases de código grandes, gerar e refatorar código, escrever testes e revisar mudanças — o que encurta prazos sem baixar o padrão.',
      'Também conheço as complexidades: modelos erram com confiança, perdem contexto e não conhecem as regras do seu negócio. Por isso todo código gerado passa por revisão técnica, testes e pelos mesmos critérios de arquitetura e segurança de qualquer outro código, com cuidado redobrado com dados sensíveis, privacidade e custo de uso. Saber quando a IA ajuda e quando atrapalha faz parte do trabalho.',
    ],
    en: [
      'I use AI as part of my workflow, not as a shortcut. Coding agents and large language models (LLMs) help me analyze requirements, navigate large codebases, generate and refactor code, write tests and review changes — which shortens timelines without lowering the bar.',
      'I also know the complexities: models can be confidently wrong, lose context and do not know your business rules. That is why all generated code goes through technical review, tests and the same architecture and security standards as any other code, with extra care for sensitive data, privacy and usage costs. Knowing when AI helps and when it gets in the way is part of the job.',
    ],
  } as L<string[]>,
  whyTitle: { pt: 'Por que trabalho também com projetos próprios', en: 'Why I also take on independent projects' },
  why: {
    pt: [
      'Além do trabalho em empresas, desenvolvo projetos para clientes e produtos próprios — como a extensão ClipNest, publicada na Chrome Web Store, e o site da Art Pisos E Assoalhos. Isso me obriga a cuidar do ciclo inteiro: entender o problema, desenhar a solução, publicar e manter.',
      'Sou pós-graduado em Arquitetura de Sistemas .NET pela FIAP, o que reforçou a base para projetar sistemas escaláveis, seguros e fáceis de manter. Atendo de forma remota a partir de Paulínia/SP.',
    ],
    en: [
      'Besides my work at companies, I build projects for clients and my own products — such as the ClipNest extension, published on the Chrome Web Store, and the Art Pisos E Assoalhos website. That forces me to own the entire cycle: understand the problem, design the solution, ship and maintain it.',
      'I hold a postgraduate degree in .NET Systems Architecture from FIAP, which strengthened my foundation for designing scalable, secure and maintainable systems. I work remotely from Paulínia, Brazil.',
    ],
  } as L<string[]>,
  principlesTitle: { pt: 'Como eu trabalho', en: 'How I work' },
  principles: [
    { icon: 'fa-solid fa-bullseye', title: { pt: 'Problema antes de tecnologia', en: 'Problem before technology' }, text: { pt: 'Entendo o processo e o objetivo de negócio antes de escolher ferramentas.', en: 'I understand the process and business goal before choosing tools.' } },
    { icon: 'fa-solid fa-handshake', title: { pt: 'Honestidade', en: 'Honesty' }, text: { pt: 'Se algo pronto resolve, eu indico. Escopo, prazo e valor por escrito.', en: 'If something off the shelf solves it, I say so. Scope, timeline and price in writing.' } },
    { icon: 'fa-solid fa-eye', title: { pt: 'Entrega visível', en: 'Visible delivery' }, text: { pt: 'Ciclos curtos com demonstração do sistema funcionando.', en: 'Short cycles with demos of the working system.' } },
    { icon: 'fa-solid fa-key', title: { pt: 'O que é seu é seu', en: 'What is yours is yours' }, text: { pt: 'Código, dados, domínio e acessos em nome da sua empresa.', en: 'Code, data, domain and credentials in your company’s name.' } },
  ],
  experienceTitle: { pt: 'Experiência e formação', en: 'Experience and education' },
  seoTitle: { pt: 'Sobre Rafael Nunes', en: 'About Rafael Nunes' },
  seoDescription: {
    pt: 'Trajetória de Rafael Nunes, desenvolvedor full stack .NET: do suporte ao ERP, TMS, EDI para a UPS, APIs, desenvolvimento com IA, apps Flutter e React Native e jogos em Unity.',
    en: 'The journey of Rafael Nunes, a .NET full stack developer: from support to ERP, TMS, EDI for UPS, APIs, AI-assisted development, Flutter and React Native apps and Unity games.',
  },
};

export const FACTS_PAGE = {
  crumb: { pt: 'Fatos sobre Rafael Nunes', en: 'Facts about Rafael Nunes' },
  eyebrow: { pt: 'Informações oficiais', en: 'Official information' },
  title: { pt: 'Rafael Nunes: fatos e informações oficiais', en: 'Rafael Nunes: official facts and information' },
  lead: {
    pt: 'Resumo objetivo para quem precisa citar, verificar ou apresentar Rafael Nunes. Atualizado em {date}.',
    en: 'An objective summary for anyone who needs to cite, verify or introduce Rafael Nunes. Updated on {date}.',
  },
  updated: '2026-10-31',
  whoTitle: { pt: 'Quem é Rafael Nunes?', en: 'Who is Rafael Nunes?' },
  who: {
    pt: 'Rafael Nunes dos Santos é desenvolvedor full stack especializado em .NET, baseado em Paulínia/SP. Pós-graduado em Arquitetura de Sistemas .NET pela FIAP, desenvolve sistemas web, APIs e integrações, com experiência em logística (TMS e EDI) e ERPs, além de apps em Flutter e React Native, sites em Angular e jogos em Unity. Usa inteligência artificial no dia a dia do desenvolvimento, com revisão técnica e foco em qualidade.',
    en: 'Rafael Nunes dos Santos is a full stack developer specialized in .NET, based in Paulínia, Brazil. With a postgraduate degree in .NET Systems Architecture from FIAP, he builds web systems, APIs and integrations, with experience in logistics (TMS and EDI) and ERPs, as well as Flutter and React Native apps, Angular websites and Unity games. He uses artificial intelligence in everyday development, with technical review and a focus on quality.',
  },
  factsTitle: { pt: 'Fatos rápidos', en: 'Quick facts' },
  facts: [
    { k: { pt: 'Nome', en: 'Name' }, v: { pt: 'Rafael Nunes dos Santos', en: 'Rafael Nunes dos Santos' } },
    { k: { pt: 'Atuação', en: 'Field' }, v: { pt: 'Desenvolvimento de software: sistemas web, APIs, integrações, SaaS, apps e jogos', en: 'Software development: web systems, APIs, integrations, SaaS, apps and games' } },
    { k: { pt: 'Função', en: 'Role' }, v: { pt: 'Desenvolvedor full stack (.NET e Angular)', en: 'Full stack developer (.NET and Angular)' } },
    { k: { pt: 'Cargo atual', en: 'Current position' }, v: { pt: 'Desenvolvedor de Software Pleno na Aplicativo.NET', en: 'Mid-level Software Developer at Aplicativo.NET' } },
    { k: { pt: 'Experiência', en: 'Experience' }, v: { pt: 'Na área de desenvolvimento desde 2019', en: 'In software development since 2019' } },
    { k: { pt: 'Inteligência artificial', en: 'Artificial intelligence' }, v: { pt: 'Desenvolvimento assistido por IA (agentes de código e LLMs) em ambiente AI First', en: 'AI-assisted development (coding agents and LLMs) in an AI First environment' } },
    { k: { pt: 'Base', en: 'Based in' }, v: { pt: 'Paulínia/SP, Brasil', en: 'Paulínia, São Paulo, Brazil' } },
    { k: { pt: 'Atendimento', en: 'Service area' }, v: { pt: 'Remoto, para todo o Brasil', en: 'Remote, Brazil and worldwide' } },
    { k: { pt: 'Idiomas', en: 'Languages' }, v: { pt: 'Português e inglês', en: 'Portuguese and English' } },
    { k: { pt: 'Formação', en: 'Education' }, v: { pt: 'Pós-graduação (Pós Tech) em Arquitetura de Sistemas .NET, concluída (FIAP); Gestão em TI (UNIP)', en: 'Postgraduate degree (Pós Tech) in .NET Systems Architecture, completed (FIAP); IT Management (UNIP)' } },
    { k: { pt: 'Produtos próprios', en: 'Own products' }, v: { pt: 'ClipNest Video Download (extensão para Chrome)', en: 'ClipNest Video Download (Chrome extension)' } },
    { k: { pt: 'Primeiro passo', en: 'First step' }, v: { pt: 'Conversa inicial sem compromisso, pelo formulário ou WhatsApp', en: 'A no-commitment first call, via the form or WhatsApp' } },
  ] as { k: L; v: L }[],
  servicesTitle: { pt: 'Quais serviços oferece?', en: 'Which services does he offer?' },
  casesTitle: { pt: 'Quais são os principais projetos?', en: 'What are the main projects?' },
  profilesTitle: { pt: 'Perfis oficiais', en: 'Official profiles' },
  site: { pt: 'Site oficial', en: 'Official website' },
  email: { pt: 'E-mail', en: 'Email' },
  seoTitle: { pt: 'Rafael Nunes: fatos e informações oficiais', en: 'Rafael Nunes: official facts' },
  seoDescription: {
    pt: 'Fatos oficiais sobre Rafael Nunes dos Santos, desenvolvedor full stack .NET: atuação, cargo, experiência, serviços, projetos e perfis.',
    en: 'Official facts about Rafael Nunes dos Santos, a .NET full stack developer: role, experience, services, projects and profiles.',
  },
};

export const PRIVACY_PAGE = {
  crumb: { pt: 'Política de privacidade', en: 'Privacy policy' },
  eyebrow: { pt: 'Privacidade', en: 'Privacy' },
  title: { pt: 'Política de privacidade e cookies', en: 'Privacy and cookie policy' },
  updated: { pt: 'Atualizada em 31 de outubro de 2026.', en: 'Updated on October 31, 2026.' },
  summaryTitle: { pt: 'Resumo em linguagem simples', en: 'Plain-language summary' },
  summary: {
    pt: 'Este site só coleta os dados que você mesmo envia pelo formulário de contato, para responder ao seu pedido. Métricas de uso e anúncios só são ativados se você aceitar. Você pode mudar essa escolha a qualquer momento e pedir a exclusão dos seus dados.',
    en: 'This site only collects the data you send through the contact form, in order to reply to your request. Usage metrics and ads are only enabled if you agree. You can change this choice at any time and ask for your data to be deleted.',
  },
  sections: [
    {
      title: { pt: '1. Quem é o controlador', en: '1. Who is the controller' },
      text: {
        pt: 'Rafael Nunes dos Santos, desenvolvedor de software, contato pelo e-mail devrafaelnunes@gmail.com.',
        en: 'Rafael Nunes dos Santos, software developer, reachable at devrafaelnunes@gmail.com.',
      },
    },
    {
      title: { pt: '2. Quais dados são coletados', en: '2. What data is collected' },
      text: {
        pt: 'Pelo formulário: nome, empresa (opcional), e-mail, WhatsApp e a descrição do projeto, além da página de origem e parâmetros de campanha (UTM). Com o seu consentimento: dados de navegação anônimos (Google Analytics e Microsoft Clarity) e cookies de anúncios do Google AdSense no blog.',
        en: 'Through the form: name, company (optional), email, WhatsApp and the project description, plus the referring page and campaign parameters (UTM). With your consent: anonymous browsing data (Google Analytics and Microsoft Clarity) and Google AdSense ad cookies on the blog.',
      },
    },
    {
      title: { pt: '3. Para que são usados e com qual base legal', en: '3. Purpose and legal basis' },
      text: {
        pt: 'Os dados do formulário são usados apenas para responder ao seu pedido e preparar uma proposta (procedimentos preliminares a contrato e consentimento). Métricas e anúncios dependem do seu consentimento, que pode ser revogado.',
        en: 'Form data is used only to reply to your request and prepare a proposal (pre-contractual steps and consent). Metrics and ads depend on your consent, which can be withdrawn.',
      },
    },
    {
      title: { pt: '4. Com quem são compartilhados', en: '4. Who it is shared with' },
      text: {
        pt: 'Os dados do formulário passam por uma ferramenta de automação (n8n) que os entrega por e-mail e mensagem. Não são vendidos nem compartilhados para outras finalidades. Google e Microsoft recebem dados de navegação apenas se você aceitar os cookies correspondentes.',
        en: 'Form data goes through an automation tool (n8n) that delivers it by email and message. It is never sold or shared for other purposes. Google and Microsoft receive browsing data only if you accept the corresponding cookies.',
      },
    },
    {
      title: { pt: '5. Por quanto tempo são guardados', en: '5. How long it is kept' },
      text: {
        pt: 'Pelo tempo necessário para tratar o seu pedido e, se houver contrato, pelo prazo exigido por lei. Você pode pedir a exclusão a qualquer momento.',
        en: 'For as long as needed to handle your request and, if there is a contract, for the period required by law. You can ask for deletion at any time.',
      },
    },
    {
      title: { pt: '6. Cookies e armazenamento local', en: '6. Cookies and local storage' },
      text: {
        pt: 'Essenciais (sempre ativos): tema claro/escuro, sua escolha de cookies e o rascunho do formulário. Análise (opcional): Google Analytics e Microsoft Clarity. Marketing (opcional): anúncios do Google AdSense no blog.',
        en: 'Essential (always on): light/dark theme, your cookie choice and the form draft. Analytics (optional): Google Analytics and Microsoft Clarity. Marketing (optional): Google AdSense ads on the blog.',
      },
    },
    {
      title: { pt: '7. Seus direitos', en: '7. Your rights' },
      text: {
        pt: 'Você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados e revogar consentimentos, escrevendo para devrafaelnunes@gmail.com.',
        en: 'You can request access, correction, portability or deletion of your data and withdraw consent by writing to devrafaelnunes@gmail.com.',
      },
    },
    {
      title: { pt: '8. Segurança', en: '8. Security' },
      text: {
        pt: 'O site é servido via HTTPS e os dados do formulário trafegam criptografados. O acesso às ferramentas que recebem os pedidos é restrito.',
        en: 'The site is served over HTTPS and form data travels encrypted. Access to the tools that receive requests is restricted.',
      },
    },
    {
      title: { pt: '9. Alterações', en: '9. Changes' },
      text: {
        pt: 'Esta política pode ser atualizada. A data da última atualização fica no topo da página.',
        en: 'This policy may be updated. The date of the last update is shown at the top of the page.',
      },
    },
  ] as { title: L; text: L }[],
  reopen: { pt: 'Alterar preferências de cookies', en: 'Change cookie preferences' },
  seoTitle: { pt: 'Política de privacidade e cookies', en: 'Privacy and cookie policy' },
  seoDescription: {
    pt: 'Como o site de Rafael Nunes trata os seus dados: formulário de contato, cookies de análise e de anúncios, seus direitos pela LGPD.',
    en: 'How Rafael Nunes’ website handles your data: contact form, analytics and ad cookies, and your rights.',
  },
};
