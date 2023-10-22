import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopByCategory from '../views/ShopByCategory.vue'
import DeliveryView from '../views/DeliveryView.vue'
import AboutUsFAQ from '../views/AboutUsFAQ.vue'
import CartView from '../views/CartView.vue'
import ItemView from '../views/ItemView.vue'
import LogInSignIn from '../views/LogInSignIn.vue'
import AccountManagment from '../views/AccountManagment.vue'
import CartCheckout from '../views/CartCheckout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ShopByCategory/:category',
      name: 'ShopByCategory',
      component: ShopByCategory
    },
    {
      path: '/DeliveryView',
      name: 'DeliveryView',
      component: DeliveryView
    },
    {
      path: '/AboutUsFAQ/',
      name: 'AboutUsFAQ',
      component: AboutUsFAQ
    },
    {
      path: '/CartView',
      name: 'CartView',
      component: CartView
    },
    {
      path: '/ItemView/:id',
      name: 'ItemView',
      component: ItemView
    },
    {
      path: '/LogInSignIn',
      name: 'LogInSignIn',
      component: LogInSignIn
    },
    {
      path: '/AccountManagment',
      name: 'AccountManagment',
      component: AccountManagment
    },
    {
      path: '/CartCheckout',
      name: 'CartCheckout',
      component: CartCheckout
    }
  ]
})

export default router
