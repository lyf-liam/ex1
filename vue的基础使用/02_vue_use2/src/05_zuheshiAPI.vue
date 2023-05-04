<script setup>
// 在script后面加setup就是告诉vue，使用的是纯组合式api

import { reactive } from 'vue';
const msg = "次数"
const count = 0
const stu = reactive({
    name:"孙悟空",
    age:18,
    gender:"男"
})
function fn() {
    alert("hhhhh!")
}

// 不用使用return去暴露了
</script>

<template>
    <h1 @click="fn">组合式API</h1>
    <h2>{{ msg }}:{{ count }}</h2>
    <h2>{{ stu.age }}</h2>
    
</template>