import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EventPage from '../views/EventPage.vue'
import EventDetailPage from '../views/EventDetailPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/event/:name',
      name: 'event',
      component: EventPage
    },
    {
      path: '/eventDetail/:id',
      name: 'eventDetail',
      component: EventDetailPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('access_token')

  if (!isLogin && (to.name === 'home' || to.name === 'event' || to.name === 'eventDetail')) {
    next('/login')
  } else if (isLogin && (to.name === 'register' || to.name === 'login')) {
    next('/')
  } else {
    next()
  }
})
export default router
