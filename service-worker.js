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
    "revision": "88579c290849d6f1366c55b23a632f55"
  },
  {
    "url": "404/index.html",
    "revision": "88579c290849d6f1366c55b23a632f55"
  },
  {
    "url": "about/index.html",
    "revision": "61541a81d56b26406ea95fe4b289cd94"
  },
  {
    "url": "assets/css/0.styles.77485bac.css",
    "revision": "bab21335383a8559bd03e23e03ad6243"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "596f90ab6950205135734e004dbfa720"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "bb8ea305b8584a6dc0252917a53dbc9d"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "aa85029870fa5964a400fb74f21e4ce4"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "57dd53aeb663f9d46276dd6c3ea95e01"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/index.json",
    "revision": "a325b799a25af05aadfc973ddc980e5e"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "d9cfe3af708aae8b298f4f2d7f08b333"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "a48e0e44f3af9cd1245d43006dd2ffa9"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "ef762ed920e006278e4ae38f00496079"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "f0c33824a180ba693a99756a788263cb"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "3ced2667a79cd262cc5d9105b42a3a21"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "28f94ff97e45322ab1a264343930f6ce"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "4c172f8edca458c8142e8380ba6cd9f0"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "26bc2067afb59e95c20f7a712e62ab3d"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "ad8e26acd328934d1a4379565f85a9b4"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "f868aa31c9a39f40fcff8aceca19ccb9"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "3e1554f089a5727ad9e9f71af03cdc73"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "004368c6ff920ab1314ccfc80c072099"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "589492f41cb170832cde7f4405d6098a"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "9b68f2185fdb7bfe38dedd5bdbc9ffb0"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "9b68f2185fdb7bfe38dedd5bdbc9ffb0"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "9b68f2185fdb7bfe38dedd5bdbc9ffb0"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "c36881584e292433312324402af36d7b"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/2.c2a00e66.js",
    "revision": "94585a9130f5cac7d5190cda0a571933"
  },
  {
    "url": "assets/js/app.d01c5101.js",
    "revision": "4838b46f15715ee295e6d533b778fdeb"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.b404bf54.js",
    "revision": "4880fbc92ec31f690ff6c6351d286209"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.1a0937e8.js",
    "revision": "0253297f5d2578759eadd01590c53a0a"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.8362d1b3.js",
    "revision": "a1932d31d97d407c6d63cfa83448e634"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.35177fd1.js",
    "revision": "9699bec9f97454b453bc290d54ca8db6"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.c3693090.js",
    "revision": "b1e84ad00375b30d975489f9b85d552d"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.0031e9cf.js",
    "revision": "8fcb6ca3db4663f57cc0a032e5e22483"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.083f9340.js",
    "revision": "a9b44bf1d852528440602e2ce5432fc2"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.74326ff8.js",
    "revision": "e53296264d8a020b71ea2fb06c82560b"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.8020df00.js",
    "revision": "6e313ad6d41741fb7ffebc160ca77de2"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.a94b4f11.js",
    "revision": "2ef1d22427d395b8a2a2b7618b422b12"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.5671bf57.js",
    "revision": "aff483a640ab49f18ff2b22fd1505852"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.e4264497.js",
    "revision": "c17cdbfa30be7b9a2a4d1ab08f8a156f"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.f75317ed.js",
    "revision": "0aeb31c86c40570b737eb5ff2f4a0ce8"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.73364534.js",
    "revision": "fa9ec9f8e4e31e6a47a2d2f98f14d820"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.b85f776f.js",
    "revision": "482ec992761d835a16d4c5b199762999"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.412f65a4.js",
    "revision": "666e322bd23e87d83cab5e0227dc1361"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.3ad78462.js",
    "revision": "5e9a39491a23e4631802151eb096bbe8"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.cf7e9de8.js",
    "revision": "8555ba04496ec7a3e10492c1ce0bc780"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.bd55da28.js",
    "revision": "dcad288c55f2b62be8ec562aeeec8430"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.8b29f019.js",
    "revision": "e6b31744f43d929bb5baa75e6f9d15f7"
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
    "revision": "7d075c33da292ca9a6e004310b6d77bd"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "0b242588449265231e32278a0e8ca093"
  },
  {
    "url": "blog/index.html",
    "revision": "d9f15a0f45421b779450cfbebdcae244"
  },
  {
    "url": "books/index.html",
    "revision": "8e6b9c7d6ed8309550580c27ee0d0e8c"
  },
  {
    "url": "contact/index.html",
    "revision": "a965bfe47a80aacaf270bd96a59848f8"
  },
  {
    "url": "courses/index.html",
    "revision": "445038828cf0987c4fd7e91dba3ab055"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "617f938fd3288c22f1707a9ba573d9a1"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "38e6df33c4dec485b3332a7a6312b288"
  },
  {
    "url": "manifest.json",
    "revision": "60ed1ddd60dbbb5b5abfc274aa35262e"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "e695a35b79fe0a496cf64af2f2d4665d"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "3b20d712838e95ab68dc7e1a10529619"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "7233476384bf306d3fed4be5a738be56"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "d4f46cec5c4dc39ca32e9fbf864a0e4f"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "7fde028d1e84583be78f270699cf9d90"
  },
  {
    "url": "projects/index.html",
    "revision": "0b7ca39e7a681240008cfdf8b46baabd"
  },
  {
    "url": "search.json",
    "revision": "38a55ff2892bce5be72b9cfa99c70d34"
  },
  {
    "url": "signup/index.html",
    "revision": "253319fa832f4e1289954fcdbd90d639"
  },
  {
    "url": "speaking/index.html",
    "revision": "f1195465e62cc8be10680f25c8e8302d"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "e1bd4e14a214e71f072c72d3cccfe437"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "644aea11b60679c4500c3d5a961ebe5b"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "a1f5eeb746abc2788eacc4bcbd2e3322"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "5d3e9f2d240d50e215bf8d227932f881"
  },
  {
    "url": "video/index.html",
    "revision": "a0c23564bebbbed516dc2811c24b1d97"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "749d6ecf952d2ce35876027f63ff7551"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "ec8ff425a61adbba17d96f13c66e21e5"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "e6889193f305b861824093f5aafb4c2b"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "325cc14f8438a185b50241e517f9b3a5"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "3892526a179d6b6d299f3b84d4c77bc9"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "3892526a179d6b6d299f3b84d4c77bc9"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "3892526a179d6b6d299f3b84d4c77bc9"
  },
  {
    "url": "work/index.html",
    "revision": "aa104a1eaa689dec973d2e1dbc4aece3"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "video/tag/react",
    "revision": "4fc2db4da776bbf5b1d6dd659f58c300"
  },
  {
    "url": "video/tag/speed-coding",
    "revision": "c1ab116f9435fbbe73da09d49aeee19a"
  },
  {
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
  },
  {
    "url": "video",
    "revision": "aebcba7a51bf6f737d65ac82d526bb7d"
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
