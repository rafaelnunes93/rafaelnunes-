// Slugs dos serviços. Fica separado de services.ts para os scripts de build validarem
// `relatedServices` dos posts sem carregar todo o conteúdo.
export const SERVICE_SLUGS = [
  'desenvolvimento-full-stack',
  'aplicativos-mobile',
  'desenvolvimento-de-jogos',
  'saas-ponta-a-ponta',
  'apis-e-integracoes',
  'landing-pages',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
