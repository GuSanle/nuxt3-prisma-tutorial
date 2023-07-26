export default defineEventHandler(async (event) => {
  // return { a: "a", b: "b" };

  const getKin = async () => {
    const data: any = await $fetch(
      "https://pokemon36.cybozu.cn/k/v1/record.json?app=11&id=1",
      {
        server: true,
        headers: {
          "X-Cybozu-API-Token": process.env.KINTONE_API_TOKEN,
        },
      }
    );
    return data;
  };
  const result = await getKin();
  console.log("server result: ", result);
  return result;
});
