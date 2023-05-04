<script setup>
import C from './components/C.vue'

/* 
透传属性
    - 在组件上设置属性，会自动传递给组件的根元素
    - 这样一来可以方便我们在父组件中为子组件设置属性
    - 透传会发生在没有被声明为props和emit的属性上
*/
</script>
<template>
    <h1>属性的透传</h1>
    <h2 class="box1">我是h2</h2>
    <!-- 当给组件设置属性时，会自动给根元素设置属性 -->
    <C class="box2"></C>

</template>

<style scoped>

</style>