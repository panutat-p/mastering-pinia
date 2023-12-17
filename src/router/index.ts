import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
