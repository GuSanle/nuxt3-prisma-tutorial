type defaultSettings = {
  protectedList: RegExp[];
  externalApiList: RegExp[];
  expiresIn: string;
  title: string;
  showSettings: boolean;
  tagsView: boolean;
  fixedHeader: boolean;
  sidebarLogo: boolean;
  layout: string;
  theme: "dark" | "light";
  size: "default" | "large" | "small";
  language: "zh-cn" | "en";
};

const defaultSettings: defaultSettings = {
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
