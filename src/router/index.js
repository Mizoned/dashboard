import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      }
    ]
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//TODO Вынести названия роутов в массив
router.beforeEach((to, from, next) => {
  // const accessToken = localStorage.getItem('token');
  //
  // if (!accessToken) {
  //   if (to.name === 'sign-in' || to.name === 'sign-up') {
  //     return next();
  //   } else {
  //     return next({
  //       name: 'sign-in'
  //     });
  //   }
  // }
  //
  // if ((to.name === 'sign-in' || to.name === 'sign-up') && accessToken) {
  //   return next({
  //     name: 'home'
  //   });
  // }

  next();
});

export default router
