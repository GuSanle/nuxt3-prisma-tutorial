import { UserService } from "@/service/user.service";

export default defineEventHandler(async (event) => {
  // const session = await getServerSession(event);
  // if (!session) {
  //   return { status: "unauthenticated!" };
  // }

  // const loginName = event.context.userInfo
  //   ? event.context.userInfo.user.name
  //   : "";

  const userService = new UserService();
  const { username } = await readBody(event);

  // const userInfo = event.context.userInfo;
  // console.log("userInfo", userInfo);
  // if (userInfo === null) {
  //   return { auth: false, data: null };
  // } else {
  const data = await userService.createUser({
    username,
    password: "123456",
  });
  return data;
  //   return { auth: true, data };
  // }
});
