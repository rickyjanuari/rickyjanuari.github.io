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
    "revision": "6446525cf57b3e42ea6a5562e26b7b1c"
  },
  {
    "url": "404/index.html",
    "revision": "6446525cf57b3e42ea6a5562e26b7b1c"
  },
  {
    "url": "about/index.html",
    "revision": "c0806af3e456f7864b1f458bfc03e902"
  },
  {
    "url": "assets/css/0.styles.cea877c7.css",
    "revision": "5d4eb6aa08fa5615693c2ebf9a20785a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "6c6ce45c5a9756179a808c9d0e38d063"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "c2ca1f50a1f57b1c3be4b03595c260ec"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "47824527927d9d085eb821e6f178b493"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/index.json",
    "revision": "362590999898f78282902ebe50bb656b"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "68fcd3afc8d2d7e566c51cb6950db345"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "0d6df572be2851a9278b51899b9f2ad0"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "d1d96365bf05c4e32a703c4cde005c76"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "fc571b70d71bfa152114e71902b5bdc1"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "86e1fd75ae488e80d4110c4f8ee9327b"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "c7fb164747ae19af658ed9d22d3981a9"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "a7be377a5ff102b98de73b0e84309888"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "37536f9ee97aa7e576f883dfbae59796"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "63bdcfa0278ce0c3cc5cb6b35805c7f5"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "1ea70ab6cec6ff6342a304d86918353b"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "b437bb400f7d06f49069857ff039287d"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "b78a116bc3768f5ffc6925f303e8a814"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "f377eb59d8d164798bde7d43f6c6b028"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "4b0d31658c80b4e0705904a4c35ad97b"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "4b0d31658c80b4e0705904a4c35ad97b"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "4b0d31658c80b4e0705904a4c35ad97b"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "a8af26df296dc73d94f540c026c1329f"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/2.3002b226.js",
    "revision": "6e393ec32adaec2bd29d108ddf7cac8a"
  },
  {
    "url": "assets/js/app.ec3412a4.js",
    "revision": "c1efbbbbdccf4a3850f1edffc26fbe29"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.c0a7488c.js",
    "revision": "b99624ce4b0724dc8d8fcf53d600746f"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.8d154b40.js",
    "revision": "d1b8bd0a621ab340d940e34d42bc1ac4"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.6ef7b456.js",
    "revision": "59f2459f5324e2b8a21e624971d5e137"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.24def041.js",
    "revision": "fedc9b5f47df77f7f9bf6d93a85fcf02"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.0f216510.js",
    "revision": "d16f7f206f2005fcd80d4a2c8e11fe32"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.e52d8c98.js",
    "revision": "d3aaca90392369dd9493495216178ab3"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.3a63aa9d.js",
    "revision": "7585d3a2865e6effa5812847294c63f7"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.f90457dd.js",
    "revision": "14a0aa1c0956bd124dc4df98025e4890"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.e1873388.js",
    "revision": "4bcf2a8172c910a2ed9132e63e7ac40e"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.b74723db.js",
    "revision": "3667c80fc99e4acd43a28e615626c12d"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.88a1e771.js",
    "revision": "2d5a70aa2bc51c189617de3d5aa8d3d7"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.1e38e8d8.js",
    "revision": "e2b483ee77bb02c2c7899a1949242238"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.566cd319.js",
    "revision": "6d40711dfb00b18eca591ef5bfb75136"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.7efe574a.js",
    "revision": "f1b78acc5ea8dac57f43bbabae94977b"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.e6b6646c.js",
    "revision": "94800cd888800f4804b8af04f28174f0"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.a071d9a1.js",
    "revision": "77f811e4fa96cbbe3302b8bfbbec864c"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.cd7f2380.js",
    "revision": "cebae85832c7a3637a4855802bde06e9"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.47697de9.js",
    "revision": "ed7baeb4636789113fd50ee9056ed322"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.b37b2a4f.js",
    "revision": "f1b7d2873e295ce419b3bf3de032989e"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.f4783ca0.js",
    "revision": "941db2a5b54c789fcf2031fa56c964ba"
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
    "url": "assets/static/website-rebuilt-in-gatsbyjs.1b91758.aa4b1298a554fa07edc77c6a9c28d351.png",
    "revision": "575a26d09d34512f866f16bb2f351f92"
  },
  {
    "url": "assets/static/website-rebuilt-in-gatsbyjs.255899d.aa4b1298a554fa07edc77c6a9c28d351.png",
    "revision": "bfbe1939b8cf045678cf3780b4c57939"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.html",
    "revision": "f335e579319cb71ef31a1c1e6e17137e"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "90dee0eca5de51167ac56d850cc9b984"
  },
  {
    "url": "blog/index.html",
    "revision": "a75ce6a7279b219b67052f801cdc400a"
  },
  {
    "url": "blog/website-rebuilt-in-gatsbyjs.png",
    "revision": "aa4b1298a554fa07edc77c6a9c28d351"
  },
  {
    "url": "books/index.html",
    "revision": "bc15c967e358a18312a0d0a343dcf5b9"
  },
  {
    "url": "contact/index.html",
    "revision": "b8182c2ecd3a38ba0979fc75aa8fa068"
  },
  {
    "url": "courses/index.html",
    "revision": "4097304a50d5b5d7f61749d26c80249a"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "805904a7cb4463f1c5a3993be15b046e"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "ecde6372c88f718b6c7e7b5c0c4dc4cb"
  },
  {
    "url": "manifest.json",
    "revision": "eef4fba368bd886cf5ffdde7d3a1f01f"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "4604ad89d0be475224579e3c09d5039c"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "dffcde448ef96b85c9c85ad0653212a7"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "4c5d8207a49061f0214ce106fd865f04"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "45d55ac7bd574f9e4deedff7257fdaa3"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "aeb4b72bf9ac5ccf2037619f95b2795f"
  },
  {
    "url": "projects/index.html",
    "revision": "a9c7878caf5a832d5ae2cf51ed268f4c"
  },
  {
    "url": "search.json",
    "revision": "ba4147be035cd6566c9380fae6853f76"
  },
  {
    "url": "signup/index.html",
    "revision": "ac68fd66c6ee16eed0bbf43abc34d4bc"
  },
  {
    "url": "speaking/index.html",
    "revision": "a6deb10ae810795513893eedce194158"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "75eeeb53ca4d24975ffd5074e3d55df6"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "7b396416aee5b636ed20c0822a5000ef"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "e566b4b05758ae885ebe3f8593ebdc23"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "23a7eec978fa49d8ab619487ca80f940"
  },
  {
    "url": "video/index.html",
    "revision": "8aa66b17fa923073b882d9af146f126f"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "2c26078fb31bbc318fde85673420545f"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "721c859ffe099aa1dd50f5198c755666"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "c734559b2d6681fc332d89048114ae0f"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "883e69973d4ab8314efff5f3889030cf"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "ecb7ad029f9ddd14c262d7cd560fac72"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "ecb7ad029f9ddd14c262d7cd560fac72"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "ecb7ad029f9ddd14c262d7cd560fac72"
  },
  {
    "url": "work/index.html",
    "revision": "5c31a2c5c5a8b60e36fb5d7940a1a00d"
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
