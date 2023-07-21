<template>
  <div>
    <div>姓名：{{ users.name }}</div>
    <div>session中的登录名:{{ users.loginName }}</div>
    <div>年龄：{{ users.age }}</div>
    <div>性别：{{ users.sex }}</div>
    <div>状态：{{ users.status }}</div>
  </div>
  <div>
    <div>我的token:{{ newToken }}</div>
    <el-input v-model="domain" placeholder="Please input" />
  </div>
  <el-button @click="changeStatus">改状态</el-button>
  <el-button @click="signOut()">退出</el-button>
  <el-button @click="getInfo">再获取一次用户信息</el-button>
  <el-button @click="generateToken">生成指定domain的token</el-button>
  <el-button @click="addUser">添加用户</el-button>
</template>

<script  setup>
// definePageMeta({ middleware: 'auth' })
const {
  changeStatus,
  getNewUser,
  getToken,
  add,
  users,
} = useUsers()


// await getNewUser()


//再获取一次用户信息
const getInfo = async () => {
  await getNewUser()
}

const addUser = async () => {
  await add()
}

const newToken = ref('')
const domain = ref('')
const generateToken = async () => {
  newToken.value = await getToken(domain.value)
}


const { signOut, status } = useAuth()
</script>
