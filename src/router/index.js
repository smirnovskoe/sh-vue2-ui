import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    meta: { layout: 'empty' },
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/',
    name: 'HomeView',
    meta: { layout: 'main' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    meta: { layout: 'main' },
    component: () => import('../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
