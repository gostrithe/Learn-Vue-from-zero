import { createApp } from 'vue'  // 导入vue的创建vueApp函数
import App from './App.vue'  // 直接导入App.vue作为根组件对象
                             // 每个vue文件都是一个组件
import './assets/main.css'

createApp(App).mount('#app')  // 创建一个应用，App作为根组件，挂载到元素（容器）身上
