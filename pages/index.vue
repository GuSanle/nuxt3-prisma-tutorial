<template>
  <div v-if="status === 'unauthenticated'" class="text-3xl font-bold underline"> 未登录</div>
  <div v-else>
    <h3 class="text-xl font-bold ">Authentication Overview</h3>
    <p class="text-sm">See all available authentication & session information below.</p>
    <pre v-if="status"><span>Status:</span> {{ status }}</pre>
    <pre v-if="user"><span>Data:</span> {{ user }}</pre>
    <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
    <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
    <div>获取到的外部数据：{{ kintoneData }}</div>
    <el-button @click="refresh()">更新外部数据</el-button>
    <el-button @click="update">更改外部数据</el-button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
const { data: user, status, getCsrfToken, getProviders } = useAuth()

const providers = await getProviders()
const csrfToken = await getCsrfToken()


const { data: kintoneData, error, execute, refresh } = await useFetch(
  "/user/getkintone",
);

const update = () => {
  kintoneData.value = { a: 12 }
}
</script>

<style scoped>
/* pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-green-400;
} */
</style>