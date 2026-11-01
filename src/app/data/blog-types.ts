// Tipos do conteúdo do blog gerado por scripts/build-content.ts.

export interface FaqItem {
  q: string;
  a: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  pubDate: string; // ISO
  updatedDate?: string; // ISO
  category: string;
  tags: string[];
  relatedServices: string[];
  readingTime: number;
  wordCount: number;
  source: 'manual' | 'n8n';
  author: string;
  seoTitle?: string;
  canonical?: string;
  cover?: string;
  coverAlt?: string;
}

export interface PostHeading {
  id: string;
  text: string;
}

export interface Post extends PostMeta {
  quickAnswer: string;
  faq: FaqItem[];
  headings: PostHeading[];
  html: string;
}
