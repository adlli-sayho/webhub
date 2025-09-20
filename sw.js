// sw.js
const CACHE_NAME = 'web-app-hub-v1';

// On install, the service worker is installed.
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
});

// On activate, the service worker is activated.
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
});

// On fetch, use a cache-first then network strategy.
self.addEventListener('fetch', event => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // If we have a cached response, return it.
      if (response) {
        return response;
      }
      
      // Otherwise, fetch from the network.
      return fetch(event.request).then(networkResponse => {
        // If the fetch is successful, clone the response and cache it.
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
