import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { BLOG_UI } from '../../data/blog-ui';
import { CATEGORIES } from '../../data/categorias';
import { CRUMB_HOME } from '../../data/pages';
import { SITE } from '../../data/site';
import { POSTS } from '../../generated/blog-index';
import { TranslationService } from '../../services/translation.service';
import { AdSlotComponent } from '../../blog/ad-slot.component';
import { BreadcrumbsComponent, Crumb, breadcrumbJsonLd } from '../../shared/breadcrumbs.component';
import { PostCardComponent } from '../../shared/post-card.component';

const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// /blog e /blog/pagina/:page. A busca e o filtro rodam no navegador sobre o índice de todos os posts
// (funciona em qualquer página da paginação) e o estado vai para a query string (?categoria=&q=).
@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent, PostCardComponent, AdSlotComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
  readonly tr = inject(TranslationService);
  readonly t = BLOG_UI;
  readonly categories = CATEGORIES;
  readonly adSlot = SITE.adsense.slots.blogList;
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private debounce: ReturnType<typeof setTimeout> | null = null;

  readonly page: number;
  readonly totalPages = Math.max(1, Math.ceil(POSTS.length / SITE.postsPerPage));
  readonly query = signal('');
  readonly category = signal('');

  readonly filtering = computed(() => !!this.query().trim() || !!this.category());
  readonly results = computed(() => {
    if (!this.filtering()) {
      const start = (this.page - 1) * SITE.postsPerPage;
      return POSTS.slice(start, start + SITE.postsPerPage);
    }
    const q = normalize(this.query().trim());
    return POSTS.filter((p) => {
      if (this.category() && p.category !== this.category()) return false;
      if (!q) return true;
      return normalize(`${p.title} ${p.description} ${p.tags.join(' ')}`).includes(q);
    });
  });
  readonly foundText = computed(() => this.tr.pick(BLOG_UI.found).replace('{n}', String(this.results().length)));
  readonly pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  readonly crumbs: Crumb[] = [
    { label: this.tr.pick(CRUMB_HOME), path: pagePath('home', 'pt') },
    { label: this.tr.pick(BLOG_UI.crumb), path: pagePath('blog', 'pt') },
  ];
  readonly hasPosts = POSTS.length > 0;

  constructor() {
    const route = inject(ActivatedRoute);
    this.page = Math.min(this.totalPages, Math.max(1, Number(route.snapshot.paramMap.get('page') ?? 1) || 1));
    if (this.isBrowser) {
      const qp = route.snapshot.queryParamMap;
      this.query.set(qp.get('q') ?? '');
      this.category.set(qp.get('categoria') ?? '');
    }

    const path = this.page > 1 ? pagePath('blog', 'pt', 'pagina', this.page) : pagePath('blog', 'pt');
    inject(SeoService).set({
      title: this.tr.pick(BLOG_UI.seoTitle) + (this.page > 1 ? ` — ${this.tr.pick(BLOG_UI.page)} ${this.page}` : ''),
      description: this.tr.pick(BLOG_UI.seoDescription),
      path,
      alternates: { pt: path },
      jsonLd: [
        breadcrumbJsonLd(this.crumbs),
        { '@type': 'Blog', name: `Blog — ${SITE.name}`, inLanguage: 'pt-BR', url: `${SITE.url}/blog/` },
      ],
    });
  }

  pageLink(n: number): string {
    return n === 1 ? pagePath('blog', 'pt') : pagePath('blog', 'pt', 'pagina', n);
  }

  onSearch(value: string): void {
    this.query.set(value);
    if (this.debounce) clearTimeout(this.debounce);
    this.debounce = setTimeout(() => this.syncUrl(), 150);
  }

  clearSearch(): void {
    this.query.set('');
    this.syncUrl();
  }

  setCategory(slug: string): void {
    this.category.set(slug);
    this.syncUrl();
  }

  private syncUrl(): void {
    const queryParams: Record<string, string | null> = {
      q: this.query().trim() || null,
      categoria: this.category() || null,
    };
    this.router.navigate([], { queryParams, replaceUrl: true, queryParamsHandling: 'merge' });
  }
}
