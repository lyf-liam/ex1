<script setup>
import { reactive, ref } from 'vue';
import Tabitem from './components/tabitem.vue';
// 创建一个变量记录选项卡的状态
const current = ref(0)   //0：球员，1：球队

const player = reactive({
    name: "梅西",
    img: "/images/messi.png",
    rate: 1,
    hot: 433760
})

const team = reactive({
    name: "法国",
    img: "/images/法国.jpg",
    rate: 1,
    hot: 333760
})

const players = reactive([
    {
        name: "梅西",
        img: "/images/messi.png",
        rate: 1,
        hot: 433760
    },
    {
        name: "C罗",
        img: "/images/ronaldo.png",
        rate: 2,
        hot: 333760
    },
    {
        name: "内马尔",
        img: "/images/neymar.png",
        rate: 3,
        hot: 233760
    }
])

const teams = reactive([
    {
        name: "法国",
        img: "/images/法国.jpg",
        rate: 1,
        hot: 333760
    },
    {
        name: "巴西",
        img: "/images/巴西.jpg",
        rate: 2,
        hot: 233760
    },
    {
        name: "荷兰",
        img: "/images/荷兰.jpg",
        rate: 3,
        hot: 133760
    }
])

// 获取最大热度
const playerMaxHot = players[0].hot
const teamMaxHot = teams[0].hot

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
        <div class="main">
            <div v-show="current === 0">
                <!-- 球员 -->
                <div class="tab-list">
                    <Tabitem v-for="player in players" :item="player" :max-hot="playerMaxHot">{{ name }}</Tabitem>
                    <!-- <Tabitem :item="players[0]" :max-hot="maxHot"></Tabitem>
                    <Tabitem :item="players[1]" :max-hot="maxHot"></Tabitem>
                    <Tabitem :item="players[2]" :max-hot="maxHot"></Tabitem> -->
                </div>
            </div>

            <div v-show="current === 1">
                <!-- 球队 -->
                <div class="tab-list">
                    <Tabitem v-for="team in teams" :item="team" :max-hot="teamMaxHot"></Tabitem>
                </div>
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
.tab-list{
    margin: 20px;
}
</style>
