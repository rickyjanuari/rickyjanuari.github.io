// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import '~/assets/style/index.scss';

import DefaultLayout from '~/layouts/Default.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import VueFuse from 'vue-fuse'
import VueDisqus from 'vue-disqus'
import VueTypedJs from 'vue-typed-js'
export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueFuse)
  Vue.use(VueDisqus)
  Vue.use(VueTypedJs)

  Sentry.init({
    dsn: 'https://14a17033266f442b821e1f39a4ca90a8@sentry.io/1547349',
    integrations: [new Integrations.Vue({
      Vue,
      attachProps: true
    })],
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })

}
