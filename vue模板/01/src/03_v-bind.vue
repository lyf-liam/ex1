<script setup>
import { ref } from 'vue';
const imgPath = ref("/img/xxm.jpg")
const changeImg = () =>{
    imgPath.value = "/img/xmbb.jpg"
}
// 当属性较多时，可以通过在此定义+v-bind的方法统一设置
const attrs = {
    id:"box1",
    class:"hello"
}

const isDisabled = true

</script>

<template>
<!-- 
    public是静态资源目录，里面的内容打包后会原封不动的放入dist目录
    dist是根目录，所以像图片之类的可以直接写 /img/xxm.jpg 为路径
-->
<button @click="changeImg">切换图片</button>
<!-- 
    当需要为标签动态设置属性时，需要使用v-bind指令
        v-bind可以简写为 : 
    当我们为一个布尔值设置属性时，
        如果值为true，则元素上有该属性
        如果值为false，则元素没有该属性
        特殊情况：""空串，在这会被当成真值
 -->
<!-- <img v-bind:src="imgPath" alt="熊猫宝宝">
<div v-bind="attrs"></div> -->
<br>
<input type="text" disabled="disabled">
<br>
<input type="text" :disabled="isDisabled">

</template>

<style>
img{
    width: 200px;
    height: 300px;
}
</style>