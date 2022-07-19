<template>
  <v-app-bar 
    app 
    color="primary" 
    dark
  >
    <v-spacer></v-spacer>

    <v-btn 
      to="/agregar" 
      color="secondary" 
      text
    > 
      Agregar 
    </v-btn>
    <h3 class="m-3">{{ user }}</h3>
    <v-btn 
      @click="logout"
    >
      LogOut
    </v-btn>
  </v-app-bar>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>