<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <bs-test></bs-test>
    <div class="context">
      <bs-sticky>
        <div class="title">我是标题我会吸顶</div>
      </bs-sticky>
      <ul class="list">
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
        <li>我是列表</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 5000px;
}
.context {
  width: 400px;
  .title {
    font-size: 20px;
    background: #eee;
    height: 35px;
    line-height: 35px;
    box-shadow: 0 1px 5px #ccc;
  }
  .list {
    height: 300px;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    li {
      text-align: left;
    }
  }
}
</style>
