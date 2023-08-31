import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const useIsUrlInPortectedlist = (pathUrl: string) => {
  for (const pattern of useAppConfig().protectedList) {
    if (pattern.test(pathUrl)) {
      return true;
    }
  }
  return false;
};

export const useIsExternalApi = (pathUrl: string) => {
  for (const pattern of useAppConfig().externalApiList) {
    if (pattern.test(pathUrl)) {
      return true;
    }
  }
  return false;
};

export const useSignJwt = (domain: string) => {
  const secret = useRuntimeConfig().authSecret;
  const expiresIn = useAppConfig().expiresIn;
  const token = jwt.sign({ domain }, secret, {
    expiresIn,
  });
  return token;
};

export const useVerifyJwt = (token: string) => {
  const secret = useRuntimeConfig().authSecret;
  const decoded = jwt.verify(token.split(" ")[1], secret);
  return decoded;
};

//加密用户密码
export const bcryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

//判断密码是否正确
export const validatePassword = (inputPassword: string, password: string) => {
  const data = bcrypt.compareSync(inputPassword, password);
  return data;
};
