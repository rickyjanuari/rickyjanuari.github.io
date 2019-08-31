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
    "revision": "f16a96fed1f3fb901ae48fe53dc14211"
  },
  {
    "url": "404/index.html",
    "revision": "f16a96fed1f3fb901ae48fe53dc14211"
  },
  {
    "url": "about/index.html",
    "revision": "b6e8d36ecaed8e441702fa07ebcf852b"
  },
  {
    "url": "assets/css/0.styles.f15fa7dd.css",
    "revision": "b1bf10b3eacfb6222ae5b7ff965e8c10"
  },
  {
    "url": "assets/data/1/0098f323.json",
    "revision": "3550bc36e9a68d801b0daa599cd0f0c7"
  },
  {
    "url": "assets/data/1/058e90f3.json",
    "revision": "d63aaef0c660e43aced85b018a61f2dc"
  },
  {
    "url": "assets/data/1/0a041b14.json",
    "revision": "1b03527c3f517a68b8d9238ed26aa42b"
  },
  {
    "url": "assets/data/1/1cc0906e.json",
    "revision": "723153ab6434070cddc13c8c6150fb10"
  },
  {
    "url": "assets/data/1/27295dd2.json",
    "revision": "48031a43b80877a216d76a669defb4c8"
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
    "url": "assets/data/1/4b6c9ca4.json",
    "revision": "6b673b3804c69f9638f569a7bda4754d"
  },
  {
    "url": "assets/data/1/4becb8a2.json",
    "revision": "7bfcd1a45091ae067837815f0effffcb"
  },
  {
    "url": "assets/data/1/5d151c58.json",
    "revision": "a5440e10107f59f2d7cf793b946f8c32"
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
    "url": "assets/data/1/88bac118.json",
    "revision": "d60a9c90ff68148c7ef0b00a8ce0e240"
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
    "url": "assets/data/1/fd592228.json",
    "revision": "7389973ebe7769af17261c16359f8219"
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
    "url": "assets/js/app.002f2316.js",
    "revision": "e775b37b05f68678207c11d672b70150"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.46bd8906.js",
    "revision": "1336082bf39b23a4339add7f7c8f88a4"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.54df1d38.js",
    "revision": "f1b27d3430d25bc1f7d59f414f2f99f9"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.606b2e94.js",
    "revision": "058c2faa7ed5db664c242de3c7eb5338"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.fff8d4c9.js",
    "revision": "af1de0ced8c0f4cdb1b5ca5d4de262f7"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.51d64834.js",
    "revision": "6840b1da0ddae9ee9d4ef78742419efa"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.4c2cf86a.js",
    "revision": "13b11143ed4535e109fd384f52abaa32"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.1d3152d6.js",
    "revision": "72fd5d6c1320d69e59c838f3d6ea93b6"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.0f5da01e.js",
    "revision": "edde1dde3a17c91eec3542ec2c783a2e"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.4b6b8496.js",
    "revision": "683b3dad72a4dd8d4806bee1923d4f2e"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.f8fe49aa.js",
    "revision": "4f8799ada87511c831d4cffb33ca9f29"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.e819bf1c.js",
    "revision": "823144380a9231a438de6b636a5fde9f"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.e78f3f58.js",
    "revision": "191795351ce3b4f613bbd262177cfe55"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.b793ed97.js",
    "revision": "d6e61c992aba59bfd1a006f4fae6e245"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.2c8de016.js",
    "revision": "5944a7d0e5ad5f7484a9cf97ad0fb7f4"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.b251583c.js",
    "revision": "11801c87a291fd944fb92e65b47406e7"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.ba455126.js",
    "revision": "6b8fe926ab87a91048c5dcd9ea7fcb75"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.8ba5fa9e.js",
    "revision": "4a4f0186d74698dd272c05ea91e2185c"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.8db57c42.js",
    "revision": "a8237cc6914af8521c6fab05c0e4cba7"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.a2aca453.js",
    "revision": "5cbf44fcc3449f22c6ea555ef52d76fd"
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
    "revision": "915968dcf8d3fa8881bf79e1bdedb209"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "ee50733f1cbb61d0978980b4631912d3"
  },
  {
    "url": "blog/index.html",
    "revision": "c86c81aaba89d589612d073eddbaa01c"
  },
  {
    "url": "books/index.html",
    "revision": "60181ff38945ef26b5d3a73468b0c0c2"
  },
  {
    "url": "courses/index.html",
    "revision": "54f6106966d4ffee4afe1f01d089517f"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "efde929ffafbd14632f3f5efcaef148d"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "6f02e09a3e3bd47399cb92705f6f9c4d"
  },
  {
    "url": "manifest.json",
    "revision": "30509ebe709e178ac56efe45706d7145"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "536bba8d29ccabfa9acd8f9b1035395c"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "35392fe50081a1ec5674ba5ed5a371e3"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "73602f865bab6e892d0372398965a459"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "032c3f11c9aa81f21a045153d3ad04b9"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "f9c0de1109a120f081aef4b35b441c67"
  },
  {
    "url": "projects/index.html",
    "revision": "afc819f98b0ede3689ade89d0ecbd7c5"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "bcb147f50a6b87b1e520426b6e3b86b2"
  },
  {
    "url": "speaking/index.html",
    "revision": "00d17e72c94c2313288e753227292400"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "3528f2c414b88b6721aa472a7d11a002"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "226c161b41b10debda8bf3d5bbad5434"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3e4ebd74ca6e9f0e4ff13901b3d8963a"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "a6af3f71f9faa8161c24388116ff2826"
  },
  {
    "url": "video/index.html",
    "revision": "591c08d1d69a5861a73906eae011a12f"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "dffd10ba56458b193ca7dc2c63951ef5"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "8b9f615c81bfeec9216d398243cc3668"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "4b18578f69b852ae441c40eab539a98a"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "f3fb1137be1aaeb5eabc271eaae3b1f0"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "213543b0a9df371cd24aa28e8869924d"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "213543b0a9df371cd24aa28e8869924d"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "213543b0a9df371cd24aa28e8869924d"
  },
  {
    "url": "work/index.html",
    "revision": "b377912c0482852cf4cd46bcdf379f71"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "speaking",
    "revision": "1ae8c756be3d71d951ca07c3d97706d2"
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
    "url": "courses/intro-to-vue/signup",
    "revision": "953d035e3f55e2c5c4ded2061cacd75f"
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
    "url": "about",
    "revision": "a7224db13f3a49096aa27c1876d1a947"
  },
  {
    "url": "video",
    "revision": "aebcba7a51bf6f737d65ac82d526bb7d"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
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
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
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
    "url": "tag/gatsby",
    "revision": "ffa747b40d7f5bf7760be47f3ad7af4a"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui",
    "revision": "80cba261bedd20f82cde0060d504c081"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native",
    "revision": "80d8e01e564a24da31fa5a1a91bef6c0"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui",
    "revision": "5e55488e2debefcaf6279eed44e3d9bf"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator",
    "revision": "754db5eb2fdf181555aa078165b89ae7"
  },
  {
    "url": "video/tag/react",
    "revision": "4fc2db4da776bbf5b1d6dd659f58c300"
  },
  {
    "url": "video/tag/speed-coding",
    "revision": "c1ab116f9435fbbe73da09d49aeee19a"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
