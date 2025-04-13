// Basic Service Worker Template
self.addEventListener('install', (event) => {
    console.log('Service worker installed');
    // Activate immediately after installation
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
    // Start controlling the page as soon as possible
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Simply pass through the network requests for now
    console.log('Fetching:', event.request.url);
});
