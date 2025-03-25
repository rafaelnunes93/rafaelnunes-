
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6222, hash: 'b3c67303a7c46c908cc518232cce24bf2d79c09bcc4b43eba2d21c03c36f3713', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: 'bae34c1078041068e5082c464f4b623d21921dbe53f693cd596e55b1b6804841', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53215, hash: 'd36564d562dcfa08acbe2f6686274274f34a14218fa1b2271e6b7f3505a347a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RSRVAXG6.css': {size: 306052, hash: '2lfo1nq7c34', text: () => import('./assets-chunks/styles-RSRVAXG6_css.mjs').then(m => m.default)}
  },
};
