<script setup>
import StudentItem from './studentItem.vue';

import { inject,provide } from 'vue';


// 通过defineProps定义的属性在attrs中就不存在了
// 使用自定义属性时，最好通过defineProps来声明一下
// const props = defineProps(["students","fn"])

// const props = defineProps(["students"])
// const emits = defineEmits(["delStu"]) 

</script>
<template>
    <!-- {{ $attrs.stus }} -->
    <!-- {{ props.students }} -->
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>  
                <th>住址</th>  
                <th>操作</th>
            </tr>
        </thead>
        <!-- 透传方法 -->
        <!-- <StudentItem :students="$attrs.students" 
        @del-stu="$attrs.onDelStu"></StudentItem> -->
        <!-- 依赖注入 -->
        <StudentItem></StudentItem>
    </table>
</template>
<style scoped>
table{
    width: 80%;
    border-collapse: collapse;
    text-align: center;
}
caption{
    font-size: 30px;
    font-weight: bold;

}
th,td{
    border: 1px solid #000;
    font-size: 15px;
}
</style>