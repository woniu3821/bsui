<template>
  <label>
    <span>
      <input
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      >
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'BsCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    trueValue: {
      type: [Number, String, Boolean],
      default: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      default: true
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val == this.falseValue) {
        this.updateValue()
      } else {
        throw 'Value should bo trueValue or falseValue.'
      }
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);
      this.$emit('on-change', value)
    },
    updateValue () {
      this.currentValue = this.value === this.trueValue;
    }
  }
}
</script>

<style lang="less" scoped>
</style>