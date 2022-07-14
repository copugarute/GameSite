import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { firebaseConfig } from './config/firebaseconfig'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  app,
  db,
  render: h => h(App)
}).$mount('#app')
