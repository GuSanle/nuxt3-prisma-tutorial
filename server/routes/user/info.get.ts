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

  const userInfo = event.context.userInfo;

  const data = await userService.findFirst();
  return { auth: true, data };
});
