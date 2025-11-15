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
  '/css/styles.css', 
  '/js/script.js',    
  
  // PWA ICONS (Confirmed in the root directory)
  '/pwa-192x192.png', 
  '/pwa-512x512.jpg',

  // HTML BASICS LESSONS [cite: 1]
  '/1.introduction-to-html.html',
  '/2.code-editor.html',
  '/3.tags.html',
  '/4.structure.html',
  '/5.attributes.html',
  '/6.headings&paragraphs.html',
  '/7.html-styles.html',
  '/8.text-formation.html',
  '/9.comments.html',
  '/10.div&classes.html',
  '/11.colors.html',
  '/12.links.html',
  '/13.lists.html',
  '/14.tables.html',
  '/15.images.html',
  '/16.audio-video.html',
  '/17.input-types.html',
  '/18.forms.html',
  '/19.emojis.html',
  '/20.favicons.html',

  // CSS LESSONS [cite: 3]
  '/1.intro-to-css.html',
  '/2.css-syntax.html',
  '/3.css-selectors.html',
  '/4.css-pseudoclasses.html',
  '/5.css-pseudoelements.html',
  '/6.css-boxmodel.html',
  '/7.css-boxsizing.html',
  '/8.css-display.html',
  '/9.css-widthheight.html',
  '/10.css-marginpadding.html',
  '/11.css-overflow.html',
  '/12.css-flexbox.html',
  '/13.css-grid.html',
  '/14.css-positioning.html',
  '/15.css-float.html',
  '/16.css-colors.html',
  '/17.css-typography.html',
  '/18.css-borders.html',
  '/19.css-outline.html',
  '/20.css-transparency.html',
  '/21.css-filters.html',
  '/22.css-navbar.html',
  '/23.css-dropdown.html',
  '/24.css-buttons.html',
  '/25.css-pagination.html',
  '/26.css-viewport.html',
  '/27.css-mediaqueries.html',
  '/28.css-relativeunits.html',
  '/29.css-responsiveimages.html',
  '/30.css-transforms2d.html',
  '/31.css-transforms3d.html',
  '/32.css-transitions.html',
  '/33.css-animations.html',
  '/34.css-customproperties.html',
  '/35.css-functions.html'
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