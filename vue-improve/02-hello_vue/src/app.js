//引入组件
import MyButton from "./components/MyButton"

// 创建根组件
export default {
    data(){
        return{
            msg : "hhhhhh!",
            num : 0
        }
    },

    //在组件中注册子组件
    components:{
        // 组件注册的名字（后面当标签用时的名字） ：最上面引入组件的名字
        // 可以写MB：MyButton，此时，后面的标签应写为<MB></MB>
        // MyButton:MyButton  //同名的时候可以省略，只写一个
        MyButton
    },

    template: `
    <h1>{{msg}}</h1>
    <h2>这是根组件的按钮</h2>
    <button @click="num++">点我！！！</button><span>共点击{{num}}次</span>
    <MyButton></MyButton>
    `
}