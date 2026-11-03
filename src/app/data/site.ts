// Fonte única dos dados da marca. Usado pelo app Angular e pelos scripts de build (sem imports do Angular).

export const SITE = {
  // URL pública sem barra final. Ao trocar de domínio, atualize também o --base-href do build (package.json).
  url: 'https://devrafaelnunes.com.br',
  basePath: '/',
  repo: { owner: 'rafaelnunes93', name: 'rafaelnunes-', branch: 'master' },

  name: 'Rafael Nunes',
  fullName: 'Rafael Nunes dos Santos',
  firstName: 'Rafael',
  lastName: 'Nunes',
  initials: 'RN',
  city: 'Paulínia',
  state: 'SP',
  region: 'BR-SP',
  country: 'BR',

  email: 'devrafaelnunes@gmail.com',
  whatsapp: '5519991856553',
  whatsappDisplay: '+55 (19) 99185-6553',
  whatsappMessage: {
    pt: 'Olá, Rafael! Vim pelo seu site e quero conversar sobre um projeto.',
    en: 'Hi Rafael! I found your website and would like to talk about a project.',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/rafaelnunesdossantos/',
    github: 'https://github.com/rafaelnunes93',
  },
  cv: 'assets/images/CVRafael.pdf',
  photo: 'assets/images/rafael.png',

  // Números exibidos nos contadores (os mesmos do portfólio anterior).
  stats: [
    { value: 5, suffix: '+', key: 'years' },
    { value: 10, suffix: '+', key: 'projects' },
    { value: 5, suffix: '+', key: 'companies' },
    { value: 1000, suffix: '+', key: 'coffee' },
  ],

  // Webhook do n8n que recebe os leads do formulário. Vazio = formulário cai no fallback de WhatsApp/e-mail.
  leadWebhook: '',

  analytics: { ga4: '', clarity: '' },
  // Google AdSense (anúncios no blog). Vazio = nenhum anúncio é exibido.
  // client: "ca-pub-XXXXXXXXXXXXXXXX"; slots: IDs dos blocos criados no painel do AdSense.
  adsense: {
    client: 'ca-pub-5886946314899205',
    slots: { blogList: '4154785196', postInArticle: '9876838983', postSidebar: '7059103950' },
  },
  indexNowKey: '',
  postsPerPage: 9,
} as const;

export type SiteLang = 'pt' | 'en';

export function whatsappLink(lang: SiteLang, message?: string): string {
  const text = message ?? SITE.whatsappMessage[lang];
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
