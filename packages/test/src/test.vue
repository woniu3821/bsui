<template>
  <div>
    <ul>
      <li
        v-for="(v,i) in list"
        :key="i"
        v-if="v.status ===1"
      >{{v.text}}</li>
    </ul>
  </div>
</template>
<script>

//测试函数使用
import '../../utils'

export default {
  name: "BsTest",
  data () {
    return {
      list: []
    };
  },
  methods: {

  },
  mounted () {
    setTimeout(() => {
      this.list = [{ text: 666 }, { text: 777 }, { text: 888 }]
    }, 1000);
    setTimeout(() => {
      this.list.forEach((v, i) => {
        //不支持通过索引设置数组成员
        // this.list[i] = { text: i }
        v.text = i
        v.status = 0; // 新增状态
      })
      // console.log(this.list)
    }, 2000)


  }
};
</script>

<style lang="less" scoped>
.bs-test {
}
</style>