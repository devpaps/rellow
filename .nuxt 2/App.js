import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/reboot.min.css'

import '../assets/css/fonts.css'

import _6f6c098b from '../layouts/default.vue'
import _77099790 from '../layouts/error-glitch.vue'

const layouts = { "_default": _6f6c098b,"_error-glitch": _77099790 }

export default {
  head: {"title":"Rellow | Webb & Design","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Med bred kompetens inom, design och webbproduktion erbjuder vi allt från koncept, webbdesign, webbproduktion"},{"name":"google-site-verification","content":"tU1pNQmReCvUry3nsFppsFry53nj9A87M8YTW5RzqVE"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Frellow.se"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fd33wubrfki0l68.cloudfront.net\u002F1804272da21d2cff66adb5add2f7a0c12abcc17d\u002Fcc1da\u002F_nuxt\u002Fimg\u002Fheader-test2.1600bec.png"},{"hid":"og:title","property":"og:title","content":"Rellow - Webb & Design"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","property":"og:site_name","content":"Rellow"},{"hid":"og:description","property":"og:description","content":"Gör dig mer synlig på nätet med en snygg och funktionell hemsida."},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Rellow"},{"hid":"author","name":"author","content":"Lars Jönsson"},{"hid":"theme-color","name":"theme-color","content":"#71DDE3"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fgsap\u002F2.0.2\u002FTweenMax.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Lato:400,700,900|Playfair+Display:400,700|Alice"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.e29745c8.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.9sUqctENVih.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.9sUqctENVih.png","sizes":"512x512"}],"style":[],"htmlAttrs":{"lang":"sv"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
