if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const d = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[d]) return;
    let t = {};
    const o = e => i(e, d),
      c = { module: { uri: d }, exports: t, require: o };
    s[d] = Promise.all(n.map(e => c[e] || o(e))).then(e => (r(...e), t));
  };
}
define(['./workbox-7369c0e1'], function (e) {
  'use strict';
  self.addEventListener('message', e => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/index-24919b01.css', revision: null },
        { url: 'assets/index-e9c373a5.js', revision: null },
        { url: 'index.html', revision: 'd63678a5eddb8fd7b88ada3fd5594475' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'favIcons/pwa-192x192.png', revision: 'd26306af72401fb317daf45ddce51e8c' },
        { url: 'favIcons/pwa-512x512.png', revision: '3a2a89e24e7f4b9e87da48cd9c7be5bb' },
        { url: 'manifest.webmanifest', revision: 'ec847a7c9136fda5db79342713dd789f' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
