// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/styles/custom.css'],
  devtools: { enabled: true },
  ssr: false,
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss", "vuetify-nuxt-module"],
});