//把按钮封装起来
export default {
    data(){
        return {
            num:0
        }
    },
    template:`
    <h2>这是子组件</h2>
    <button @click="num++">点我！！！</button><span>共点击{{num}}次</span>
    `
}