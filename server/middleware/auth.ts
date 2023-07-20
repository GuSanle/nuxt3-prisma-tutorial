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
  console.log("apiType", apiType);

  if (apiType === "inner") {
    const session = await getServerSession(event);
    if (!session) {
      event.context.userInfo = null;
    } else {
      if ("user" in session) event.context.userInfo = session;
    }
  } else if (apiType === "external") {
    const authorization: any = getHeader(event, "authorization");
    const decode = useVerifyJwt(authorization);
    event.context.userInfo = decode;
    try {
      const decode = useVerifyJwt(authorization);
      event.context.userInfo = decode;
    } catch {
      throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
    }
  }
});
