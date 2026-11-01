// Roda depois de `ng build`: gera os arquivos estáticos de SEO/GEO e os de apoio ao GitHub Pages
// em dist/rafaelnunes-/browser (sitemap.xml, feed.xml, robots.txt, llms.txt, llms-full.txt,
// blog-meta.json, 404.html, .nojekyll, ads.txt e a chave do IndexNow).
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPublishedPosts, loadAllPosts } from './content/load-posts';
import { SITE } from '../src/app/data/site';
import { CATEGORIES, getCategory } from '../src/app/data/categorias';
import { SERVICES } from '../src/app/data/services';
import { CASES } from '../src/app/data/cases';
import { FAQ } from '../src/app/data/home';
import { ABOUT_PAGE, FACTS_PAGE } from '../src/app/data/institutional';
import { PAGE_SEGMENTS } from '../src/app/core/paths';

const DIST = join(process.cwd(), 'dist', 'rafaelnunes-');
const OUT = join(DIST, 'browser');
const BASE = SITE.basePath.replace(/\/$/, ''); // vazio quando o site fica na raiz do domínio
const now = new Date();

const url = (path: string) => {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${SITE.url}/${clean ? clean + '/' : ''}`;
};
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const write = (name: string, content: string) => writeFileSync(join(OUT, name), content, 'utf8');

const allPosts = loadAllPosts();
const posts = getPublishedPosts(now);

// ---------------------------------------------------------------------------
// Rotas pré-renderizadas (fonte da verdade para o sitemap)
// ---------------------------------------------------------------------------
const manifest = JSON.parse(readFileSync(join(DIST, 'prerendered-routes.json'), 'utf8'));
const routes: string[] = Object.keys(manifest.routes ?? manifest)
  .map((r) => r.replace(BASE, '') || '/')
  .filter((r) => !/(^|\/)404$/.test(r))
  .sort();

/** Caminho equivalente no outro idioma (ou null quando a página só existe em um). */
function counterpart(path: string): { pt?: string; en?: string } {
  const parts = path.split('/').filter(Boolean);
  const isEn = parts[0] === 'en';
  const rest = isEn ? parts.slice(1) : parts;
  if (!isEn && rest[0] === 'blog') return { pt: path };
  const from = isEn ? 'en' : 'pt';
  const to = isEn ? 'pt' : 'en';
  const key = (Object.keys(PAGE_SEGMENTS) as (keyof typeof PAGE_SEGMENTS)[]).find((k) => rest[0] !== undefined && PAGE_SEGMENTS[k][from] === rest[0]);
  const translated = rest.length === 0 ? [] : key ? [PAGE_SEGMENTS[key][to], ...rest.slice(1)] : null;
  if (translated === null) return { [from]: path };
  const other = '/' + [to === 'en' ? 'en' : '', ...translated].filter(Boolean).join('/');
  return isEn ? { en: path, pt: other } : { pt: path, en: other };
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------
const postLastmod = new Map(posts.map((p) => [`/blog/${p.slug}`, (p.data.updatedDate ?? p.data.pubDate).toISOString()]));
const sitemapEntries = routes.map((path) => {
  const alt = counterpart(path);
  const links =
    alt.pt && alt.en
      ? [
          `<xhtml:link rel="alternate" hreflang="pt-BR" href="${url(alt.pt)}"/>`,
          `<xhtml:link rel="alternate" hreflang="en" href="${url(alt.en)}"/>`,
          `<xhtml:link rel="alternate" hreflang="x-default" href="${url(alt.pt)}"/>`,
        ].join('')
      : '';
  const lastmod = postLastmod.get(path) ?? now.toISOString();
  return `<url><loc>${url(path)}</loc><lastmod>${lastmod}</lastmod>${links}</url>`;
});
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries.join('\n')}\n</urlset>\n`,
);

// ---------------------------------------------------------------------------
// feed.xml (RSS 2.0)
// ---------------------------------------------------------------------------
const feedItems = posts
  .map((p) => {
    const link = url(`/blog/${p.slug}`);
    const cats = [getCategory(p.data.category).name, ...p.data.tags].map((c) => `<category>${esc(c)}</category>`).join('');
    const updated = p.data.updatedDate ? `<atom:updated>${p.data.updatedDate.toISOString()}</atom:updated>` : '';
    return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${esc(p.data.description)}</description><pubDate>${p.data.pubDate.toUTCString()}</pubDate>${updated}${cats}<author>${SITE.email} (${esc(SITE.fullName)})</author></item>`;
  })
  .join('\n');
write(
  'feed.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n<title>Blog — ${esc(SITE.name)}</title>\n<link>${url('/blog')}</link>\n<description>Artigos sobre desenvolvimento de software, arquitetura .NET, integrações, logística e produto.</description>\n<language>pt-BR</language>\n<lastBuildDate>${now.toUTCString()}</lastBuildDate>\n<atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml"/>\n${feedItems}\n</channel>\n</rss>\n`,
);

// ---------------------------------------------------------------------------
// robots.txt — libera buscadores e bots de IA (GEO)
// ---------------------------------------------------------------------------
const bots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Amazonbot'];
write(
  'robots.txt',
  [`User-agent: *`, `Allow: /`, ``, ...bots.flatMap((b) => [`User-agent: ${b}`, `Allow: /`, ``]), `Sitemap: ${SITE.url}/sitemap.xml`, ``].join('\n'),
);

// ---------------------------------------------------------------------------
// llms.txt e llms-full.txt (padrão llmstxt.org)
// ---------------------------------------------------------------------------
const servicesMd = SERVICES.map((s) => `- [${s.title.pt}](${url(`/servicos/${s.slug}`)}): ${s.benefit.pt}`).join('\n');
const casesMd = CASES.map((c) => `- [${c.name} — ${c.type.pt}](${url(`/cases/${c.slug}`)}): ${c.lead.pt}`).join('\n');
const postsMd = posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.slug}`)}): ${p.data.description}`).join('\n');
const faqMd = FAQ.items.pt.map((f) => `- **${f.q}** ${f.a}`).join('\n');
const llms = `# ${SITE.fullName} — Desenvolvimento de software sob medida

> ${FACTS_PAGE.who.pt}

## Fatos
${FACTS_PAGE.facts.map((f) => `- ${f.k.pt}: ${f.v.pt}`).join('\n')}
- Site: ${SITE.url}/
- E-mail: ${SITE.email}
- LinkedIn: ${SITE.social.linkedin}
- GitHub: ${SITE.social.github}

## Produtos próprios
- [ClipNest Video Download](${url('/cases/clipnest')}): extensão para Chrome que detecta e baixa vídeos e streams HLS em MP4.

## Serviços
${servicesMd}

## Projetos
${casesMd}

## Experiência
${ABOUT_PAGE.story.pt.map((p) => `- ${p}`).join('\n')}

## Artigos
${postsMd || '- (nenhum artigo publicado ainda)'}

## Perguntas frequentes
${faqMd}

## Páginas
- [Início](${url('/')})
- [Serviços](${url('/servicos')})
- [Projetos](${url('/cases')})
- [Blog](${url('/blog')})
- [Sobre](${url('/sobre')})
- [Fatos oficiais](${url('/rafael-nunes')})
- [English](${url('/en')})

## Optional
- [Feed RSS](${SITE.url}/feed.xml)
- [Sitemap](${SITE.url}/sitemap.xml)
- [Versão completa para LLMs](${SITE.url}/llms-full.txt)
`;
write('llms.txt', llms);

const fullServices = SERVICES.map(
  (s) => `## ${s.title.pt}\n\n${s.definition.pt}\n\n**Para quem é:**\n${s.forWho.pt.map((x) => `- ${x}`).join('\n')}\n\n**O que dá para fazer:**\n${s.features.map((f) => `- ${f.text.pt}`).join('\n')}\n\n**Prazo:** ${s.timeline.pt}\n\n**Perguntas frequentes:**\n${s.faq.pt.map((f) => `- **${f.q}** ${f.a}`).join('\n')}\n`,
).join('\n');
const fullCases = CASES.map(
  (c) => `## ${c.name}: ${c.title.pt}\n\n${c.lead.pt}\n\n- Problema: ${c.problem.pt}\n- Solução: ${c.solution.pt}\n- Resultado: ${c.result.pt}\n- Papel: ${c.role.pt}\n- Tecnologias: ${c.tech.join(', ')}\n`,
).join('\n');
const fullPosts = posts
  .map((p) => `## ${p.data.title}\n\nURL: ${url(`/blog/${p.slug}`)}\nPublicado em: ${p.data.pubDate.toISOString().slice(0, 10)}\n\n**Resposta rápida:** ${p.data.quickAnswer}\n\n${p.body}\n`)
  .join('\n---\n\n');
write('llms-full.txt', `${llms}\n\n# Serviços em detalhe\n\n${fullServices}\n# Projetos em detalhe\n\n${fullCases}\n# Artigos completos\n\n${fullPosts}\n`);

// ---------------------------------------------------------------------------
// blog-meta.json — consumido pelo workflow do n8n (evita slugs/temas duplicados e links quebrados)
// ---------------------------------------------------------------------------
const tagCount = new Map<string, number>();
posts.forEach((p) => p.data.tags.forEach((t) => tagCount.set(t, (tagCount.get(t) ?? 0) + 1)));
write(
  'blog-meta.json',
  JSON.stringify(
    {
      generatedAt: now.toISOString(),
      site: SITE.url,
      categories: CATEGORIES.map((c) => ({ slug: c.slug, name: c.name })),
      // Todos os slugs existentes no repositório, inclusive rascunhos e agendados.
      slugs: allPosts.map((p) => p.slug),
      posts: posts.map((p) => ({
        slug: p.slug,
        title: p.data.title,
        category: p.data.category,
        url: url(`/blog/${p.slug}`),
        path: `/blog/${p.slug}/`,
        pubDate: p.data.pubDate.toISOString(),
      })),
      tags: [...tagCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30).map(([tag, count]) => ({ tag, count })),
      services: SERVICES.map((s) => ({ slug: s.slug, title: s.title.pt, url: url(`/servicos/${s.slug}`), path: `/servicos/${s.slug}/` })),
    },
    null,
    2,
  ),
);

// ---------------------------------------------------------------------------
// Arquivos de apoio ao GitHub Pages, AdSense e IndexNow
// ---------------------------------------------------------------------------
const notFound = join(OUT, '404', 'index.html');
if (existsSync(notFound)) copyFileSync(notFound, join(OUT, '404.html'));
write('.nojekyll', '');

const adsClient: string = SITE.adsense.client;
if (adsClient) write('ads.txt', `google.com, ${adsClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
const indexNowKey: string = SITE.indexNowKey;
if (indexNowKey) write(`${indexNowKey}.txt`, indexNowKey);

console.log(`postbuild: ${routes.length} URLs no sitemap, ${posts.length} posts no feed; llms.txt, blog-meta.json e 404.html gerados.`);
