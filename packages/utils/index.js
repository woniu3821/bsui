// 发布订阅模式

export const Event = (function() {
  let list = {}
  let listen = null
  let trigger = null
  let remove = null

  listen = function(key, fn) {
    if (!list[key]) {
      list[key] = []
    }
    list[key].push(fn)
  }

  trigger = function() {
    //此处会改变arguments对象，不包含第一个元素
    let key = Array.prototype.shift.call(arguments)
    let fns = list[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments)
    }
  }

  remove = function(key, fn) {
    let fns = list[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        let _fn = fns[i]
        if (_fn === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }

  return {
    trigger,
    listen,
    remove
  }
})()

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
    let value = this.obj[this.key]
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
      // 存在 Dep.target，则将其添加到dep实例中
      Dep.target && dep.addSub(Dep.target)
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
      //通知订阅者更新
      dep.notify()
      return Reflect.set(target, key, value, receiver)
    }
  }

  return new Proxy(obj, handler)
}

let data = {
  name: '渣渣辉'
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
