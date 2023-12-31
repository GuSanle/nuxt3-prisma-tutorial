// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@sidebase/nuxt-auth",
    "@element-plus/nuxt",
    // "nuxt-security",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    origin: "http://localhost:3000",
    basePath: "/auth",
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    authSecret: process.env.NUXT_AUTH_SECRET,
  },
  css: ["@/assets/css/normalize.css"],
  app: {
    head: {
      title: "kintone开放平台",
    },
  },
});
