## nuxt 
nuxt3

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
yarn add --dev @sidebase/nuxt-auth
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
yarn add --dev element-plus @element-plus/nuxt
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

