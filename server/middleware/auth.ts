import { getServerSession } from "#auth";
import { useIsUrlInWhitelist } from "../../utils/utils";

export default eventHandler(async (event) => {
  const pathUrl = getRequestPath(event);

  if (useIsUrlInWhitelist(pathUrl)) {
    const session = await getServerSession(event);

    if (!session) {
      event.context.userInfo = null;
    } else {
      if ("user" in session) event.context.userInfo = session;
    }
  }
});
