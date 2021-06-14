import Vue from 'vue'
import VueRouter from 'vue-router'
import Pictures from '../views/Pictures.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Pictures
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
