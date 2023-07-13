<template>
  <div v-if="show">
    <div>用户：{{ users.loginName }}</div>
    <el-button @click="signOut()">退出</el-button>
  </div>
  <div v-else>
    <el-button @click="login()">登录</el-button>
  </div>
</template>;

<script  setup>
const {
  users,
} = useUsers()
const { signOut } = useAuth()
const login = () => {
  navigateTo({ path: '/login' })
}
</script>