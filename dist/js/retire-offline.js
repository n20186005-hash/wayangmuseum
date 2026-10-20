(() => {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.getRegistrations().then(registrations => Promise.all(registrations.filter(registration => [registration.active, registration.waiting, registration.installing].some(worker => worker && new URL(worker.scriptURL).origin === location.origin && new URL(worker.scriptURL).pathname === '/sw.js')).map(registration => registration.unregister()))).catch(() => {});
  if ('caches' in window) caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('mw-guide-')).map(key => caches.delete(key)))).catch(() => {});
})();
