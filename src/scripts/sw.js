import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({url}) => url.pathname.startsWith('https://restaurant-api.dicoding.dev/'),
    new StaleWhileRevalidate(),
);
