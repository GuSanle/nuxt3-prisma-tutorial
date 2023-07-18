const protectedList = [/^\/user/];
export const useIsUrlInPortectedlist = (pathUrl: string) => {
  for (const pattern of protectedList) {
    if (pattern.test(pathUrl)) {
      return true;
    }
  }
  return false;
};
