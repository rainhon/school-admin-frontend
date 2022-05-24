<template>
    <el-form label-position="top">
        <el-form-item label="邮箱">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input show-password v-model="form.password"/>
        </el-form-item> 
    </el-form>
</template>

<script>
import axios from '@/utils/axios.js'
import { ElMessage } from 'element-plus'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submit() {
            axios.post('/login', this.form).then(res => {
                if (res.data.code === 0) {
                    this.$store.commit('setUserInfo', res.data.data)
                    this.$router.push('/')
                }
            }).catch(err => {
                ElMessage('登录失败:'+err.code)
            })
        }
    }
}
</script>
