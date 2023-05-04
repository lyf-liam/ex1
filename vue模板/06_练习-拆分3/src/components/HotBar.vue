<script setup>
import {computed} from "vue"
const props = defineProps(["hot","maxHot"])

const width = computed(() => {
    //计算百分比
    return (props.hot / props.maxHot) * 100 + "%"
})

</script>

<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }}热度</div>
    </div>
</template>

<style scoped>
.hot-bar{
    background-color: rgb(3,37,99);
    border-radius: 20px;
    text-indent: 0.5em;
    overflow: hidden;
}
.inner{ 
    border-radius:20px ;
    width: v-bind(width);
    /* 渐变色要用background-image而不是background-color */
    background-image: linear-gradient(
        90deg,
        rgb(187,3,52) 50%,
        rgb(66,2,12)
    );
    /* 禁止文字换行用 white-space: nowrap; */
    white-space: nowrap;
}
</style>