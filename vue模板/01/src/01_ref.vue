<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const msg=ref("hhh")
// obj整体是响应式的
// obj.value.name
const obj = ref({
    name:"swk",
    age:18
})
// obj2不是响应式的，但是其中的name和age是响应式的
// obj2.name.value
const obj2 = {
    name:ref("swk"),
    age:ref(18)
}

const changeMsg=()=>{
    msg.value="hhhhhhhhhhhh"
}

//
const newMsg = computed(()=>{
    return msg.value + "sb"
})
</script>

<template>
    <!-- ref对象在模板中可以自动解包（要求ref对象必须是顶层对象） -->
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <h2>{{ obj.name }}</h2>
    <!-- name不是顶层响应式对象，所以不能自动解包  -->
    <h2>{{ obj2.name.value }}</h2>
    <button @click="msg='ddd'">点我一下</button>
    <button @click="changeMsg">点我一下</button>
</template>