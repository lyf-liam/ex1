<script setup>

import { ref } from 'vue';


const arr = ref(["孙悟空","猪悟能","沙悟净","唐僧"])

</script>
<template>
    
    <ul>
        <li v-for="name in arr">{{ name }}</li>
    </ul>

</template>
<style scoped>

</style>