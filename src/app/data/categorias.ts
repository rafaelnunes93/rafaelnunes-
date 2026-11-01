// Categorias do blog. Adicionar uma categoria = editar só este arquivo.
// O n8n lê esta lista via /blog-meta.json para escolher categorias válidas.

export interface BlogCategory {
  slug: string;
  name: string;
  gradient: readonly string[];
  cta: { title: string; text: string };
}

export const CATEGORIES = [
  {
    slug: 'sistemas-sob-medida',
    name: 'Sistemas sob medida',
    gradient: ['#047857', '#10b981'],
    cta: {
      title: 'Seu processo não cabe em sistema pronto?',
      text: 'Conte como a sua operação funciona hoje e eu indico o caminho mais simples para resolver.',
    },
  },
  {
    slug: 'arquitetura-e-backend',
    name: 'Arquitetura e backend',
    gradient: ['#0f766e', '#0891b2'],
    cta: {
      title: 'Sistema lento ou difícil de evoluir?',
      text: 'Avalio a arquitetura, o banco e as APIs e mostro onde está o gargalo.',
    },
  },
  {
    slug: 'apis-e-integracoes',
    name: 'APIs e integrações',
    gradient: ['#15803d', '#65a30d'],
    cta: {
      title: 'Sistemas que não conversam entre si?',
      text: 'Desenho a integração entre os seus sistemas, parceiros e serviços externos.',
    },
  },
  {
    slug: 'apps-e-saas',
    name: 'Apps e SaaS',
    gradient: ['#0e7490', '#4f46e5'],
    cta: {
      title: 'Tem uma ideia de app ou SaaS?',
      text: 'Vamos definir o menor produto que já entrega valor e colocá-lo no ar.',
    },
  },
  {
    slug: 'logistica-e-tms',
    name: 'Logística e TMS',
    gradient: ['#b45309', '#f59e0b'],
    cta: {
      title: 'Operação logística presa em planilhas?',
      text: 'Já desenvolvi TMS e EDI em produção. Vamos ver o que dá para automatizar na sua.',
    },
  },
  {
    slug: 'ia-no-trabalho',
    name: 'IA no trabalho e carreira',
    gradient: ['#4338ca', '#06b6d4'],
    cta: {
      title: 'Quer automatizar tarefas repetitivas da sua equipe?',
      text: 'Mostro onde a IA e a automação economizam horas por semana na sua operação, sem complicar.',
    },
  },
  {
    slug: 'ferramentas-de-ia',
    name: 'Ferramentas de IA',
    gradient: ['#7c3aed', '#ec4899'],
    cta: {
      title: 'Quer usar IA dentro do seu sistema?',
      text: 'Integro modelos como ChatGPT, Claude e Gemini aos sistemas que a sua empresa já usa.',
    },
  },
  {
    slug: 'ia-para-negocios',
    name: 'IA para negócios',
    gradient: ['#047857', '#0ea5e9'],
    cta: {
      title: 'Quer colocar IA para trabalhar no seu negócio?',
      text: 'Do atendimento à análise de dados: desenho uma solução do tamanho da sua empresa.',
    },
  },
  {
    slug: 'seguranca-digital',
    name: 'Segurança digital',
    gradient: ['#b91c1c', '#7c2d12'],
    cta: {
      title: 'Seu sistema protege bem os dados dos clientes?',
      text: 'Reviso autenticação, permissões e exposição de dados em sistemas web e APIs.',
    },
  },
  {
    slug: 'programacao-com-ia',
    name: 'Programação com IA',
    gradient: ['#0f766e', '#22c55e'],
    cta: {
      title: 'Precisa de um desenvolvedor que usa IA com responsabilidade?',
      text: 'Desenvolvo sistemas, APIs e apps usando IA no dia a dia, com revisão técnica e testes.',
    },
  },
  {
    slug: 'conteudo-com-ia',
    name: 'Conteúdo com IA',
    gradient: ['#c2410c', '#db2777'],
    cta: {
      title: 'Quer um site rápido para publicar o seu conteúdo?',
      text: 'Crio sites e blogs otimizados para o Google, prontos para crescer e monetizar.',
    },
  },
  {
    slug: 'custos-e-contratacao',
    name: 'Custos e contratação',
    gradient: ['#be123c', '#f97316'],
    cta: {
      title: 'Quer saber quanto custa o seu projeto?',
      text: 'Numa conversa rápida eu estimo escopo, prazo e faixa de investimento.',
    },
  },
] as const satisfies readonly BlogCategory[];

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string): BlogCategory {
  return CATEGORIES.find((c) => c.slug === slug) ?? CATEGORIES[0];
}
