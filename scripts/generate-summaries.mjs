// Gera o "resumo visual" de cada post (PNG 1200×675) em public/blog/resumos/{slug}.png e insere a imagem
// no post, logo antes da primeira seção H2. A imagem lista os tópicos do próprio artigo, nas cores da categoria.
// Uso: node scripts/generate-summaries.mjs [--all]   (sem --all, pula imagens que já existem)
// Precisa do Google Chrome instalado. Não roda no CI.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import matter from 'gray-matter';

const ROOT = process.cwd();
const BLOG = join(ROOT, 'src', 'content', 'blog');
const OUT = join(ROOT, 'public', 'blog', 'resumos');
const all = process.argv.includes('--all');
const SKIP = /^(conclus[aã]o|resumo|minha vis[aã]o|veredito)$/i;

const CATS = {
  'sistemas-sob-medida': ['#047857', '#10b981', 'Sistemas sob medida'],
  'arquitetura-e-backend': ['#0f766e', '#0891b2', 'Arquitetura e backend'],
  'apis-e-integracoes': ['#15803d', '#65a30d', 'APIs e integrações'],
  'apps-e-saas': ['#0e7490', '#4f46e5', 'Apps e SaaS'],
  'logistica-e-tms': ['#b45309', '#f59e0b', 'Logística e TMS'],
  'custos-e-contratacao': ['#be123c', '#f97316', 'Custos e contratação'],
  'ia-no-trabalho': ['#4338ca', '#06b6d4', 'IA no trabalho e carreira'],
  'ferramentas-de-ia': ['#7c3aed', '#ec4899', 'Ferramentas de IA'],
  'ia-para-negocios': ['#047857', '#0ea5e9', 'IA para negócios'],
  'seguranca-digital': ['#b91c1c', '#7c2d12', 'Segurança digital'],
  'programacao-com-ia': ['#0f766e', '#22c55e', 'Programação com IA'],
  'conteudo-com-ia': ['#c2410c', '#db2777', 'Conteúdo com IA'],
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const font = (p) => pathToFileURL(join(ROOT, 'node_modules', p)).href;
const clean = (h) => h.replace(/^##\s+/, '').replace(/[*_`]/g, '').replace(/^\d+[.)]\s*/, '').trim();

function html({ title, category, topics }) {
  const [c1, c2, name] = CATS[category] ?? CATS['sistemas-sob-medida'];
  const two = topics.length > 4;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Jakarta;src:url(${font('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2')}) format('woff2');font-weight:200 800}
@font-face{font-family:Jakarta;src:url(${font('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-ext-wght-normal.woff2')}) format('woff2');font-weight:200 800;unicode-range:U+0100-024F}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:675px;overflow:hidden}
body{font-family:Jakarta,'Segoe UI',sans-serif;background:#f6f8f7;color:#0b1d14;padding:56px 64px;display:flex;flex-direction:column}
.bar{position:absolute;inset:0 0 auto;height:10px;background:linear-gradient(90deg,${c1},${c2})}
.top{display:flex;align-items:center;gap:14px}
.tag{padding:8px 16px;border-radius:999px;background:linear-gradient(90deg,${c1},${c2});color:#fff;font-weight:800;font-size:18px}
.top span{color:#4b5a52;font-weight:600;font-size:18px}
h1{margin-top:18px;font-size:${title.length > 70 ? 34 : 38}px;line-height:1.15;letter-spacing:-.02em;font-weight:800;max-width:1000px;text-wrap:balance}
ol{list-style:none;padding:0;margin:28px 0 24px;display:grid;grid-template-columns:${two ? '1fr 1fr' : '1fr'};gap:${topics.length > 6 ? '12px' : '16px'} 28px;flex:1;align-content:start}
li{display:flex;align-items:center;gap:16px;padding:${topics.length > 6 ? '12px 18px' : '16px 20px'};background:#fff;border:1px solid #dde7e1;border-radius:16px;box-shadow:0 8px 24px -18px rgba(7,19,13,.35);font-size:${two ? 21 : 24}px;font-weight:700;line-height:1.25}
li b{flex:none;display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,${c1},${c2});color:#fff;font-size:19px}
.foot{display:flex;align-items:center;gap:12px;font-weight:700;font-size:18px;color:#1c2b23}
.mark{display:grid;place-items:center;width:40px;height:40px;border-radius:11px;background:#050816;color:#00ff88;font-weight:800;font-size:16px}
.foot span{color:#4b5a52;font-weight:600}
</style></head><body>
<div class="bar"></div>
<div class="top"><div class="tag">Resumo do artigo</div><span>${esc(name)}</span></div>
<h1>${esc(title)}</h1>
<ol>${topics.map((t, i) => `<li><b>${i + 1}</b>${esc(t)}</li>`).join('')}</ol>
<div class="foot"><div class="mark">RN</div>Rafael Nunes <span>· devrafaelnunes.com.br</span></div>
</body></html>`;
}

const posts = readdirSync(BLOG)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const raw = readFileSync(join(BLOG, f), 'utf8');
    const { data, content } = matter(raw);
    const topics = [...content.replace(/```[\s\S]*?```/g, '').matchAll(/^## .+$/gm)].map((m) => clean(m[0])).filter((t) => !SKIP.test(t));
    return { f, slug: f.replace(/\.md$/, ''), raw, data, topics: topics.slice(0, 8) };
  })
  .filter((p) => !p.data.draft && p.topics.length >= 2);

mkdirSync(OUT, { recursive: true });
const todo = posts.filter((p) => all || !existsSync(join(OUT, `${p.slug}.png`)));

if (todo.length) {
  const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const port = 9600 + Math.floor(Math.random() * 100);
  const profile = join(tmpdir(), `summaries-${port}`);
  const proc = spawn(chrome, ['--headless=new', `--remote-debugging-port=${port}`, '--disable-gpu', '--allow-file-access-from-files', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  let target;
  for (let i = 0; i < 100 && !target; i++) {
    await sleep(200);
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {}
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 675, deviceScaleFactor: 1, mobile: false });
  const tmpHtml = join(profile, 'summary.html');
  for (const p of todo) {
    writeFileSync(tmpHtml, html({ title: p.data.title, category: p.data.category, topics: p.topics }));
    await send('Page.navigate', { url: pathToFileURL(tmpHtml).href });
    await sleep(600);
    await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
    const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 675, scale: 1 } });
    writeFileSync(join(OUT, `${p.slug}.png`), Buffer.from(shot.result.data, 'base64'));
  }
  ws.close();
  proc.kill();
  try { rmSync(profile, { recursive: true, force: true }); } catch {}
}

// Insere a imagem no post (uma vez), antes da primeira seção H2.
let inserted = 0;
for (const p of posts) {
  const tag = `![Resumo visual do artigo: ${p.data.title.replace(/[[\]]/g, '')}](/blog/resumos/${p.slug}.png)`;
  if (p.raw.includes(`/blog/resumos/${p.slug}.png`)) continue;
  const fmEnd = p.raw.indexOf('\n---', 4) + 4;
  const body = p.raw.slice(fmEnd);
  const h2 = body.search(/^## /m);
  if (h2 < 0) continue;
  writeFileSync(join(BLOG, p.f), p.raw.slice(0, fmEnd) + body.slice(0, h2) + `${tag}\n\n` + body.slice(h2));
  inserted++;
}
console.log(`generate-summaries: ${todo.length} imagem(ns) gerada(s), ${inserted} post(s) atualizados.`);
process.exit(0);
