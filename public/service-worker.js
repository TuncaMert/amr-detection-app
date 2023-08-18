const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    './index.html',
    './logo512.png',
    './yolov8n_web_model/group1-shard1of3.bin',
    './yolov8n_web_model/group1-shard2of3.bin',
    './yolov8n_web_model/group1-shard3of3.bin',
    './yolov8n_web_model/metadata.yaml',
    './yolov8n_web_model/model.json',
    '../src/components/btn-handler.jsx',
    '../src/components/loader.jsx',
    '../src/style/App.css',
    '../src/style/index.css',
    '../src/style/loader.css',
    '../src/utils/detect.js',
    '../src/utils/labels.json',
    '../src/utils/renderBox.js',
    '../src/utils/webcam.js',
    '../src/App.jsx',
    '../src/index.js'
  


];

self.addEventListener('install', event =>{
    console.log('Install Event');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            return cache.addAll(resourcesToPrecache)
        })
    );
});

self.addEventListener('activate', event =>{
    console.log('Activate Event');
});

self.addEventListener('fecth', event =>{
    console.log('Fecth intercepted for:', event.request.url);
    event.responWith(caches.match(event.request)
    .then(cachedResponse => {
        return cachedResponse || fetch(event.request)
    })
    );
});