import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user/index";

export const useUsers = () => {
  const userStore = useUserStore();
  const { changeStatus } = userStore;
  const { users } = storeToRefs(userStore);
  return {
    changeStatus,
    users,
  };
};
