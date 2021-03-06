import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import axios from 'axios'
import store from '@/store'
import 'element-plus/dist/index.css'

import router from "@/router/index";

const app = createApp(App)
axios.defaults.baseURL = 'https://adny.utools.club/api'
// app.use(axios)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

export default app