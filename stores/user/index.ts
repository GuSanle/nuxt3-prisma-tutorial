interface UserState {
  userInfo: {
    uuid: string;
    email: string | null;
    phone: string | null;
    avatar: string | null;
    username: string;
    role: "GENERAL" | "SUPER_ADMIN" | "ADMIN";
    last_login: Date | string | null;
  };
  settings?: {};
}

//settings后期登录是否也要重置？

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    userInfo: {
      uuid: "",
      email: "",
      phone: "",
      avatar: "",
      username: "",
      role: "GENERAL",
      last_login: new Date(),
    },
  }),

  persist: true, // 持久化状态

  getters: {},

  actions: {
    async getUserProfile() {
      const { error, data } = await useFetch("/user/profile");
      if (error.value || !data.value) {
        console.log(error.value);
        throw createError({
          statusCode: 500,
          statusMessage: "出错",
          fatal: true,
        });
      } else if (data.value.data) {
        this.userInfo = data.value.data;
        console.log(data);
      }
    },

    setUserInfo(info: any) {
      this.userInfo.username = info.name;
    },
  },
});
