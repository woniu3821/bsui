//============================Proxy======================

let handler = {
  get: function(target, key, receiver) {
    console.log('get', key)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    console.log('set', key, value)
    return Reflect.set(target, key, value, receiver)
  },
  deleteProperty(target, key) {
    console.log('delete', key)
    delete target.key
    return true
  }
}

// 测试对象
let obj = {}
let data = new Proxy(obj, handler)
data.name = 'xiaoming'
delete data.name
console.log(data.name)

//测试数组
let arr = ['尹天仇', '我是一个演员', '柳飘飘', '死跑龙套的']
let array = new Proxy(arr, handler)
//可以响应数组赋值
array[1] = '我养你啊' // set 1 我养你啊

//============================Proxy======================
