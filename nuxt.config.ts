// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  // SSG Configuration - for static generation use 'nuxt generate'
  nitro: {
    static: true,
    prerender: {
      routes: ['/', '/about', '/projects', '/roadmap', '/contact'],
      crawlLinks: true
    }
  },

  // Enable SSR for proper hydration
  ssr: true,

  // App Configuration
  app: {
    head: {
      title: 'Deepcomet AI — Accelerating Civilization\'s Future',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Deepcomet AI is redefining neural computation. From the Aurelia systems programming language to the Zenith Kernel and SkyOS.' },
        { name: 'theme-color', content: '#0a0f1a' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // Build Configuration
  build: {
    transpile: []
  }
})