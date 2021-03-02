import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import ProductPage from '../views/ProductPage.vue'
import SingleProduct from '../views/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage
  },
  {path: "/register",
   name: "Register",
   component: () =>
      import("../views/register.vue")
  },
  {path: '/SingleProduct/:id',
   name: 'SingleProduct',
   component: SingleProduct,
   props: true
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
    import("../views/register.vue")
  },
  {
    path: "/myaccount",
    name: "MyAccount",
    component: () =>
    import("../views/MyAccount.vue")
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
