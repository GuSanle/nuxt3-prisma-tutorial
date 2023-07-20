<template>
  <p>发生错误</p>
  <button @click="handleError">后退</button>
  <div v-if="isDev">
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import { NuxtApp } from "#app";

const props = defineProps<{ error: NuxtApp["payload"]["error"] }>();
const handleError = () => clearError({ redirect: '/' })
const isDev = process.dev;
</script>