<script>

import { reactive } from 'vue'
    export default{
        
        // setup是一个钩子函数
        // 可以通过这个函数向外部暴露组件的配置
        // 外面写要按对象的语法写，有限制
        // 在setup里写就是在函数里写代码，可以随意写
        setup(){
            // 定义变量
            // 在组合式api中直接声明的变量，就是一个普通变量
            // 修改这些属性时，不会在视图中产生效果
            let msg = "今天天气很不错"
            let count = 0

            //可以通过reactive()来创建一个响应式对象
            const stu = reactive({
                name:"孙悟空",
                age:18,
                gender:"男"
            })

            function changeAge(){
                stu.age = 44
            }

            // 在setup()中可以通过返回值来指定哪些内容要暴露
            return{
                msg,count,stu,changeAge
            }
        }
    }
</script>

<template>
    <h1>演示组合式</h1>
    <h2>{{ msg }}</h2>
    <h2>{{ count }}</h2>
    <button @click="changeAge">点我改年龄</button>
    <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h2>
</template>