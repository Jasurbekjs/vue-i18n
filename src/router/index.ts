import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Translations from '@/i18n/translations'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_HISTORY),
  routes: [
      {
        path: "/:locale?",
        component: RouterView,
        beforeEnter: Translations.routerMiddleware,
        children:[
          {
            path: '',
            name: 'home',
            component: HomeView
          },
          {
            path: 'about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
          }
        ]
      }
  ]
})

export default router
