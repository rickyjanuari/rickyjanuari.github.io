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
    "revision": "25661479d16f230cab591e23e51657ae"
  },
  {
    "url": "404/index.html",
    "revision": "25661479d16f230cab591e23e51657ae"
  },
  {
    "url": "about/index.html",
    "revision": "8e4144e88a099be5ef4109e1ad3fafb7"
  },
  {
    "url": "assets/css/0.styles.9782bb09.css",
    "revision": "35c9b35fd56dbff74e6edcde17d0ad30"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "ebbb6519e67dc002ae4b1d2360c9f033"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "2f6e1682e384bd7597778103269b196b"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "c30ebf23e5fe007025b40e3e65287470"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/index.json",
    "revision": "306f944e78d1451ad96a98a208254eb6"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "d3013212454965dc2d2f6ffdcfcee82d"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "c339300270152d60468ae1ba7f879f2f"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "aab5abcff99fe847216f784daeb3bc6c"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "255ff1ff8090f8480536dc379ad06d7a"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "79f78670f03c591e44b6899c2a0def76"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "2f087f174fb9d2cbb140cd79978a6385"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "2938b581b3fb516050b4ab186ac1fff3"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "368643993bad5760dd5f0a955daac80e"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "1dee56d47b964b6f8f891cdb472eb15a"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "7d358107ec63489396c8fa722de53a59"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "4aa41480da84384b25243e88eb3af087"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "41290d38ee9474b39c07d7e836457c15"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "5f4290b469641767e7b28cc4084681b7"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "d140ac71b4aedd1272b2c07ba9fb0d7f"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "d140ac71b4aedd1272b2c07ba9fb0d7f"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "d140ac71b4aedd1272b2c07ba9fb0d7f"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "0312e80585e2ae568fa9ca4ed99a67d1"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.95edcc84.js",
    "revision": "531e2bcf802118d08c2657b092da8680"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.32642094.js",
    "revision": "6751c40a9d4f4feb69304440ca8bc36b"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.f914d4d2.js",
    "revision": "bb893acde4cfdc5430f4591dcc3a893e"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.6beec07e.js",
    "revision": "788f319a8dbf6adc02bb890ce3ed8c3f"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.5efbc09c.js",
    "revision": "153c578f3d252cc75f131b90dc5339ce"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.8e781053.js",
    "revision": "5506cb5add3fdab1a71b391bc481ec28"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.11ff5ece.js",
    "revision": "9acac9d96f8f7e6ba84103c663f86852"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.ff63e251.js",
    "revision": "6b2e433db7c86b4a8d6bb82eb39904cd"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.3e26f973.js",
    "revision": "9a2db779bfb96b4e305e320fbe07d893"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.d72d6c2c.js",
    "revision": "8089e0b780e9667401b7bfc99945235b"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.84a75a05.js",
    "revision": "e3609b01704a989f486fb1d0bcda6bd5"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.1de48a9f.js",
    "revision": "3148ecff699d463336ff2c9731120490"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.5d2d4336.js",
    "revision": "c07efe2efbdbf4c521078917e008452e"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.58b81bc2.js",
    "revision": "b189dbeb17425a918caadbc237c6c977"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.2b610ed6.js",
    "revision": "cb6f97236e3fbda9ed64618f477d1432"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.b62f22b6.js",
    "revision": "c87500ace641759955e276ab9f6559c0"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.0fefd65b.js",
    "revision": "93218289dcbbded7a49d826afddafaa6"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.1c7c9ee8.js",
    "revision": "4ad0ad9071710833fda5f1dc2afd8f05"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.ec499f09.js",
    "revision": "2332f8a79f0126f5e48debf2c884c38f"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.45aa524e.js",
    "revision": "4d3c79bad2d1111c701411b5f78841bb"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.36657ba8.js",
    "revision": "85d0eeffaa6f173da01300870068be97"
  },
  {
    "url": "assets/static/danvega-avatar.1b1e47a.faaaa00645b2a3c9c199f40fd55348bf.png",
    "revision": "1558ea97fa8d7c8458f4a0ec613ce937"
  },
  {
    "url": "assets/static/favicon.ac8d93a.cc4885725eca304299c47a07b3e43b92.png",
    "revision": "a1dd510b9d277d4fc84997526f6c3cec"
  },
  {
    "url": "assets/static/favicon.b9532cc.cc4885725eca304299c47a07b3e43b92.png",
    "revision": "b913912a99352fd99d727ee277a67dbf"
  },
  {
    "url": "assets/static/favicon.ce0531f.cc4885725eca304299c47a07b3e43b92.png",
    "revision": "7d4cdb218266e96b6c09066ced2801fa"
  },
  {
    "url": "assets/static/favicon.f22e9f3.cc4885725eca304299c47a07b3e43b92.png",
    "revision": "65589b593bf2f26e6726168c3a448b89"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "cc4885725eca304299c47a07b3e43b92"
  },
  {
    "url": "assets/static/signature.03b5461.f00be905b93c0ca390f194ad22a36d95.png",
    "revision": "2a7e452ec2f6c7e2bf37b1986415a67d"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.html",
    "revision": "5abfd8a9ecc359f52715d279c120dc69"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "f4bf5414ddd36711580316b11824a264"
  },
  {
    "url": "blog/index.html",
    "revision": "37339fc414e0a39ec10cd6b0caf65380"
  },
  {
    "url": "books/index.html",
    "revision": "2f474f0836c2fa3677df077c7385fd13"
  },
  {
    "url": "contact/index.html",
    "revision": "6a73ba773c34c533b019525fa720673b"
  },
  {
    "url": "courses/index.html",
    "revision": "a31fda9b36034af67ee5e706783218a1"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "613f48ad0c3399fe59b7e5eadd426572"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "e1b16d9d05f29b15ed26847faa79efae"
  },
  {
    "url": "manifest.json",
    "revision": "60ed1ddd60dbbb5b5abfc274aa35262e"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "34c249e7205cc7ae328e50e493cfbfaa"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "9cbd284e3bbee9276af30622c262b135"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "a2466f9cf03cf3364e5c12246e1bda7b"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "36a317580612867cc6983a8348597103"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "b2311273737a53d650c1a4ea19aee6a6"
  },
  {
    "url": "projects/index.html",
    "revision": "feb8c2d28cc5f9920e10d2de7bffcc33"
  },
  {
    "url": "search.json",
    "revision": "38a55ff2892bce5be72b9cfa99c70d34"
  },
  {
    "url": "signup/index.html",
    "revision": "26a49c14c2895b83731910d725160802"
  },
  {
    "url": "speaking/index.html",
    "revision": "f1278f97f7b868243ef13720c067e349"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "dfbb14b4f87e9684ec8c02a715d43237"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "91c9d9bde7893bb5da6253f2a0a6604e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "fa385ab9f0fd2f6d4c75069401d7c773"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "99a3f5e5db6473b36dd45209ff8381fc"
  },
  {
    "url": "video/index.html",
    "revision": "ab3ce74cb0013c079b389faccbeebea3"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "fcf54f89d4a167b0c59be70885336082"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "239094c54204fe5c53285b9bfb0035fd"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "2941b4e52811962389c73c30fcedde81"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "992d096c3d0872c39befb096b4deb361"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "dfc7f4efa02d89aaea1993b33d306a34"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "dfc7f4efa02d89aaea1993b33d306a34"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "dfc7f4efa02d89aaea1993b33d306a34"
  },
  {
    "url": "work/index.html",
    "revision": "bcd569dbe56cd3ee0118ebcfd3081477"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
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
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
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
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "courses/intro-to-vue/signup",
    "revision": "953d035e3f55e2c5c4ded2061cacd75f"
  },
  {
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
  },
  {
    "url": "video/tag/speed-coding",
    "revision": "c1ab116f9435fbbe73da09d49aeee19a"
  },
  {
    "url": "video/tag/react",
    "revision": "4fc2db4da776bbf5b1d6dd659f58c300"
  },
  {
    "url": "video",
    "revision": "aebcba7a51bf6f737d65ac82d526bb7d"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native",
    "revision": "80d8e01e564a24da31fa5a1a91bef6c0"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator",
    "revision": "754db5eb2fdf181555aa078165b89ae7"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui",
    "revision": "80cba261bedd20f82cde0060d504c081"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui",
    "revision": "5e55488e2debefcaf6279eed44e3d9bf"
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
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "work",
    "revision": "b13c661c9a7c63e0b68e8e5f23d228c4"
  },
  {
    "url": "subscribe-thank-you",
    "revision": "aa78749d96f9d6b64ca701798e5ff8b7"
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
    "url": "projects",
    "revision": "2641529d236ed4619d28ac7f42078020"
  },
  {
    "url": "contact",
    "revision": "8048a6aaa865ac645f16b02a79e059dc"
  },
  {
    "url": "courses",
    "revision": "1a76532d6ea387b255a790f767e744b0"
  },
  {
    "url": "books",
    "revision": "2d3feee9ae5aaf10ffbc7e185dbb1f5c"
  },
  {
    "url": "about",
    "revision": "a7224db13f3a49096aa27c1876d1a947"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
