import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("../components/home")
    },
    {
      path: '/coma',
      name: 'comA',
      component: ()=>import("../components/comA")
    },
    {
      path: '/comb',
      name: 'comB',
      component: ()=>import("../components/comB")
    } ,
    {
      path: '/vuexDemo',
      component: ()=>import("../components/vuexDemo")
    }

  ]
})
