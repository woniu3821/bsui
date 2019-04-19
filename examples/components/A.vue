<template>
  <div>
    <bs-counter
      :value="value"
      :on-minus="onMinus"
      :on-plus="onPlus"
    ></bs-counter>
    {{id}}
  </div>
</template>

<script>

export default {
  name: '',
  props: ['id'],
  data () {
    return {
      value: 10
    }
  },
  methods: {
    onMinus () {
      this.value--
    },
    onPlus (val) {
      console.log(val)

      this.value++
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
</style>