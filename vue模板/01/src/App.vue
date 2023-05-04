<script setup>
    const arr = ["box1","box2","box3"]
    const arr2 = [{box1:true},{box2:false},{box3:false}]
    const style = {
        color:"red",
        backgroundColor:"#aff"
    }
</script>
<template>
    <h1 class="header">我爱vue</h1>
    <h2 :class="arr">11111</h2>
    <div :class="arr2">22222</div>
    <div :style="style">3333</div>
</template>
<style scoped>
.header{
    background-color: #aff;
}
</style>