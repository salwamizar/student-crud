// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Data Siswa',
      titleTemplate: 'SMAN SUKA MAJU'
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],
  modules: ['@nuxt/fonts, @nuxt/tailwindcss'],
  fonts: {
    families: [
      { name: 'Outfit', weights: [100,200,300,400,500,600,700,800,900], provider: "google" }
    ]
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})