<template>
    登录 
</template>

<script>
import axios from '@/utils/axios.js'
import { ElMessage } from 'element-plus'
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
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
