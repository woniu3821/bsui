<template>
  <div class="bs-counter">
    <button
      class="counter_btn"
      @click="onMinus"
    >-</button>
    <div class="counter_val">{{value}}</div>
    <button
      class="counter_btn"
      @click="plus"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'BsCounter',
  data () {
    return {

    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    onMinus: Function,
    onPlus: Function
  },
  methods: {
    plus () {
      this.onPlus(this.value)
    }
  },
}
</script>

<style lang="less" scoped>
</style>