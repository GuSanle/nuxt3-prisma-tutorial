<template>
  <h1>用户中心</h1>
  <div>
    <div>姓名：{{ users.name }}</div>
    <div>年龄：{{ users.age }}</div>
    <div>性别：{{ users.sex }}</div>
    <div>状态：{{ users.status }}</div>
  </div>
  <button @click="changeStatus">改状态</button>
  <button @click="signOut()">退出</button>
</template>;

<script  setup>
// definePageMeta({ middleware: 'auth' })
const {
  changeStatus,
  users,
} = useUsers()

const { signOut } = useAuth()
</script>
