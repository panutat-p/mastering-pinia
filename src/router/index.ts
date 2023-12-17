import { createRouter, createWebHistory } from 'vue-router'

import BasicView from '@/views/BasicView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Basic',
      component: BasicView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'Product',
      component: ProductView,
    },
  ],
})

export default router
