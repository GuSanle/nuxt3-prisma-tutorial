<template>
  <div class="container">
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span>kintone开放平台</span>
        </div>
      </template>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
        <el-form-item label="用户名" prop="username" required>
          <el-input type="text" v-model="ruleForm.username" placeholder="用户名" size="large" class=" " />
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input type="password" v-model="ruleForm.password" placeholder="密码" show-password size="large" class=" " />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="bg-img"></div>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
const { getUserProfile } = useUsers()
interface RuleForm {
  username: string
  password: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '用户名',
  password: '密码',
})

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  },
  layout: false
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

const { signIn } = useAuth()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const { error } = await signIn('credentials', {
        username: ruleForm.username,
        password: ruleForm.password,
        redirect: false,
      })

      if (error) {
        ElMessage.error('用户名密码错误')
      } else {
        await getUserProfile()
        const requestUrl = useRequestURL()
        const redirectUrl = requestUrl.searchParams.get("callbackUrl")
        return navigateTo(redirectUrl, { external: true })
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(#f1f3f4, #ddf0fd);
  margin: 0;
  padding: 0;

  .box-card {
    border-radius: 20px;
    width: 480px;
    height: 550px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bg-img {
    position: fixed;
    width: 300px;
    height: 300px;
    bottom: 0;
    right: 0;
    background: url('/cybozu-bg.png') no-repeat right bottom;
  }
}
</style>
