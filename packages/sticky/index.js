import BsSticky from "./src/sticky.vue";

BsSticky.install = Vue => {
  Vue.component(BsSticky.name, BsSticky);
};

export default BsSticky;
