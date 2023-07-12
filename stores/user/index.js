import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = reactive({
    name: "",
    age: 0,
    sex: "male",
    status: true,
  });

  const changeStatus = () => {
    users.status = !users.status;
  };

  const setUserInfo = (info) => {
    users.name = info.value.name;
    users.age = info.value.age;
    users.sex = info.value.sex;
    users.status = info.value.status;
  };

  return { users, changeStatus, setUserInfo };
});
