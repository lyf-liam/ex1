<script setup>
const props = defineProps(["name"])
</script>

<template>
    <h1>我是A组件 {{ props.name }}</h1>
</template>