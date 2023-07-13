import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = reactive({
    name: "",
    loginName: "",
    age: 0,
    sex: "male",
    status: true,
  });

  const changeStatus = () => {
    users.status = !users.status;
  };

  const setUserInfo = (info: any) => {
    users.name = info.value.name;
    users.age = info.value.age;
    users.sex = info.value.sex;
    users.status = info.value.status;
    users.loginName = info.value.loginName;
  };

  return { users, changeStatus, setUserInfo };
});
