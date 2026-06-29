import AboutView from '@/views/AboutView.vue'
import BlogDetailView from '@/views/atribut_blog/BlogDetailView.vue'
import DetailProjek from '@/views/atribut_project/DetailProjek.vue'
import BlogView from '@/views/BlogView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project/:id',
    name: 'project_detail',
    component: DetailProjek
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path:'/blog/:slug',
    name: 'blog_view',
    component: BlogDetailView
  }
] 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route,
})

export default router
