import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/components/Profile.vue'
import Photography from "@/components/Photography.vue"
import Artworks from "@/components/Artworks.vue"

const routes = [
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: "/Artworks",
    name: "Artworks",
    component: Artworks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router