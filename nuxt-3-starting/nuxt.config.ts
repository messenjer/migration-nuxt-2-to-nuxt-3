// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
    // Note: `public` is exposed on both client and server
    public: {
      apiURL: 'https://jsonplaceholder.typicode.com'
    }
  },
  app: {
    head: {
      title: 'Nuxt.js 3 starting project',
      meta: [{ name: 'description', content: 'Nuxt.js 3 project' }]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/main.css']
});
