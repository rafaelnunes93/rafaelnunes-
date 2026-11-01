// Avisa o IndexNow (Bing, Yandex e outros) sobre URLs novas ou alteradas.
// Envia as URLs do sitemap com lastmod nos últimos 2 dias. Requer INDEXNOW_KEY no ambiente
// e o mesmo valor em SITE.indexNowKey (o build publica o arquivo {chave}.txt).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE } from '../src/app/data/site';

async function main(): Promise<void> {
  const key: string = process.env['INDEXNOW_KEY'] || SITE.indexNowKey;
  if (!key) {
    console.log('indexnow: sem chave configurada, nada a fazer.');
    return;
  }

  const sitemap = readFileSync(join(process.cwd(), 'dist', 'rafaelnunes-', 'browser', 'sitemap.xml'), 'utf8');
  const since = Date.now() - 2 * 24 * 60 * 60 * 1000;
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)]
    .filter(([, , lastmod]) => new Date(lastmod).getTime() >= since)
    .map(([, loc]) => loc);

  if (!urlList.length) {
    console.log('indexnow: nenhuma URL alterada recentemente.');
    return;
  }

  const host = new URL(SITE.url).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `${SITE.url}/${key}.txt`, urlList }),
  });
  console.log(`indexnow: ${urlList.length} URL(s) enviadas, resposta HTTP ${res.status}.`);
}

main();
