<script setup>
import { useAttrs } from 'vue';

/* 
在script中，可以通过useAttrs()来获取透传过来的属性
*/
const attrs = useAttrs()

console.log(attrs);
</script>

<script>
    export default {
        // 取消了自动透传，但是不影响手动透传
        inheritAttrs:false
    }
</script>
<template>
    <!-- 单根组件 -->
    <h2 :class="$attrs.class" style="background-color: yellow;">我是组件C</h2>
    <!-- 多根组件 -->
    <!-- <h2 style="background-color: yellow;">我是组件C</h2>
    <h3 :class="$attrs.class">我也是组件C</h3>
    <h3 :="$attrs">我是h3</h3> -->
    <!-- 
        在模板中可以通过$attrs来访问透传过来的属性，
          可以手动指定透传过来的属性要添加到哪些元素上
     -->
    <!-- {{ $attrs }} -->
</template>