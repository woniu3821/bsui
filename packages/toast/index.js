import BsToast from './src/toast.vue'
import { typeOf } from '../utils'
BsToast.install = Vue => {
  let mianConstructor = Vue.extend(BsToast)
  Vue.prototype.$toast = function(options) {
    let opt =
      typeOf(options) === 'object'
        ? {
            props: {
              content: {
                type: [String, Number],
                default: options.content
              },
              duration: {
                type: Number,
                default: function() {
                  if (options.duration) {
                    return options.duration
                  } else if (options.duration === 0) {
                    return 0
                  } else {
                    return 1500
                  }
                }
              }
            }
          }
        : {
            data: {
              content: options,
              duration: 1500
            }
          }
    let instance = new mianConstructor(opt).$mount()
    document.body.appendChild(instance.$el)
  }

  // Vue.component(BsToast.name, BsToast)
}

export default BsToast
