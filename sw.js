// A unique name for your cache. **ALWAYS UPDATE THIS WHEN DEPLOYING NEW FILES**
const CACHE_NAME = 'code-with-fahim-v2';

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
  // Main Language Pages (must be cached to ensure offline access)
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
  // Footer/Policy Pages
  '/privacypolicy.html',
  '/terms&conditions.html',
  '/blog.html',
  // Ensure the CSS files for the language pages are included
  '/html.css',
  '/css.css'
  // NOTE: If you have an offline.html, add it here: '/offline.html'
];

// URLs to be explicitly ignored by the Service Worker (Network-Only)
const networkOnlyUrls = [
  'googletagmanager.com',
  'google-analytics.com',
  'tatteredpassenger.com', // Hiltop video slider script
  'wuaze.com' // Any domain redirect or known external asset
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

// 2. Fetching: Serving from Cache, falling back to Network
self.addEventListener('fetch', event => {
  // We only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external scripts/ads defined in networkOnlyUrls (network-only strategy)
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
        return fetch(event.request).catch(error => {
          // This block handles network failure after a cache miss
          console.log('Service Worker: Fetch failed:', error);
          
          // Optional: If navigating to a page and offline, serve a fallback
          if (event.request.mode === 'navigate') {
             // To serve an offline page, uncomment this and make sure '/offline.html' is in urlsToCache
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