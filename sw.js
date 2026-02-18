self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Ово омогућава апликацији да ради нормално преко мреже
  e.respondWith(fetch(e.request));
});
