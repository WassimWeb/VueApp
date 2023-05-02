import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/ships',
    name: 'ships',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ShipPage.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/CarPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
