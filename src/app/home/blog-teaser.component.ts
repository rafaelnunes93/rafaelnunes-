import { Component, inject } from '@angular/core';
import { pagePath } from '../core/paths';
import { SECTIONS } from '../data/home';
import { POSTS } from '../generated/blog-index';
import { TranslationService } from '../services/translation.service';
import { PostCardComponent } from '../shared/post-card.component';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeaderComponent } from '../shared/section-header.component';

// Últimos 3 posts (o blog é em português; na versão EN a seção avisa isso no título do link).
@Component({
  selector: 'app-blog-teaser',
  standalone: true,
  imports: [PostCardComponent, RevealDirective, SectionHeaderComponent],
  template: `
    @if (posts.length) {
      <section class="section section--tinted" id="blog">
        <div class="container-x">
          <app-section-header [eyebrow]="tr.pick(t.eyebrow)" [title]="tr.pick(t.title)" [linkLabel]="tr.pick(t.link)" [linkPath]="blogPath" />
          <div class="grid-3 hscroller">
            @for (p of posts; track p.slug; let i = $index) {
              <div [reveal]="i * 60"><app-post-card [post]="p" /></div>
            }
          </div>
        </div>
      </section>
    }
  `,
})
export class BlogTeaserComponent {
  readonly tr = inject(TranslationService);
  readonly t = SECTIONS.blog;
  readonly posts = POSTS.slice(0, 3);
  readonly blogPath = pagePath('blog', 'pt');
}
