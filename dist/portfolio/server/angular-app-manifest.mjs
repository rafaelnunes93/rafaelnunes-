
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rafaelnunes-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rafaelnunes-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6226, hash: 'bf0b7cadc7369762a3fbba961cd3e2f8815e8d31dc3ca27226e5e299484cb267', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1099, hash: 'b703b09b9d21be36f5c31bfd6a0a9b2782c297c7a00f55137dacfc73c05667ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53011, hash: '9e2444e45106b27d29b7242f59afcd85f16abb5bc44050fd752ecd79a6055685', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RSRVAXG6.css': {size: 306052, hash: '2lfo1nq7c34', text: () => import('./assets-chunks/styles-RSRVAXG6_css.mjs').then(m => m.default)}
  },
};
