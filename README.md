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

