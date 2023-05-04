//引入vue
import { createApp } from "vue/dist/vue.esm-bundler"
//创建一个根组件
const App={
    data(){
        return{
            msg:"Hello_Vue!"
        }
    },

    template:"<h1>{{msg}}</h1>"
}

//创建应用并挂载到页面
createApp(App).mount("#app")