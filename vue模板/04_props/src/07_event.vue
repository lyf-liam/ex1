<script setup>
import {ref} from "vue"

const count = ref(0)

function clickAlert(event){
    /* 
        方法事件处理器的回调函数，vue会将事件对象作为参数传递
        这个事件对象就是DOM中原生的事件对象，它里面包含了事件触发时的相关信息
        通过该对象，可以获取：触发事件对象、触发事件时的一些情况 ...
        同时通过该对象，也可以对事件进行一些配置：取消事件的传播、取消事件的默认行为

    */
    // alert("函数执行")
    console.log(event);
}
// ...arg是可变参数的意思
function clickAlert2(...args){
    /* 
        内联事件处理器，回调函数由我们自己调用，参数也是我们自己传递的

        在内联事件处理器中，可以使用$event来访问事件对象
    */
    console.log(args);
}

function boxHandler(event,text){
    // 可以通过事件对象来取消事件传播
    // 原生js方式
    event.stopPropagation()
    alert(text)
}
function boxHandler2(text){
    
    alert(text)
}
</script>
<template>
    <h1>{{ count }}</h1>
    <!-- 
        为元素绑定事件：
            1.绑定事件使用v-on指令
                v-on:事件名，简写为 @事件名
            2.绑定事件的两种方式
                a.内联事件处理器（我们自己调用）
                    - 在事件触发时，直接执行js语句
                    - 内联事件处理器，回调函数的参数由我们自己传
                    
                b.方法事件处理器（vue帮我们调用函数）
                    - 事件触发时，vue对事件的函数进行调用
                    - 方法事件处理器，回调函数的参数由vue帮我们传
                        - 参数就是事件对象

                vue如何区分两种处理器：
                    检查事件的值是否是合法的js标识符(变量名)或属性访问路径
                        如果是，则表示是方法事件处理器
                        否则，表示它是内联事件处理器
                    foo  (方法)
                    foo.ss (方法)
                    foo++ (内联)
                    foo() (内联)
     -->
    <button @click="count++">点我一下</button>
    <hr>
    <button @click="clickAlert">方法事件处理器</button>
    <hr>
    <button @click="clickAlert2(1,2,'sss',$event)">内联事件处理器</button>
    <hr>
    <div class="box1" @click="boxHandler($event,'box1')">
        box1
        <div class="box2" @click="boxHandler($event,'box2')">
            box2
            <div class="box3" @click="boxHandler($event,'box3')">box3</div>
        </div>
    </div>
    <hr>
    <!-- vue中提供了一些修饰符，如.stop效果和stopPropagation效果一样 -->
    <div class="box1" @click.stop="boxHandler2('box1')">
        box1
        <div class="box2" @click.stop="boxHandler2('box2')">
            box2
            <div class="box3" @click.stop="boxHandler2('box3')">box3</div>
        </div>
    </div>

</template>

<style scoped>
.box1{
    width: 200px;
    height: 200px;
    background-color: #bfa;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orange;
}
.box3{
    width: 50px;
    height: 50px;
    background-color: tomato;
}
</style>