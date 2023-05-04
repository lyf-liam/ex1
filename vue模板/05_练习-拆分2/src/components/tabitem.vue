<script setup>
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';


/* 
    子组件中的数据通常不会在子组件中直接定义
    这样会导致数据与视图发生耦合
    子组件中的数据通常会在创建组件实例时确定
    父组件可以通过 props 来将数据传递给子组件
*/

/* 
    使用props
        -先在子组件中定义props
        const props = defineProps(["a","b","c"])
        - 可以在父组件中使用
        <Tabitem a="11" b="22" c="33"></Tabitem>
 */

const props = defineProps(["item","max-hot"])
const item = props.item
console.log(props.item)
console.log(item.name)
</script>
<template>
    <div class="tab-item">
        <!-- 图片 -->
        <Photo :src="item.img" :alt="item.name" :rate="item.rate"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <HotBar :hot="item.hot" :max-hot="props.maxHot"></HotBar>
        </div>
    </div>
</template>
<style scoped>
.tab-item{
    display: flex;
    margin-bottom: 20px;
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

</style>