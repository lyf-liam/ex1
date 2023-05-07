<script setup>
import { inject } from 'vue';

const {student,delStuByIndex} = inject("student")

const emits = defineEmits(["delStu"]) 
const props = defineProps(["students"])


// 定义一个删除学生的方法
const delStuHandler = (index) => {
    if(confirm("该操作不可恢复，请确认！")){
        // props.students.splice(index,1)
        // props.fn(index)
        // emits("delStu",index)
        delStuByIndex(index)
    }
}
</script>
<template>
    <tbody>
        <tr v-for="(stu,index) in student">
            <td>{{ stu.id }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <!-- 在模板中可以通过$emit()来触发自定义事件 -->
                <!-- <a href="#" @click.prevent="$emit('delStu',index)">删除</a> -->
                <!-- <a href="#" @click.prevent="emits('delStu',index)">删除</a> -->
                <a href="#" @click.prevent="delStuHandler(index)">删除</a>
            </td>
        </tr>
    </tbody>
</template>
<style scoped>
th,td{
    border: 1px solid #000;
    font-size: 15px;
}
</style>