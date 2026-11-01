// Valida todos os posts de src/content/blog. Sai com código 1 se algum falhar (bloqueia o deploy).
// Usado localmente (`npm run validate:posts`) e no CI antes de publicar posts gerados pelo n8n.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BLOG_DIR, countWords, loadAllPosts, type LoadedPost } from './content/load-posts';
import { CASES } from '../src/app/data/cases';
import { SERVICE_SLUGS } from '../src/app/data/service-slugs';
import { PAGE_SEGMENTS } from '../src/app/core/paths';

// Domínios externos aceitos em links dos posts (fontes técnicas e oficiais).
const ALLOWED_DOMAINS = [
  'learn.microsoft.com',
  'devblogs.microsoft.com',
  'dotnet.microsoft.com',
  'angular.dev',
  'flutter.dev',
  'docs.flutter.dev',
  'unity.com',
  'docs.unity3d.com',
  'developer.mozilla.org',
  'github.com',
  'schema.org',
  'w3.org',
  'developers.google.com',
  'wikipedia.org',
  'gov.br',
  'rafaelnunes93.github.io',
  // Fontes de pesquisa, órgãos oficiais e documentação de ferramentas citadas nos posts
  'weforum.org',
  'ilo.org',
  'oecd.org',
  'microsoft.com',
  'support.microsoft.com',
  'news.microsoft.com',
  'blogs.microsoft.com',
  'google.com',
  'blog.google',
  'support.google.com',
  'workspace.google.com',
  'ai.google.dev',
  'grow.google',
  'openai.com',
  'help.openai.com',
  'platform.openai.com',
  'anthropic.com',
  'docs.anthropic.com',
  'support.anthropic.com',
  'coursera.org',
  'deeplearning.ai',
  'elementsofai.com',
  'cs50.harvard.edu',
  'linkedin.com',
  'zapier.com',
  'make.com',
  'n8n.io',
  'owasp.org',
  'nist.gov',
  'cert.br',
  'nic.br',
  'cetic.br',
  'safernet.org.br',
  'febraban.org.br',
  'bcb.gov.br',
  'haveibeenpwned.com',
  'bitwarden.com',
  '1password.com',
  'proton.me',
  'perplexity.ai',
  'notebooklm.google',
  'elevenlabs.io',
  'midjourney.com',
  'ideogram.ai',
  'copyright.gov',
  'cursor.com',
  'github.blog',
  'docs.github.com',
  'survey.stackoverflow.co',
  'stackoverflow.blog',
  'veracode.com',
  'notion.com',
  'clickup.com',
  'whatsapp.com',
  'faq.whatsapp.com',
  'business.whatsapp.com',
  'meta.com',
  'developers.facebook.com',
  'tecnoblog.net',
  'planalto.gov.br',
  'stf.jus.br',
  'apple.com',
  'support.apple.com',
  'android.com',
  'youtube.com',
  'creatorsupport.youtube.com',
  'canva.com',
  'capcut.com',
  'opus.pro',
  'descript.com',
  'runwayml.com',
  'adobe.com',
  'helpx.adobe.com',
  'sebrae.com.br',
  'ibge.gov.br',
  'mckinsey.com',
  'pewresearch.org',
  'metr.org',
  'arxiv.org',
  'iso.org',
  'c2pa.org',
  'fidoalliance.org',
  'ftc.gov',
  'europa.eu',
  'artificialintelligenceact.eu',
  'bubble.io',
  'lovable.dev',
  'bolt.new',
  'v0.dev',
  'vercel.com',
  'replit.com',
  'flutterflow.io',
  'glideapps.com',
  'softr.io',
  'wix.com',
  'framer.com',
  'python.org',
  'javascript.info',
  'go.dev',
  'rust-lang.org',
  'tiobe.com',
  'gartner.com',
  'statista.com',
  'shopify.com',
  'nuvemshop.com.br',
  'mercadolivre.com.br',
  'reclameaqui.com.br',
  'consumidor.gov.br',
  'agenciasebrae.com.br',
  'datasebrae.com.br',
  'em.com.br',
  'business.whatsapp.com',
];

const PLACEHOLDER = /\[PREENCHER\]|\blorem ipsum\b|\{\{|\}\}/i;

function validPaths(posts: LoadedPost[]): Set<string> {
  const paths = new Set<string>(['/', '/en']);
  for (const lang of ['pt', 'en'] as const) {
    const prefix = lang === 'en' ? '/en' : '';
    for (const key of Object.keys(PAGE_SEGMENTS) as (keyof typeof PAGE_SEGMENTS)[]) {
      const seg = PAGE_SEGMENTS[key][lang];
      if (seg) paths.add(`${prefix}/${seg}`);
    }
    SERVICE_SLUGS.forEach((s) => paths.add(`${prefix}/${PAGE_SEGMENTS.services[lang]}/${s}`));
    CASES.forEach((c) => paths.add(`${prefix}/${PAGE_SEGMENTS.cases[lang]}/${c.slug}`));
  }
  posts.filter((p) => !p.data.draft).forEach((p) => paths.add(`/blog/${p.slug}`));
  return paths;
}

function domainAllowed(host: string): boolean {
  return ALLOWED_DOMAINS.some((d) => host === d || host.endsWith(`.${d}`));
}

function main(): void {
  let posts: LoadedPost[];
  try {
    posts = loadAllPosts();
  } catch (e) {
    console.error(`✗ ${(e as Error).message}`);
    process.exit(1);
  }

  const paths = validPaths(posts);
  const seen = new Map<string, string>();
  const problems: string[] = [];

  for (const p of posts) {
    const errs: string[] = [];
    const raw = readFileSync(join(BLOG_DIR, p.file), 'utf8');

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) errs.push('slug do arquivo deve ser kebab-case, sem acentos');
    if (p.slug.length > 80) errs.push('slug com mais de 80 caracteres');
    const lower = p.slug.toLowerCase();
    if (seen.has(lower)) errs.push(`slug duplicado de ${seen.get(lower)}`);
    seen.set(lower, p.file);

    if (/^#\s/m.test(p.body)) errs.push('o corpo não pode ter H1 (o H1 é o title)');
    if (PLACEHOLDER.test(raw)) errs.push('contém placeholder ([PREENCHER], Lorem ipsum ou {{ }})');

    if (!p.data.draft) {
      const words = countWords(p.body);
      if (words < 600) errs.push(`corpo com ${words} palavras (mínimo 600)`);
      const h2 = (p.body.match(/^##\s/gm) ?? []).length;
      if (h2 < 3) errs.push(`apenas ${h2} seções H2 (mínimo 3)`);
    }

    for (const [, href] of p.body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      if (/^https?:\/\//.test(href)) {
        const host = new URL(href).hostname.replace(/^www\./, '');
        if (!domainAllowed(host)) errs.push(`link para domínio não permitido: ${host}`);
      } else if (href.startsWith('/')) {
        const path = href.split('#')[0].replace(/\/+$/, '') || '/';
        if (!paths.has(path)) errs.push(`link interno para rota inexistente: ${href}`);
      } else if (!href.startsWith('#') && !href.startsWith('mailto:')) {
        errs.push(`link relativo não suportado (use caminho absoluto): ${href}`);
      }
    }

    if (errs.length) problems.push(`${p.file}\n  - ${errs.join('\n  - ')}`);
  }

  if (problems.length) {
    console.error(`✗ ${problems.length} post(s) com problemas:\n${problems.join('\n')}`);
    process.exit(1);
  }
  console.log(`✓ ${posts.length} post(s) válidos.`);
}

main();
