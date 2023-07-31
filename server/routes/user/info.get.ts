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
  if (userInfo === null) {
    return { auth: false, data: null };
  } else {
    const id = 2;
    const data = await userService.findById(id);
    return { auth: true, data };
  }
});
