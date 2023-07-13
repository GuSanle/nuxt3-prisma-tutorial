<template>
  <h1>用户中心</h1>
  <div v-if="show">
    <div>姓名：{{ users.name }}</div>
    <div>session中的登录名：{{ users.loginName }}</div>
    <div>年龄：{{ users.age }}</div>
    <div>性别：{{ users.sex }}</div>
    <div>状态：{{ users.status }}</div>
  </div>
  <button @click="changeStatus">改状态</button>
  <button @click="signOut()">退出</button>
  <button @click="getUserInfo">调用用户api</button>
</template>;

<script  setup>
// definePageMeta({ middleware: 'auth' })
const {
  changeStatus,
  setUser,
  users,
} = useUsers()

const show = ref(false)
const getUserInfo = async () => {
  await setUser()
  show.value = true
}

const { signOut } = useAuth()
</script>
