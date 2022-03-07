import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
    /*student*/
  {
    path: '/home-student',
    name: 'home-student',
    component: () => import('../views/student/Home')
  },
  {
    path: '/device-diagnostic',
    name: 'device-diagnostic',
    component: () => import('../views/student/DeviceDiagnostic')
  },
  {
    path: '/pass-the-course',
    name: 'pass-the-course',
    component: () => import('../views/student/PassTheCourse')
  },

    /*Instructor*/
  {
    path: '/student-taking-course',
    name: 'student-taking-course',
    component: () => import('../views/instructor/StudentTakingCourse')
  },
  {
    path: '/instructor-mode',
    name: 'instructor-mode',
    component: () => import('../views/instructor/InstructorMode')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
