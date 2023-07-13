// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@sidebase/nuxt-auth", "@element-plus/nuxt"],
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
    basePath: "/api/auth",
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    authSecret: process.env.NUXT_AUTH_SECRET,
  },
});
