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
    "revision": "d17b9ecc0dcdbd3d3877beff7ab73cb0"
  },
  {
    "url": "404/index.html",
    "revision": "d17b9ecc0dcdbd3d3877beff7ab73cb0"
  },
  {
    "url": "about/index.html",
    "revision": "c44806138234748ce00e442cd17a6d24"
  },
  {
    "url": "assets/css/0.styles.9782bb09.css",
    "revision": "35c9b35fd56dbff74e6edcde17d0ad30"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "6986f90c46ff2603e3c0231018dac013"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "3a4a4e95e8415ff71a4e887c4cdfa854"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "3b36fc0e273cbc2cfea844ec8d43cec6"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/index.json",
    "revision": "7b87954f2c7418344f9f3b651bfe3db6"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "cdeef0171cb41033a719346065abcfe4"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "f3a8efd0eb969ac8b4af653e49521b5b"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "8752f3c367e963494dfa3c9825016416"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "605d3e9444cca043a71b492948b78e5a"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "e99ccd559542642d69aacc65ee6266bc"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "d17a398cdff91195e7d0fa73fc20409b"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "717479ca8f73f69972d7496e26928f19"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "4ff35aec102878b9e97b8e6ead8b36d6"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "5d725d403628fe96785b205323320bb7"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "11baa60dafaa92e30990a226c0b00142"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "88c2d6ed1f77a537caa9452bdf69f25f"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "c4832d25403ade0e1e604217831a6e10"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "81fe35b0d99db88e3f1214adf234585e"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "7082e737629053a6cdb69c4650e22163"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "7082e737629053a6cdb69c4650e22163"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "7082e737629053a6cdb69c4650e22163"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "182797cf32d6fc6d1f5f7a5e7fdd6463"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.622a1640.js",
    "revision": "8aae2460fd112fad494d092219db498b"
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
    "revision": "91755cf511b650535a5a4f2388eb356a"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "7dc4e76c0846bcc5fff97b8311b5742d"
  },
  {
    "url": "blog/index.html",
    "revision": "90bdfac015fb9e9de894877b0c2bbde8"
  },
  {
    "url": "books/index.html",
    "revision": "31ae84c2abb794474e4f333084425e8f"
  },
  {
    "url": "contact/index.html",
    "revision": "030af3a81a908c28ccf2b9a380eb6415"
  },
  {
    "url": "courses/index.html",
    "revision": "c2840e18df457fdb1efda4461e56edbd"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "3f346af4dd13af5a2334d1e06300a5f0"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "25e08d595781cc57b1dbbaee5bc98abe"
  },
  {
    "url": "manifest.json",
    "revision": "a1a9c4abaf4ebb72d24f2fdda34720c4"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "ae07c197a8b92667800900d6c27389dd"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "31ab91c0ed475f478cf3238c3d0fc064"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "dfb70a0dbd712afa76dd300ee64cbd26"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "2833ab568a812cbb1a23b4c69b604933"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "709e8cb121c64d1f9c8559687b03ca90"
  },
  {
    "url": "projects/index.html",
    "revision": "79dcbaf35ceb30f95ecb5fc2faccc040"
  },
  {
    "url": "search.json",
    "revision": "ba4147be035cd6566c9380fae6853f76"
  },
  {
    "url": "signup/index.html",
    "revision": "e4ce48faec12ac97b924b7ad5b5ac0da"
  },
  {
    "url": "speaking/index.html",
    "revision": "3272b1b21cc173d64ae658ec5ac1094c"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "2b359e8a1e6a69c6cb9c16fad4c4223a"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "f79938b4daef54709c365fc268547567"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "9ffaca6109a7e7302753a4d0fa8aa652"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "18c9220f2c4af12b2e5ad6c5537c042c"
  },
  {
    "url": "video/index.html",
    "revision": "1a0523ef2650908a03b72fe85a41cb48"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "98d9492b2d4a48442a47f18dbdab3a34"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "d238f3b86071c831dc22cf2e46a70f11"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "a1ab4afa8bb6b4fa3a5393c83298783d"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "fe5dc7f70d30637594fb26c0bf3a6210"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "e3d318ea3dc5a2cdf70dd8190bcd6351"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "e3d318ea3dc5a2cdf70dd8190bcd6351"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "e3d318ea3dc5a2cdf70dd8190bcd6351"
  },
  {
    "url": "work/index.html",
    "revision": "c51ef56bf9cb0fa893f500ba2ea698ed"
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
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
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
    "url": "speaking",
    "revision": "1ae8c756be3d71d951ca07c3d97706d2"
  },
  {
    "url": "signup",
    "revision": "15b0a5cec4ab2fcb3f22627cf9387e1b"
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
