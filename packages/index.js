import BsTest from "./test";

const components = [BsTest];

const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  components.map(component => {
    Vue.component(component.name, component);
    //或者
    Vue.use(component);
  });
};

if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
