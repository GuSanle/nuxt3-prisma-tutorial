const defaultSettings = {
  protectedList: [/^\/user/],
  externalApiList: [/^\/api/],
  expiresIn: "30000000h",
  title: "kintone开放平台",
  showSettings: true,
  tagsView: true,
  fixedHeader: false,
  sidebarLogo: true,
  layout: "left",
  theme: "dark",
  size: "default",
  language: "zh-cn",
};
export default defineAppConfig(defaultSettings);
