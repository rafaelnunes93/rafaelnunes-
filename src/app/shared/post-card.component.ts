import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pagePath } from '../core/paths';
import type { PostMeta } from '../data/blog-types';
import { BLOG_UI } from '../data/blog-ui';
import { TranslationService } from '../services/translation.service';
import { PostCoverComponent } from './post-cover.component';

export function formatDatePt(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo' });
}

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, PostCoverComponent],
  template: `
    <article class="ui-card ui-card--hover card">
      <app-post-cover [category]="post().category" [seed]="post().slug" [image]="post().cover" [alt]="post().coverAlt" />
      <div class="body">
        <h3><a [routerLink]="link()">{{ post().title }}</a></h3>
        <p>{{ post().description }}</p>
        <footer>
          <time [attr.datetime]="post().pubDate">{{ date() }}</time>
          <span aria-hidden="true">·</span>
          <span><i class="fa-regular fa-clock" aria-hidden="true"></i> {{ post().readingTime }} {{ tr.pick(t.readingTime) }}</span>
        </footer>
      </div>
    </article>
  `,
  styles: `
    .card { padding: 0; overflow: hidden; display: flex; flex-direction: column; height: 100%; }
    .body { display: flex; flex-direction: column; flex: 1; padding: 20px; }
    h3 {
      font-size: 1.05rem; font-weight: 700; line-height: 1.35;
      a { color: var(--ink); &::after { content: ''; position: absolute; inset: 0; } }
      a:hover { color: var(--primary); }
    }
    p {
      margin-top: 8px; color: var(--muted); font-size: 0.88rem;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
    }
    footer { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 16px; color: var(--subtle); font-size: 0.78rem; }
  `,
})
export class PostCardComponent {
  readonly tr = inject(TranslationService);
  readonly t = BLOG_UI;
  readonly post = input.required<PostMeta>();
  readonly link = computed(() => pagePath('blog', 'pt', this.post().slug));
  readonly date = computed(() => formatDatePt(this.post().pubDate));
}
