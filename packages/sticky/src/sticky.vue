<template>
  <div class="bs-sticky" :style="boxStyle" ref="pride_tab_fixed">
    <div class="pride-tab" :style="boxStyle" :class="titleFixed===true?'isFixed':''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BsSticky",
  data() {
    return {
      titleFixed: false,
      boxStyle: null
    };
  },
  methods: {
    //滚动监听
    handlerScroll() {
      let offsetTop = this.$refs.pride_tab_fixed.getBoundingClientRect().top;
      this.titleFixed = offsetTop < 0;
    }
  },
  mounted() {
    const bound = this.$refs.pride_tab_fixed.getBoundingClientRect();
    let h = bound.height;
    let w = bound.width;
    this.boxStyle = {
      height: h + "px",
      width: w + "px"
    };
    this.titleFixed = false;
    window.addEventListener("scroll", this.handlerScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handlerScroll);
  }
};
</script>

<style lang="less" scoped>
.pride-tab {
  //   background: bisque;
}
.isFixed {
  position: fixed;
  top: 0;
}
</style>