// A unique name for your cache. **Incremented to v4 to ensure mandatory update.**
const CACHE_NAME = 'code-with-fahim-v5';

// List of all static files that make up your site's core structure (App Shell)
const urlsToCache = [
  '/', 
  '/index.html',
  // Core Styles & Manifest
  '/style.css',
  '/manifest.json',
  // Favicons & Logo
  '/favicon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/header-logo.png',
  // Main Language Pages
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
  // Footer/Policy Pages
  '/privacypolicy.html',
  '/terms&conditions.html',
  '/blog.html',
  // Language-specific CSS files
  '/html.css',
  '/css.css'
];

// URLs to be explicitly ignored by the Service Worker (Network-Only)
// This ensures external scripts/ads are always fetched live.
const networkOnlyUrls = [
  'googletagmanager.com',
  'google-analytics.com',
  'tatteredpassenger.com', // Hiltop video slider script
  'wuaze.com',
  '/html.html',
  '/css.html' 
];


// 1. Installation: Caching the App Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: App Shell pre-caching complete.');
        // Add all required static assets to the cache
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
          console.error('Service Worker: Failed to cache required assets:', error);
      })
  );
});

// 2. Fetching: Serving from Cache, falling back to Network (with redirect fix)
self.addEventListener('fetch', event => {
  // We only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external scripts/ads (network-only strategy)
  const requestUrl = event.request.url;
  if (networkOnlyUrls.some(url => requestUrl.includes(url))) {
      return fetch(event.request);
  }

  // Intercept the request
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache Hit: Return cached response immediately
        if (response) {
          return response;
        }

        // Cache Miss: Go to the network
        // **CRITICAL FIX:** Setting { redirect: 'follow' } to prevent ERR_FAILED (on 308 redirects)
        return fetch(event.request, { redirect: 'follow' })
          .catch(error => {
            console.log('Service Worker: Fetch failed (Network or Redirect error):', error);
            
            // This block handles complete network failure
            if (event.request.mode === 'navigate') {
               // Fallback logic for when the user is completely offline
               // return caches.match('/offline.html');
            }
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
        // Delete all old caches that don't match the current CACHE_NAME
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