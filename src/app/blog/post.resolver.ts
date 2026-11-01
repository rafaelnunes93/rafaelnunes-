import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import type { Post } from '../data/blog-types';
import { POST_LOADERS } from '../generated/post-loaders';

// Carrega o módulo do post (gerado no build) antes de renderizar a página.
export const postResolver: ResolveFn<Post> = async (route) => {
  const loader = POST_LOADERS[route.paramMap.get('slug') ?? ''];
  if (!loader) {
    const router = inject(Router);
    return new RedirectCommand(router.parseUrl('/404'), { skipLocationChange: true });
  }
  return (await loader()).post;
};
