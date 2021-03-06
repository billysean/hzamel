// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require ("~/main.css")

import AOS from 'aos'
import 'aos/dist/aos.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  if (process.isClient) {
    AOS.init()
  }
}
