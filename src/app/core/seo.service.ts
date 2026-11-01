import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../data/site';
import { Lang, TranslationService } from '../services/translation.service';

export interface SeoConfig {
  title: string;
  description: string;
  /** Caminho da página no app, ex.: `/servicos/landing-pages`. */
  path: string;
  /** Caminhos equivalentes em cada idioma (hreflang). Ausente = página só existe neste idioma. */
  alternates?: Partial<Record<Lang, string>>;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
  article?: { publishedTime: string; modifiedTime?: string; section?: string; tags?: string[] };
  /** Nós extras do @graph do JSON-LD desta página. */
  jsonLd?: Record<string, unknown>[];
}

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const SERVICE_ID = `${SITE.url}/#service`;

/** URL absoluta com barra final (o GitHub Pages serve as páginas como pastas). */
export function absoluteUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${SITE.url}/${clean ? clean + '/' : ''}`;
}

export function absoluteAsset(path: string): string {
  return /^https?:/.test(path) ? path : `${SITE.url}/${path.replace(/^\/+/, '')}`;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly tr = inject(TranslationService);

  /** Caminhos equivalentes da página atual, usados pelo seletor de idioma. */
  readonly alternates = signal<Partial<Record<Lang, string>>>({ pt: '/', en: '/en' });

  set(config: SeoConfig): void {
    const lang = this.tr.currentLang();
    const fullTitle = config.path === '/' || config.path === '/en' ? config.title : `${config.title} | ${SITE.name}`;
    const url = absoluteUrl(config.path);
    const image = absoluteAsset(config.image ?? 'og/default.png');
    const alternates = config.alternates ?? { [lang]: config.path };
    this.alternates.set(alternates);

    this.doc.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    this.title.setTitle(fullTitle);

    this.setName('description', config.description);
    this.setName('robots', config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    this.setName('author', SITE.fullName);
    this.setName('geo.region', SITE.region);
    this.setName('geo.placename', SITE.city);
    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', fullTitle);
    this.setName('twitter:description', config.description);
    this.setName('twitter:image', image);

    this.setProp('og:type', config.type ?? 'website');
    this.setProp('og:locale', lang === 'en' ? 'en_US' : 'pt_BR');
    this.setProp('og:site_name', SITE.name);
    this.setProp('og:url', url);
    this.setProp('og:title', fullTitle);
    this.setProp('og:description', config.description);
    this.setProp('og:image', image);
    this.setProp('og:image:width', '1200');
    this.setProp('og:image:height', '630');
    this.setProp('og:image:alt', fullTitle);

    for (const p of ['article:published_time', 'article:modified_time', 'article:author', 'article:section']) {
      this.meta.removeTag(`property="${p}"`);
    }
    if (config.article) {
      this.setProp('article:published_time', config.article.publishedTime);
      this.setProp('article:modified_time', config.article.modifiedTime ?? config.article.publishedTime);
      this.setProp('article:author', SITE.fullName);
      if (config.article.section) this.setProp('article:section', config.article.section);
    }

    this.setLinks(url, alternates);
    this.setJsonLd(config, url, fullTitle, lang);
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProp(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setLinks(canonical: string, alternates: Partial<Record<Lang, string>>): void {
    const head = this.doc.head;
    head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    const add = (attrs: Record<string, string>) => {
      const link = this.doc.createElement('link');
      Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
      head.appendChild(link);
    };

    add({ rel: 'canonical', href: canonical });
    if (alternates.pt) add({ rel: 'alternate', hreflang: 'pt-BR', href: absoluteUrl(alternates.pt) });
    if (alternates.en) add({ rel: 'alternate', hreflang: 'en', href: absoluteUrl(alternates.en) });
    const fallback = alternates.pt ?? alternates.en;
    if (fallback) add({ rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(fallback) });
  }

  private setJsonLd(config: SeoConfig, url: string, fullTitle: string, lang: Lang): void {
    const inLanguage = lang === 'en' ? 'en' : 'pt-BR';
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.fullName,
        alternateName: SITE.name,
        jobTitle: lang === 'en' ? 'Full Stack Developer (.NET)' : 'Desenvolvedor Full Stack (.NET)',
        url: absoluteUrl('/'),
        image: absoluteAsset(SITE.photo),
        email: `mailto:${SITE.email}`,
        telephone: `+${SITE.whatsapp}`,
        address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.state, addressCountry: SITE.country },
        knowsAbout: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Angular', 'TypeScript', 'Flutter', 'React Native', 'Unity', 'APIs REST', 'TMS', 'EDI', 'Clean Architecture', lang === 'en' ? 'AI-assisted software development' : 'Desenvolvimento com inteligência artificial', 'LLMs'],
        sameAs: [SITE.social.linkedin, SITE.social.github],
      },
      {
        '@type': 'ProfessionalService',
        '@id': SERVICE_ID,
        name: `${SITE.name} — ${lang === 'en' ? 'Software development' : 'Desenvolvimento de software'}`,
        url: absoluteUrl('/'),
        image: absoluteAsset(SITE.photo),
        areaServed: 'BR',
        address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.state, addressCountry: SITE.country },
        founder: { '@id': PERSON_ID },
        email: SITE.email,
        telephone: `+${SITE.whatsapp}`,
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: absoluteUrl('/'),
        name: SITE.name,
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': PERSON_ID },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: fullTitle,
        description: config.description,
        inLanguage,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
      },
      ...(config.jsonLd ?? []),
    ];

    let script = this.doc.head.querySelector<HTMLScriptElement>('script#ld-json');
    if (!script) {
      script = this.doc.createElement('script');
      script.id = 'ld-json';
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }
}
