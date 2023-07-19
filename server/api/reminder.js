import { useVerifyJwt } from "@/utils/utils";

export default defineEventHandler(async (event) => {
  const { authorization } = getRequestHeaders(event);
  const decode = useVerifyJwt(authorization);
  return decode;
});
