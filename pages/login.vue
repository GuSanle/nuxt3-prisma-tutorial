<template>
  <!-- 用vue写一个form表单,包含了用户名和密码的输入框，还有一个登录，按钮。 -->
  <form>
    <input type="text" v-model="username" placeholder="用户名" />
    <input type="password" v-model="password" placeholder="密码" />
    <button @click="submit">登录</button>
  </form>
</template>
<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
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
    // redirect: false,
  })
}


</script>