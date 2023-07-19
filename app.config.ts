export default defineAppConfig({
  protectedList: [/^\/user/],
  externalApiList: [/^\/api/],
  expiresIn: "30000000h",
});
