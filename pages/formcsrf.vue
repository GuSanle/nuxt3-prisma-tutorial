<template>
  <div>学习会报名</div>
  <el-form label-width="100px" :model="formData" style="max-width: 460px">
    <el-form-item label="用户名">
      <el-input type="text" v-model="formData.username" placeholder="用户名" />
    </el-form-item>
    <el-form-item label="电话">
      <el-input type="password" v-model="formData.phone" placeholder="电话" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
definePageMeta({ auth: false })

const formData = reactive({
  username: '',
  phone: '',
})
const submit = async () => {
  const { data } = await useFetch("/user/csrftest", {
    method: "POST",
    body: {
      name: formData.username
    },
  });
  console.log(data)
}
</script>