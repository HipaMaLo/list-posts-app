import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import PostsView from '../views/PostsView.vue'
import PostViewDet from '../views/PostViewDet.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/posts'
  },
  
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/post/:id',
    name: 'postdetail',
    component: PostViewDet,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
