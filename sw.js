// A unique name for your cache
const CACHE_NAME = 'code-with-fahim-v1';

// List of files to be cached, which form the "App Shell"
const urlsToCache = [
  '/', // Must be included for the root index.html
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/favicon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/header-logo.png',
  // You should add all HTML pages and assets here
  '/blog.html',
  '/html.html',
  '/css.html',
  '/js.html',
  '/python.html',
  '/java.html',
  '/csharp.html',
  '/cpp.html',
  '/c.html',
  '/rust.html',
  '/kotlin.html',
  '/swift.html',
  '/php.html',
  '/privacypolicy.html',
  '/terms&conditions.html'
];

// 1. Installation: Caching the App Shell
self.addEventListener('install', event => {
  // Wait until the promise is resolved
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, pre-caching App Shell');
        // Add all required assets to the cache
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Fetching: Serving from Cache, falling back to Network
self.addEventListener('fetch', event => {
  // We only want to handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Check if the request is for an external Google Analytics script
  if (event.request.url.includes('googletagmanager.com') ||
      event.request.url.includes('google-analytics.com')) {
    // For GA, use a network-first approach, or just let it go to the network
    return fetch(event.request);
  }

  // Intercept the request
  event.respondWith(
    // Try to find the resource in the cache
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cache
        if (response) {
          return response;
        }

        // Not in cache - fetch it from the network
        return fetch(event.request)
          .then(networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // OPTIONAL: Add network-fetched resources (like images or external fonts) to the cache
            // For example, cache any newly requested HTML or assets not in the initial list.
            const responseToCache = networkResponse.clone();
            if (urlsToCache.some(url => event.request.url.endsWith(url))) {
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseToCache);
                    });
            }

            return networkResponse;
          })
          .catch(() => {
            // This 'catch' handles network failure after a cache miss.
            // You can serve an offline page here if the request was for an HTML page.
            if (event.request.mode === 'navigate') {
                // Assuming you have an offline.html page
                // return caches.match('/offline.html');
            }
          });
      })
  );
});


// 3. Activation: Cleaning up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; // Only keep the current cache name

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        // Delete all old caches that aren't in the whitelist
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});