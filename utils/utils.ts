const protectedList = [/^\/api\/user/, /^\/api\/product/];
export const useIsUrlInPortectedlist = (pathUrl: string) => {
  for (const pattern of protectedList) {
    if (pattern.test(pathUrl)) {
      return true;
    }
  }
  return false;
};
