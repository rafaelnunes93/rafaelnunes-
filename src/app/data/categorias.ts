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
