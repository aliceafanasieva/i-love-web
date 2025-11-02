export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    nitro: {
    preset: 'netlify'
  }
})
