import { defineStore } from "pinia";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

// setup
export const useAppStore = defineStore(
  "app",
  () => {
    const { size: defaultSize, language: defaultLanguage } = useAppConfig();
    // state
    const device = ref("desktop");
    const size = ref(defaultSize);
    const language = ref(defaultLanguage);
    const sidebarStatus = ref("closed");
    const sidebar = reactive({
      opened: false,
      withoutAnimation: false,
    });

    /**
     * 根据语言标识读取对应的语言包
     */
    const locale = computed(() => {
      if (language?.value == "en") {
        return en;
      } else {
        return zhCn;
      }
    });

    // actions
    function toggleSidebar(withoutAnimation: boolean) {
      sidebar.opened = !sidebar.opened;
      sidebar.withoutAnimation = withoutAnimation;
      if (sidebar.opened) {
        sidebarStatus.value = "opened";
      } else {
        sidebarStatus.value = "closed";
      }
    }

    function closeSideBar(withoutAnimation: boolean) {
      sidebar.opened = false;
      sidebar.withoutAnimation = withoutAnimation;
      sidebarStatus.value = "closed";
    }

    function openSideBar(withoutAnimation: boolean) {
      sidebar.opened = true;
      sidebar.withoutAnimation = withoutAnimation;
      sidebarStatus.value = "opened";
    }

    function toggleDevice(val: string) {
      device.value = val;
    }

    function changeSize(val: string) {
      size.value = val;
    }

    function changeLanguage(val: string) {
      language.value = val;
    }

    return {
      device,
      sidebar,
      language,
      size,
      locale,
      toggleDevice,
      changeSize,
      changeLanguage,
      toggleSidebar,
      closeSideBar,
      openSideBar,
    };
  },
  { persist: true }
);
