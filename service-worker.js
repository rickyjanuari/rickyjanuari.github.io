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
    "revision": "46cc27e3bee5d8c9430a05ba8627ea3f"
  },
  {
    "url": "404/index.html",
    "revision": "46cc27e3bee5d8c9430a05ba8627ea3f"
  },
  {
    "url": "about/index.html",
    "revision": "5679af35f062dda1ec96c46c716886ec"
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
    "url": "assets/js/app.552f9df0.js",
    "revision": "0a24c1e310f5795029b4724627e1c8ec"
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
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.561cad2f.js",
    "revision": "83f926a93d8ee2f09b5bf40523c749bd"
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
    "url": "assets/js/page--src--templates--newsletter-vue.4904b6fe.js",
    "revision": "55403f9a05382e9c5abbd0432c729091"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.8376657b.js",
    "revision": "3b45b94e263c4fb69691284706b4470a"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.f1a1cb0f.js",
    "revision": "b6ec335de47aa7279b9e290b7db5ce3a"
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
    "revision": "9acad6ddbc9c11caafdaa8ecbb44b412"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "69a674b8d405573a541ab2e337f571e5"
  },
  {
    "url": "blog/index.html",
    "revision": "6f50593a43fe1214266eeaec5f3ccfe7"
  },
  {
    "url": "books/index.html",
    "revision": "4707fadfe0b1e98a054a983a839e4c54"
  },
  {
    "url": "courses/index.html",
    "revision": "cdf53fe7bafb459e7965d4e0a50a0b2d"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "6da8d1443f6dacbf1ecf1587db429493"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "86d2928f264ba5d060c9dc4fe99990e4"
  },
  {
    "url": "manifest.json",
    "revision": "7e19d6042fb6c7fff1bdc69c9d6d1969"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "0e47ba8482a74a14e2a0ea4e3869daa4"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "c0fe5444086b3f9e11b09ceb0923df34"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "8657e1f6e6bec3b1da050ee5eee0d56b"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "2e142aace18c87113c076b843291e509"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "dbb7bcd57db76be6f2e5617ebab55368"
  },
  {
    "url": "projects/index.html",
    "revision": "1a38aae36b7b07a2d66991223dc48b73"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "b294628569d4e217b2129a5fc65170c7"
  },
  {
    "url": "speaking/index.html",
    "revision": "1bec4993f59050186e4c62b00a2d344a"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "3e904b01739a76b404e0ebc342e186a2"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "3fa2c66fdc2a8faf4fe0f804a77ed4f3"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "7837cccbc246d6901ab6d2451a41f372"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "f34f720aca61632ce3b73c6fc40df1d7"
  },
  {
    "url": "work/index.html",
    "revision": "a986802a2c43546d0b9e983782e480f1"
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
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
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
    "url": "tag/gatsby",
    "revision": "ffa747b40d7f5bf7760be47f3ad7af4a"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
