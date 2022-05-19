<template>
    <p>test</p>
    <el-header>
        <header-menu></header-menu>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
export default {
  name: 'Layout',
  components: {
    HeaderMenu
  }
}
</script>
