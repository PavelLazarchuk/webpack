const precacheAndRoute = require('workbox-precaching/precacheAndRoute');

const self = this;
const CACHE = 'market';
const URL = ['index.html'];

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('activate', e => {
	const newCache = [CACHE];
	e.waitUntil(
		caches.keys().then(cacheNames =>
			Promise.all(
				// eslint-disable-next-line array-callback-return
				cacheNames.map(cacheName => {
					if (!newCache.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				}),
			),
		),
	);
});

self.addEventListener('install', e => {
	e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URL)));
});

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(res => {
			return res || fetch(e.request);
		}),
	);
});
