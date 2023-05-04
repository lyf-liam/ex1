<script setup>

/* 子组件中的数据通常不会在子组件中直接定义
这样会导致数据与视图发生耦合
子组件中的数据通常会在创建组件实例时确定
父组件可以通过 props 来将数据传递给子组件 */

/* 
    使用props
        -先在子组件中定义props
        const props = defineProps(["a","b","c"])
        - 可以在父组件中使用
        <Tabitem a="11" b="22" c="33"></Tabitem>
 */

const props = defineProps(["item"])
const item = props.item
console.log(props.item)
console.log(item.name)
</script>
<template>
    <div class="tab-item">
        <!-- 图片 -->
        <div class="photo">
            <img :src="item.img" :alt="item.name">
            <span>{{ item.rate }}</span>
        </div>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}热度</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tab-item{
    display: flex;
    margin-bottom: 20px;
}
/* 容器 */
.photo{
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}
/* 图片 */
.photo img{
    width: 100%;
    /* 
    解决图片底部基线对齐导致的缝隙，
    将vertical-align的默认属性baseline改为其他的如top、bottom等都行
    */
    vertical-align: baseline;
    vertical-align: top;
}
/* 排名 */
.photo span{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: rgb(245,102,1);
    font-size: 20px;
    font-weight: bold;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
}
.desc{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color:#fff;
    flex: auto;
    margin-left: 30px;
}
.hot-bar{
    background-color: rgb(3,37,99);
    border-radius: 20px;
    text-indent: 0.5em;
    overflow: hidden;
}
.inner{
    border-radius:20px ;
    width: 10%;
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