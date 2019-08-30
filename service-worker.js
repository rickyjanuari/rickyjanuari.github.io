/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4978b1ad19dfcf0d62f6ae339a9bbfe8"
  },
  {
    "url": "404/index.html",
    "revision": "4978b1ad19dfcf0d62f6ae339a9bbfe8"
  },
  {
    "url": "about/index.html",
    "revision": "16884e1ce635cf8ed21b10c9fad8cfaa"
  },
  {
    "url": "assets/css/0.styles.96b281cd.css",
    "revision": "4a84a4914e1180ab0f2688f60f9e5ba7"
  },
  {
    "url": "assets/data/1/0098f323.json",
    "revision": "3550bc36e9a68d801b0daa599cd0f0c7"
  },
  {
    "url": "assets/data/1/1cc0906e.json",
    "revision": "723153ab6434070cddc13c8c6150fb10"
  },
  {
    "url": "assets/data/1/3ce46814.json",
    "revision": "9550b09b366d648bdf427a11eb47b120"
  },
  {
    "url": "assets/data/1/45efa582.json",
    "revision": "83867e325679960537d76f14ab83d08e"
  },
  {
    "url": "assets/data/1/4bb9c99d.json",
    "revision": "f55bc1fb39db53bcaca55489a7c73b69"
  },
  {
    "url": "assets/data/1/518dda1f.json",
    "revision": "9e956236b40fe20fe2b8d1ad3b2fe337"
  },
  {
    "url": "assets/data/1/63707845.json",
    "revision": "f5bc8a048b5aeeb9be85508ba67bc605"
  },
  {
    "url": "assets/data/1/7f809913.json",
    "revision": "da1de44e7c4710018f14c3eb04e40664"
  },
  {
    "url": "assets/data/1/ab0c29d6.json",
    "revision": "d6708b81ce7a3d5bf509a025a84f686e"
  },
  {
    "url": "assets/data/1/ba7e4d3a.json",
    "revision": "6496fcd0a2429248ab9d82bc061c40c2"
  },
  {
    "url": "assets/data/1/d6f90432.json",
    "revision": "4f0a0671fed3ed92992cc35945f3d0f1"
  },
  {
    "url": "assets/data/1/f327b690.json",
    "revision": "7b44bed882485e9451e6f2fee3b6636b"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/img/ricky.7ac66437.jpeg",
    "revision": "7ac66437c5d870ab9e2a1acadc02154d"
  },
  {
    "url": "assets/js/app.01b2b61b.js",
    "revision": "e4565455a5aa43d76bca94c5e39a91a3"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.5186fd28.js",
    "revision": "8da04059748dbcab63382c4113b281e7"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.d9c0980b.js",
    "revision": "98af8fbcd3a5ded41eba8c0d6a45039e"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.2feebcfe.js",
    "revision": "0bc98f9e2066bd7337c1c8b9d0277bc4"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.c12df17c.js",
    "revision": "7fe85b526fbfcd6e9dd28ca252faaad2"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.43112b61.js",
    "revision": "d0ee1be332592ca8433b1f8c96423ed2"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.7b213273.js",
    "revision": "ff8519eb3423d6209eb220788126f908"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.670608f9.js",
    "revision": "cd643d6b5d379c0e83da76f4b6e1f27e"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.42a44064.js",
    "revision": "e8b6835d687069a5a252b943e83d142e"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.c383f1eb.js",
    "revision": "5702d68d621f294fb6e6227f7bf5c049"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.6e9bd5d5.js",
    "revision": "ca604fba0cb1b68cbab664b90ac66a8b"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.c935c874.js",
    "revision": "af8018ad6151f994da867ed70b6e8fc4"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.11ffa72a.js",
    "revision": "dddf26a03b4a9f7e7a0c6721784344e3"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.2801601c.js",
    "revision": "e345df1f702b09be7b01c309ba36f956"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.2cc8ef97.js",
    "revision": "de8dcbee686e966d85cd1e68127f9dfa"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.ec243f6e.js",
    "revision": "3f2562054774dcbd47c96e6165fc6f6b"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.fedeac33.js",
    "revision": "c676bb25abc2f9e7f3656c57ace0cf2c"
  },
  {
    "url": "assets/static/danvega-avatar.1b1e47a.faaaa00.png",
    "revision": "1558ea97fa8d7c8458f4a0ec613ce937"
  },
  {
    "url": "assets/static/danvega-favicon.ac8d93a.71269ae.png",
    "revision": "d2270d51c1ddcd8a9902f2e3859faffe"
  },
  {
    "url": "assets/static/danvega-favicon.ce0531f.71269ae.png",
    "revision": "0204e719b431b28be18589e24593e005"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "71269aebb0c19851b92d32461663d1e8"
  },
  {
    "url": "assets/static/signature.03b5461.f00be90.png",
    "revision": "2a7e452ec2f6c7e2bf37b1986415a67d"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.html",
    "revision": "4b22e02f5807856a6cd266037f95ef5f"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "2e265e847cd69a32afaba499f5657868"
  },
  {
    "url": "blog/index.html",
    "revision": "c1efca2eaf8984fc4795e1ca4cc14166"
  },
  {
    "url": "books/index.html",
    "revision": "b8db7b13bf047c8f4eeab695303e9641"
  },
  {
    "url": "courses/index.html",
    "revision": "b049d711474ed060132cff1dd7c3e934"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "c38821a68c2347aeb6aafd6b3c8f3237"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "46ef00366ca217a60dca7810018a3c83"
  },
  {
    "url": "manifest.json",
    "revision": "0f079cd33be5138c0831090f6f9f94e6"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "fdb68c9fbdc5c182d3137dc8ff2ba5a6"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "84f56dd69dc7ef1e4ae4dbc575d9f1d2"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "faaca2defd7ca14c31ef2dbf6cd00c6b"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "341135b23a0e8c760d6966eaaf1a3be8"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "983ffa0237e420f499b46fa4589a2c3f"
  },
  {
    "url": "projects/index.html",
    "revision": "a14955c2c9c10a623e4c7cf41a50d4f6"
  },
  {
    "url": "search.json",
    "revision": "d2c61b9761aceb8daee2fa68062f480e"
  },
  {
    "url": "signup/index.html",
    "revision": "b689a6e76e63d3a59904e8e80502c4d9"
  },
  {
    "url": "speaking/index.html",
    "revision": "4dc0d27bc9f9265298d6a1bab7b4317c"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "92c661db70319f3d44493b7c0f4fb5f3"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "e254ab4d5ee3c065ea78567fae00e8d0"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a6f5fd57cc3f2a741d6328d11aaebdac"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "9407c1b1ea1d9ee143cc76ec9003be03"
  },
  {
    "url": "work/index.html",
    "revision": "957567d885ce46a1f5bf6e772cc34743"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "courses/intro-to-vue/signup",
    "revision": "953d035e3f55e2c5c4ded2061cacd75f"
  },
  {
    "url": "about",
    "revision": "a7224db13f3a49096aa27c1876d1a947"
  },
  {
    "url": "books",
    "revision": "2d3feee9ae5aaf10ffbc7e185dbb1f5c"
  },
  {
    "url": "projects",
    "revision": "2641529d236ed4619d28ac7f42078020"
  },
  {
    "url": "signup",
    "revision": "15b0a5cec4ab2fcb3f22627cf9387e1b"
  },
  {
    "url": "speaking",
    "revision": "1ae8c756be3d71d951ca07c3d97706d2"
  },
  {
    "url": "subscribe-thank-you",
    "revision": "aa78749d96f9d6b64ca701798e5ff8b7"
  },
  {
    "url": "work",
    "revision": "b13c661c9a7c63e0b68e8e5f23d228c4"
  },
  {
    "url": "courses",
    "revision": "1a76532d6ea387b255a790f767e744b0"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
  },
  {
    "url": "tag/gatsby",
    "revision": "ffa747b40d7f5bf7760be47f3ad7af4a"
  },
  {
    "url": "tag/tutorial",
    "revision": "3cfc711fc284bce7f40111b42288e5e0"
  },
  {
    "url": "tag/hexo",
    "revision": "3145fc0127a73296c1fe966a14fdcbee"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
