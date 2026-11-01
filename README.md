# Rafael Nunes — site profissional

Portfólio e site de serviços de Rafael Nunes (desenvolvedor full stack .NET). Angular 19 com pré-renderização estática, publicado na Cloudflare Pages em <https://devrafaelnunes.com.br/>.

- Português na raiz (`/`) e inglês espelhado em `/en/` (hreflang pt-BR/en em todas as páginas).
- Blog em Markdown, pronto para receber posts automáticos do **n8n**.
- Formulário de contato em 3 etapas que envia para um **webhook do n8n**.
- SEO/GEO: JSON-LD, sitemap com hreflang, RSS, `llms.txt`, `robots.txt` liberando bots de IA.
- Analytics (GA4/Clarity) e anúncios (AdSense, só no blog) carregam **apenas após consentimento** (LGPD).

## Pendências

- **n8n ainda não contratado.** `SITE.leadWebhook` está vazio, e o formulário oferece o envio do resumo pelo WhatsApp. O passo de aviso ao n8n foi retirado do workflow. Para ativar, siga as seções "n8n" abaixo e volte a adicionar o passo no `deploy.yml`.
- **Domínio:** `devrafaelnunes.com.br`, registrado no Registro.br, com DNS e hospedagem na Cloudflare (plano gratuito). Para trocar, atualize `SITE.url` em `src/app/data/site.ts`.
- IDs ainda vazios: GA4, Clarity, AdSense e IndexNow (`src/app/data/site.ts`).

## Comandos

| Comando | O que faz |
|---|---|
| `npm start` | Servidor de desenvolvimento (gera o conteúdo do blog antes) |
| `npm run build` | Build de produção + pré-renderização + arquivos de SEO (`postbuild`) |
| `npm run check` | Checagem de tipos do TypeScript |
| `npm run validate:posts` | Valida todos os posts (o CI roda antes de publicar) |
| `npm run deploy` | Build + publicação manual no GitHub Pages |

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Contatos, redes, números, IDs (GA4, Clarity, AdSense, IndexNow, webhook) | `src/app/data/site.ts` |
| Serviços (páginas `/servicos/...`) | `src/app/data/services.ts` |
| Projetos/cases (páginas `/cases/...`) | `src/app/data/cases.ts` |
| Textos da home (hero, dores, processo, comparação, FAQ, contato) | `src/app/data/home.ts` |
| Sobre, fatos oficiais e privacidade | `src/app/data/institutional.ts` |
| Categorias do blog (nome, cor da capa, CTA) | `src/app/data/categorias.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Experiência e formação (seção Experience) e textos legados | `src/app/services/translation.service.ts` |

Todo texto tem versão `pt` e `en`. As seções **Experience** e **Skills** são as do portfólio original e mantêm o visual escuro em qualquer tema.

## Blog

Cada post é um arquivo `src/content/blog/{slug}.md` com frontmatter validado por Zod (`scripts/content/post-schema.ts`):

```md
---
title: "Título com 10 a 90 caracteres"
description: "Resumo de 50 a 170 caracteres (meta description e card)."
pubDate: 2026-11-03T09:00:00-03:00
category: apis-e-integracoes        # um slug de src/app/data/categorias.ts
tags: ["api", "integração"]
quickAnswer: "Resposta de 80 a 600 caracteres exibida no topo (GEO)."
faq:
  - q: "Pergunta?"
    a: "Resposta."
relatedServices: ["apis-e-integracoes"]   # slugs de src/app/data/service-slugs.ts
draft: false
source: manual                       # ou n8n
---

## Primeira seção
...
```

Regras do `validate:posts`: slug em kebab-case (até 80 caracteres), categoria existente, corpo com 600+ palavras e 3+ seções `##` (exceto rascunhos), nenhum `#` (H1) no corpo, nenhum placeholder, links externos só para domínios permitidos e links internos só para rotas que existem (use caminhos como `/servicos/landing-pages/` ou `/blog/outro-post/`).

- `draft: true` → não aparece em lugar nenhum.
- `pubDate` no futuro → aparece no primeiro build depois da data (o workflow roda todo dia às 08:05).
- Sem `cover` → a capa é gerada em SVG com as cores da categoria.

## Publicação automática (GitHub Actions)

`.github/workflows/deploy.yml` roda a cada push na `master`, todo dia às 08:05 (BRT) e manualmente:

1. `npm ci` → `npm run validate:posts` → `npm run build`
2. publica `dist/rafaelnunes-/browser` na branch `cf-pages`, servida pela Cloudflare Pages
3. avisa o IndexNow e o webhook do n8n (se os segredos existirem)

Em pull requests que mexem em `src/content/blog/**` ele só valida e gera o build (não publica).

> A branch `gh-pages` guarda só os redirecionamentos do endereço antigo (`rafaelnunes93.github.io/rafaelnunes-`) para o domínio novo.

### Segredos do repositório (Settings → Secrets and variables → Actions)

| Segredo | Para quê | Obrigatório |
|---|---|---|
| `INDEXNOW_KEY` | Ping do IndexNow após o deploy (use o mesmo valor em `SITE.indexNowKey`) | Não |
| `N8N_DEPLOY_WEBHOOK` | URL de um webhook do n8n que recebe `{ status, sha, event }` ao fim do deploy | Não |

## n8n — workflow "Blog: gerar e publicar post"

O n8n publica um post **criando um arquivo `.md` no GitHub**; o workflow acima faz o resto. Detalhes completos em `portfolio-spec/portfolio-spec/06-blog-automatico-n8n.md`.

1. **Schedule Trigger** (ex.: seg/qua/sex 08:00) + **Manual Trigger**.
2. **HTTP Request** `GET https://devrafaelnunes.com.br/blog-meta.json` → categorias, slugs existentes (inclusive rascunhos), posts e serviços.
3. **Google Sheets/Notion** → pega a próxima pauta `pendente` e marca como `gerando`.
4. **AI Agent (Claude/OpenAI)** → gera o JSON do post (`slug, title, description, category, tags, quickAnswer, faq, relatedServices, pubDate, draft, body_markdown`) com saída estruturada. Passe a lista de serviços e de posts do `blog-meta.json` para os links internos (use os campos `path`).
5. **Code** → valida tamanhos, normaliza o slug, recusa slug duplicado, monta o frontmatter com `source: n8n` e codifica em base64.
6. **IF modo**:
   - *revisão (recomendado no início)*: cria a branch `post/{slug}`, faz `PUT /repos/rafaelnunes93/rafaelnunes-/contents/src/content/blog/{slug}.md` nessa branch e abre um PR. O CI valida; você faz o merge para publicar.
   - *automático*: o mesmo `PUT` direto na `master`.
7. **Sheets/Notion** → `status = publicado` (ou `em revisão`) e a URL.
8. **Telegram/WhatsApp/Gmail** → aviso do novo post.

**Token do GitHub para o n8n:** crie um *fine-grained personal access token* em GitHub → Settings → Developer settings, limitado ao repositório `rafaelnunes-`, com **Contents: Read and write** e **Pull requests: Read and write**. Guarde-o como credencial do n8n, nunca no workflow em texto.

## n8n — workflow "Leads"

O formulário envia um `POST` em JSON para `SITE.leadWebhook` (em `src/app/data/site.ts`). Enquanto o campo estiver vazio, o formulário oferece o envio do resumo pelo WhatsApp.

Payload recebido:

```json
{
  "tipo": "sistema-web",
  "descricao": "…",
  "tamanho": "11-50",
  "prazo": "1-3-meses",
  "investimento": "",
  "nome": "…",
  "empresa": "…",
  "email": "…",
  "whatsapp": "(19) 99999-9999",
  "consentimento": true,
  "idioma": "pt",
  "origem": { "pagina": "/", "entrada": "/", "utm_source": "…" },
  "consentimentoEm": "2026-11-03T12:00:00.000Z",
  "elapsedMs": 48210
}
```

Workflow sugerido: **Webhook** (POST; em *Options → Allowed Origins (CORS)* informe `https://devrafaelnunes.com.br`) → **Code** (descarta `elapsedMs < 3000`, normaliza campos) → **Google Sheets "Leads"** (append) → **WhatsApp/Telegram** para você → **Gmail** de confirmação para o lead → **Respond to Webhook** `{ "ok": true }` com status 200.

Como o site é estático, o endereço do webhook fica visível no navegador. As proteções são o honeypot e o tempo mínimo no front, mais a filtragem no próprio n8n (por exemplo, limitar por IP ou validar os campos de novo).

## Analytics e anúncios

Preencha em `src/app/data/site.ts`:

- `analytics.ga4` (ex.: `G-XXXXXXX`) e/ou `analytics.clarity`.
- `adsense.client` (`ca-pub-…`) e os IDs dos blocos em `adsense.slots` (`blogList`, `postInArticle`, `postSidebar`). Com o `client` preenchido, o build gera o `ads.txt`.

Nada carrega antes do consentimento: GA4/Clarity dependem de "Análise" e o AdSense de "Marketing" no banner de cookies.

