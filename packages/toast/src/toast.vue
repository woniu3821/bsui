<template>
  <div class="bs-toast">
    <p>{{content}}</p>
  </div>
</template>

<script>
import { clearTimeout } from 'timers';
export default {
  name: 'BsToast',
  data () {
    return {
      timer: null
    }
  },
  mounted () {
    if (this.duration) {
      this.timer = setTimeout(() => {
        // 3s 后通过父级移除子元素的方式来移除该组件
        this.$el.parentNode.removeChild(this.$el);
      }, this.duration);
    }

  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less" scoped>
.bs-toast {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 9999;
  background: transparent;
  user-select: none;
  > p {
    padding: 12px 22px;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(17, 17, 17, 0.7);
  }
}
</style>