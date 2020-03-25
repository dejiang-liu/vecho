import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('@/pages/index/index')
  },
  {
    name: 'detail',
    path: '/detail',
    component: () => import('@/pages/detail/detail')
  }
]

export default new VueRouter({
  routes: routes,
  // 使用<keep-alive>，scrollBehavior才能生效。
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
  }
})
