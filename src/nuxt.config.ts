// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    'nuxt-lodash',
  ],
  lodash: {
    prefix: '_',
    prefixSkip: false,
    upperAfterPrefix: false
  },
  plugins: [],
  imports: {
    dirs: ['stores', 'services']
  }
})
