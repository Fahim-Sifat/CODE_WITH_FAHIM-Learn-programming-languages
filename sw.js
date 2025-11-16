// A unique name for your cache. **Incremented to v7 for mandatory update.**
const CACHE_NAME = 'code-with-fahim-v7';

// List of all static files to be cached (The App Shell).
const urlsToCache = [
  '/', 
  '/index.html',
  // All HTML pages (must be listed here for pre-caching)
  '/html.html', '/css.html', '/js.html', '/python.html', '/java.html', 
  '/csharp.html', '/cpp.html', '/c.html', '/rust.html', '/kotlin.html', 
  '/swift.html', '/php.html', '/privacypolicy.html', '/terms&conditions.html', 
  '/blog.html',
  // Nested HTML pages
  '/introduction-to-html.html', '/code-editor.html', '/tags.html', '/structure.html', 
  '/attributes.html', '/headings&paragraphs.html', '/html-styles.html', 
  '/text-formation.html', '/comments.html', '/div&classes.html', '/colors.html', 
  '/links.html', '/lists.html', '/tables.html', '/images.html', '/audio-video.html', 
  '/input-types.html', '/forms.html', '/emojis.html',
  '/intro-to-css.html', '/css-syntax.html', '/css-selectors.html', '/css-pseudoclasses.html', 
  '/css-pseudoelements.html', '/css-boxmodel.html', '/css-boxsizing.html', 
  '/css-display.html', '/css-widthheight.html', '/css-marginpadding.html', 
  '/css-overflow.html', '/css-flexbox.html', '/css-grid.html', '/css-positioning.html', 
  '/css-float.html', '/css-colors.html', '/css-typography.html', '/css-borders.html',
  '/css-outline.html', '/css-transparency.html', '/css-filters.html', '/css-navbar.html', 
  '/css-dropdown.html', '/css-buttons.html', '/css-pagination',
  // Assets
  '/style.css', '/manifest.json', '/favicon.png', '/favicon-16x16.png', 
  '/favicon-32x32.png', '/header-logo.png', '/html.css', '/css.css'
];

// URLs to be explicitly ignored by the Service Worker (Network-Only)
const networkOnlyUrls = [
  'googletagmanager.com', 'google-analytics.com', 'tatteredpassenger.com', 'wuaze.com' 
];


// 1. Installation: Caching the App Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: App Shell pre-caching complete.');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
          console.error('Service Worker: Failed to cache required assets:', error);
      })
  );
});

// 2. Fetching: Network-First for HTML, Cache-First for Assets
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  
  const requestUrl = event.request.url;
  if (networkOnlyUrls.some(url => requestUrl.includes(url))) {
      return fetch(event.request);
  }

  // Strategy for HTML navigation requests (Network-First)
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
        fetch(event.request, { redirect: 'follow' }) // CRITICAL FIX: Allows 308 redirect
        .then(response => {
            // Put the successful network response into the cache (stale-while-revalidate style)
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
            });
            return response;
        })
        .catch(() => {
            // Network failed - serve from cache
            console.log('Service Worker: Network failed, falling back to cache for document.');
            return caches.match(event.request);
        })
    );
    return;
  }


  // Strategy for all other assets (Cache-First)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache Hit: Return cached response
        if (response) {
          return response;
        }

        // Cache Miss: Go to the network
        return fetch(event.request, { redirect: 'follow' })
          .catch(error => {
            console.log('Service Worker: Asset fetch failed:', error);
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