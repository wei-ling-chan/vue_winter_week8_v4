import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'cartFront',
        name: 'CartFont',
        component: () => import('../views/front/CartFont.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/front/LoginView.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/front/NewsView.vue')
      },
      {
        path: 'checkOrder/:orderId',
        name: 'checkOrder',
        component: () => import('../views/front/checkOrder.vue')
      },
      {
        path: 'myStorage',
        name: 'MyStorage',
        component: () => import('../views/front/MyStorage.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/AdminCoupon.vue')
      }
    ]
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/AboutView.vue/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'router-link-exact-active router-link-active', // 'active',
  routes
})

export default router
