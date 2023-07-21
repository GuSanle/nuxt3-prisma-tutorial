## nuxt 
使用nuxt3 prisma pinia element-plus next-auth mysql来实现一个系统的模版

## pinia
1. nuxt3标配vuex，更换pinia步骤如下：
```
yarn add pinia @pinia/nuxt
```
2. 配置
```
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
})
```
3. 放置位置：
～/stores下

## nuxt-auth
1. 安装
```
yarn add -D @sidebase/nuxt-auth
yarn add next-auth@4.21.1
```
2. 配置
```
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
})
``` 
3. 全局配置（官网有误）：    enableGlobalAppMiddleware: true

## element ui
1. 安装
```
yarn add -D element-plus @element-plus/nuxt
```
2. 配置
```
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
})
```
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

