<!--R0333 WS3 -->
<template>
    <div id="ws-header">
        <img src="../assets/logo.png" alt="vue.js" class="logo"/>
        <h1>R0333 - Project Web App Development with a JavaScript Framework <br/> Vue.js: Workshop {{ number }} - {{title }} / Solutions</h1>
        <hr/>
    </div>
</template>

<script>
    export default {
        name: "ws-header",
        props: ['number', 'title']
    }
</script>

<style scoped>
    .logo {
        float: left;
        margin: 0 50px 50px 0;
        height: 150px;
    }
</style>