<template>
    <el-page-header :content="pageTitle" @back="back"/>
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
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  computed: {
    pageTitle() {
      return this.title || this.$route.name
    }
  },
}
</script>
