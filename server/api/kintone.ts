export default defineEventHandler(async (event) => {
  const getKin = async () => {
    return await $fetch(
      "https://pokemon36.cybozu.cn/k/v1/record.json?app=11&id=1",
      {
        server: true,
        headers: {
          "X-Cybozu-API-Token": process.env.KINTONE_API_TOKEN,
        },
      }
    );
  };
  const result = await getKin();
  return result;
});
