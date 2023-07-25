<template>
  <div>
    <h1>错误测试</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>
<script setup>
const counter = ref(0);
const inc = () => {
  counter.value++;
  throw createError('子组件出错');
};
</script>