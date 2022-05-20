<template>
  <el-menu  mode="horizontal" router >
    <el-menu-item index="/">
        Home
    </el-menu-item>

    <el-menu-item index="/school-apply">
        申请学校
    </el-menu-item>

    <template v-if="$store.state.userInfo">
      <el-menu-item index="/user">
          {{$store.state.user.userInfo.nickname}}
      </el-menu-item>
      <el-menu-item index="/logout">
          退出
      </el-menu-item>
    </template>
    <template v-else>
        <el-menu-item index="/login">
            登录
        </el-menu-item>
    </template>
  </el-menu>


</template>

<script>
export default {
  name: 'HeaderMenu',
  methods: {

  }

}
</script>
