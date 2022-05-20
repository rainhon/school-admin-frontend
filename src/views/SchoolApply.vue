<template>
    <el-form label-position="top">
        <el-form-item label="学校名称">
            <el-input v-model="form.school_name" />
        </el-form-item>
        <el-form-item label="申请人">
            <el-input v-model="form.teacher_name"/>
        </el-form-item>
        <el-form-item label="email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="学校描述">
            <el-input type="textarea" v-model="form.description" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        
    </el-form>
</template>

<script>
import axios from '@/utils/axios.js'
import { ElMessage } from 'element-plus'

export default {
    name: 'SchoolApply',
    data() {
        return {
            form: {
                school_name: '',
                teacher_name: '',
                email: '',
                description: ''
            }
        }
    },
    methods: {
        submit() {
            axios.post('/school-apply', this.form)
            .then(res => {
                if (res.data.code === 0) {
                    this.$router.push('/')
                }
            }).catch(err => {
                ElMessage('请求失败:'+err.code)
            })
        }
    }
}
</script>

<style scoped>
    .el-form-item {
        max-width: 460px;
    }
</style>