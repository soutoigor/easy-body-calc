export default {
  head: {
    title: 'Easy Body Calc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: false,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  modules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {},
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
