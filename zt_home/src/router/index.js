import Vue from 'vue'
import Router from 'vue-router'
// import Check from '@/components/Check'
import Index from '@/components/Index'
import Wirte from '@/components/Wirte'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'check',
      component: Wirte
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/wirte',
      name: 'wirte',
      component: Wirte
    }
  ]
})
