import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopPage from '@/views/ShopPage.vue'
import MainPage from "@/views/MainPage.vue";
import AboutPage from "@/views/AboutPage";
import CartPage from "@/views/CartPage";
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'main',
    component: MainPage
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
