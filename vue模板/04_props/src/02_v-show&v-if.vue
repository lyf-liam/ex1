<script setup>

import { ref } from 'vue';

const isShow = ref(true)


</script>
<template>
    <h1>我是APP根组件</h1>
    <button @click="isShow = !isShow">切换</button>
    <!-- 
        v-show 可以根据值来决定元素是否显示（通过display来切换元素显示状态）
        v-if 可以根据表达式的值来决定是否显示元素（会直接将元素删除）
            - v-show通过CSS来切换组件的显示与否，切换时不会涉及重新渲染
              切换的性能比较高。
              但是初始化时，需要对所有组件初始化，即使组件暂时不显示，
              所以初始化性能要差一些。
            - v-if通过删除添加元素的方式来切换元素的显示，切换时反复的渲染组件，
              切换的性能比较差
              但只会初始化需要用到的组件，所有初始化性能比较好。
              v-if可以和v-else-if和v-else结合使用，适用于更复杂场景
              v-if可以配合template使用
     -->
    <div v-show="isShow">
        <h2>你猜我显示吗？</h2>
    </div>
    
</template>
<style scoped>

</style>