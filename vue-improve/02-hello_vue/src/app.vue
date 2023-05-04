<script>
    import MyButton from './components/MyButton.vue';
    export default{
        data(){
            return{
                msg:"我爱Vue！"
            }
        },
        components:{
            MyButton:MyButton
        }
    }

</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
</template>