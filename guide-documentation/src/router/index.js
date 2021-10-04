import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Página inicial',
    component: Home
  },
  {
    path: '/introduction/declarative-rendering',
    name: 'Declarative-rendering',
    component: () => import('../views/DeclarativeRendering')
  },
  {
    path: '/introduction/lifecycle',
    name: 'Life Cycle Hooks',
    component: () => import('../views/LifeCycle')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
