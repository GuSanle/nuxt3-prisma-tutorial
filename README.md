## nuxt 
使用nuxt3 prisma pinia element-plus next-auth mysql nuxt-security tailwindcss来实现一个系统的模版

## pinia
1. 放置位置：
～/stores下

## nuxt-auth 
1. 全局配置（官网有误）：    enableGlobalAppMiddleware: true

## element ui

## 认证
前台认证：
1. 使用session认证。前端界面，使用useAuth()根据status这个接口判断是否登录，如果没有登录，跳转到登录界面。 
后端接口
1. 内部接口（server/routes下），使用session认证。使用server middleware对来源进行判断后，进行认证。
2. 外部接口，使用jwt认证。 

## prisma
1. 安装
```
yarn add -D  prisma
npx prisma init
```
2. 编辑prisma/schema.prisma
3. 更新.env配置
4. 添加prisma/schema.prisma的schema信息
5. 初始化
```
npx prisma migrate dev --name init 
```

## tailwindcss
安装tailwindcss后会报tsconfig.json的错误。应该是server端不需要引入tailwind，所以直接在tsconfig.json中排除
```
  "exclude": [
    "../tailwind.config.js"
  ]
```
  

## csrf跨域
请求头部有next-auth.csrf-token=xxx的csrf信息
响应头部Set-Cookie:中有HttpOnly; SameSite=Lax。防止跨域使用cookie，阻止跨域csrf攻击。
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie

## nuxt-security
具体配置：https://nuxt-security.vercel.app/getting-started/configuration
basicAuth，csrf不需要开，已经通过next-auth解决了。
nuxt-security会导致调试等模式打不开，开发模式中nuxt.config.ts中modules的nuxt-security模式不开启。部署模式再开启

