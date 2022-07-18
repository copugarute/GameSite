import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/config/firebase.js'
import { collection, getDocs } from "firebase/firestore"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos:[],
  },
  mutations: {
    ADD_JUEGO(state,juego){
      state.juegos.push({
        id:juego.id,
        nombre: juego.data().nombre,
        año:juego.data().año,
        desarrollador: juego.data().desarrollador,
      })
    },
    RESET_JUEGOS(state){
      state.juegos=[]
    }
  },
  actions: {
    async fetchJuegos({commit}){
      let querySnapShot = await getDocs(collection(db,'juegos'))
      //*llamada a la mutación set
      commit('RESET_JUEGOS')
      querySnapShot.forEach((doc)=>{
        // console.log(doc)
        // console.log(doc.id, '=>', doc.data())
        //*llamada a la mutación add
        commit('ADD_JUEGO', doc)
      })
    }
  },
  modules: {
  }
})
