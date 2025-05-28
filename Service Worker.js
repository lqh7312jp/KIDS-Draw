self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('kids-draw-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',    // 如果你有 CSS
        '/script.js'     // 如果你有 JS
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});