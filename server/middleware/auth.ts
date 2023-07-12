import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
//   const pathUrl = getRequestPath(event)
// //判断是否以/api/auth/ 开头的正则
//   console.log(pathUrl)
//   const authRegex = /^\/api\/auth\//i
//   console.log("test(pathUrl)",authRegex.test(pathUrl))
  // if (!authRegex.test(pathUrl)) {
  //   const session = await getServerSession(event)
  //   if (!session) {
  //     throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 })
  //   }
  // }
})