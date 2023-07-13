// import { getServerSession } from "#auth";
export default defineEventHandler(async (event) => {
  // const session = await getServerSession(event);
  // if (!session) {
  //   return { status: "unauthenticated!" };
  // }

  //模拟异步请求
  const loginName = event.context.userInfo
    ? event.context.userInfo.user.name
    : "";

  const userInfo = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "张三",
        loginName,
        age: 60,
        sex: "male",
        status: true,
      });
    }, 1000);
  });

  return userInfo;
});
