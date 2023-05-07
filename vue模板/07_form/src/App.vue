<script setup>
import { ref,provide } from "vue";
import studentList from "./components/studentList.vue";
import studentForm from "./components/studentForm.vue";

/* 
依赖注入
    - 通过依赖注入，可以跨域多层组件向其他的组件传递数据(名字相同时，谁近取谁)
    - 步骤：
        1. 设置依赖(provide)   provide(name,value)
        2. 注入数据(inject)    const value = inject(name,default)
*/



// 发送请求来向服务器加载数据
const STU_ARR = ref([
    {
        id: 1,
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "花果山"
    },
    {
        id: 2,
        name: "猪八戒",
        age: 18,
        gender: "男",
        address: "高老庄"
    },
    {
        id: 3,
        name: "沙和尚",
        age: 18,
        gender: "男",
        address: "流沙河"
    },
    {
        id: 4,
        name: "唐僧",
        age: 18,
        gender: "男",
        address: "女儿国"
    },
])

// 添加一个删除学生的方法
const delStuByIndex = (index) => {
    STU_ARR.value.splice(index, 1)
}
// 添加一个增加学生的方法
const addNewStudent = (student) => {
    console.log(STU_ARR.value.length)
    const len = STU_ARR.value.length

    // 此处.at()函数会报错，未找到原因
    // const lastId = STU_ARR.value.at(-1)?.id

    const lastId = STU_ARR.value[len-1]?.id
    // const lastId = STU_ARR.value.length
    const newId = lastId + 1
    student.id = newId
    STU_ARR.value.push(student)

}

provide("student",{
    student:STU_ARR,
    delStuByIndex:delStuByIndex,
    addNewStudent:addNewStudent
})
</script>

<template>
    <!-- <studentList :stus="STU_ARR"></studentList> -->
    <!-- <studentList :students="STU_ARR" :fn="delStuByIndex"></studentList> -->
    <!-- 将组件中的方法以自定义事件的形式发送给其他组件 -->
    <!-- <studentList :students="STU_ARR" @del-stu="delStuByIndex"></studentList> -->
    
    <!-- <studentList :students="STU_ARR" @del-stu="delStuByIndex"></studentList>
    <hr>
    <studentForm @add-student="addNewStudent"></studentForm> -->
    
    <!-- 使用依赖注入 -->
    <studentList></studentList>
    <hr>
    <studentForm></studentForm>
</template>

<style scoped></style>
