<script setup>
import { ref } from "vue";
import studentList from "./components/studentList.vue";
import studentForm from "./components/studentForm.vue";

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
// 添加一个删除学生的方法
const addNewStudent = (student) => {
    console.log(STU_ARR.value.length);

    // 此处.at()函数会报错，未找到原因
    // const lastId = STU_ARR.value.at(-1)?.id
    // const newId = lastId + 1
    // console.log(newId);

    const lastId = STU_ARR.value.length
    const newId = lastId + 1
    student.id = newId
    STU_ARR.value.push(student)
}
</script>

<template>
    <!-- <studentList :stus="STU_ARR"></studentList> -->
    <!-- <studentList :students="STU_ARR" :fn="delStuByIndex"></studentList> -->
    <!-- 将组件中的方法以自定义事件的形式发送给其他组件 -->
    <!-- <studentList :students="STU_ARR" @del-stu="delStuByIndex"></studentList> -->
    <studentList :students="STU_ARR" @del-stu="delStuByIndex"></studentList>
    <hr>
    <studentForm @add-student="addNewStudent"></studentForm>
</template>

<style scoped></style>
