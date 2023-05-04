<script setup>
import { ref } from "vue"
const text = ref("")
const bool = ref(true)
const hobbies = ref([])
const gender = ref("女")
const friend = ref("")

function submitHandler() {
    console.log(text.value);
    // 将text提交给服务器，再根据服务器返回的数据做后续的操作
}
</script>

<template>
    <h1>Hello Vue</h1>
    <form @submit.prevent="submitHandler">
        <!-- 
            v-model的修饰符：
              .lazy 使用change来处理数据，input不会频繁触发，而是在失焦后触发
              .trim 去除前后的空格，中间的不会去除
              .number 将数据转成数值
            
         -->
        <div>
            信息：<input type="text" v-model.lazy="text">
        </div>
        <div>
            是否：<input type="checkbox" v-model="bool" true-value="是" false-value="否">
        </div>
        <div>
            爱好：
            <input v-model="hobbies" type="checkbox" name="hobby" value="篮球">篮球
            <input v-model="hobbies" type="checkbox" name="hobby" value="足球">足球
            <input v-model="hobbies" type="checkbox" name="hobby" value="羽毛球">羽毛球
            <input v-model="hobbies" type="checkbox" name="hobby" value="乒乓球">乒乓球
        </div>
        <div>
            性别：
            <input v-model="gender" type="radio" name="gender" value="男">男
            <input v-model="gender" type="radio" name="gender" value="女">女
        </div>
        <div>
            朋友:
            <select v-model="friend" name="" id="">
                <option disabled value="">请选择你的好朋友</option>
                <option value="孙悟空">孙悟空</option>
                <option value="猪八戒">猪八戒</option>
                <option value="沙和尚">沙和尚</option>
            </select>
        </div>
        <div>
            <button>提交</button>
        </div>
    </form>
</template>

<style scoped></style>
