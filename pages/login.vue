<template>
  <form>
    <el-input type="text" v-model="username" placeholder="用户名" />
    <el-input type="password" v-model="password" placeholder="密码" />
    <el-button type="success" @click="submit">登录</el-button>
  </form>
</template>
<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    // navigateAuthenticatedTo: '/',
  }
})
//写一个对template表单登录进行提交处理的代码
const { signIn } = useAuth()
const username = ref('')
const password = ref('')
const submit = async () => {
  await signIn('credentials', {
    username: username.value,
    password: password.value,
    redirect: false,
  })
}
</script>