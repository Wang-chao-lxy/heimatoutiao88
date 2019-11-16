import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Home from '@/views/home'
import Pushlist from '@/views/pushlist'
import Contentlist from '@/views/contentlist'
import Commentlist from '@/views/commentlist'
import Materiallist from '@/views/materiallist'
import NProgress from 'nprogress'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/push',
      component: Pushlist
    },
    {
      path: '/content',
      component: Contentlist
    },
    {
      path: '/comment',
      component: Commentlist
    },
    {
      path: '/material',
      component: Materiallist
    }
  ]
},
{
  path: '/login',
  component: Login
}

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    next()
    return
  }
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
router.afterEach((from, to) => {
  NProgress.done()
})
export default router
