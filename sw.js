const CACHE_NAME = 'healspace-cache-v1';
const urlsToCache = [ '/', '/login.html', '/profile.html', '/manifest.json', '/logo-512.png' ];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
