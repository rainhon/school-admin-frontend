import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const instance = axios.create({
    baseURL: 'http://www.school-admin.local/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})
instance.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer: ' + localStorage.getItem('token')
    return config
}, function (error) {
    return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
    if (response.data.code === 401 || response.data.code === 409) {
        router.push('/login')
    }
    return response.data
}, function (error) {
    ElMessage(error.response.data.message)
    return Promise.reject(error);
})

export default instance
