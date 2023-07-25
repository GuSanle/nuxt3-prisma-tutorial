export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log("出错", error);
    console.log("上下文", context);
    showError("出错了");
    // throw createError("出错了");
    // const router = useRouter();
    // router.push({ path: "/404" });
  };
});
