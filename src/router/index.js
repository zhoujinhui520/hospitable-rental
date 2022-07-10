import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const LookingRoom = () => import('@/views/LookingRoom')
const My = () => import('@/views/My')
const News = () => import('@/views/News')
const Login = () => import('@/views/Login')
const Rent = () => import('@/views/Rent')
const City = () => import('@/views/City')
const Map = () => import('@/views/Map')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'lookingRoom', component: LookingRoom },
      { path: 'news', component: News },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/rent', component: Rent, name: 'rent' },
  { path: '/city', component: City, name: 'city' },
  { path: '/map', component: Map, name: 'map' }
]

const router = new VueRouter({
  routes
})

export default router
