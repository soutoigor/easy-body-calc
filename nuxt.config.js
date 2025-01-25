export default {
  head: {
    title: 'Easy Body Calc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-818456123404801',
        crossorigin: 'anonymous',
        async: true,
      },
    ],
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
    icon: false,
    meta: {
      description: 'Here you can easily track your body measures',
    },
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
