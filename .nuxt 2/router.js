import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _401c0d88 = () => interopDefault(import('../pages/blogg/index.vue' /* webpackChunkName: "pages/blogg/index" */))
const _ee5d503a = () => interopDefault(import('../pages/kontakt/index.vue' /* webpackChunkName: "pages/kontakt/index" */))
const _092a5df4 = () => interopDefault(import('../pages/omoss/index.vue' /* webpackChunkName: "pages/omoss/index" */))
const _6db4f1b6 = () => interopDefault(import('../pages/policy/index.vue' /* webpackChunkName: "pages/policy/index" */))
const _0215eb94 = () => interopDefault(import('../pages/projekt/index.vue' /* webpackChunkName: "pages/projekt/index" */))
const _271a2bc8 = () => interopDefault(import('../pages/tack/index.vue' /* webpackChunkName: "pages/tack/index" */))
const _c09888b8 = () => interopDefault(import('../pages/tjanster/index.vue' /* webpackChunkName: "pages/tjanster/index" */))
const _d642cc44 = () => interopDefault(import('../pages/projekt/exempel.vue' /* webpackChunkName: "pages/projekt/exempel" */))
const _3c1e49ad = () => interopDefault(import('../pages/projekt/tasjo.vue' /* webpackChunkName: "pages/projekt/tasjo" */))
const _5e271c7f = () => interopDefault(import('../pages/projekt/_id/index.vue' /* webpackChunkName: "pages/projekt/_id/index" */))
const _79712412 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/blogg",
      component: _401c0d88,
      name: "blogg"
    }, {
      path: "/kontakt",
      component: _ee5d503a,
      name: "kontakt"
    }, {
      path: "/omoss",
      component: _092a5df4,
      name: "omoss"
    }, {
      path: "/policy",
      component: _6db4f1b6,
      name: "policy"
    }, {
      path: "/projekt",
      component: _0215eb94,
      name: "projekt"
    }, {
      path: "/tack",
      component: _271a2bc8,
      name: "tack"
    }, {
      path: "/tjanster",
      component: _c09888b8,
      name: "tjanster"
    }, {
      path: "/projekt/exempel",
      component: _d642cc44,
      name: "projekt-exempel"
    }, {
      path: "/projekt/tasjo",
      component: _3c1e49ad,
      name: "projekt-tasjo"
    }, {
      path: "/projekt/:id",
      component: _5e271c7f,
      name: "projekt-id"
    }, {
      path: "/",
      component: _79712412,
      name: "index"
    }],

    fallback: false
  })
}
