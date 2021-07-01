import getRoutes from './utils/getRoutes.js';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  mode: 'universal',
  target: 'static',

  server: {
    host: '192.168.1.3'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lakehouse Carpentry',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    pretitle: "Lakehouse Carpentry | ",
    copyright: 'Lakehouse Carpentry',
    base_url: "https://boring-bose-bd9f1b.netlify.app/"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-carousel.js' , mode: 'client'},
    { src: '@/plugins/global-components.js'},     
    { src: '@/plugins/vue-intersection.js'},
    { src: '@/plugins/vue-modal.js'},
    { src: '@/plugins/vee-validate.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs', 
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }] ,
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  markdownit: {
    runtime: true
  },


  // @NUXT/IMAGE options
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0,
      })
    },
    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },
    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }    
  },
  sitemap: {
    hostname: "https://boring-bose-bd9f1b.netlify.app/",
    routes() {
      return getRoutes();
    }
  },
  styleResources: {
    scss: [
      '@/assets/css/partials/_variables.scss'
    ]
  }
}
