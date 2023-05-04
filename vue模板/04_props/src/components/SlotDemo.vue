<script setup>
const stu = {
    stuName:"孙悟空",
    age:18,
    gender:"男"
}

const stuName = "孙悟空"
const age = 18
const gender = "男"
</script>

<template>
    <div>
        SlotDemo组件
        <!-- 可以在slot中指定一个默认内容，默认会在组件中没有内容时显示 -->
        <!-- <h1><slot>默认内容</slot></h1> -->
        <h1><slot name="s1"></slot></h1>
        <h2><slot name="s2" :gender="gender" :age="age"></slot></h2>
        <!-- 不指定name属性的插槽是默认插槽(default) -->
        <h3><slot name="s3" :obj="stu"></slot></h3>
    </div>
</template>