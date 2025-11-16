// ======================================================
// 1. PWA CACHING CONFIGURATION ⚙️
// ======================================================

// Define cache names for static (app shell) and dynamic (runtime) assets.
const STATIC_CACHE_NAME = 'cwf-static-v2'; // Bumped version to ensure fresh installation
const DYNAMIC_CACHE_NAME = 'cwf-dynamic-v2';

// ⚠️ MINIMAL App Shell: Only pre-cache the absolute essentials ⚠️
// The rest of the content will be cached dynamically upon user visit.
const staticAssets = [
  '/', 
  '/index.html',
  '/html.html', // Main HTML section link
  '/css.html',  // Main CSS section link
  // PWA ICONS (Corrected extension from previous step)
  '/pwa-192x192.png', 
  '/pwa-512x512.png', 
  // You might also include a main CSS/JS file if necessary for the layout
  // e.g., '/styles/main.css', '/scripts/app.js'
];

// ======================================================
// 2. INSTALLATION (Caching the Minimal App Shell) 📦
// ======================================================

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Pre-caching Minimal App Shell');
        // Add only the small, essential list of assets
        return cache.addAll(staticAssets);
      })
      .catch(error => {
        console.error('[Service Worker] Pre-caching failed:', error);
        // Installation will fail if a required asset is missing, which is intended.
      })
  );
  self.skipWaiting();
});

// ======================================================
// 3. ACTIVATION (Cleaning Up Old Caches) 🗑️
// ======================================================

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      // Delete any cache that doesn't match the current V2 names
      return Promise.all(
        cacheNames.filter(name => {
          return name !== STATIC_CACHE_NAME && name !== DYNAMIC_CACHE_NAME;
        }).map(name => {
          console.log('[Service Worker] Deleting old cache:', name);
          return caches.delete(name);
        })
      );
    })
  );
  return self.clients.claim();
});

// ======================================================
// 4. FETCH (Cache-First, then Network Strategy for Dynamic Content) 📡
// ======================================================

self.addEventListener('fetch', event => {
  // Only handle requests that originate from our application (same origin)
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      // 1. Check if the request is already in ANY cache
      caches.match(event.request).then(cachedResponse => {
        
        // If it's in the cache (static or dynamic), serve it immediately
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // 2. If not found, go to the network
        return fetch(event.request).then(response => {
          
          // Check if the response is valid before caching it
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 3. Clone the response (for the dynamic cache)
          const responseToCache = response.clone();
          
          // 4. Put the clone in the dynamic cache for future visits
          caches.open(DYNAMIC_CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          // 5. Return the original network response to the page
          return response;
        }).catch(error => {
            // This 'catch' handles true network failures 
            // (e.g., user is offline and asset wasn't cached)
            console.warn('[Service Worker] Fetch failed:', error.message);
            // You can add logic here to return a generic offline page if the fetch fails
            // return caches.match('/offline.html');
        });
      })
    );
  }
});