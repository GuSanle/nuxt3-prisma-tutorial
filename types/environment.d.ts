export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_AUTH_SECRET: string;
      NODE_ENV: string;
      DATABASE_URL: string;
      KINTONE_API_TOKEN: string;
      ADMIN_PASSWORD: string;
    }
  }
}
