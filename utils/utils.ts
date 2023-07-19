import jwt from "jsonwebtoken";

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
