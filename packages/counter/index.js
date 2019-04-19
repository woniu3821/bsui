import BsCounter from './src/counter'

BsCounter.install = Vue => {
  Vue.component(BsCounter.name, BsCounter)
}

export default BsCounter
