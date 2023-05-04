<script setup>
/* 
    父组件可以通过props向子组件传递数据
    注意：父组件传递给子组件的props都是只读打的，无法修改
        即是可以修改，我们也尽量不要在子组件中去修改父组件的数据
        props锁定第一层的不能更改，但是第二层的可以改
        但是注意尽量不要用这种方法
        如props.obj={count:1}不能改成功，但是props.obj.count++可以成功
    属性名
        - 定义属性名时，属性名要遵循驼峰命名法
*/


// 定义props,只有这里定义的值(如：a)才能从父组件得到
    // const props = defineProps(["a"])
    // const props = defineProps(["count","obj"])

    // 规定每个数据的类型，可以在开发的时候用于检测类型是否有错
    const props = defineProps({
        count:Number,
        obj:Object,
        maxLength:{
            type:String,
            required:true,
            default:"xxx",
            validator(value){
                return value === "hhh"
            }
        }
    })
    console.log(props);
</script>
<template>
    <div>
        <h2>我是子组件 MyBox{{ props.obj.count }}</h2>
        <button @click="props.obj.count++">MB的按钮</button>
        <hr>
    </div>
    
</template>
<style scoped>
div{
    color: tomato;
}
</style>