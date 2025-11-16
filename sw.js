// A unique name for your cache. **Incremented to v9 for mandatory update.**
const CACHE_NAME = 'code-with-fahim-v8';

// CRITICAL: This list is empty to stop pre-caching.
const urlsToCache = []; 

// URLs to be explicitly ignored by the Service Worker (Network-Only).
// This forces the browser to handle the 308 redirect for the homepage natively.
const networkOnlyUrls = [
  'googletagmanager.com', 'google-analytics.com', 'tatteredpassenger.com', 'wuaze.com',
  '/', 
  '/index.html'
];


// 1. Installation: Now a trivial operation since urlsToCache is empty.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Pre-caching bypassed (urlsToCache is empty).');
        // This will resolve immediately with no files added
        return cache.addAll(urlsToCache); 
      })
      .catch(error => {
          console.error('Service Worker: Installation error:', error);
      })
  );
});

// 2. Fetching: Network-Only for specific URLs, Network-First/Cache-Fallback for others
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  
  const requestUrl = event.request.url;
  const urlPath = new URL(requestUrl).pathname;

  // Strategy 1: Network-Only Bypass (for homepage and external scripts)
  if (networkOnlyUrls.some(url => requestUrl.includes(url) || urlPath === url)) {
      console.log('Service Worker: Fetching Network-Only:', urlPath);
      return event.respondWith(fetch(event.request)); 
  }


  // Strategy 2: All other URLs will attempt Cache-First (but cache is empty)
  // This essentially forces a network request for sub-pages.
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache will always be a miss here, forcing network fetch
        if (response) {
          return response;
        }

        // Go to the network
        // CRITICAL FIX: Retained for sub-pages, allowing 308 redirect handling
        return fetch(event.request, { redirect: 'follow' })
          .catch(error => {
            console.log('Service Worker: Sub-page fetch failed:', error);
            // Can be used for an offline fallback page if needed
          });
      })
  );
});


// 3. Activation: Cleaning up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; 

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});