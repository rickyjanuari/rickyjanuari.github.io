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
    "revision": "b1c3f6ab75c7c747221a41f8b48c7ca2"
  },
  {
    "url": "404/index.html",
    "revision": "b1c3f6ab75c7c747221a41f8b48c7ca2"
  },
  {
    "url": "about/index.html",
    "revision": "8cf9cfc0dbea6198edc93ba2dcb59df5"
  },
  {
    "url": "assets/css/0.styles.f8cb3f4b.css",
    "revision": "439b5129d4238fd18d17bf296503ec1b"
  },
  {
    "url": "assets/data/1/06fd18f8.json",
    "revision": "57b131c2585632c4c95e1952799fae02"
  },
  {
    "url": "assets/data/1/1cc0906e.json",
    "revision": "723153ab6434070cddc13c8c6150fb10"
  },
  {
    "url": "assets/data/1/2f6a9335.json",
    "revision": "86c8ce3e84f232ffa40b30f67fe9a527"
  },
  {
    "url": "assets/data/1/2fb68b87.json",
    "revision": "af732a640a269d752b1b998ba2e89a88"
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
    "url": "assets/data/1/46fe048f.json",
    "revision": "f46e37119efa8f43960c6312355e8c01"
  },
  {
    "url": "assets/data/1/5c78c286.json",
    "revision": "76bbd156fd6d7bb1c2543a2c4b869a0a"
  },
  {
    "url": "assets/data/1/63707845.json",
    "revision": "f5bc8a048b5aeeb9be85508ba67bc605"
  },
  {
    "url": "assets/data/1/6fe42904.json",
    "revision": "39aab457e206e1b068b80719872680fa"
  },
  {
    "url": "assets/data/1/79c4e00b.json",
    "revision": "b25eb154c57f65f0aee7d26565ab5837"
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
    "url": "assets/data/1/afc5908a.json",
    "revision": "0a308088f46f4c04ba55493567ccb01d"
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
    "url": "assets/js/app.41b7e760.js",
    "revision": "2ed5c07a5c8095171b1276e00b9df30a"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.2335f681.js",
    "revision": "89f6e34d0f97e789ddab45c7bc9fdf20"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.e3cd5950.js",
    "revision": "f03af54e1ba04f5115df565498738d30"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.2772d206.js",
    "revision": "bb833271e2953d631cacf7406ba7b1cf"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.147b4311.js",
    "revision": "b5d27f9c1691bba69bbed3045befe141"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.bbfcaf4a.js",
    "revision": "b4bbee705330fb5512d56b865e0bd349"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.535f4c12.js",
    "revision": "57bfe9b6c3b106649c24a95e098442be"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.54f443b9.js",
    "revision": "21cc54c1949957c2f4494f4cba18e449"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.96286c2c.js",
    "revision": "28c52e7032d7e203f6f14b59725f4ef1"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.4bcf17ca.js",
    "revision": "4e9b447316ddc99834a44c70b707404c"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.024f3f69.js",
    "revision": "9b159d0973cf6529522e30857d8a4f95"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.dc7d0832.js",
    "revision": "11e4ab2050e992a9691d15b1636a696c"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.1ac78e1c.js",
    "revision": "11635f73dbab429a6b80066f64de8527"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.7e869c28.js",
    "revision": "8693bebda22b48e274b07c1d5b509e68"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.9e67fe39.js",
    "revision": "181557c5d0b8b0f254cb0db5b0735f3c"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.d5b28fa6.js",
    "revision": "d0d0bd0a1067c698c1cb08d74142dc16"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.c670d1dd.js",
    "revision": "bdc13071643f7082e7793e790660e82b"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.1c4ad7e8.js",
    "revision": "58e0b6456b353a8db5994e41b319b3d6"
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
    "revision": "a8d835ebe1d6c6d9d0d916dfcf92a709"
  },
  {
    "url": "blog/2019/08/08/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "77ad892f98af848100c79073cc95193e"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "33c764c6620914b0c5e4cf74133c21f7"
  },
  {
    "url": "blog/index.html",
    "revision": "dc8fd34170f404683711325e1ef4f225"
  },
  {
    "url": "books/index.html",
    "revision": "43e89c0639ff4141cfdf8e8e8d8465a6"
  },
  {
    "url": "courses/index.html",
    "revision": "29ef4491727fefb0c5af2fd1def9091d"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "a9afa43b6a874a26756d446541c38c80"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "be437fbf0dd13089e62d262d07b8e38d"
  },
  {
    "url": "manifest.json",
    "revision": "30509ebe709e178ac56efe45706d7145"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "74508f50c94f4203ad60462f31ea7218"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "f83ddee2ba656e853bdcb543d9eb89c6"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "18113a44dbaabba27bea9eed28535b65"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "84179609a7fce831b7ddefab8ec256da"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "50fb28569821bfca0c4c32ed1c27ca52"
  },
  {
    "url": "projects/index.html",
    "revision": "51cdb14d1fdb37c202a6a943a99aae58"
  },
  {
    "url": "search.json",
    "revision": "4fa6c4d2b22a969585ddbee9de0371d7"
  },
  {
    "url": "signup/index.html",
    "revision": "20c1781520101af7699c739f772ebf33"
  },
  {
    "url": "speaking/index.html",
    "revision": "54858cc176136db08a06feca6644ef1b"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "5406b573911844b49d7d173658e89a73"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "dcfeda400344d9273726858ff8bd5210"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "13ad33ce1619724d792dc76ce94f3d5e"
  },
  {
    "url": "tag/react-native/index.html",
    "revision": "8190e7eb63573706e89b1ac94e72e87f"
  },
  {
    "url": "tag/speed-coding/index.html",
    "revision": "601e1ed8ff32bc281e051946173bdcaa"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "cc721ee588473debe3a2ed801aa67f25"
  },
  {
    "url": "video/index.html",
    "revision": "500e64a76d30a059991fb0cf5cf63f45"
  },
  {
    "url": "work/index.html",
    "revision": "1b153426d233e910f6f46e7d4109cceb"
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
    "url": "about",
    "revision": "a7224db13f3a49096aa27c1876d1a947"
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
    "url": "books",
    "revision": "2d3feee9ae5aaf10ffbc7e185dbb1f5c"
  },
  {
    "url": "subscribe-thank-you",
    "revision": "aa78749d96f9d6b64ca701798e5ff8b7"
  },
  {
    "url": "courses/intro-to-vue/signup",
    "revision": "953d035e3f55e2c5c4ded2061cacd75f"
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
    "url": "video",
    "revision": "aebcba7a51bf6f737d65ac82d526bb7d"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "tag/speed-coding",
    "revision": "46720c0641c9f082ef3a58ff79f859c1"
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
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
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
    "url": "blog/2019/08/08/react-native-tutorial-home-ui-youtube-app-only-ui",
    "revision": "07308d08684a3239b307b14b4ac90422"
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
    "url": "tag/react-native",
    "revision": "033993b7ef4bfb9463d965636fb3af58"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
