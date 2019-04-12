import BsTest from "./test";
//吸顶组件
import BsSticky from "./sticky";

const components = [BsTest, BsSticky];

const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  components.map(component => {
    Vue.component(component.name, component);
    //或者
    // Vue.use(component);
  });
};

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
