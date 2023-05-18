<script setup>
import { inject } from "vue"
// import { countStore } from "../store/count";
// const { count, increment } = inject("count")

import { useStudentStore } from "../store/studentStore"
import { storeToRefs } from "pinia";

const stuStore = useStudentStore()

/*
store实例本身就是一个reactive对象，
    可以通过它直接访问state中的数据

但是如果直接将state中的数据结构出来，那么数据将会丧失响应性

可以通过storeToRefs()来对store进行解构
    它可以将state和getters中的属性解构为ref属性，从而保留其响应性

state的修改
    1. 直接修改
    2. 通过$patch进行修改
    3. 通过$patch传函数的形式进行修改
    4. 直接替换state
    5. 重置state
*/
// const { name, age } = stuStore

const { name, age, title } = storeToRefs(stuStore)

// state中的属性(方法)，都可以通过store对象直接访问

const clickHandler = () => {
    // state方法2
    // stuStore.$patch({
    //     name: "孙小圣",
    //     age: 20,
    //     skill: ["救命毫毛"]
    // })

    // state方法3
    // stuStore.$patch(()=>{
    //     StaticRange.skill.push("xxxx")
    // })

    // stuStore.skill.push("ssss")

    // state方法4
    stuStore.$state = { name: "ABC" }
    stuStore.$patch({ name: "ddd" })
}

/* 
store的订阅
    - 当store中的state发生变化时，做一些响应的操作
    - store.$subscribe(函数，配置对象)
*/
stuStore.$subscribe((mutation, state) => {
    // mutation 表示修改的信息
    // console.log(mutation.events);
    // console.log(mutation.events[0] == mutation.events[1]);
    // console.log("1111 " + mutation.payload);

    // console.log("state发生变化", state);
    // 使用订阅时，不要在回调函数中直接修改state，会触发递归，会死循环。
}, {
    detached: true
})

stuStore.$onAction(({ name, store, args, after, onError }) => {
    /* 
        name 调用的action的名字
        store store实例
        args action接收到的参数
        after() 可以设置一个回调函数，函数会在action成功调用后触发
        onError() 可以设置一个回调函数，函数会在action调用失败后触发
    */

    // console.log(args);

    after(() => {
        console.log(name + "成功执行");
    })

    onError((err) => {
        console.log(name + "执行失败", err);
    })

})

</script>
<template>
    <h4>
        ComponentC
        <!-- 未进行结构的方法 -->
        <!-- -- {{ stuStore.name }} -->
        <!-- 结构之后的方法 -->
        -- {{ name }} -- {{ age }} -- {{ title }}
        -- {{ stuStore.skill }}
        -- {{ stuStore.double }}
        <br>
        <!-- -- {{ countStore.count }} -- -->
        <!-- <button @click="countStore.increment">按钮</button> -->

        <button @click="stuStore.growUp">长大</button>

        <hr>

        <button @click="stuStore.name = '孙大圣'">修改名字</button>
        <button @click="clickHandler">patch</button>
        <button @click="stuStore.$reset()">重置</button>
    </h4>
</template>