import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationForm from '../views/RegistrationForm.vue'
import FeedbackForm from '../views/FeedbackForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationForm,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedbackForm,
    },
  ],
})

export default router
