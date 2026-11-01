import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnDestroy, PLATFORM_ID, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { PERSON_ID, SeoService, WEBSITE_ID, absoluteAsset, absoluteUrl } from '../../core/seo.service';
import type { Post } from '../../data/blog-types';
import { BLOG_UI } from '../../data/blog-ui';
import { getCategory } from '../../data/categorias';
import { CRUMB_HOME } from '../../data/pages';
import { SERVICES } from '../../data/services';
import { SITE, whatsappLink } from '../../data/site';
import { POSTS } from '../../generated/blog-index';
import { TranslationService } from '../../services/translation.service';
import { AdSlotComponent } from '../../blog/ad-slot.component';
import { AccordionComponent, faqJsonLd } from '../../shared/accordion.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { PostCardComponent, formatDatePt } from '../../shared/post-card.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, AccordionComponent, PostCardComponent, AdSlotComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent implements OnDestroy {
  readonly tr = inject(TranslationService);
  readonly t = BLOG_UI;
  readonly site = SITE;
  readonly post: Post = inject(ActivatedRoute).snapshot.data['post'];
  readonly category = getCategory(this.post.category);
  readonly adSlots = SITE.adsense.slots;

  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly body = viewChild<ElementRef<HTMLElement>>('body');
  private observer?: IntersectionObserver;

  readonly activeHeading = signal('');
  readonly copied = signal(false);
  readonly canShare = signal(false);

  readonly url = absoluteUrl(pagePath('blog', 'pt', this.post.slug));
  readonly published = formatDatePt(this.post.pubDate);
  readonly updated = this.post.updatedDate ? formatDatePt(this.post.updatedDate) : '';
  readonly crumbs: Crumb[] = [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', 'pt') },
    { label: this.tr.pick(BLOG_UI.crumb), path: pagePath('blog', 'pt') },
    { label: this.post.title, path: pagePath('blog', 'pt', this.post.slug) },
  ];
  readonly services = SERVICES.filter((s) => this.post.relatedServices.includes(s.slug)).map((s) => ({
    icon: s.icon,
    label: s.shortTitle.pt,
    path: pagePath('services', 'pt', s.slug),
  }));
  readonly related = POSTS.filter((p) => p.slug !== this.post.slug)
    .map((p) => ({ p, score: (p.category === this.post.category ? 2 : 0) + p.tags.filter((t) => this.post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.p);
  readonly whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${this.post.title} ${this.url}`)}`;
  readonly linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url)}`;
  readonly whatsappCta = whatsappLink('pt', `Olá, Rafael! Li o artigo "${this.post.title}" e quero conversar sobre o meu projeto.`);
  readonly contact = computed(() => ({ path: pagePath('home', 'pt'), fragment: HOME_ANCHORS.contact.pt }));
  readonly aboutPath = pagePath('about', 'pt');

  constructor() {
    const p = this.post;
    inject(SeoService).set({
      title: p.seoTitle ?? p.title,
      description: p.description,
      path: pagePath('blog', 'pt', p.slug),
      alternates: { pt: pagePath('blog', 'pt', p.slug) },
      type: 'article',
      image: p.cover,
      article: { publishedTime: p.pubDate, modifiedTime: p.updatedDate, section: this.category.name, tags: p.tags },
      jsonLd: [
        {
          '@type': 'BlogPosting',
          '@id': `${this.url}#article`,
          headline: p.title,
          description: p.description,
          datePublished: p.pubDate,
          dateModified: p.updatedDate ?? p.pubDate,
          author: { '@id': PERSON_ID },
          publisher: { '@id': PERSON_ID },
          image: absoluteAsset(p.cover ?? 'og/default.png'),
          mainEntityOfPage: this.url,
          articleSection: this.category.name,
          keywords: p.tags.join(', '),
          wordCount: p.wordCount,
          inLanguage: 'pt-BR',
          isPartOf: { '@id': WEBSITE_ID },
        },
        breadcrumbJsonLd(this.crumbs),
        ...(p.faq.length ? [faqJsonLd(p.faq)] : []),
      ],
    });

    if (!this.isBrowser) return;
    afterNextRender(() => {
      this.canShare.set(typeof navigator.share === 'function');
      this.watchHeadings();
    });
  }

  async copyLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.url);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // sem acesso à área de transferência
    }
  }

  async share(): Promise<void> {
    try {
      await navigator.share({ title: this.post.title, text: this.post.description, url: this.url });
    } catch {
      // usuário cancelou
    }
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    this.doc.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `${location.pathname}#${id}`);
  }

  /** Scroll-spy: marca no sumário o H2 visível. */
  private watchHeadings(): void {
    const root = this.body()?.nativeElement;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const headings = Array.from(root.querySelectorAll<HTMLElement>('h2[id]'));
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) this.activeHeading.set(visible[0].target.id);
      },
      { rootMargin: '-90px 0px -65% 0px' },
    );
    headings.forEach((h) => this.observer!.observe(h));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
