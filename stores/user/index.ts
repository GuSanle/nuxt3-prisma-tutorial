export const useUserStore = defineStore("user", {
  state: () => {
    return {
      users: {
        name: "",
        loginName: "",
        age: 0,
        sex: "male",
        status: true,
      },
    };
  },

  getters: {},

  actions: {
    changeStatus() {
      this.users.status = !this.users.status;
    },

    setUserInfo(info: any) {
      this.users.name = info.name;
      this.users.age = info.age;
      this.users.sex = info.sex;
      this.users.status = info.status;
      this.users.loginName = info.loginName;
    },
  },
});
