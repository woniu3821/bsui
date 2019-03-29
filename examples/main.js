import Vue from "vue";
import App from "./App.vue";

import BsUI from "./../packages";

Vue.use(BsUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
