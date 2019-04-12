<template>
  <div>
    <ul>
      <li
        v-for="(v,i) in list"
        :key="i"
        v-if="v.status ===1"
      >{{v.text}}</li>
    </ul>
  </div>
</template>
<script>
import { Event } from '../../utils'

//===============发布订阅模式=======================
/* // 添加订阅
Event.listen('size', function (size) {
  console.log('尺寸是' + size)
})
Event.listen('color', function (color) {
  console.log('颜色是' + color)
})
Event.remove('color')
//发布消息
Event.trigger('size', 34) */
//===============发布订阅模式=======================


//vue 响应式原理
// ====================defineProperty===============
/* function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function (b) {
      console.log('get')
      return val;
    },
    set: function (newVal) {
      console.log('set')
      val += newVal
    }
  })
}
let obj = { name: '成龙大哥', say: '：其实我之前是拒绝拍这个游戏广告的，' };
Object.keys(obj).forEach(k => {
  defineReactive(obj, k, obj[k]);
});
obj.say = '后来我试玩了一下，哇，好热血，蛮好玩的';
console.log(obj.name + obj.say); */
// ====================defineProperty===============


//============================Proxy======================


let handler = {
  get: function (target, key, receiver) {
    console.log('get', key);
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  },
  deleteProperty (target, key) {
    console.log('delete', key)
    delete target.key;
    return true;
  }
}

/* 
// 测试对象
let obj = {};
let data = new Proxy(obj, handler)
data.name = "xiaoming"
delete data.name
console.log(data.name) */

/* //测试数组
let arr = ['尹天仇', '我是一个演员', '柳飘飘', '死跑龙套的'];
let array = new Proxy(arr, handler)
//可以响应数组赋值
array[1] = '我养你啊' // set 1 我养你啊 */

//============================Proxy======================





export default {
  name: "BsTest",
  data () {
    return {
      list: []
    };
  },
  methods: {

  },
  mounted () {
    setTimeout(() => {
      this.list = [{ text: 666 }, { text: 777 }, { text: 888 }]
    }, 1000);
    setTimeout(() => {
      this.list.forEach((v, i) => {
        //不支持通过索引设置数组成员
        // this.list[i] = { text: i }
        v.text = i
        v.status = 0; // 新增状态
      })
      // console.log(this.list)
    }, 2000)


  }
};
</script>

<style lang="less" scoped>
.bs-test {
}
</style>