import { UserService } from "@/service/user.service";

export default defineEventHandler(async (event) => {
  const userService = new UserService();
  const data = await userService.findFirst();
  return { auth: true, data };
});
