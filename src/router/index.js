import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateViewVue from '@/views/CreateView.vue'
import PreviewView from '@/views/PreviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      name: 'create',
      path: '/create',
      component: CreateViewVue
    },
    {
      name: 'preview',
      path: '/preview',
      component: PreviewView
    }
  ]
})

export default router
