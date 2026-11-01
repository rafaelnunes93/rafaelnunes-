// Gera as capas dos posts (PNG 1200×630) em public/blog/covers/{slug}.png.
// Uso: node scripts/generate-covers.mjs [--all]
// Só processa posts com `cover: blog/covers/{slug}.png` no frontmatter. Sem --all, pula capas que já existem.
// Precisa do Google Chrome instalado (renderiza o HTML da capa em modo headless). Não roda no CI.
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import matter from 'gray-matter';

const ROOT = process.cwd();
const BLOG = join(ROOT, 'src', 'content', 'blog');
const OUT = join(ROOT, 'public', 'blog', 'covers');
const all = process.argv.includes('--all');

// Cores e ícones por categoria (mesmos degradês de src/app/data/categorias.ts)
const CATS = {
  'sistemas-sob-medida': { g: ['#047857', '#10b981'], icon: 'fa-cubes', name: 'Sistemas sob medida' },
  'arquitetura-e-backend': { g: ['#0f766e', '#0891b2'], icon: 'fa-server', name: 'Arquitetura e backend' },
  'apis-e-integracoes': { g: ['#15803d', '#65a30d'], icon: 'fa-plug', name: 'APIs e integrações' },
  'apps-e-saas': { g: ['#0e7490', '#4f46e5'], icon: 'fa-mobile-screen-button', name: 'Apps e SaaS' },
  'logistica-e-tms': { g: ['#b45309', '#f59e0b'], icon: 'fa-truck-fast', name: 'Logística e TMS' },
  'custos-e-contratacao': { g: ['#be123c', '#f97316'], icon: 'fa-sack-dollar', name: 'Custos e contratação' },
  'ia-no-trabalho': { g: ['#4338ca', '#06b6d4'], icon: 'fa-briefcase', name: 'IA no trabalho e carreira' },
  'ferramentas-de-ia': { g: ['#7c3aed', '#ec4899'], icon: 'fa-wand-magic-sparkles', name: 'Ferramentas de IA' },
  'ia-para-negocios': { g: ['#047857', '#0ea5e9'], icon: 'fa-store', name: 'IA para negócios' },
  'seguranca-digital': { g: ['#b91c1c', '#7c2d12'], icon: 'fa-shield-halved', name: 'Segurança digital' },
  'programacao-com-ia': { g: ['#0f766e', '#22c55e'], icon: 'fa-code', name: 'Programação com IA' },
  'conteudo-com-ia': { g: ['#c2410c', '#db2777'], icon: 'fa-pen-nib', name: 'Conteúdo com IA' },
};

const KICKER_ICON = { 'Guia prático': 'fa-screwdriver-wrench', Review: 'fa-star', Comparativo: 'fa-scale-balanced', Alerta: 'fa-triangle-exclamation', Entenda: 'fa-magnifying-glass' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const font = (p) => pathToFileURL(join(ROOT, 'node_modules', p)).href;

function html({ title, category, kicker }) {
  const c = CATS[category] ?? CATS['sistemas-sob-medida'];
  const size = title.length > 70 ? 58 : title.length > 50 ? 66 : 76;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Jakarta;src:url(${font('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2')}) format('woff2');font-weight:200 800}
@font-face{font-family:Jakarta;src:url(${font('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-ext-wght-normal.woff2')}) format('woff2');font-weight:200 800;unicode-range:U+0100-024F}
@font-face{font-family:FA;src:url(${font('@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2')}) format('woff2');font-weight:900}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:Jakarta,'Segoe UI',sans-serif;color:#fff;position:relative;
background:
 radial-gradient(520px 420px at 92% 18%,rgba(255,255,255,.22),transparent 70%),
 radial-gradient(600px 500px at 0% 110%,rgba(0,0,0,.35),transparent 70%),
 linear-gradient(135deg,${c.g[0]},${c.g[1]})}
.grid{position:absolute;inset:0;background:
 linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px) 0 0/44px 44px,
 linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px) 0 0/44px 44px;
 -webkit-mask:linear-gradient(90deg,transparent,#000 55%)}
.ring{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,.18)}
.big{position:absolute;right:70px;top:150px;width:300px;height:300px;border-radius:72px;
 background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.32);display:grid;place-items:center;
 box-shadow:0 40px 80px -30px rgba(0,0,0,.45);transform:rotate(-6deg)}
.big i{font-family:FA;font-style:normal;font-weight:900;font-size:140px;color:#fff;text-shadow:0 10px 30px rgba(0,0,0,.25)}
.wrap{position:absolute;left:72px;top:64px;bottom:64px;width:720px;display:flex;flex-direction:column}
.kicker{align-self:flex-start;display:flex;align-items:center;gap:10px;padding:10px 18px;border-radius:999px;
 background:rgba(255,255,255,.95);color:#0b1d14;font-weight:800;font-size:22px;letter-spacing:.02em}
.kicker i{font-family:FA;font-style:normal;font-weight:900;font-size:20px;color:${c.g[0]}}
h1{margin-top:auto;margin-bottom:auto;font-weight:800;font-size:${size}px;line-height:1.06;letter-spacing:-.03em;text-wrap:balance;text-shadow:0 2px 24px rgba(0,0,0,.18)}
.foot{display:flex;align-items:center;gap:14px;font-weight:700;font-size:22px}
.mark{display:grid;place-items:center;width:48px;height:48px;border-radius:13px;background:#050816;color:#00ff88;font-weight:800;font-size:19px;box-shadow:inset 0 0 0 2px rgba(0,255,136,.4)}
.foot span{opacity:.85;font-weight:600}
</style></head><body>
<div class="grid"></div>
<div class="ring" style="width:520px;height:520px;right:-60px;top:55px"></div>
<div class="ring" style="width:700px;height:700px;right:-150px;top:-35px;opacity:.6"></div>
<div class="big"><i>${iconChar(c.icon)}</i></div>
<div class="wrap">
 <div class="kicker"><i>${iconChar(KICKER_ICON[kicker] ?? 'fa-bolt')}</i>${esc(kicker ?? c.name)}</div>
 <h1>${esc(title)}</h1>
 <div class="foot"><div class="mark">RN</div>Rafael Nunes <span>· ${esc(c.name)}</span></div>
</div>
</body></html>`;
}

// Código Unicode dos ícones usados (Font Awesome 6 Free Solid)
function iconChar(name) {
  const map = {
    'fa-cubes': '\uf1b3', 'fa-server': '\uf233', 'fa-plug': '\uf1e6', 'fa-mobile-screen-button': '\uf3cd',
    'fa-truck-fast': '\uf48b', 'fa-sack-dollar': '\uf81d', 'fa-briefcase': '\uf0b1', 'fa-wand-magic-sparkles': '\ue2ca',
    'fa-store': '\ue071', 'fa-shield-halved': '\uf3ed', 'fa-code': '\uf121', 'fa-pen-nib': '\uf5ad',
    'fa-screwdriver-wrench': '\uf7d9', 'fa-star': '\uf005', 'fa-scale-balanced': '\uf24e',
    'fa-triangle-exclamation': '\uf071', 'fa-magnifying-glass': '\uf002', 'fa-bolt': '\uf0e7',
  };
  return map[name] ?? map['fa-bolt'];
}

const posts = readdirSync(BLOG)
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ slug: f.replace(/\.md$/, ''), data: matter(readFileSync(join(BLOG, f), 'utf8')).data }))
  .filter((p) => p.data.cover === `blog/covers/${p.slug}.png`)
  .filter((p) => all || !existsSync(join(OUT, `${p.slug}.png`)));

if (!posts.length) {
  console.log('generate-covers: nenhuma capa para gerar.');
  process.exit(0);
}
mkdirSync(OUT, { recursive: true });

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9700 + Math.floor(Math.random() * 200);
const profile = join(tmpdir(), `covers-${port}`);
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
await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
const tmpHtml = join(profile, 'cover.html');
for (const p of posts) {
  writeFileSync(tmpHtml, html({ title: p.data.title, category: p.data.category, kicker: p.data.kicker }));
  await send('Page.navigate', { url: pathToFileURL(tmpHtml).href });
  await sleep(700);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  writeFileSync(join(OUT, `${p.slug}.png`), Buffer.from(shot.result.data, 'base64'));
  console.log(`capa: ${p.slug}.png`);
}
ws.close();
proc.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
console.log(`generate-covers: ${posts.length} capa(s) gerada(s).`);
process.exit(0);
