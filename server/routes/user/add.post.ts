import { UserService } from "../../service/user.service";

export default defineEventHandler(async (event) => {
  // const session = await getServerSession(event);
  // if (!session) {
  //   return { status: "unauthenticated!" };
  // }

  // const loginName = event.context.userInfo
  //   ? event.context.userInfo.user.name
  //   : "";
  const userService = new UserService();
  console.log(process.env.NODE_ENV);

  const userInfo = event.context.userInfo;
  if (userInfo === null) {
    return { auth: false, data: null };
  } else {
    const data = await userService.add({
      name: "test",
      email: "aaa@q.com",
      password: "123456",
    });
    return { auth: true, data };
  }
});
