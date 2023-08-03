import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/index";

export const useUsers = () => {
  const userStore = useUserStore();
  const { getUserProfile } = userStore;
  const { userInfo } = storeToRefs(userStore);

  //获取数据后，添加到store中
  const getNewUser = async () => {
    // const { error, data } = await useFetch("/user/info");
    // if (error.value) {
    //   userStore.$reset();
    //   console.log(error.value);
    //   throw createError({
    //     statusCode: 500,
    //     statusMessage: "出错",
    //     fatal: true,
    //   });
    // } else {
    //   setUserInfo(data.value!.data);
    // }
  };

  //为domain生成token
  const getToken = async (domain: string) => {
    const { data } = await useFetch("/user/token", {
      query: { domain },
    });
    //!.为ts中的非空断言
    if (!data.value!.auth) {
      userStore.$reset();
    }
    return data.value!.token;
  };

  const add = async (name: string) => {
    const { error, data } = await useFetch("/user/add", {
      method: "POST",
      body: {
        name,
      },
    });
    if (error.value) {
      console.log(error.value);
      throw createError({
        statusCode: 500,
        statusMessage: "出错",
        fatal: true,
      });
    }
    return data;
  };

  return {
    getUserProfile,
    getNewUser,
    getToken,
    add,
    userInfo,
  };
};
