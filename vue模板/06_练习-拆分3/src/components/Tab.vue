<script setup>
import {ref} from 'vue'
const current = ref(0)
</script>

<template>
    <!-- 选项卡外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡头部 -->
        <header class="tab-head">
            <div @click="current=0" class="tab-button" :class="{active:current === 0}">热门球员</div>
            <div @click="current=1" class="tab-button" :class="{active:current === 1}">热门球队</div>
        </header>
        <!-- 选项卡主体 -->
        <!-- 
            Tab组件主要的作用是在多个选项卡之间进行切换，
                其中显示的主要内容是 TabList
                而TabList的数据位于App组件中，
                如果还按之前的方式编写代码，必须要再App值将数据传递给Tab
                    然后再由Tab传递给TabList，这样做可以但麻烦
         -->
        <div class="main">
            <div v-show="current === 0">
                <!-- 球员 -->
                <!-- <TabList :items="players" :max-hot="playerMaxHot"></TabList> -->
                <slot name="0"></slot>
            </div>

            <div v-show="current === 1">
                <!-- 球队 -->
                <!-- <TabList :items="teams" :max-hot="teamMaxHot"></TabList> -->
                <slot name="1"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-wrapper{
    box-sizing: border-box;
    width: 600px;
    padding: 20px;
    background-color: rgb(45,83,211);
}
.tab-head{
    display: flex;
    border-radius: 5px;
    overflow: hidden;
}
.tab-button{
    background-color: rgb(255, 255, 255);
    font-size: 30px;
    flex:auto;
    padding: 10px 0;
    text-align: center;
    /* 变成可点击对象了 */
    cursor: pointer;
    transition: 0.5s;
}
.tab-button:not(.active):hover{
    color: rgb(187,35,2);
}
.active{
    background-color: rgb(187,35,2);
    color: #fff;
}
</style>
