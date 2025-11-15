// ======================================================
// 1. THIRD-PARTY INTEGRATION (5gvci.com)
// ======================================================
self.options = {
    "domain": "5gvci.com",
    "zoneId": 1 // Set to 1 based on the input '00000001'
}
self.lary = ""
// Loads the external script provided by the third-party.
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')


// ======================================================
// 2. CORE PWA CACHING LOGIC (For Offline Functionality)
// ======================================================
const STATIC_CACHE_NAME = 'cwf-static-v1'; // *** VERSION BUMPED for new assets ***
const DYNAMIC_CACHE_NAME = 'cwf-dynamic-v1';

// List of ALL core assets to cache on install for full offline use.
const staticAssets = [
  '/', 
  '/index.html',
  
  // COMMON ASSETS (Placeholders - Verify these paths!)
  '/styles.css', 
  '/js/script.js',    
  
  // PWA ICONS (Confirmed in the root directory)
  '/pwa-192x192.png', 
  '/pwa-512x512.jpg',

  // HTML BASICS LESSONS [cite: 1]
  '/html.html',
  '/introduction-to-html.html',
  '/code-editor.html',
  '/tags.html',
  '/structure.html',
  '/attributes.html',
  '/headings&paragraphs.html',
  '/html-styles.html',
  '/text-formation.html',
  '/comments.html',
  '/div&classes.html',
  '/colors.html',
  '/links.html',
  '/lists.html',
  '/tables.html',
  '/images.html',
  '/audio-video.html',
  '/input-types.html',
  '/forms.html',
  '/emojis.html',
  '/favicons.html',

  // CSS LESSONS [cite: 3]
  '/css.html',
  '/intro-to-css.html',
  '/css-syntax.html',
  '/css-selectors.html',
  '/css-pseudoclasses.html',
  '/css-pseudoelements.html',
  '/css-boxmodel.html',
  '/css-boxsizing.html',
  '/css-display.html',
  '/css-widthheight.html',
  '/css-marginpadding.html',
  '/css-overflow.html',
  '/css-flexbox.html',
  '/css-grid.html',
  '/css-positioning.html',
  '/css-float.html',
  '/css-colors.html',
  '/css-typography.html',
  '/css-borders.html',
  '/css-outline.html',
  '/css-transparency.html',
  '/css-filters.html',
  '/css-navbar.html',
  '/css-dropdown.html',
  '/css-buttons.html',
  '/css-pagination.html',
  '/css-viewport.html',
  '/css-mediaqueries.html',
  '/css-relativeunits.html',
  '/css-responsiveimages.html',
  '/css-transforms2d.html',
  '/css-transforms3d.html',
  '/css-transitions.html',
  '/css-animations.html',
  '/css-customproperties.html',
  '/css-functions.html',
 //Extra pages
   '/privacypolicy.html',
   '/terms&conditions.html',
];

// INSTALL event: Caches the core static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching App Shell');
        return cache.addAll(staticAssets);
      })
  );
  self.skipWaiting();
});

// ACTIVATE event: Deletes old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => {
          return name !== STATIC_CACHE_NAME && name !== DYNAMIC_CACHE_NAME;
        }).map(name => {
          return caches.delete(name);
        })
      );
    })
  );
  return self.clients.claim();
});

// FETCH event: Cache First, then Network strategy
self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
  }
});









