<script setup>
import { inject, ref } from 'vue';

const {addNewStudent} = inject("student")

const emits = defineEmits(["addStudent"])
// 创建一个ref来存储新的信息
const newStu = ref({
    name:"",
    age:1,
    gender:"男",
    address:""
})
const submitHandler = () =>{
    // console.log(newStu.value);

    // 调用方法，将newStu添加到数组中
    // emits("addStudent",newStu.value)

    // 进行浅复制，使传入参数为非响应式的
    // emits("addStudent",Object.assign({},newStu.value))

    // 用解构去传数据
    // emits("addStudent",{...newStu.value})

    // 用依赖注入传递数据
    addNewStudent({...newStu.value})

    // 让输入框清空
    newStu.value.name=""
    newStu.value.age=1
    newStu.value.gender="男"
    newStu.value.address=""
}
</script>
<template>
    <form @submit.prevent="submitHandler">
        <div>
            姓名：<input type="text" v-model="newStu.name">
        </div>
        <div>
            年龄：<input type="number" v-model="newStu.age" min="1">
        </div>
        <div>
            性别：
            <input v-model="newStu.gender" type="radio" name="gender" value="男">男
            <input v-model="newStu.gender" type="radio" name="gender" value="女">女
        </div>
        <div>
            住址：<input v-model="newStu.address" type="text">
        </div>
        <div>
            <button>添加</button>
        </div>
    </form>
</template>