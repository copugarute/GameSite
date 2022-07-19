<template>
  <v-container>
    <h1>Lista de juegos</h1>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-col v-for="juego in juegos" :key="juego.id">
        <v-card>
          <v-img></v-img>
          <v-divider></v-divider>
          <v-card-title>{{juego.nombre}}</v-card-title>
          <v-card-actions>
            <v-btn block color="primary"
            @click="$router.push(`/juego/${juego.id}`)">Ver Más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import {mapActions, mapState} from 'vuex'
export default {
  name: 'CardsGames',
  computed:{
    ...mapState(['juegos'])
  },
  methods:{
    ...mapActions(['fetchJuegos'])
  },
  created(){
    this.fetchJuegos()
  }
}
</script>