<template>
  <div>
    <p>Sign-In Options:</p>
    <button @click="signIn('credentials', { username: 'test', password: 'hunter2' })">登录</button>
    <button @click="signOut()">退出</button>
  </div>
</template>
<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})
const { signIn, signOut } = useAuth()
</script>