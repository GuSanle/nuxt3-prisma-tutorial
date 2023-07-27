<template>
  <el-result :title="`${error!.statusCode}`" :sub-title="error!.statusMessage" class="container">
    <template #icon>
      <el-image fit="contain" src="/error.svg" class="error-image" />
    </template>
    <template #extra>
      <el-button type="primary" @click="handleError">回到首页</el-button>
    </template>
  </el-result>
  <!-- <div v-if="isDev">
    {{ error!.statusCode }} {{ error!.statusMessage }}
  </div> -->
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
const isDev = process.dev;
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .error-image {
    max-width: 300px;
  }
}
</style>