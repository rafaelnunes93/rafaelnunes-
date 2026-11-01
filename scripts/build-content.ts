// Gera src/app/generated/ a partir dos posts publicados. Roda antes de `ng build` e `ng serve`.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPublishedPosts } from './content/load-posts';
import type { PostMeta } from '../src/app/data/blog-types';

const OUT = join(process.cwd(), 'src', 'app', 'generated');
const POSTS_OUT = join(OUT, 'posts');

const posts = getPublishedPosts();

rmSync(OUT, { recursive: true, force: true });
mkdirSync(POSTS_OUT, { recursive: true });

const header = '// Arquivo gerado por scripts/build-content.ts. Não edite à mão.\n';

const index: PostMeta[] = posts.map(({ post }) => {
  const { quickAnswer, faq, headings, html, ...meta } = post;
  return meta;
});

for (const { slug, post } of posts) {
  writeFileSync(
    join(POSTS_OUT, `${slug}.ts`),
    `${header}import type { Post } from '../../data/blog-types';\n\nexport const post: Post = ${JSON.stringify(post, null, 2)};\n`,
  );
}

writeFileSync(
  join(OUT, 'blog-index.ts'),
  `${header}import type { PostMeta } from '../data/blog-types';\n\nexport const POSTS: PostMeta[] = ${JSON.stringify(index, null, 2)};\n`,
);

const loaders = posts.map(({ slug }) => `  ${JSON.stringify(slug)}: () => import('./posts/${slug}'),`).join('\n');
writeFileSync(
  join(OUT, 'post-loaders.ts'),
  `${header}import type { Post } from '../data/blog-types';\n\nexport const POST_LOADERS: Record<string, () => Promise<{ post: Post }>> = {\n${loaders}\n};\n`,
);

console.log(`build-content: ${posts.length} post(s) publicado(s) gerado(s) em src/app/generated/`);
