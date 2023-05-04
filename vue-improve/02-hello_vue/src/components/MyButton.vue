<script>
    export default{
        data(){
            return{
                num:0
            }
        }
    }
</script>

<template>
    <button @click="num++">点了{{ num }}下</button>
</template>