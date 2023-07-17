// import { getServerSession } from "#auth";
export default defineEventHandler(async (event) => {
  // const session = await getServerSession(event);
  // if (!session) {
  //   return { status: "unauthenticated!" };
  // }

  // const loginName = event.context.userInfo
  //   ? event.context.userInfo.user.name
  //   : "";
  const userInfo = event.context.userInfo;
  if (userInfo === null) {
    return { auth: false, data: null };
  } else {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "张三",
          age: 60,
          loginName: event.context.userInfo.user.name,
          sex: "male",
          status: true,
        });
      }, 1000);
    });
    return { auth: true, data };
  }
});
