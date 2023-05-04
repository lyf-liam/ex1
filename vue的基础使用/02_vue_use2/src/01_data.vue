<script>

import MyButton from './MyButton.vue';
import {shallowReactive} from "vue"

export default {
    // data返回的对象最终会被vue代理
    // 在别处可以用this.$data.xxx="xxx" 动态添加响应数据（不建议这么做）
    // 建议将那些暂时没有使用到的属性，也添加到data返回的对象中，值可以设为null
    data() {
        return {
            msg: "我爱vue",
            // vue子啊构建响应式对象时，会同时将对象中的属性也做成响应式属性
            // 深层响应式对象
            stu: {
                name:"孙悟空",
                age:18,
                gender:"男",
                friend:{
                    name:"沙和尚"
                }
            },
            hello:null
        }
        
        // 有些场景下，可以通过shallowReactive()来创建一个浅层的响应式对象
        // return shallowReactive({
        //     msg:"hhhh",
        //     stu: {
        //         name:"孙悟空2",
        //         age:18,
        //         gender:"男",
        //         friend:{
        //             name:"沙和尚2"
        //         }
        //     }
            
        // })
    },

    components:{
        MyButton:MyButton
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <h2>{{ stu.friend.name }}</h2>
    <h3>{{ hello }}</h3>
    <MyButton></MyButton>
</template>