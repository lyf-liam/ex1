import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//将根组件关联到应用上
const app = createApp(App)
//将应用挂载到页面
const vm = app.mount("#app")
//将vm设置为全局变量
window.vm=vm
