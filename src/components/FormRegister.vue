<template>
  <v-container>
    <v-row 
      justify="center"
    >
      <v-col>
        <h2 class="text-center">Registro de usuarios</h2>

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

          <v-text-field
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirme contraseña"
            type="password"
            required
          ></v-text-field>

          <v-btn 
            :disabled="!valid" 
            color="success" 
            class="mr-4" 
            @click="registerUser"
          >
            Registarse
          </v-btn>

          <v-btn 
            color="error" 
            class="mr-4"
            @click="reset"
          > 
            Reset Form 
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name:'FormRegister',
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      confirmPassword: "",
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
      confirmPasswordRules: [
        (v) => !!v || "Contraseña es requerida",
        (v) => v === this.password || "La contraseña no coincide",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    registerUser() {
        this.validate()
        if(this.validate == false)return  
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          alert('Usuario creado correctamente ')
          this.$router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
    },
  },
};
</script>

<style>
</style>