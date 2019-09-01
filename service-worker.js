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
    "revision": "4915ab22b12583d7d0b0faa595e70273"
  },
  {
    "url": "404/index.html",
    "revision": "4915ab22b12583d7d0b0faa595e70273"
  },
  {
    "url": "about/index.html",
    "revision": "acc5605fd6816562cd5b71dd4661f9b5"
  },
  {
    "url": "assets/css/0.styles.0c1a7e6d.css",
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
    "url": "assets/data/1/7c41e498.json",
    "revision": "4d97e991128714a9d13c97a6d9822bf6"
  },
  {
    "url": "assets/data/1/81926f4a.json",
    "revision": "3bc8f40e269ae64c53477afe20a6e92d"
  },
  {
    "url": "assets/data/1/94ff6f00.json",
    "revision": "715d595815003dffe5936c1697a0c692"
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
    "url": "assets/data/1/eff8c54e.json",
    "revision": "4ee43d313da1fb1ceaa15fa1224a9050"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.00a4f5ff.js",
    "revision": "f39217f344b98e62cb3cbee90c2e192c"
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
    "url": "assets/js/page--src--pages--blog-vue.d17085a8.js",
    "revision": "324428b4f2fde1c5da6cdc6ed1cdb43f"
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
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.7fd7e5cf.js",
    "revision": "83962793675fd95cc13c118311621ec2"
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
    "url": "assets/js/page--src--pages--video-vue.111c9c69.js",
    "revision": "20577ec1e9fadd88edb2b30e14365a68"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.38e168ea.js",
    "revision": "b19d417ad3e456eb9cfdb0bd1a2b9b8c"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.70af563f.js",
    "revision": "e214b7b15487a65ed70f3caa643494dd"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.be1106f0.js",
    "revision": "73c60f178b99d25d00aadb2a570873e1"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.e8fc1124.js",
    "revision": "8ab6e791bf14ebc3e7b41b1a65d1837b"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.49b41a75.js",
    "revision": "9dd1f29fa49fb6aec2aefd537208cbe5"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.2584b4e0.js",
    "revision": "01b9ae2a64d9d0645f85a259ee0a0278"
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
    "revision": "796e0ca28bbd0cbd42a23b3a2f6a6b97"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "4b7496dfbcd4e221d0edabadc0ce7975"
  },
  {
    "url": "blog/index.html",
    "revision": "e7ea5bff2af04dc2a77580faf72bba94"
  },
  {
    "url": "books/index.html",
    "revision": "70a6869ccf40b426f004d7b70aa39171"
  },
  {
    "url": "contact/index.html",
    "revision": "7a497bc156f1a501a749c090ae4e725b"
  },
  {
    "url": "courses/index.html",
    "revision": "c563d8533347b3e02c361d6f2a5c84c5"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "02496346f4a9602e4cf6b575af605b30"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "d726263299627bdbaa4bef4c2b3593e4"
  },
  {
    "url": "manifest.json",
    "revision": "30509ebe709e178ac56efe45706d7145"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "48356a32ed86e4f9d0628946c342fb3a"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "c3ac587cce6a36e55e29c1a3d1bcf813"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "30003ac96d44fb7bd0257ae4e0894eb7"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "c0b3a1e9a8ed28c896f371a9a1b729f2"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "04635fcec28b11550c0a773fb34b46d1"
  },
  {
    "url": "projects/index.html",
    "revision": "bfe770d6ee06328618f6efb37c52346c"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "9d0522829c874dca6a8159b8634809ca"
  },
  {
    "url": "speaking/index.html",
    "revision": "d2c962063698d25dfadc1d91b06a55ce"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "9a1e83bf1058a167735766506f0ab62e"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "3ee7d6cdd1c4636b029e89a17ee4fee6"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "033c1337b5ea50dea1b853e396e03bee"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "a789e91e7c17e321458f1819d4a5b8a6"
  },
  {
    "url": "video/index.html",
    "revision": "49dc3ed179fc14be3dfe3698aa5469a2"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "ca17ed2a4efe2930e434c6be12043488"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "c36d3b3a2cad691244bcf4986446e853"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "1ccea5d4805df39dcba24a96288992e9"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "a1e4f628cc22c311f959d8f48e797079"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "2b82f308d436b73eeeab41972b86a7a0"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "2b82f308d436b73eeeab41972b86a7a0"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "2b82f308d436b73eeeab41972b86a7a0"
  },
  {
    "url": "work/index.html",
    "revision": "13e3f29ba77e6e6f7252e554050f0ed9"
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
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  },
  {
    "url": "video/tag/react",
    "revision": "4fc2db4da776bbf5b1d6dd659f58c300"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04",
    "revision": "ce4b46a36bf842937b09b583bffe05f0"
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
    "url": "newsletter/2019/08/04/coffee-and-code-02",
    "revision": "7417a1c3f26c37ae62d318ac6a979e6f"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05",
    "revision": "88fc86f6188e4a9d2dab7c3e48628af4"
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
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native",
    "revision": "80d8e01e564a24da31fa5a1a91bef6c0"
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
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
  },
  {
    "url": "video/tag/speed-coding",
    "revision": "c1ab116f9435fbbe73da09d49aeee19a"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql",
    "revision": "dee46eede77504155e1ef04c0686bd88"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
