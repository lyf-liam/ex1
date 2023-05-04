<script setup>

import { ref } from 'vue';


const arr = ref(["孙悟空","猪悟能","沙悟净","唐僧"])
const arr2 = ref([
    {
        id:1,
        name:"孙悟空",
        age:18
    },
    {
        id:2,
        name:"猪悟能",
        age:28
    },
    {
        id:3,
        name:"沙悟净",
        age:38
    }
])

</script>
<template>
    <button @click="arr.push('白骨精')">点我一下</button>
    <button @click="arr2.push({id:4,name:'唐僧',age:16})">点我一下2</button>
    <button @click="arr2.unshift({id:4,name:'唐僧',age:16})">点我一下3</button>
    <!-- 
        push是在最后加元素
        unshift是在最前面加元素 
     -->
    <ul>
        <li v-for="name in arr">{{ name }}</li>
        <li v-for="(name,index) in arr">{{ index }}-{{ name }}</li>
    </ul>

    <div v-for="obj in arr2">{{ obj.name }}--{{ obj.age }}</div>
    <hr>
    <template v-for="obj in arr2">{{ obj.name }}--{{ obj.age }}</template>
    <!-- 
        v-for使用的是diff算法，
        在遍历时，旧的结构和新的结构是按照顺序进行对比的
        在使用时，可以为元素指定一个唯一的key，有了key以后，
          元素再比较时就会按照相同的key去比较而不是顺序
     -->
    <ul>
        <li v-for="{id, name, age} in arr2">{{ id }}</li>
        <li v-for="{id, name, age} in arr2" :key="id">
            {{ age }}--{{ name }}
            <input type="text">
        </li>
    </ul>
</template>
<style scoped>

</style>