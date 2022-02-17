import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store'
import ElementPlus from 'element-plus'
import * as echarts from 'echarts';
import 'element-plus/dist/index.css'
const app=createApp(App)
app.config.globalProperties.$echart=echarts
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

