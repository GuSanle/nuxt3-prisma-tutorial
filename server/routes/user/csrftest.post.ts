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
  const { name } = await readBody(event);

  const data = await userService.add({
    name,
    email: "aaa@q.com",
    password: "123456",
  });
  return { auth: true, data };
});
