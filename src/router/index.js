import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterGame from '../views/RegisterGame.vue'
import Juego from '../views/Juego.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

import {getAuth} from 'firebase/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      privado:true
    }
  },
  {
    path: '/agregar',
    name: 'RegisterGame',
    component: RegisterGame,
    meta:{
      privado:true
    }
  },
  {
    path: '/juego/:idjuego',
    name: 'Juego',
    props:true,
    component: Juego,
    meta:{
      privado:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const auth = getAuth()
  console.log(auth)
  let user = auth.currentUser
  console.log(user)
  let private_rute = to.meta.privado
  if(private_rute && !user){
    next('/login')
  }
  else if(private_rute==undefined && user){
    next('/')
  }
  else{
    next()
  }
})
export default router
