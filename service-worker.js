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
    "revision": "c56f6c5dfb5cb4e5a62da2d6d5c7b545"
  },
  {
    "url": "404/index.html",
    "revision": "c56f6c5dfb5cb4e5a62da2d6d5c7b545"
  },
  {
    "url": "about/index.html",
    "revision": "4a6a8a3148ce6f16dc45a8f37e7d5abf"
  },
  {
    "url": "assets/css/0.styles.1f1c256f.css",
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
    "url": "assets/data/1/470c0886.json",
    "revision": "61a05c31fa21847b113a556bc6ba7ccf"
  },
  {
    "url": "assets/data/1/62527365.json",
    "revision": "56e29f3898f64735ff139e3b462e51cb"
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
    "url": "assets/data/1/91a20ec0.json",
    "revision": "835644ae8bb17436c677d54c1595f1b7"
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
    "url": "assets/js/app.ec4d68d7.js",
    "revision": "079a39059bfc814f201cf2826459bd22"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.083e2ecb.js",
    "revision": "9bbe2a60b12d15cf2ecb2f23939f4e88"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.6aa8151e.js",
    "revision": "20a87b47cdd947ab60012f5fe61954e4"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.ac9345c0.js",
    "revision": "0bc98f9e2066bd7337c1c8b9d0277bc4"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.276d2a81.js",
    "revision": "7fe85b526fbfcd6e9dd28ca252faaad2"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.bb175b6e.js",
    "revision": "d0ee1be332592ca8433b1f8c96423ed2"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.6a4b8ccf.js",
    "revision": "3fb7f3c222857b50ebbe5a3f22fd6043"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.3f207342.js",
    "revision": "cd643d6b5d379c0e83da76f4b6e1f27e"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.59fde952.js",
    "revision": "e8b6835d687069a5a252b943e83d142e"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.a15ba9a9.js",
    "revision": "5702d68d621f294fb6e6227f7bf5c049"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.d64f680d.js",
    "revision": "ca604fba0cb1b68cbab664b90ac66a8b"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.2fb371b0.js",
    "revision": "af8018ad6151f994da867ed70b6e8fc4"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.e34f42a1.js",
    "revision": "dddf26a03b4a9f7e7a0c6721784344e3"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.36023bad.js",
    "revision": "65073f2fc497bd3f80bc882486646947"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.8aeb0567.js",
    "revision": "90cfecba21b683b3cb28d2a01b7473c5"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.ead2547f.js",
    "revision": "d3e3918275ca7f075a4f8ad7da31e5a1"
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
    "url": "assets/static/favicon.ac8d93a.cc48857.png",
    "revision": "a1dd510b9d277d4fc84997526f6c3cec"
  },
  {
    "url": "assets/static/favicon.b9532cc.cc48857.png",
    "revision": "b913912a99352fd99d727ee277a67dbf"
  },
  {
    "url": "assets/static/favicon.ce0531f.cc48857.png",
    "revision": "7d4cdb218266e96b6c09066ced2801fa"
  },
  {
    "url": "assets/static/favicon.f22e9f3.cc48857.png",
    "revision": "65589b593bf2f26e6726168c3a448b89"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "cc4885725eca304299c47a07b3e43b92"
  },
  {
    "url": "assets/static/signature.03b5461.f00be90.png",
    "revision": "2a7e452ec2f6c7e2bf37b1986415a67d"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.html",
    "revision": "0e4a9785ef8c158d26c42a276209d2e2"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "af64669c8d8efa86b6a3da9416af0b7a"
  },
  {
    "url": "blog/index.html",
    "revision": "b85ffe556031262c24a7cf36d4336f08"
  },
  {
    "url": "books/index.html",
    "revision": "609260f0f0cb5519021f7a3ecb23276b"
  },
  {
    "url": "courses/index.html",
    "revision": "e8bec366eea7c14463c2258d6d837720"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "2ae6737a1dfb313d351fe3eb3bed4495"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "c03921cd39cd43b70ebc2beb94cf0bd0"
  },
  {
    "url": "manifest.json",
    "revision": "edfccea79a2118baf45c51cc8acc190f"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "f738cbd8417df1dbbea44afccdf3ad94"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "0120f460cdcca36c717fb765c1208044"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "8dbc8b3504ba2d51d8661e1a80584179"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "faafde8ab879884330df2470f7651719"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "a737ed3b182e173c2c1c4fac768f4255"
  },
  {
    "url": "projects/index.html",
    "revision": "b1e81ebc3a88640602f25736d600725c"
  },
  {
    "url": "search.json",
    "revision": "d2c61b9761aceb8daee2fa68062f480e"
  },
  {
    "url": "signup/index.html",
    "revision": "1d1f4f1a33424d789dd254357fd2bd49"
  },
  {
    "url": "speaking/index.html",
    "revision": "3279619761b8605cba454233248296f1"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "5cd0bacb6ca01753eddd679d9e7520e6"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "c107c16f1a5914dfcbf8d8ddc395dc11"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "201f29af4e13ff77169480ed6db0f3e4"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "f7a924cdcbb95497e275130312aa68df"
  },
  {
    "url": "work/index.html",
    "revision": "03d7ee9db606afc470f1c9acd6bbafb2"
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
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
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
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
