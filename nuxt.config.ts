import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-11-18',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/fonts'
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 700, 900] }
    ]
  },

  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],

  app: {
    head: {
      title: 'Reyhane Ebrahiminasab - Front-End Developer',
      htmlAttrs: {
        lang: 'en',
        class: 'dark'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        }
      ]
    }
  }
})