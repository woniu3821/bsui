<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <bs-test></bs-test>
    <div id="num"></div>
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
        <li>我是列表111</li>
      </ul>
    </div>
    <div class="router">
      <ul>
        <li>
          <router-link to="/a/ppp">状态提升</router-link>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// 运行


export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data () {
    return {
      num: null
    }
  },
  methods: {
    numRunFun (num, maxNum) {
      let timer = null;
      let text = num;
      let dom = document.querySelector('#num')
      timer = requestAnimationFrame(function fn () {
        if (text < maxNum) {
          text++
          let steps = 10 * text;
          dom.style.width = steps + 'px'
          if (steps > 300) {
            dom.style.backgroundColor = "#ed4014"
          }
          if (steps > 600) {
            dom.style.backgroundColor = "#19be6b"
          }
          dom.innerHTML = `&nbsp;&nbsp;${text}`;
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
        }
      })
    }
  },
  mounted () {
    // this.$toast({ content: '我是一个消息提示', duration: 3000 })
    this.$toast('我是一个消息提示2222')
    this.numRunFun(0, 100)
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
#num {
  text-align: left;
  background-color: #2d8cf0;
  color: #fff;
  display: flex;
  align-items: center;
  height: 15px;
  border-radius: 15px;
  transition: background-color 0.3s;
}
.router {
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      list-style: none;
    }
  }
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
