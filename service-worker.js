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
    "revision": "cf87e585f9cf7af0b6473a33ecd87a52"
  },
  {
    "url": "404/index.html",
    "revision": "cf87e585f9cf7af0b6473a33ecd87a52"
  },
  {
    "url": "about/index.html",
    "revision": "e96eb3ffba53cbabbbe748a2844be4e2"
  },
  {
    "url": "assets/css/0.styles.9782bb09.css",
    "revision": "35c9b35fd56dbff74e6edcde17d0ad30"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "a2a4a8e49bf8b61dc5380c3fad89516e"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "55f5c33ba7f0b91df8b560d5924be269"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "d0681c2d798cf43a307f3412ca8b8c84"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/index.json",
    "revision": "190afe90a6b14a6f0719e7104a10ec95"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "77a1d8426fb477cfa626a74b17b6b4ff"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "a474a2f8288cc33c45cd456171f7e845"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "2e883155aca6ab2e3cb2bf1f223e434f"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "e4ed78393f600c7050ad76e749849c1f"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "bfd436a9a40de1b2f238487c53c764cd"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "0c1d4da5c55e68c11cf5423c2194b45d"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "a8ae7ca712936d4e4afa31fc8589a006"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "ab7589284ea954bb30ed5241836b98f9"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "e159421bc85c2ee9e0fd38de4be87336"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "fc8739812a5de5ad9371e96c20f01a30"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "8ab98c6aa8ee07f1876f394b2777d911"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "09ce2d23dbc9ee277a453ec7c276dcff"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "be50919c4092c3c778f71518f74e712b"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "dfa7352848f5fff8bcd619c9c4d4b746"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "dfa7352848f5fff8bcd619c9c4d4b746"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "dfa7352848f5fff8bcd619c9c4d4b746"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "2f3f5f18493b7eb0d278cb67cb21f7ec"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.97342ded.js",
    "revision": "fce4656ad25fd94bf57cb2de3c4f3f2e"
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
    "url": "assets/js/page--src--pages--blog-vue.5b0d99ed.js",
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
    "url": "assets/js/page--src--pages--index-vue.1bc1b586.js",
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
    "url": "assets/js/page--src--pages--video-vue.b476b7a8.js",
    "revision": "b189dbeb17425a918caadbc237c6c977"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.2b610ed6.js",
    "revision": "cb6f97236e3fbda9ed64618f477d1432"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.5cb8d152.js",
    "revision": "c87500ace641759955e276ab9f6559c0"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.e3b1dd84.js",
    "revision": "93218289dcbbded7a49d826afddafaa6"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.2ec2f6ea.js",
    "revision": "4ad0ad9071710833fda5f1dc2afd8f05"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.11f0a5ab.js",
    "revision": "2332f8a79f0126f5e48debf2c884c38f"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.dccc5d46.js",
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
    "revision": "900a088b79b7d0bd14ed84fc3667af46"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "547b7dfd6c694ec8d5cbb7bdbe2e687e"
  },
  {
    "url": "blog/index.html",
    "revision": "3b81b5161a1194b9e3cdc2917a198649"
  },
  {
    "url": "books/index.html",
    "revision": "f1b08c93a4f6587835954be2941028c7"
  },
  {
    "url": "contact/index.html",
    "revision": "f5e19606dd2c22bf096d1384683c0afe"
  },
  {
    "url": "courses/index.html",
    "revision": "d9d70d935f4633160b8febc0e7db5bf8"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "3feb2a362808f50f9812b5d6e0821e80"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "c803aa23b6988606378914d60c358b2a"
  },
  {
    "url": "manifest.json",
    "revision": "a1a9c4abaf4ebb72d24f2fdda34720c4"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "e0e2c5999b717f3a01bc8c00cc83a6d6"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "89755583fedb1d58fa5f12478a60a1d0"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "648844a09ac4abeecf883fe78ea0bb52"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "e0b49304237f290ef5198163e3f66a43"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "e8b400b46ac3188102e8c3b2be29890e"
  },
  {
    "url": "projects/index.html",
    "revision": "22caf009920ba0f339b2bb854f309201"
  },
  {
    "url": "search.json",
    "revision": "ba4147be035cd6566c9380fae6853f76"
  },
  {
    "url": "signup/index.html",
    "revision": "0f1d4956ac8589547320e4e486d6b90f"
  },
  {
    "url": "speaking/index.html",
    "revision": "d7a0a7051dfa3f4063c9e5b180a3b57c"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "3f3be58fc6833375b9cfe9c900609c1c"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "6448cf42df73d3c54589a63a6723294c"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "cee6ca69300cf00a60e30b1eb1125f60"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "150233c06ac1f02e27878df802271771"
  },
  {
    "url": "video/index.html",
    "revision": "f93a28367fde8a3a263832f44f7f286e"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "5535136418fb969d412eee4cd7eeb8c9"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "0993426c12335f0b0c50d2eba5a776ea"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "2cef613ed8ad815783d3aaa9c3125199"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "bda6d01d2255fbbddbbc73310d0b8038"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "e735d5e852419a0849f1fb1292e10b42"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "e735d5e852419a0849f1fb1292e10b42"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "e735d5e852419a0849f1fb1292e10b42"
  },
  {
    "url": "work/index.html",
    "revision": "ee7ae02e2afdc1a041625c8fe70f0493"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator",
    "revision": "754db5eb2fdf181555aa078165b89ae7"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui",
    "revision": "5e55488e2debefcaf6279eed44e3d9bf"
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
