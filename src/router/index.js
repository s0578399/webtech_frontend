import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Products from '../views/Products'
import ProductSingleView from '../views/ProductSingleView'
import ShoppingCart from '@/views/ShoppingCart'
import Test from '../views/test'
import Test2 from '@/views/Test2'
import OrderForm from '@/views/OrderForm'
import OrderDone from '@/views/OrderDone'
import Admin from '@/views/Admin'
import AdminProductOverview from '@/views/AdminProductOverview'
import CreateProduct from '@/views/CreateProduct'
import EditProduct from '@/views/EditProduct'
import OrderOverview from '@/views/OrderOverview'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/productSingleView/:id',
    name: 'ProductSingleView',
    component: ProductSingleView
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/test2/:id',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/orderForm',
    name: 'OrderForm',
    component: OrderForm
  },
  {
    path: '/orderDone',
    name: 'OrderDone',
    component: OrderDone
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/adminProductOverview',
    name: 'AdminProductOverview',
    component: AdminProductOverview
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/orderOverview',
    name: 'OrderOverview',
    component: OrderOverview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
