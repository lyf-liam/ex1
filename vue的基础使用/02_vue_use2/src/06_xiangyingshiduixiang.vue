<script setup>

import { reactive,ref } from 'vue';

/* 
    reactive()
        - 返回一个对象的响应式代理
        - 返回的是一个深层响应式对象
        - 也可以使用shallowReactive()创建一个浅层响应式对象
        - 缺点：
            - 只能返回对象的响应式代理！不能处理原始值
    
    ref()
        - 接收一个任意值并返回它的响应式代理
        - 
*/
const stu = reactive({
    name:"孙悟空",
    age:18,
    gender:"男"
})

// ref在生成响应式代理时，是将值包装为了一个对象  0 --> {value:0}
// 访问ref对象时，必须通过 对象.value 来访问其中的值
// 在模板中，ref对象会自动解包
// 要访问0，要用count.value
let count = ref(0)  //生成一个0的响应式代理
// 要访问name，要用person.value.name
const person = ref({name:"猪八戒",age:18})

// vue给我们提供了一个语法糖，使得ref对象在script标签中也可以自动解包
// 把ref()写成$ref()
// $是一个实验性的，不一定支持，需要在vite插件中做一些配置
// 在vite.config.js文件中找到plugins:[vue()]
// 改为plugins:[vue({reactivityTransform:true})]
function fn(){
    count.value++
}

</script>

<template>
    <h1>组合式API</h1>
    <h2 @click="fn">{{ count }}</h2>
    
</template>