<template>
  <div v-if="status === 'authenticated'" class="container">
    用户：{{ data.user.name }}
    <el-button @click="signOut()">退出</el-button>
    <nuxt-link to='/'>home</nuxt-link>/
    <nuxt-link to='/user'>user</nuxt-link>/
    <nuxt-link to='/formcsrf'>表单提交</nuxt-link>/
    <nuxt-link to='/about'>错误捕获测试</nuxt-link>/
    <nuxt-link to='/abouttwo'>全局错误测试</nuxt-link>
  </div>
  <div v-else>
    <el-button @click.prevent="login">登录</el-button>
  </div>
</template>

<script  setup>

const { signOut, status, data } = useAuth()


const login = async () => {
  await navigateTo('/login')
}
</script>

<style type="css">
/* .container {
  display: flex;
} */
</style>