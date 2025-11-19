import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-11-18",
  devtools: { enabled: true },

  modules: ["@nuxt/fonts"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [{ name: "Inter", provider: "google", weights: [400, 500, 700, 900] }],
  },

  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],

  app: {
    head: {
      title: "Reyhane Ebrahiminasab",
      htmlAttrs: {
        lang: "en",
        class: "dark",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/images/logo.png" }],
    },
  },
});
