<script setup>

</script>
<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>  
                <th>住址</th>  
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>孙悟空</th>
                <th>18</th>
                <th>男</th>
                <th>花果山</th>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
table{
    width: 50%;
    border-collapse: collapse;
}
caption{
    font-size: 30px;
    font-weight: bold;

}
th,td{
    border: 1px solid #000;
    font-size: 25px;
}
</style>