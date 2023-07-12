## nuxt 
nuxt3

## pinia
1. nuxt3标配vuex，更换pinia步骤如下：(不需要add pinia)
```
yarn add @pinia/nuxt
```

2. Add '@pinia/nuxt' to your modules array.
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
2. Add '@pinia/nuxt' to your modules array.
```
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
})
``` 
3. 全局配置（官网有误）：    enableGlobalAppMiddleware: true
4. 

