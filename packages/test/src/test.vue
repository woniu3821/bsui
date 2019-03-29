<template>
  <div class="bs-test" @click="handleClick">
    <span>{{num}}</span>
  </div>
</template>

<script>
export default {
  name: "BsTest",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleClick() {
      this.num++;
    }
  }
};
</script>

<style lang="less" scoped>
.bs-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: #24292e;
  color: #fff;
  font-size: 30px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
}
</style>