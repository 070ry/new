// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-mdi'],
  css: ['@/assets/styles/main.scss'],
  ssr: true,
  target: 'static',
  devtools: { enabled: false },
});
