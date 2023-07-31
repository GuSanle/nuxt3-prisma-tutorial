<template>
  <h5 class="ma4">kintone开放平台</h5>
  <el-menu :default-active="loadedRoute" class="el-menu-vertical-demo" router>
    <el-menu-item index="/user">
      <el-icon><icon-menu /></el-icon>
      <span>域名管理</span>
    </el-menu-item>
    <el-menu-item index="/">
      <el-icon>
        <setting />
      </el-icon>
      <span>关于</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const router = useRouter();
//ssr载入时的路由地址，无需响应式
const loadedRoute = router.currentRoute.value.path;

</script>