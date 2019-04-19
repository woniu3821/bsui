import BsTest from './test'
//吸顶组件
import BsSticky from './sticky'
//测试状态提升

import BsCounter from './counter'

import BsToast from './toast'

const components = [BsTest, BsSticky, BsToast, BsCounter]

const install = Vue => {
  if (install.installed) return
  Vue.use(BsToast)
  install.installed = true
  components.map(component => {
    Vue.component(component.name, component)
    //或者
    // Vue.use(component);
  })
}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
