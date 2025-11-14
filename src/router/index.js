import { createRouter, createWebHistory } from 'vue-router'
import HomeH from '../components/HomeH.vue'        
import JobDetail from '../components/JobDetail.vue' 
import AddJob from '../components/AddJob.vue' 
import EditJob from '../components/EditJob.vue' 
const routes = [

  { path: '/', name: 'Home', component: HomeH },
  { path: '/jobs/:id', name: 'JobDetail', component: JobDetail, props: true },
  { path: '/jobs/edit/:id', name: 'EditJob', component: EditJob, props: true },
  { path: '/jobs/add', name: 'AddJob', component: AddJob },
  // {path: '/about',name: 'about', 
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
