import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

const instance = axios.create({
    // baseURL: 'https://secret-plains-39864.herokuapp.com',
    baseURL: 'http://www.school-admin.local/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = 'Bearer: ' + localStorage.getItem('token')
    return config
}, function (error) {
    // Do something with request error
    console.log(error)
    return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
    if (response.data.code === 401 || response.data.code === 409) {
        router.push('/login')
    }else if(response.data.code !== 200){
        ElMessage(response.message ? response.message : '请求成功')
    }
    return response.data
}, function (error) {
    // Do something with response error
    ElMessage(error.message)
    return Promise.reject(error);
})

export default instance
