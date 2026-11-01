// Lê src/content/blog/*.md, valida o frontmatter e converte o corpo em HTML.
// Compartilhado por build-content, validate-posts e postbuild.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { postSchema, type PostFrontmatter } from './post-schema';
import { SITE } from '../../src/app/data/site';
import type { Post, PostHeading } from '../../src/app/data/blog-types';

export const BLOG_DIR = join(process.cwd(), 'src', 'content', 'blog');

export interface LoadedPost {
  file: string;
  slug: string;
  data: PostFrontmatter;
  body: string;
  post: Post;
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export function countWords(markdown: string): number {
  return markdown.split(/\s+/).filter(Boolean).length;
}

function renderMarkdown(body: string): { html: string; headings: PostHeading[] } {
  const headings: PostHeading[] = [];
  const used = new Set<string>();
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        let id = slugify(text) || 'secao';
        while (used.has(id)) id += '-2';
        used.add(id);
        if (depth === 2) headings.push({ id, text: text.replace(/[*_`]/g, '') });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        // Links internos "/blog/x" precisam do caminho base do GitHub Pages.
        const url = !external && href.startsWith('/') ? SITE.basePath + href.replace(/^\//, '') : href;
        const t = title ? ` title="${title}"` : '';
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${url}"${t}${rel}>${inner}</a>`;
      },
    },
  });
  const html = marked.parse(body, { async: false }) as string;
  return { html, headings };
}

/** Converte cada `.md` em LoadedPost. Lança erro com todos os problemas de schema encontrados. */
export function loadAllPosts(): LoadedPost[] {
  if (!existsSync(BLOG_DIR)) return [];
  const files = readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f)).sort();
  const errors: string[] = [];
  const posts: LoadedPost[] = [];

  for (const file of files) {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const parsed = postSchema.safeParse(data);
    if (!parsed.success) {
      const issues = parsed.error.issues.map((i) => `${i.path.join('.') || '(raiz)'}: ${i.message}`);
      errors.push(`${file}\n  - ${issues.join('\n  - ')}`);
      continue;
    }
    const fm = parsed.data;
    const slug = basename(file).replace(/\.mdx?$/, '');
    const body = content.trim();
    const wordCount = countWords(body);
    const { html, headings } = renderMarkdown(body);

    posts.push({
      file,
      slug,
      data: fm,
      body,
      post: {
        slug,
        title: fm.title,
        description: fm.description,
        pubDate: fm.pubDate.toISOString(),
        ...(fm.updatedDate ? { updatedDate: fm.updatedDate.toISOString() } : {}),
        category: fm.category,
        tags: fm.tags,
        relatedServices: fm.relatedServices,
        readingTime: Math.max(1, Math.ceil(wordCount / 200)),
        wordCount,
        source: fm.source,
        author: fm.author,
        ...(fm.seoTitle ? { seoTitle: fm.seoTitle } : {}),
        ...(fm.canonical ? { canonical: fm.canonical } : {}),
        ...(fm.cover ? { cover: fm.cover } : {}),
        ...(fm.coverAlt ? { coverAlt: fm.coverAlt } : {}),
        quickAnswer: fm.quickAnswer,
        faq: fm.faq,
        headings,
        html,
      },
    });
  }

  if (errors.length) {
    throw new Error(`Frontmatter inválido em ${errors.length} post(s):\n${errors.join('\n')}`);
  }
  return posts;
}

/** Rascunhos e posts com data futura não são publicados (agendamento via build diário). */
export function isPublished(p: LoadedPost, now = new Date()): boolean {
  return !p.data.draft && p.data.pubDate <= now;
}

export function getPublishedPosts(now = new Date()): LoadedPost[] {
  return loadAllPosts()
    .filter((p) => isPublished(p, now))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
