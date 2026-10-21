import assert from 'node:assert/strict';
import fs from 'node:fs';
import worker from '../src/worker.ts';
const errorHTML = fs.readFileSync('dist/404.html', 'utf8');
const calls = [];
const env = { ASSETS: { fetch: async request => {
  const path = new URL(request.url).pathname; calls.push(path);
  if (path === '/404') return new Response(request.method === 'HEAD' ? null : errorHTML, { headers: { 'Content-Type': 'text/html' } });
  if (path === '/en/privacy/') return new Response('policy', { status: 200 });
  return new Response(request.method === 'HEAD' ? null : errorHTML, { status: 404 });
} } };
for (const path of ['/404', '/404/', '/404.html', '/404.html/', '/missing-check/']) {
  for (const method of ['GET', 'HEAD']) {
    const response = await worker.fetch(new Request('https://wayangmuseum.com' + path + '?x=1', { method }), env);
    assert.equal(response.status, 404); assert.match(response.headers.get('X-Robots-Tag'), /noindex/);
    if (method === 'GET') assert.match(await response.text(), /noindex,follow/); else assert.equal(await response.text(), '');
  }
}
const good = await worker.fetch(new Request('https://wayangmuseum.com/en/privacy/'), env); assert.equal(good.status, 200);
const requestURL = 'http://wayangmuseum.com/en/privacy/?a=seo%2Froute&x=1&x=2';
const redirect = await worker.fetch(new Request(requestURL), env);
assert.equal(redirect.status, 301); assert.equal(redirect.headers.get('Location'), requestURL.replace('http:', 'https:'));
console.log('PASS actual Worker: explicit error aliases and unknown path GET/HEAD return 404/noindex; normal asset and existing HTTPS redirect preserve path/query. ASSETS binding mocked; production remains unverified.');
