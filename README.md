## nuxt 
使用nuxt3 prisma pinia element-plus next-auth mysql nuxt-security scss来实现一个系统的模版

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




