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

//===============发布订阅模式=======================
// 添加订阅
Event.listen('size', function(size) {
  console.log('尺寸是' + size)
})
Event.listen('color', function(color) {
  console.log('颜色是' + color)
})
Event.remove('color')
//发布消息
Event.trigger('size', 34)
//===============发布订阅模式=======================
