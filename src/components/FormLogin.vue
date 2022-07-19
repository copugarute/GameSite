<template>
  <v-container>
    <v-row 
      justify="center"
    >
      <v-col>
        <h2 class="text-center">Login</h2>

        <v-form 
          ref="form" 
          v-model="valid" 
          lazy-validation
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Contraseña"
            type="password"
            required
          ></v-text-field>

          <v-btn 
            :disabled="!valid" 
            color="success" 
            class="mr-4" 
            @click="login"
          >
            login
          </v-btn>

          <v-btn 
            color="error" 
            class="mr-4" 
            @click="reset"
          > 
            Reset Form 
          </v-btn>
          <v-btn 
            color="error" 
            class="mr-4" 
            to="/registro"
          > 
            Registrarse 
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapMutations } from "vuex";
export default {
  name:'FormLogin',
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail debe ser valido",
      ],
      passwordRules: [
        (v) => !!v || "Contraseña es requerida",
        (v) =>
          (v && v.length >= 6) ||
          "La contraseña debe tener al menos 6 caracteres",
      ],
    };
  },
  methods: {
    ...mapMutations(["traerEMail"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.validate();
      if (this.validate == false) return;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.traerEMail(this.email);
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    },
  },
};
</script>

<style>
</style>