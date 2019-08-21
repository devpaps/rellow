
import VueScrollReveal from 'vue-scroll-reveal';
import Vue from 'vue';
Vue.use(VueScrollReveal);

// You can also pass in default options
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '1000px',
  mobile: false,
  reset: false,
  easing: 'cubic-bezier(3.5, 0, 0, 1)',
});
