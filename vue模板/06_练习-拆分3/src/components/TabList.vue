<script setup>
/* 用来显示列表的 */
import tabitem from './tabitem.vue';

const props = defineProps(["items","maxHot"])
</script>
<template>
    <div class="tab-list">
        <tabitem 
            v-for="player in props.items" 
            :item="player" 
            :max-hot="props.maxHot"
        >
            {{ name }}
        </tabitem>
    </div>
</template>
<style scoped>
.tab-list{
    margin: 20px;
}
</style>