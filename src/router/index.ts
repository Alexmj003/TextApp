import { createRouter, createWebHistory } from 'vue-router'
import BasePage from "@/views/BasePage.vue";
import Messages from '../views/Messages.vue'
import Groups from '@/views/Groups.vue'
import Logs from '@/views/Logs.vue'
import Twilio from '../views/Twilio.vue'

const routes = [
  {
    path: '/',
    component: BasePage,
    children: [
      { path: 'messages', component: Messages },
      { path: 'groups', component: Groups },
      { path: 'logs', component: Logs },
      { path: 'twilio', component: Twilio }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router