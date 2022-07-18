import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterJuego from '../views/RegisterJuego.vue'
import Juego from '../views/Juego.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/juego',
    name: 'Register',
    component: RegisterJuego
  },
  {
    path: '/juego/:idjuego',
    name: 'Juego',
    props:true,
    component: Juego
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
