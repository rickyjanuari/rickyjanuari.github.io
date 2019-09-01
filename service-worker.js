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
    "revision": "f627091c870daa3331e6cb4410284b53"
  },
  {
    "url": "404/index.html",
    "revision": "f627091c870daa3331e6cb4410284b53"
  },
  {
    "url": "about/index.html",
    "revision": "ef32c9846719496caf164711c849cf21"
  },
  {
    "url": "assets/css/0.styles.e28fb30a.css",
    "revision": "cb37742a111973d46b0d8a746f0f96bc"
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
    "url": "assets/data/1/18e9bee6.json",
    "revision": "9dd3fea4974d7a38ecd11d3e8b646718"
  },
  {
    "url": "assets/data/1/1cc0906e.json",
    "revision": "723153ab6434070cddc13c8c6150fb10"
  },
  {
    "url": "assets/data/1/33552fc8.json",
    "revision": "a767a28c52b97a3c61c6299bf1e8bf25"
  },
  {
    "url": "assets/data/1/3c5c6d4c.json",
    "revision": "a635950eebd7ca6240564b4d99c59381"
  },
  {
    "url": "assets/data/1/3cd37de9.json",
    "revision": "9a464e15ab362473a214ad65d7bad03e"
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
    "url": "assets/data/1/62527365.json",
    "revision": "56e29f3898f64735ff139e3b462e51cb"
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
    "url": "assets/data/1/cc90f246.json",
    "revision": "72a26e0f8e16cf0303099a0c63eb0966"
  },
  {
    "url": "assets/data/1/d0ca5d4c.json",
    "revision": "4ec41e7587af007f5d3677ea7cf5460a"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.ed3dba48.js",
    "revision": "98e442e1dfb2e0ff16571fdbd6019d3d"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.f64aa150.js",
    "revision": "185e69b9a7d362e03442d687d0c1896f"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.767b4fd2.js",
    "revision": "29c895497e4c06e44239fb00116b4423"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.d17085a8.js",
    "revision": "324428b4f2fde1c5da6cdc6ed1cdb43f"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.719985a9.js",
    "revision": "8cd48d3bf53074747f7fb21de7ff3256"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.d1ec9781.js",
    "revision": "018d3d84f20fd10851dca5a5d2b64c36"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.337137ea.js",
    "revision": "e27ad2108d8c49d32e1241ccb3fdf2f5"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.fcb267f1.js",
    "revision": "1eb06ea54269ee51a474cceedd6c38ec"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.dd18169b.js",
    "revision": "c9b7bb40335b005e26fd9dbf9b34ee09"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.def8addb.js",
    "revision": "f5e24adfbc4ade120f4ce68810ed8768"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.da43303a.js",
    "revision": "e6b65a60163f7db0b5db9c72114930dc"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.7facdf96.js",
    "revision": "644025b4afbc6c06f062d09fd7b6b77d"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.614b855d.js",
    "revision": "da07ccd03a723eecd7e39d5664928593"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.111c9c69.js",
    "revision": "20577ec1e9fadd88edb2b30e14365a68"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.38e168ea.js",
    "revision": "b19d417ad3e456eb9cfdb0bd1a2b9b8c"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.ccfe839b.js",
    "revision": "e4f698d41d24b16f382d6f9d8bc10ccc"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.707eed11.js",
    "revision": "1b0fd5b8c1c13bc472795915fc09c092"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.61e14292.js",
    "revision": "d4f3e4213ae5d9cf2bf5aae2f610a914"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.5f088f6e.js",
    "revision": "3ab4b82ef7dbb4c719eef2d57b6d8e7c"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.2efa4275.js",
    "revision": "1bb4ff084d55ec32a24536c94242da79"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.67b06256.js",
    "revision": "6b4450c18c9cc617ef9bfe0078c5357d"
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
    "revision": "f82a87123cb73329b7db645c626d6253"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "7cb2382469d709624b16e1ae1b66b2f8"
  },
  {
    "url": "blog/index.html",
    "revision": "0cd99cebfb7ef967da063dd8d40dab91"
  },
  {
    "url": "books/index.html",
    "revision": "899878724d180b374ed33e0d16eb44a9"
  },
  {
    "url": "contact/index.html",
    "revision": "ce14086121e9a75d7c2d531834f8b70a"
  },
  {
    "url": "courses/index.html",
    "revision": "db3241b342fab3eaed22649c07b6f2b9"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "e38dd0e0797b27870a33a28b1aeaca00"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "71c807a49686c9fa2f683402fae23046"
  },
  {
    "url": "manifest.json",
    "revision": "edfccea79a2118baf45c51cc8acc190f"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "3c1c802a24da685e62ef0e925dc269d8"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "254e63e4c5970d73abf5b6c684eb8021"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "ced7df29d678d784c72c04b810ccaed2"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "dc685d54f7be40e980da744a8e8c4583"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "87fd12c3e3b4443aa6c34f6e4a78a645"
  },
  {
    "url": "projects/index.html",
    "revision": "638231b1a65a182fd3d03873484f5f48"
  },
  {
    "url": "search.json",
    "revision": "d2c61b9761aceb8daee2fa68062f480e"
  },
  {
    "url": "signup/index.html",
    "revision": "ae65e7811ae70ab15d0866f9545c7578"
  },
  {
    "url": "speaking/index.html",
    "revision": "91f0d1d5db201cf68bca030bbb29f5a3"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "80db583a2d25dc518090db6e158b2d70"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "3230a765813772bb9ff15977ecd09f1f"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "da43b9e1b36798a0a29568bca78f87ec"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "3f000c45bf7cc42231b93fcdbda7e765"
  },
  {
    "url": "video/index.html",
    "revision": "0b04b0d62745c15fcf623cd9e875afbb"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "ad5d2febf571e9540595d6d54f1fa8e8"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "77b949a57fc5459bd4ac8553cbf922a1"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "0025febc237253f5999fa4df62e5d8b3"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "c5c601a9c5ae9d540e56830c6d722ef2"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "dd7c1d8035b8f1557a0194917ee946a7"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "dd7c1d8035b8f1557a0194917ee946a7"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "dd7c1d8035b8f1557a0194917ee946a7"
  },
  {
    "url": "work/index.html",
    "revision": "f0db323ce1736121302703b4ba1c24b6"
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
    "url": "contact",
    "revision": "8048a6aaa865ac645f16b02a79e059dc"
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
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  },
  {
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
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
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui",
    "revision": "80cba261bedd20f82cde0060d504c081"
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
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native",
    "revision": "80d8e01e564a24da31fa5a1a91bef6c0"
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
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
