const CACHE = 'article-mobile-v20261113-2';
const ENTRY = new URL('./index.html', self.registration.scope).href;
const ROOT = new URL('./', self.registration.scope);
const SHELL = ['./index.html','./manifest.webmanifest','./assets/icons/icon-192.png','./assets/icons/icon-512.png','./assets/icons/icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('article-mobile-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  const relative = url.pathname.slice(ROOT.pathname.length);
  const entry = request.mode === 'navigate' && (relative === '' || relative === 'index.html');
  const frame = /^frames\/(intro|combined-chart|network|region|telegram)\.html$/.test(relative);
  const asset = /^(assets\/(media|icons)\/[^/]+|manifest\.webmanifest)$/.test(relative);
  if (!entry && !frame && !asset) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const key = entry ? ENTRY : new URL(relative, ROOT).href;
    if (relative.startsWith('assets/media/')) {
      const hit = await cache.match(key);
      if (hit) return hit;
    }
    try {
      const response = await fetch(request);
      if (response.ok) {
        try { await cache.put(key, response.clone()); } catch (_) { /* Storage limits must not interrupt reading. */ }
      }
      return response;
    } catch (_) {
      const hit = await cache.match(key);
      if (hit) return hit;
      if (frame) return new Response('<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font:16px sans-serif;background:#0c1015;color:#eeeae3;padding:24px">인터랙티브 콘텐츠를 처음 열려면 인터넷 연결이 필요합니다.</body></html>', {headers:{'Content-Type':'text/html; charset=utf-8'}});
      return Response.error();
    }
  })());
});
