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
    "revision": "6ac48189714e6f5df1d438508f47f937"
  },
  {
    "url": "404/index.html",
    "revision": "6ac48189714e6f5df1d438508f47f937"
  },
  {
    "url": "about/index.html",
    "revision": "6ea19a28001e31cc474b6bfcfff93c8d"
  },
  {
    "url": "assets/css/0.styles.4a861d3e.css",
    "revision": "1807cd2dbd65c0377140d12a7799bb42"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.json",
    "revision": "59e37e68eaf9edbb694a5a99a28106c9"
  },
  {
    "url": "assets/data/blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.json",
    "revision": "b1a7f98c9b386bf0cd77e859c617a51d"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "9c58312679d477828ec08f60870afcf7"
  },
  {
    "url": "assets/data/books/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/courses/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/courses/intro-to-vue/signup/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/index.json",
    "revision": "7e1ed02332bc2df8ecd8b2885bb83b2f"
  },
  {
    "url": "assets/data/newsletter/2019/07/28/coffee-and-code-01/index.json",
    "revision": "bda17f55ca2a8478109c24a1ae75c549"
  },
  {
    "url": "assets/data/newsletter/2019/08/04/coffee-and-code-02/index.json",
    "revision": "e3785037ddbdc32836d98edfbdb370db"
  },
  {
    "url": "assets/data/newsletter/2019/08/11/coffee-and-code-03/index.json",
    "revision": "de2a2088a76330bb9fa47e82d5a4ebf6"
  },
  {
    "url": "assets/data/newsletter/2019/08/18/coffee-and-code-04/index.json",
    "revision": "7fc36bbdbe7403dd4f3c5ac61a899053"
  },
  {
    "url": "assets/data/newsletter/2019/08/25/coffee-and-code-05/index.json",
    "revision": "24ebe2679ddbfdbac6b534aa1f5ede33"
  },
  {
    "url": "assets/data/projects/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/signup/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/speaking/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/subscribe-thank-you/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
  },
  {
    "url": "assets/data/tag/gatsby/index.json",
    "revision": "189ea093e2f3a8e3d4be33c79bb38def"
  },
  {
    "url": "assets/data/tag/hexo/index.json",
    "revision": "25d9a7f129adfca4eacd0de347141c62"
  },
  {
    "url": "assets/data/tag/tutorial/index.json",
    "revision": "918ed3f88efdec5f1a98f3afe3d74ed9"
  },
  {
    "url": "assets/data/video/index.json",
    "revision": "d7e1b3ca3931408769f412119912b619"
  },
  {
    "url": "assets/data/video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.json",
    "revision": "fb060f5a46165c13e8c5cb1dbe58d685"
  },
  {
    "url": "assets/data/video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.json",
    "revision": "86ad98cd400cb758edfb81b357294e5c"
  },
  {
    "url": "assets/data/video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.json",
    "revision": "768595e4c68d78693e1823ab84559898"
  },
  {
    "url": "assets/data/video/react-native-tutorial-home-ui-youtube-app-only-ui/index.json",
    "revision": "7f36104db9a65efbc38ad95c793fba43"
  },
  {
    "url": "assets/data/video/tag/react-native/index.json",
    "revision": "39ce6171044b2bf9891658252ade6820"
  },
  {
    "url": "assets/data/video/tag/react/index.json",
    "revision": "39ce6171044b2bf9891658252ade6820"
  },
  {
    "url": "assets/data/video/tag/speed-coding/index.json",
    "revision": "39ce6171044b2bf9891658252ade6820"
  },
  {
    "url": "assets/data/work/index.json",
    "revision": "cb45922dbe5e2ddda34ea78c9cc42654"
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
    "url": "assets/js/app.6a5e95c2.js",
    "revision": "41a709197cfb3e929a8857c0041a3429"
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
    "url": "assets/js/page--src--pages--index-vue.da109ba6.js",
    "revision": "ad512485f0393c4b8c36dace4991409a"
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
    "url": "assets/js/page--src--templates--post-vue.184361da.js",
    "revision": "43e68302e56289e6abc34f897e0c0044"
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
    "url": "assets/js/page--src--templates--video-vue.ae77c2b7.js",
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
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page/index.html",
    "revision": "7dfb5e95dcd42abb03c93c359be2c4db"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "fd8ede40f032ff6e6f538ccc65f21a40"
  },
  {
    "url": "blog/index.html",
    "revision": "4c2a2871aa92ca27a009be1f04b775c1"
  },
  {
    "url": "books/index.html",
    "revision": "ad543de7cf6ada963d55278b716e7413"
  },
  {
    "url": "contact/index.html",
    "revision": "5716d15aeb976b166a926b75f9140bfa"
  },
  {
    "url": "courses/index.html",
    "revision": "9bc37cbe04864ec3065f03a45e580cdd"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "4436352a1b9477114515de96a07b7ee7"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "2d7a16f5fe9d5d5c4a2ea21b2def4979"
  },
  {
    "url": "manifest.json",
    "revision": "a1a9c4abaf4ebb72d24f2fdda34720c4"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "b1905bf25977859fb37e44f62cdc7dcd"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "ab61466be92b660ae890cfbe15ed8f7f"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "3b1a1a8ff94bfb570de1ef8778250ea0"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "5429087ccf1b7e69c53da3e07a3e899b"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "dd19268a1a9fe61b7056fbc17f10c8d2"
  },
  {
    "url": "projects/index.html",
    "revision": "8c2f82f461cbd5dbcabf1cd9a794aec1"
  },
  {
    "url": "search.json",
    "revision": "ba4147be035cd6566c9380fae6853f76"
  },
  {
    "url": "signup/index.html",
    "revision": "960499c6e029dbbe5947cc42956aa142"
  },
  {
    "url": "speaking/index.html",
    "revision": "df794d64773db8189546b11d049138f1"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "c6068e3101cebad6881d57e37c0241ce"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "82fdc1caaf7a649b75ef02bfebdeb19e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "1480375a86e566f0af4510cdec129972"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "da15f6fac583cd202da42245bfa4b11a"
  },
  {
    "url": "video/index.html",
    "revision": "207ea045d9e4a96b79896871879da9d9"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "de94f6c677f89bf58902c491d530c984"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "995a22ac18c3016b9e658aaa3234980b"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "2c8eb5ddb18185fdcda06dad33336a0b"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "e62c8d6ebcfb8474ec6b8f490d2a9fc4"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "f2a893aa7b9f1d7263b600672da6d5ff"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "f2a893aa7b9f1d7263b600672da6d5ff"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "f2a893aa7b9f1d7263b600672da6d5ff"
  },
  {
    "url": "work/index.html",
    "revision": "b60d685b960452abcf912d217b10e123"
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
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
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
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native",
    "revision": "80d8e01e564a24da31fa5a1a91bef6c0"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui",
    "revision": "80cba261bedd20f82cde0060d504c081"
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
