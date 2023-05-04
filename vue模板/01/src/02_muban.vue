<script setup>
const msg = "我爱vue"
const html = `<h2>我是一段HTML代码</h2>`
</script>

<template>
    <!-- 
    - 在模板中，可以直接访问到组件中申明的变量
    - 除了组件中的变量外，vue也为我们提供了一下全局对象访问
        比如：Data、Math、RegExp ...
        除此之外，也可以通过app对象来向vue中添加一些全局变量
        在main.js中添加 app.config.globalProperties.xxx="xxx"
        弹窗类的用bind app.config.globalProperties.alert = alert.bind(this)
        但是一般情况下没必要在全局声明
    - 使用插值语法（双大括号）时，括号中只能使用表达式
        表达式，就是有返回值的语句
    - 插值语法实际上就是在修改元素的textContent，
        如果内容中含有标签，标签会被转义显示，不会作为标签生效
    
    指令：
        - 指令模板中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
        - 指令使用v-开头
            v-text 将表达式的值作为元素的textContent插入，作用同{{  }}
                使用指令时，不需要通过{{  }}来指定表达式
            v-html 将表达式的值作为元素的innerHTML插入，会有XSS攻击的风险
    -->
    <h1>{{ msg }}</h1>
    <!-- <h2>{{ alert(123) }}</h2> -->
    <h2>{{ Math.random() }}</h2>
    <div>{{ html }}</div>
    <div v-text="html"></div>
    <div v-html="html"></div>

</template>