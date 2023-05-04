<script setup>
    import SlotDemo from './components/SlotDemo.vue';
    import A from './components/A.vue'

    const name = "孙悟空"
</script>
<template>
    <h1>App组件</h1>
    <!-- 直接写在组件中的内容是默认插槽的内容，只会出现在默认插槽中 -->
    <SlotDemo>
        <A :name="name"></A>
        <!-- <template v-slot:default>App传递的内容</template> -->
        <template v-slot:s1>s1插槽</template>
        <template v-slot:s2="slotProps">
            {{ slotProps }}
            <A :name="slotProps.age"></A>
        </template>
        <template v-slot:s3="stt">
            {{ stt.obj.age }}
        </template>
    </SlotDemo>
</template>