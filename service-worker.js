const CACHE_NAME = "math-notebook-cache-v1";
const urlsToCache = [
  "./",
  "./lib/jquery/dist/jquery.js",
  "./lib/angular/angular.js",
  "./lib/mathquill/mathquill.js",
  "./lib/mathquill/mathquill.css",
  "./lib/mathquill/font/Symbola-basic.eot",
  "./lib/mathquill/font/Symbola-basic.ttf",
  "./lib/mathquill/font/Symbola-basic.woff",
  "./lib/mathquill/font/Symbola-basic.woff2",
  "./lib/mathquill/font/Symbola.eot",
  "./lib/mathquill/font/Symbola.otf",
  "./lib/mathquill/font/Symbola.svg",
  "./lib/mathquill/font/Symbola.ttf",
  "./lib/mathquill/font/Symbola.woff",
  "./lib/mathquill/font/Symbola.woff2",
  "./app.js",
  "./help.js",
  "./index.html",
  "./style.css",
  "./icons/icon-144x144.png",
  "./icons/icon-192x192.png",
  "./icons/icon-256x256.png",
  "./icons/icon-48x48.png",
  "./icons/icon-96x96.png",
  "./manifest.json",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      console.log("fetching", event.request.url);
      return fetch(event.request);
    })
  );
});
