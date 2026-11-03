const CACHE_NAME = 'article-shell-v2';
const OFFLINE_URL = '/offline.html';
const ARTICLE_URLS = ['/', '/index.html'];
const VISUALIZATION_URL = '/network-visualization.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([
      OFFLINE_URL,
      '/manifest.webmanifest',
      '/assets/icons/icon-192.png',
      '/assets/icons/icon-512.png',
      '/assets/icons/icon.svg'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith('article-shell-') && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    const path = url.pathname;
    if (ARTICLE_URLS.includes(path)) {
      event.respondWith(
        fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('/', copy));
          }
          return response;
        }).catch(async () => (await caches.match('/')) || (await caches.match(OFFLINE_URL)))
      );
      return;
    }

    if (path === VISUALIZATION_URL) {
      event.respondWith(
        fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(VISUALIZATION_URL, copy));
          }
          return response;
        }).catch(async () => (await caches.match(VISUALIZATION_URL)) || (await caches.match(OFFLINE_URL)))
      );
    }
  }
});
