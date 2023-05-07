<script setup>
import { inject } from "vue"
const { count, increment } = inject("count")
</script>
<template>
    <h4>
        ComponentC --{{ count }}--
        <button @click="increment">按钮</button>
    </h4>
</template>