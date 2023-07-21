//通过输入domain，生成jwttoken。这里不能使用nuxt-auth来生成jwt。因为nuxt-auth是用来给登录用户生成token的。而这里是给外部用户生成token的。
import { useSignJwt } from "@/utils/utils";

export default defineEventHandler(async (event) => {
  const userInfo = event.context.userInfo;
  if (userInfo === null) {
    return { auth: false, token: null };
  } else {
    const query: any = getQuery(event);
    const token = useSignJwt(query.domain);
    return { auth: true, token };
  }
});
