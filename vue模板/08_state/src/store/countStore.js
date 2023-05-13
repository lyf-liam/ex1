// 引入函数 defineStore()
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 通过函数创建store
// defineStore("store的id"，配置对象)
// 配置对象：state，是一个函数，将需要由pinia维护的数据以对象的形式返回

// 选项式API
export const useCountStore = defineStore("count",{
    // 数据
    state: () => ({
        count:100,
        name:"孙悟空"
    }),

    // 计算属性
    getters:{
        double:(state) => state.count * 2
    },

    // 方法
    actions:{
        increment(){
            this.count++
        }
    }

})

// 组合式API
/* export const useCountStore = defineStore("count",()=>{
    // 定义数据
    const count = ref(50)
    const name = ref("孙悟空")
    const double = computed(()=> count.value*2)
    function increment(){
        count.value++
    }

    return { count,name,double,increment }
}) */