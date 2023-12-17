import { createRouter, createWebHistory } from 'vue-router'

import Part1 from '@/views/Part1.vue'
import Part2 from '@/views/Part2.vue'
import Part3 from '@/views/Part3.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Product',
      component: ProductView,
    },
    {
      path: '/part1',
      name: 'Part1',
      component: Part1,
    },
    {
      path: '/part2',
      name: 'Part2',
      component: Part2,
    },
    {
      path: '/part3',
      name: 'Part3',
      component: Part3,
    },
  ],
})

export default router
