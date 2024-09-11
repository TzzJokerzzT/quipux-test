import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/empresa',
      name: 'empresa',
      component: () => import('../views/CompanyPage.vue')
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductPage.vue')
    }
  ]
})

export default router
