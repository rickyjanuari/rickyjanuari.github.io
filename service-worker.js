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
    "revision": "39a7da87a57739578a517666e3bb7bc8"
  },
  {
    "url": "404/index.html",
    "revision": "39a7da87a57739578a517666e3bb7bc8"
  },
  {
    "url": "about/index.html",
    "revision": "56f3481968d2750bcb432a99a02ceb7e"
  },
  {
    "url": "assets/css/0.styles.4cf11ed0.css",
    "revision": "7bf6d2f57aa038e3ee1ad31116833a10"
  },
  {
    "url": "assets/data/1/0098f323.json",
    "revision": "3550bc36e9a68d801b0daa599cd0f0c7"
  },
  {
    "url": "assets/data/1/0d9d45c6.json",
    "revision": "876d3c566c3abc2aaec6e9df93c0e586"
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
    "url": "assets/data/1/753776a5.json",
    "revision": "0e34b3e68bfc6183e6e6c477a759d89d"
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
    "url": "assets/data/1/b5617408.json",
    "revision": "f940394ba022b8d003c8615778e306c7"
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
    "url": "assets/js/app.675bd70c.js",
    "revision": "46b1f69e199ea476a7e08de961123492"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.0cea4224.js",
    "revision": "9bbe2a60b12d15cf2ecb2f23939f4e88"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.08eb8655.js",
    "revision": "20a87b47cdd947ab60012f5fe61954e4"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.0e234de6.js",
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
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.4b295f07.js",
    "revision": "02241d34044fe725569b88d045226490"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.e499fb77.js",
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
    "url": "assets/js/page--src--templates--newsletter-vue.c5b9a2ee.js",
    "revision": "870142eeae4816b21ecf0d2363505f7b"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.b96358a9.js",
    "revision": "7982dc83abc4b809d00f0264177cf633"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.dfe142b0.js",
    "revision": "9a527542a45696ab16173d9cefa4e24a"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.59312669.js",
    "revision": "c9965fa91a8931b8c997d8b294d8b969"
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
    "revision": "07c303fcad406b1e84c675141c01447d"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "6d541e2d6920871c043e77de9cd7fb33"
  },
  {
    "url": "blog/index.html",
    "revision": "2e3281055a5925cbf1cc37efd43ef492"
  },
  {
    "url": "books/index.html",
    "revision": "81e66d7ab89034dd4417bff719b5d874"
  },
  {
    "url": "courses/index.html",
    "revision": "db0bb863c3b13df102dbd2fa15018a8e"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "be1362795b5b425cfef50b4d4a75551d"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "a91182b08dcf136c159b5d7d12051f0d"
  },
  {
    "url": "manifest.json",
    "revision": "7e19d6042fb6c7fff1bdc69c9d6d1969"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "9c830e2267416db520e9933e7ac30f72"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "2ec9e945af761c6b072a95e853cd714a"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "1bab66c029558a122db9f9f5d92c04e7"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "6536f9d65f60c3535eca7f9cd22b6ba0"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "291eba18e9f5f1e8ce903dfa7e4f3078"
  },
  {
    "url": "projects/index.html",
    "revision": "9d8f79dc14afb52f450f0c70f81ac6f6"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "7653914e2e4fa89935155c3447b46f60"
  },
  {
    "url": "speaking/index.html",
    "revision": "1990a69a1653d0692b534cf76438f4de"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "d1d8a14b7bed2b3bebbb403aefd41e1b"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "422dfe6e086e562e5c5d09536d2983fd"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "cefa97eeabcd4c9319287cba80d5286f"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "af2087640ca2759a88a978e348728770"
  },
  {
    "url": "work/index.html",
    "revision": "a4183b292c81a996ee02a4b8d210c4b9"
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
    "url": "courses",
    "revision": "1a76532d6ea387b255a790f767e744b0"
  },
  {
    "url": "work",
    "revision": "b13c661c9a7c63e0b68e8e5f23d228c4"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
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
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
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
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
