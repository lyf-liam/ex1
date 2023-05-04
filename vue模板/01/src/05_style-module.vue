<script setup>
import Mybox from './components/mybox.vue';


</script>

<template>
    <div class="app">
        <h1>今天天气真不错！</h1>
        <div :class="$style.dd">app</div>
        <hr>
        <mybox></mybox>        
    </div>
</template>

<!-- 
    css 模块化
        - 自动的对模块中的类名进行hash化，来确保类名的唯一性
        - 在模板中可以通过 $style.类名 使用，如：
          将原来的类名 class="dd" 改为 :class="$style.dd"  
        - 也可以通过module的属性值来自定义变量名，如：
            module="classes"  :class="classes.dd"
         
 -->
<style module>
    .dd{
        background-color: #bff;
    }
</style>
