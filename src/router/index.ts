import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  },
  {
    name: 'privacy',
    path: '/legal/privacy-policy',
    component: () => import('@/views/LegalPrivacyView.vue')
  },
  {
    name: 'terms',
    path: '/legal/terms',
    component: () => import('@/views/LegalTermsView.vue')
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
