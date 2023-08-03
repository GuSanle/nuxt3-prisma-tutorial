<template>
  <div>
    <div>我的token:</div>
    <div>{{ newToken }}</div>
    <el-input v-model="domain" placeholder="Please input" />
  </div>
  <el-button @click="getInfo">再获取一次用户信息</el-button>
  <el-button @click="generateToken">生成指定domain的token</el-button>
  <el-button @click="addUser">添加用户</el-button>
</template>

<script  setup>
const {
  getNewUser,
  getToken,
  add,
  userInfo,
} = useUsers()





//再获取一次用户信息
const getInfo = async () => {
  await getNewUser()
}

const addUser = async () => {
  await add('qqq')
}

const newToken = ref('')
const domain = ref('')
const generateToken = async () => {
  newToken.value = await getToken(domain.value)
}


const { signOut, status } = useAuth()
</script>
