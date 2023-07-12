import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = reactive({
    name: "jack",
    age: 100,
    sex: "male",
    status: true,
  });

  const changeStatus = () => {
    users.status = !users.status;
  };

  return { users, changeStatus };
});
