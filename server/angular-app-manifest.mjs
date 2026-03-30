
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rafaelnunes-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rafaelnunes-"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6268, hash: '1b1d5fff2930d0c27dca3f04f6d306424d4fb114017ebebc547b5d89d459d8bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: 'e41d20f28b1ee4cecc8f138f338a0dc316af5bdeca51ba058235238d3b35a469', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57269, hash: '93e61c6b25ef6e97d4a440d76bac99141424dba3892a5923588a407a3daf4661', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WVWBVKHE.css': {size: 306118, hash: 'SpVnutX+82M', text: () => import('./assets-chunks/styles-WVWBVKHE_css.mjs').then(m => m.default)}
  },
};
