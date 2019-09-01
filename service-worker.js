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
    "revision": "97ec9f664d77c4073f2d530457f2bb1e"
  },
  {
    "url": "404/index.html",
    "revision": "97ec9f664d77c4073f2d530457f2bb1e"
  },
  {
    "url": "about/index.html",
    "revision": "a9aa1e2248e1e4b0dc36640fc97c9d80"
  },
  {
    "url": "assets/css/0.styles.2e9d1448.css",
    "revision": "f7bfb92b7ac3a4169d0a06790c42931d"
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
    "url": "assets/data/1/a2c1edc4.json",
    "revision": "e3891052a731c4cbe487836fb52e4c2a"
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
    "url": "assets/js/app.31de5a61.js",
    "revision": "f3302929b521037242bc2b86e78b8fda"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.938ee504.js",
    "revision": "229e5e67a830e22733d46828a5d28033"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.fe3335a7.js",
    "revision": "b9bf1df282896270565269f45973ce08"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.a1f275f9.js",
    "revision": "870b3cfae5d0825b7529403a2c342d9b"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.8ee34c30.js",
    "revision": "02f69f5cd3af14e74f652c557963f3b3"
  },
  {
    "url": "assets/js/page--src--pages--contact-vue.6589934e.js",
    "revision": "0dba828ec7e63e5167ad7fc7c129bea1"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.ce27d060.js",
    "revision": "acc1c5e83674ae632bec5fb5f42de7b2"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.4a3d2e70.js",
    "revision": "8a719a26a967252fef52faf8904b220f"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.f2201b6e.js",
    "revision": "c22ac847138a816c61e4de534c12eebe"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.dc379d9a.js",
    "revision": "8801491e2ffe67a9a610810cd9211445"
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
    "url": "assets/js/page--src--pages--video-vue.9311e048.js",
    "revision": "19b2805002e61d330671cb8e486b2f20"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.38e168ea.js",
    "revision": "b19d417ad3e456eb9cfdb0bd1a2b9b8c"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.a81148f6.js",
    "revision": "aa4a196680233bc0da0e2e20d589d975"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.7d34e262.js",
    "revision": "cfd2b7fd36cab1a00f4210c8bc83dcee"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.61e14292.js",
    "revision": "d4f3e4213ae5d9cf2bf5aae2f610a914"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.61eda466.js",
    "revision": "7c3a9a2f46bfcd265e525ec243d34d0d"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.9b2fdc2e.js",
    "revision": "0f2b027d107aff69e55cfc78e11f0733"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue~page--src--templates--video-vue.9086d82f.js",
    "revision": "2c1aebfe75a06f7bc70824d614c6b098"
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
    "revision": "e295dbd56bf95b3c802dddce9e8d77fd"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "0babc78c3494e69297945ed96f87e19b"
  },
  {
    "url": "blog/index.html",
    "revision": "e1dacb8453ad5e6cfd4728e0dee2c7fc"
  },
  {
    "url": "books/index.html",
    "revision": "484fa00122b13ad090f164173f9973c2"
  },
  {
    "url": "contact/index.html",
    "revision": "04cacfc996eef1afc6a6436eb6b4be7b"
  },
  {
    "url": "courses/index.html",
    "revision": "4257705a3acbf94d12576b993e7102c0"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "d4928941256d32b2680d0722de855cd2"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "08f8b23a373cab0d99cdfd02e30ec80e"
  },
  {
    "url": "manifest.json",
    "revision": "edfccea79a2118baf45c51cc8acc190f"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "79244c725ea4621a7a8d20b7f394b8d7"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "34985f8bb39490784ea93e98c2098e8e"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "c107216a11b787d699435c491f650271"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "d3f66abadaf4e96fb6d7c4b7e39a4928"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "07d67f5e0b80a02c4ea7c0fc48ecb28c"
  },
  {
    "url": "projects/index.html",
    "revision": "401811fbfd8ed9c4af49bb897c6c813c"
  },
  {
    "url": "search.json",
    "revision": "d2c61b9761aceb8daee2fa68062f480e"
  },
  {
    "url": "signup/index.html",
    "revision": "5fcb2678151ef79dda64dfa15e57c5d2"
  },
  {
    "url": "speaking/index.html",
    "revision": "c4286c13330d75c3713afd624a5b5929"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "bb985b71b7b171989abc83b7d59226b2"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "98b360499510782d83bdf50e294b3c6d"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "45b78377adbaffe47024134ec3b345f5"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "9bc0e4f67bedbe1d63dba7a49756556d"
  },
  {
    "url": "video/index.html",
    "revision": "be81c347969adba4d8092b7098bbb3db"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "ba51272bcc68afe48d148e8f23d6ff6d"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "78085676f16e5d531bf59735f44bc7b0"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "8bbeaae040d27dd696018c4665fa87d8"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "406f04781cef4ec5c1120d004709ab85"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "cb72efd3e221495375673dc2ed9121ab"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "cb72efd3e221495375673dc2ed9121ab"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "cb72efd3e221495375673dc2ed9121ab"
  },
  {
    "url": "work/index.html",
    "revision": "953ab84159aaa7c066d0ef8f953088a7"
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
    "url": "video",
    "revision": "aebcba7a51bf6f737d65ac82d526bb7d"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01",
    "revision": "b49274c04385441f07bbd8919ad02a3a"
  },
  {
    "url": "video/tag/react",
    "revision": "4fc2db4da776bbf5b1d6dd659f58c300"
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
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator",
    "revision": "754db5eb2fdf181555aa078165b89ae7"
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
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
