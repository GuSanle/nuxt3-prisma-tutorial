<template>
  <div v-if="show">
    <div>姓名：{{ users.name }}</div>
    <div>session中的登录名：{{ users.loginName }}</div>
    <div>年龄：{{ users.age }}</div>
    <div>性别：{{ users.sex }}</div>
    <div>状态：{{ users.status }}</div>
  </div>
  <el-button @click="changeStatus">改状态</el-button>
  <el-button @click="signOut()">退出</el-button>
  <el-button @click="getInfo">再获取一次用户信息</el-button>
</template>;

<script  setup>
// definePageMeta({ middleware: 'auth' })
const {
  changeStatus,
  getNewUser,
  users,
} = useUsers()

const show = ref(false)
await getNewUser()
show.value = true

//再获取一次用户信息
const getInfo = async () => {
  await getNewUser()
}

const { signOut, status } = useAuth()
</script>
