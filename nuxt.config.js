

const routes = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/blogg",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/kontakt",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/omoss",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/projekt",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/tjanster",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  },
  {
    url: "/policy",
    changefreq: "daily",
    priority: 1,
    lastmodISO: ""
  }
];

module.exports = {
  mode: "universal",
  routes: routes,
  generate: {
    fallback: "404.html",
  },
/*   buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-121315851-1'
    }]
  ],
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }, */
  /*
   ** Headers of the page
   */
  head: {
    title: "Rellow | Webb & Design",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Med bred kompetens inom, design och webbproduktion erbjuder vi allt från koncept, webbdesign, webbproduktion"
      },
      {
        name: "google-site-verification",
        content: "tU1pNQmReCvUry3nsFppsFry53nj9A87M8YTW5RzqVE"
      },
      { hid: "og:url", property: "og:url", content: "https://rellow.se" },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://d33wubrfki0l68.cloudfront.net/1804272da21d2cff66adb5add2f7a0c12abcc17d/cc1da/_nuxt/img/header-test2.1600bec.png"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Rellow - Webb & Design"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:site_name", property: "og:site_name", content: "Rellow" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Gör dig mer synlig på nätet med en snygg och funktionell hemsida."
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"
      },
      {
        src: "https://kit.fontawesome.com/c0cbddae0d.js",
        crossorigin: "anonymous"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        as: "style",
        href:
          'https://fonts.googleapis.com/css?family=Lato:400,700,900|Playfair+Display:400,700|Alice&display="swap"'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#71DDE3" },

  /*
   ** Global CSS
   */
  css: [
    { src: "~/assets/css/reboot.min.css", lang: "css" },
    { src: "~/assets/css/fonts.css", lang: "css" }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-scroll-reveal", ssr: false },
    { src: "~/plugins/ga.js", mode: 'client' },
    { src: "~/plugins/vee-validate.js", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    [
      "nuxt-imagemin",
      {
        optipng: { optimizationLevel: 5 },
        jpegtran: { optimizationLevel: 5 }
      }
    ],
    [
      "@nuxtjs/sitemap",
      {
        path: "/sitemap.xml",
        hostname: "https://rellow.se",
        generate: true,
        gzip: true,
        routes: routes
      }
    ],
    [
      "nuxt-validate",
      {
        lang: "sv"
      }
    ]
  ],
  manifest: {
    name: "Rellow",
    short_name: "Rellow",
    lang: "sv",
    display: "standalone",
    background_color: "#fff",
    description: "Rellows egna webbapp"
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
