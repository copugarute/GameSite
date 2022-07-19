<template>
  <v-container>
    <h1>Juego</h1>
    <v-form 
      v-model="valid" 
      ref="form"
    >
      <v-container>
        <v-row>
          <v-col 
            cols="12" 
            md="4"
          >
            <v-text-field
              v-model="form.nombre"
              :rules="requiredRules"
              label="Nombre Juego"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.año"
              :rules="requiredRules"
              label="Año Juego"
              required
            ></v-text-field>
          </v-col>

          <v-col 
            cols="12" 
            md="4"
          >
            <v-text-field
              v-model="form.plataforma"
              :rules="requiredRules"
              label="Plataforma Juego"
              required
            ></v-text-field>
          </v-col>

          <v-col 
            cols="12" 
            md="4"
          >
            <v-text-field
              v-model="form.desarrollador"
              :rules="requiredRules"
              label="desarrollador Juego"
              required
            ></v-text-field>
          </v-col>

          <v-col>
            <v-btn 
              color="success" 
              @click="createJuego"
            > 
              Registar 
            </v-btn>
            <v-btn 
              @click="resetForm"
            > 
              limpiar formulario 
            </v-btn>
            <v-btn 
              to="/" 
              color="secondary" 
              text
            > 
              Atrás 
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { db } from "@/config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
export default {
  name:'RegisterGame',
  data: () => ({
    valid: true,
    form: {
      nombre: "",
      año: "",
      desarrollador: "",
      plataforma: "",
    },
    requiredRules: [(v) => !!v || "campo es requerido"],
  }),
  methods: {
    async createJuego() {
      this.$refs.form.validate(); //valida campo
      if (!this.valid) return; //si no es valido return y salimos

      try {
        let response = await addDoc(collection(db, "juegos"), this.form);
        console.log(response);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    resetForm() {
      this.$ref.form.reset();
    },
  },
};
</script>

<style>
</style>