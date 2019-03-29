import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import zhuye from '@/components/zhuye'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/denglu',
      component:denglu
    },
    {
      path: '/zhuce',
      component:zhuce
    },
    {
      path: '/zhuye',
      component:zhuye
    }
  ]
})
