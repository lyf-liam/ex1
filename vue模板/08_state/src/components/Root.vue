<script setup>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import { ref, provide } from "vue"

const count = ref(0)
const increment = () => {
    count.value++
}

provide("count", {
    count,
    increment
})
</script>
<template>
    <h2>根组件</h2>
    <ul>
        <li>
            <ComponentA></ComponentA>
        </li>
        <li>
            <ComponentB></ComponentB>
        </li>
    </ul>
</template>