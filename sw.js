self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('wildfire-store').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './sw.js',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});