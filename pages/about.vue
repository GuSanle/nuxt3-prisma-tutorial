<template>
  <div>
    <div>父组件：组件级别出错测试</div>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        子组件出错了啊
        {{ error }}
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
