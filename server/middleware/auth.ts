import { getServerSession, getToken } from "#auth";
import { useIsUrlInPortectedlist, useIsExternalApi } from "@/utils/utils";

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
    const token = await getToken({ event });
    console.log("token", token);
    if (token) {
      event.context.token = token;
    } else {
      event.context.token = null;
    }
  }
});
