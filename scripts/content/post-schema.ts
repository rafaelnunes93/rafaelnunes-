// Contrato do frontmatter dos posts (manuais e gerados pelo n8n).
// Não quebre compatibilidade: o workflow do n8n gera exatamente estes campos.
import { z } from 'zod';
import { CATEGORY_SLUGS } from '../../src/app/data/categorias';
import { SERVICE_SLUGS } from '../../src/app/data/service-slugs';

const faqItem = z.object({ q: z.string().min(5), a: z.string().min(10) });

export const postSchema = z.object({
  title: z.string().min(10).max(90),
  description: z.string().min(50).max(170),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(CATEGORY_SLUGS),
  tags: z.array(z.string()).max(8).default([]),
  quickAnswer: z.string().min(80).max(600),
  faq: z.array(faqItem).max(6).default([]),
  relatedServices: z.array(z.enum(SERVICE_SLUGS)).max(3).default([]),
  author: z.string().default('rafael-nunes'),
  cover: z.string().optional(), // caminho dentro de public/ ou src/assets; ausente => capa SVG gerada
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
  source: z.enum(['manual', 'n8n']).default('manual'),
  seoTitle: z.string().max(65).optional(),
  canonical: z.string().url().optional(),
});

export type PostFrontmatter = z.infer<typeof postSchema>;
