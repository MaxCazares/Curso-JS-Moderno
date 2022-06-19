// Instala el Service Worker
self.addEventListener('install', e => {
    console.log('Instalando el service worker: ', e);
});

// Activa el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker activado: ', e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch: ', e);
});