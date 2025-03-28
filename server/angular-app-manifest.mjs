
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
    'index.csr.html': {size: 6217, hash: '615d6975bbfcded21a06e0b4efdffeed93944f83c0e7fdaa160f5c97c3a1bf9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: '23ec9c496984005b0aa7cb29306c8dd11aaec72513ac4eef86ddbc1c570aa9de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54373, hash: '99c44c67c449ec7c842cbce29ad3a75d3e0eb08431b52e87fd0c3f100fbafbfd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I6UB6W5S.css': {size: 306052, hash: 'D3ZZZedbXOA', text: () => import('./assets-chunks/styles-I6UB6W5S_css.mjs').then(m => m.default)}
  },
};
