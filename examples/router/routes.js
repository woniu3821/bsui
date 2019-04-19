import A from '../components/A.vue'
import NoFound from '../components/NotFound.vue'
export const routes = [
  { path: '*', component: NoFound },
  //命名路由，布尔模式传参
  /*   {
    path: '/a/:id',
    props: { default: true, a: false, b: false },
    components: {
      default: A,
      a: A,
      b: A
    }
    // component: A
  }, */

  //函数模式传参
  {
    path: '/a/:id',
    props: route => {
      return { id: route.params.id + '你好呀' }
    },
    component: A
  }

  //对象模式传参
  /*  {
    path: '/a/:id',
    props: {
      id: '我是对象模式传参',
      name: '我是name属性'
    },
    component: A
  } */
]
