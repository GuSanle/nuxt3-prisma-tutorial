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

const { signIn } = useAuth()
const username = ref('')
const password = ref('')
const submit = async () => {
  const { error } = await signIn('credentials', {
    username: username.value,
    password: password.value,
    redirect: false,
  })

  if (error) {
    alert('用户名密码错误')
  } else {
    const requestUrl = useRequestURL()
    const redirectUrl = requestUrl.searchParams.get("callbackUrl")
    return navigateTo(redirectUrl, { external: true })
  }
}
</script>