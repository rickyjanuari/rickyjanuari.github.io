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
    "revision": "50a80febfe01a2b04bdf20c60f0db52e"
  },
  {
    "url": "404/index.html",
    "revision": "50a80febfe01a2b04bdf20c60f0db52e"
  },
  {
    "url": "about/index.html",
    "revision": "2bdf2cb4c94d92813a33bb1c0bfc3e34"
  },
  {
    "url": "assets/css/0.styles.871f92ab.css",
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
    "url": "assets/data/1/da01733c.json",
    "revision": "6bf2cc3d4b32c54211fc4ebc942342aa"
  },
  {
    "url": "assets/img/course_signup_bg.d6ef0948.png",
    "revision": "d6ef09483257c93c3b48ca94a6da23db"
  },
  {
    "url": "assets/js/app.1a522230.js",
    "revision": "ee228f38fae69e9972c347270bc9aa8c"
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
    "url": "assets/js/page--src--pages--blog-vue.a1f275f9.js",
    "revision": "870b3cfae5d0825b7529403a2c342d9b"
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
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.d9874c6b.js",
    "revision": "03076b585c306ad6ef2dbd9a55899747"
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
    "url": "assets/js/page--src--pages--video-vue.9311e048.js",
    "revision": "19b2805002e61d330671cb8e486b2f20"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.38e168ea.js",
    "revision": "b19d417ad3e456eb9cfdb0bd1a2b9b8c"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.943cd671.js",
    "revision": "a4519aae69fdd6f63d964d452683bcbd"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.30edb84f.js",
    "revision": "8aea091759aeb5fd10e6504b5877a28c"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.e8fc1124.js",
    "revision": "8ab6e791bf14ebc3e7b41b1a65d1837b"
  },
  {
    "url": "assets/js/page--src--templates--video-tag-vue.61eda466.js",
    "revision": "7c3a9a2f46bfcd265e525ec243d34d0d"
  },
  {
    "url": "assets/js/page--src--templates--video-vue.1ea54811.js",
    "revision": "56bccd5477907a78d9e771f25aaa4766"
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
    "revision": "d54b0458294aecf5a1fd33c5ac895445"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "b4659620f03d8f6cc067f3a14c832d82"
  },
  {
    "url": "blog/index.html",
    "revision": "b8e90edc4aa00a308f2bc4a615db5036"
  },
  {
    "url": "books/index.html",
    "revision": "8602c94aa4a2c2d9f0a2882d6a4f1d0f"
  },
  {
    "url": "contact/index.html",
    "revision": "627c818ea8a3744681c9e2c8083765e0"
  },
  {
    "url": "courses/index.html",
    "revision": "fbac419f0792a424e76f4e561a2088f8"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "2b9e2b8f0cd46910a7603fded70918b8"
  },
  {
    "url": "images/rickyjanuari_cover.png",
    "revision": "636e1646f85fc08974dcf69d075d3851"
  },
  {
    "url": "index.html",
    "revision": "86f0cd2d6aaca601a22d84351f38929e"
  },
  {
    "url": "manifest.json",
    "revision": "30509ebe709e178ac56efe45706d7145"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "46b080326c91bec2f91ed7334472431d"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "77622708db788e4638af053c0c9ac6c0"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "f4d21ae4c64195074b79cb75a01f5dbd"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "038e457db075d52a46550e02c5e03a74"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "7c86b6ec4f66c5f146b447713ea21274"
  },
  {
    "url": "projects/index.html",
    "revision": "9ed2837d56f7c9fb1bc30f7c9d7ca3ca"
  },
  {
    "url": "search.json",
    "revision": "e7d62fa069435526a393d6e014193252"
  },
  {
    "url": "signup/index.html",
    "revision": "7218821ed8a231290994f265cd4896c9"
  },
  {
    "url": "speaking/index.html",
    "revision": "5e5b839ba79b82daee968f03cb08246d"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "36c4f052af2154b69b2719ed47e4a83e"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "038d3e8f09469798328cdf2103788511"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "8f6406f1cc6d8cedeb85fafab64e828d"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "dc4eb1ddf3b4caf7341e257295c27f9a"
  },
  {
    "url": "video/index.html",
    "revision": "6b2b36d7e7d23a37dd67adc226508e8e"
  },
  {
    "url": "video/part-2-instagram-ui-tutorial-with-react-native-layout-ui-series-menu-tab-navigator/index.html",
    "revision": "ae520fdaf5f2a424fb6b64e694364566"
  },
  {
    "url": "video/part-3-stories-ui-instagram-tutorial-with-react-native-only-ui/index.html",
    "revision": "7692545d67811b0b2521537b0cfc42d1"
  },
  {
    "url": "video/part1-instagram-ui-tutorial-with-react-native-installing-react-native/index.html",
    "revision": "c7924c3c142b612a52bfbf88522faa97"
  },
  {
    "url": "video/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "44d0f7e18925154b5ee90a5cde959262"
  },
  {
    "url": "video/tag/react-native/index.html",
    "revision": "a338a4592a498d9ac30457f2000549c6"
  },
  {
    "url": "video/tag/react/index.html",
    "revision": "a338a4592a498d9ac30457f2000549c6"
  },
  {
    "url": "video/tag/speed-coding/index.html",
    "revision": "a338a4592a498d9ac30457f2000549c6"
  },
  {
    "url": "work/index.html",
    "revision": "20a530dd417690adbc46f45bd0d83da1"
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
    "url": "video/tag/react-native",
    "revision": "e9dd05d906c24d83117dc8ba1576d84c"
  },
  {
    "url": "video/tag/speed-coding",
    "revision": "c1ab116f9435fbbe73da09d49aeee19a"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03",
    "revision": "89904d45eefd2699b94cd2b08e9341af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
