//简易版vue的MVVM实现

class Dep {
  constructor() {
    //依赖收集列表Set类型保证不重复
    this.subs = new Set()
  }
  addSub(sub) {
    //增加订阅者
    this.subs.add(sub)
  }
  notify() {
    //通知订阅者更新
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

class Watcher {
  //观察者

  constructor(obj, key, cb) {
    this.obj = obj //代理对象Proxy
    this.key = key
    this.cb = cb //回调函数
    this.value = this.get() //获取老数据
  }

  get() {
    Dep.target = this
    // ================== ⑴ 核心触发Observer中的get==================
    //此处因为实例化Watcher的时候constructor执行了get方法；为Dep添加了target属性，并且取值会触发Observer中的get,所以将watch对象添加到了dep的订阅者的队列里
    let value = this.obj[this.key]
    // ==================核心触发Observer中的get==================
    Dep.target = null
    return value
  }

  update() {
    //更新
    let newVal = this.obj[this.key]
    if (this.value !== newVal) {
      this.cb(newVal)
      this.value = newVal
    }
  }
}

function Observer(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      obj[key] = Observer(obj[key])
    }
  })
  let dep = new Dep()
  let handler = {
    get: function(target, key, receiver) {
      // ======================= ⑵ 核心通过watcher添加target属性，从而添加到Dep订阅者队列====================
      // 存在 Dep.target，则将其添加到dep实例中
      Dep.target && dep.addSub(Dep.target)
      // =======================核心通过watcher添加target属性，从而添加到Dep订阅者队列====================
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
      //通知订阅者更新
      let result = Reflect.set(target, key, value, receiver)
      dep.notify()
      return result
    }
  }

  return new Proxy(obj, handler)
}

let data = {
  name: '渣渣辉',
  page: {
    num: 30
  }
}
function print1(data) {
  console.log('我系', data)
}
function print2(data) {
  console.log('我今年', data)
}
data = Observer(data)
new Watcher(data, 'name', print1)
data.name = '杨过' // 我系 杨过

new Watcher(data, 'age', print2)
data.age = '24' // 我今年 24
// 可以响应新添加的属性
new Watcher(data, 'page', print1)
data.page = {
  num: 100,
  size: 200
}

export default {
  Observer,
  Watcher
}
