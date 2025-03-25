
export default {
  basePath: '/rafaelnunes-portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
