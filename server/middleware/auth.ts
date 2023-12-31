import { getServerSession } from "#auth";
import { useVerifyJwt } from "@/utils/utils";
import { useIsUrlInPortectedlist, useIsExternalApi } from "@/utils/utils";

//判断api类型 外部api使用jwt处理，内部api使用session处理
const getApiType = (pathUrl: string) => {
  if (useIsExternalApi(pathUrl)) {
    return "external";
  } else if (useIsUrlInPortectedlist(pathUrl)) {
    return "inner";
  } else {
    return "other";
  }
};

export default eventHandler(async (event) => {
  const pathUrl = getRequestPath(event);
  const apiType = getApiType(pathUrl);

  if (apiType === "inner") {
    const session = await getServerSession(event);
    // throw createError("我错了，我来自server端中间件");
    if (!session) {
      event.context.userInfo = null;
      throw createError("没有登录");
    } else {
      if ("user" in session) event.context.userInfo = session;
    }
  } else if (apiType === "external") {
    const authorization: string | undefined = getHeader(event, "authorization");
    if (typeof authorization === "string") {
      const decode = useVerifyJwt(authorization);
      event.context.userInfo = decode;
    } else {
      throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
    }
  }
});
