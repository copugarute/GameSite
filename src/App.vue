<template>
  <v-app>
    <nav-bar 
      v-if="isPrivateRoute"
    ></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    isPrivateRoute(){
     if(this.$route.meta.privado) return true
     return false
    }
  }
};
</script>
