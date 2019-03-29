import BsTest from "./src/test.vue";

BsTest.install = Vue => {
  Vue.component(BsTest.name, BsTest);
};

export default BsTest;
