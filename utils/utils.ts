const whitelist = [/^\/api\/user/, /^\/api\/product/];
export const useIsUrlInWhitelist = (pathUrl: string) => {
  for (const pattern of whitelist) {
    if (pattern.test(pathUrl)) {
      return true;
    }
  }
  return false;
};
