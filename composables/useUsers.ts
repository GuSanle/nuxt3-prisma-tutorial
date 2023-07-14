import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/index";

export const useUsers = () => {
  const userStore = useUserStore();
  const { changeStatus, setUserInfo } = userStore;
  const { users } = storeToRefs(userStore);

  //获取数据后，添加到store中
  const getNewUser = async () => {
    // const headers = useRequestHeaders(["cookie"]);
    // const { data } = await useFetch("/api/user", { headers });
    const { data } = await useFetch("/api/user/info");
    setUserInfo(data);
  };

  return {
    changeStatus,
    getNewUser,
    users,
  };
};
