![license](https://img.shields.io/npm/l/nuxt3-prisma-tutorial)
![downloads](https://img.shields.io/npm/dt/nuxt3-prisma-tutorial)
## nuxt 
使用nuxt3 prisma pinia element-plus nuxt-auth mysql nuxt-security unocss来实现一个系统的模版

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
5. package.json中添加prisma的指令
```
  "prisma": {
    "seed": "npx ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
```
7. 初始化
```
//初始化数据库
npx prisma migrate dev --name init 
//初始化数据
npx prisma db seed
```
8. 模型推断的官方说明需要多加阅读
prisma/client 中的Prisma包含了输入输出，查询等的类型，比如Prisma.XXXCreateInput，Prisma.XXXUpdateInput，Prisma.XXXWhereUniqueInput，Prisma.XXXWhereInput
import { Users, Prisma } from "@prisma/client"; prisma只要生成模型后，这些类型都能自动生成。
然后是指定select后的生成的数据类型，包括还有嵌套语法生成的数据类型。使用Prisma validator生成。
具体参考文档：https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety


## tailwindcss
怕和element有冲突，所以不使用了
安装tailwindcss后会报tsconfig.json的错误。应该是server端不需要引入tailwind，所以直接在tsconfig.json中排除
```
  "exclude": [
    "../tailwind.config.js"
  ]
```
## css
重置浏览器样式 @/assets/css/reset.css

## csrf跨域
请求头部有next-auth.csrf-token=xxx的csrf信息
响应头部Set-Cookie:中有HttpOnly; SameSite=Lax。防止跨域使用cookie，阻止跨域csrf攻击。
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie

## nuxt-security
具体配置：https://nuxt-security.vercel.app/getting-started/configuration
basicAuth，csrf不需要开，已经通过next-auth解决了。
nuxt-security会导致调试等模式打不开，开发模式中nuxt.config.ts中modules的nuxt-security模式不开启。部署模式再开启

## 错误处理的几种方式
1 plugins/vueAppErrorHandler.ts
2 通过root下的error.vue来捕获错误。直接跳转错误画面。
3 组件级别的错误处理。- <NuxtErrorBoundary>让错误只发生在组件上。原理同onErrorCaptured
抛错顺序：<NuxtErrorBoundary>组件级别的错误处理 > plugins/vueAppErrorHandler.ts > error.vue
4 showError()客户端会显示错误，throw createError不会。

总结：
组件级别错误的处理使用
1 组件内报错<NuxtErrorBoundary>    
2 error.vue处理整体报错。
  服务端渲染只需要在error.vue中处理即可。但是客户端需要在plugins/vueAppErrorHandler.ts中处理。
3 demo： 1 about/abouttwo页面。 
         2 服务端中间件session注销后报错

前后台路径的坑
前台文件路由，后台也有文件路由，会导致，客户端的pages下的路由和后台server的route下的地址如果一致，则服务端渲染时优先服务端。会返回服务端接口数据。导致和客户端渲染不一致。。




