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
    "revision": "315da7d20282fa4e803cbea5fd6a8fc8"
  },
  {
    "url": "404/index.html",
    "revision": "315da7d20282fa4e803cbea5fd6a8fc8"
  },
  {
    "url": "about/index.html",
    "revision": "91872d34c30ac890bf0ac79dea45934f"
  },
  {
    "url": "assets/css/0.styles.977eab2b.css",
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
    "url": "assets/data/1/5d8b93ac.json",
    "revision": "4699a81774d4cdd669d0893d049635b1"
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
    "url": "assets/data/1/7f809913.json",
    "revision": "da1de44e7c4710018f14c3eb04e40664"
  },
  {
    "url": "assets/data/1/9abd39a8.json",
    "revision": "c35f58868969c80cd151fb9eab31019b"
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
    "url": "assets/js/app.e0e72dfe.js",
    "revision": "7ba3ba97ef6ef1ce2498f49e869561b4"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.4202bf5b.js",
    "revision": "c162de9cd65c2aca931eb30c982be807"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.264c777d.js",
    "revision": "bafd899e178c3d39c623cc0caac84b2a"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.2772d206.js",
    "revision": "bb833271e2953d631cacf7406ba7b1cf"
  },
  {
    "url": "assets/js/page--src--pages--books-vue.e3a2bd36.js",
    "revision": "36b27babebb872d56b5afd00e4e1cde1"
  },
  {
    "url": "assets/js/page--src--pages--courses--index-vue.7a1ff72a.js",
    "revision": "26c26abb7c977201ab3aa0553cd78d1d"
  },
  {
    "url": "assets/js/page--src--pages--courses--intro-to-vue--signup-vue.d86a144f.js",
    "revision": "18d16cd561d60dcb2ca7f1c6f2a8f528"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.2d3de9c2.js",
    "revision": "fe753c51c8da5958ffc28cf39fe447d9"
  },
  {
    "url": "assets/js/page--src--pages--projects-vue.a6d52dc5.js",
    "revision": "0b0108ff5771e6e2d91df74cb3231cbb"
  },
  {
    "url": "assets/js/page--src--pages--signup-vue.5115c5d7.js",
    "revision": "2a0d814925b30ba55321d590d5200ffb"
  },
  {
    "url": "assets/js/page--src--pages--speaking-vue.c822f1e0.js",
    "revision": "939b630a888e1c2ba08e2a4715138155"
  },
  {
    "url": "assets/js/page--src--pages--subscribe-thank-you-vue.98c8f068.js",
    "revision": "9e3a3084d4f71ed3a9ef8c5589f68947"
  },
  {
    "url": "assets/js/page--src--pages--video-vue.86a35b70.js",
    "revision": "9de1220a37ef396efac2dbfa184c4fb2"
  },
  {
    "url": "assets/js/page--src--pages--work--index-vue.f240db0e.js",
    "revision": "79f3ad3db6e07ca01b70ab3313afeb56"
  },
  {
    "url": "assets/js/page--src--templates--newsletter-vue.145feabb.js",
    "revision": "15021a4a03d95441296b3406f72b23fe"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.01292dc3.js",
    "revision": "8670139bf240f81a09dc29fa3630d451"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.e930f6bc.js",
    "revision": "8a583e1689d43f4a4af7d001d03735e5"
  },
  {
    "url": "assets/js/vendors~page--src--templates--post-vue.9fcb6006.js",
    "revision": "32109f67d5fc179e16d7f2e273255f26"
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
    "revision": "a8aff0fc9e474f9057d9a331217601f1"
  },
  {
    "url": "blog/2019/08/08/react-native-tutorial-home-ui-youtube-app-only-ui/index.html",
    "revision": "3742bf6481ce5cc53859c34f6524f723"
  },
  {
    "url": "blog/2019/08/27/gatsby-adalah-generator-situs-statis-yang-menggunakan-react-dan-graph-ql/index.html",
    "revision": "e076e9c8e5f933174f2bc14d4d13b928"
  },
  {
    "url": "blog/index.html",
    "revision": "74486c851d0d6454dd3c161470dcbdb8"
  },
  {
    "url": "books/index.html",
    "revision": "4efad5b155f77174a3cfbcf9eb506dae"
  },
  {
    "url": "courses/index.html",
    "revision": "728c395e8a3f94e7e69c50382e5c8c4a"
  },
  {
    "url": "courses/intro-to-vue/signup/index.html",
    "revision": "c6decb9bca1b9faf85efc3ff26186cfb"
  },
  {
    "url": "images/danvega_dev_cover.png",
    "revision": "8d0c686877226553e844d871bb8cd829"
  },
  {
    "url": "index.html",
    "revision": "a6d56c2f7a70ae4b53156c508af56502"
  },
  {
    "url": "manifest.json",
    "revision": "30509ebe709e178ac56efe45706d7145"
  },
  {
    "url": "newsletter/2019/07/28/coffee-and-code-01/index.html",
    "revision": "612ead96cd209abf1a1a801e999d966c"
  },
  {
    "url": "newsletter/2019/08/04/coffee-and-code-02/index.html",
    "revision": "38a2c059dac9fe55826587e9655d972e"
  },
  {
    "url": "newsletter/2019/08/11/coffee-and-code-03/index.html",
    "revision": "62b6a6b629b33f2964d5395f64a819cf"
  },
  {
    "url": "newsletter/2019/08/18/coffee-and-code-04/index.html",
    "revision": "5237f4ce22264bf28dc4005383d81026"
  },
  {
    "url": "newsletter/2019/08/25/coffee-and-code-05/index.html",
    "revision": "5635b9be0c871eb5fe4ae34a3a00a87f"
  },
  {
    "url": "projects/index.html",
    "revision": "068f163fb6d678289edf871fa5482bae"
  },
  {
    "url": "search.json",
    "revision": "4fa6c4d2b22a969585ddbee9de0371d7"
  },
  {
    "url": "signup/index.html",
    "revision": "cf8f10427cfb23f19f2bba5a723baeca"
  },
  {
    "url": "speaking/index.html",
    "revision": "956e1f4c10ae12a446758fd4f5b70c48"
  },
  {
    "url": "subscribe-thank-you/index.html",
    "revision": "68a8e34cef288be63bd049046349b3ff"
  },
  {
    "url": "tag/gatsby/index.html",
    "revision": "1cafc57655d247469b266fd2e55f920e"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "af635cceba0d557fa7c1dfe33399f8a7"
  },
  {
    "url": "tag/react-native/index.html",
    "revision": "4df64cc2c67931c143181d2e28a1dbec"
  },
  {
    "url": "tag/speed-coding/index.html",
    "revision": "b8eafeb5df43e3535cd583885f4082c6"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "4e45af5996ccb64d716f3d8a6272ef98"
  },
  {
    "url": "video/index.html",
    "revision": "c0631c58c395512721769994e5cc0dd6"
  },
  {
    "url": "work/index.html",
    "revision": "82f1f3238a1a3a5b7cffeeedb3119c9a"
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
    "url": "tag/speed-coding",
    "revision": "46720c0641c9f082ef3a58ff79f859c1"
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
    "url": "tag/react-native",
    "revision": "033993b7ef4bfb9463d965636fb3af58"
  },
  {
    "url": "blog/2019/08/08/cara-membuat-blog-dengan-hexo-dan-hosting-github-page",
    "revision": "e11b72d4f779e2f41cf52ac0c02d82a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
