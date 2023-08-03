<template>
  <div class="container flex justify-end items-center border-b-solid border-b-gray-200 h-16">
    <div><span>{{ userInfo.username }}</span></div>
    <div id="userInfo" class="m-2">
      <el-dropdown trigger="click">
        <div class="flex justify-center items-center">
          <el-avatar :size="40" :src="userInfo.avatar || '/cybozu-bg.png'" />
          <el-icon class="i-ep:caret-bottom"></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut, status, data } = useAuth()
const { userInfo } = useUsers()

/**
 * 注销
 */
function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    signOut()
  });
}
</script>