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
    "revision": "0182924271f5d5a5a820da8882420a6c"
  },
  {
    "url": "404/index.html",
    "revision": "0182924271f5d5a5a820da8882420a6c"
  },
  {
    "url": "about/index.html",
    "revision": "0d6b031489b90f2fb023a73bd93ad393"
  },
  {
    "url": "assets/css/0.styles.451e4518.css",
    "revision": "439b5129d4238fd18d17bf296503ec1b"
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
    "url": "assets/data/1/63707845.json",
    "revision": "f5bc8a048b5aeeb9be85508ba67bc605"
  },
  {
    "url": "assets/data/1/7c41e498.json",
    "revision": "4d97e991128714a9d13c97a6d9822bf6"
  },
  {
    "url": "assets/data/1/7f809913.json",
    "revision": "da1de44e7c4710018f14c3eb04e40664"
  },
  {
    "url": "assets/data/1/81926f4a.json",
    "revision": "3bc8f40e269ae64c53477afe20a6e92d"
  },
  {
    "url": "assets/data/1/94ff6f00.json",
    "revision": "715d595815003dffe5936c1697a0c692"
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
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/img/ricky.7ac66437.jpeg",
    "revision": "7ac66437c5d870ab9e2a1acadc02154d"
  },
  {
    "url": "assets/js/app.1653efeb.js",
    "revision": "31b985fb42debd55f74ecd25e13f767a"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.0cea4224.js",
    "revision": "9bbe2a60b12d15cf2ecb2f23939f4e88"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.0f0c8012.js",
    "revision": "0d34d393e78a202da8ab0e55808c1370"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.2feebcfe.js",
    "revision": "0bc98f9e2066bd7337c1c8b9d0277bc4"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.1396641c.js",
    "revision": "d37657e792ae8d5e9b425a858c18003d"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.88c161db.js",
    "revision": "7939f93ced74230cc94740d3cc5a9780"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.2cc8d481.js",
    "revision": "d65d3bed147ab98c7c35775c83e0628d"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.3473233a.js",
    "revision": "eca00a82908410ee3ed76e7af0f1c400"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.b419585e.js",
    "revision": "d2e9ad26c4d76bf69e62fe1ffe724e6e"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.c383f1eb.js",
    "revision": "5702d68d621f294fb6e6227f7bf5c049"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.422aeda7.js",
    "revision": "ec929d5326bc5a599097eebcd132cbe9"
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
    "url": "assets/js/page--src--templates--newsletter-vue.d448386b.js",
    "revision": "907d7644a670a9946b8f028b769985ce"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.555fe429.js",
    "revision": "397fa18f71f9c2eadcf091e78a9f627d"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.51967e23.js",
    "revision": "9a527542a45696ab16173d9cefa4e24a"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.4432f9af.js",
    "revision": "729f3a13c59055c019265ba7951f8988"
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
    "revision": "dc16dad3145c6ffb7b2e9b544799ee80"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "63204bfd220933b3bd0f4e13f62bb439"
  },
  {
    "url": "blog/index.html",
    "revision": "236391d4fb802ee59b94aae0a9bd611d"
  },
  {
    "url": "books/index.html",
    "revision": "bbb272ce14e355098747a4ce0fd83127"
  },
  {
    "url": "courses/index.html",
    "revision": "b6afd907b87f91d3b069721d4426c330"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "e3317002002308bf79d18e5a9e56141c"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "bf35983459f0aa030d7a805e996509fa"
  },
  {
    "url": "manifest.json",
    "revision": "7e19d6042fb6c7fff1bdc69c9d6d1969"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "417efda2d0c90c33171aa3ce1504c94c"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "00f351e450113287b35fd0f292d5de22"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "7ab95d9ff709769c8337f4c7c67087a9"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "d03517928cfa5d06f5a8198a536ebdaa"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "c650561e5cba613fe695f73fe6d589b4"
  },
  {
    "url": "projects/index.html",
    "revision": "b64262579fac6cfbf3074c9a4789222c"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "fbeba1f2558af45cd3d8a3e04eaf75c2"
  },
  {
    "url": "speaking/index.html",
    "revision": "1fc8b0ec166a5b947dbaf4f0dc28c9b3"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "f3d66ed5a0033519d23128b51ea0cbb1"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "ddae71bfb53cf5e17d59a00e05290d36"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "d95d7988cadb2bae8c410a54c07968f1"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "339b09b579aaec6beeb04c7170e6cece"
  },
  {
    "url": "work/index.html",
    "revision": "ef9d5b93a5bba497d75b3b61ca87bc69"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "work",
    "revision": "b13c661c9a7c63e0b68e8e5f23d228c4"
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
    "url": "courses",
    "revision": "1a76532d6ea387b255a790f767e744b0"
  },
  {
    "url": "courses/intro-to-vue/signup",
    "revision": "953d035e3f55e2c5c4ded2061cacd75f"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "tag/gatsby",
    "revision": "ffa747b40d7f5bf7760be47f3ad7af4a"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
