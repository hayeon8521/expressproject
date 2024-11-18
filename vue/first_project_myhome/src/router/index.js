import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import abc from '../views/DataBinding2.vue'
import form from '../views/FormBinding.vue'
import classing from '../views/ClassBinding.vue'
import foring from '../views/ForBinding.vue'
import ifing from '../views/IfBinding.vue'
import eventing from '../views/EventBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/abc',
    name: 'abc',
    component: abc
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/classing',
    name: 'fclassingorm',
    component: classing
  },
  {
    path: '/foring',
    name: 'foring',
    component: foring
  },
  {
    path: '/ifing',
    name: 'ifing',
    component: ifing
  },
  {
    path: '/eventing',
    name: 'eventing',
    component: eventing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
