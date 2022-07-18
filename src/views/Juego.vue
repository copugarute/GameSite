<template>
  <v-container>
    <h1>Editar Juego</h1>
    <v-form v-model="valid" ref="form">
      <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-switch
                v-model="allowEdit"
                color="info"
            ></v-switch>
            </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.nombre"
              :rules="requiredRules"
              label="Nombre Juego"
              required
              :disabled="!allowEdit"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.año"
              :rules="requiredRules"
              label="Año Juego"
              required
              :disabled="!allowEdit"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.plataforma"
              :rules="requiredRules"
              label="Plataforma Juego"
              required
              :disabled="!allowEdit"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.desarrollador"
              :rules="requiredRules"
              label="desarrollador Juego"
              required
              :disabled="!allowEdit"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn
            :disabled="!allowEdit"
            color="success"
            @click="editJuego"
            >
                Editar
            </v-btn>
            <v-btn @click="resetForm">
                limpiar formulario
            </v-btn>
            <modal
              @abrirModal="abrirModalPadre"
              @confirmDelete="deleteJuego"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    
  </v-container>
</template>

<script>
import {db} from '@/config/firebase.js'
import {doc, getDoc, updateDoc,deleteDoc} from "firebase/firestore"
import Modal from '../components/Modal.vue';
export default {
  components: { Modal },
    data: () => ({
      valid: true,
      dialog: false,
      msg:'',
      allowEdit: false,
      form:{
        nombre:'',
        año:'',
        desarrollador:'',
        plataforma:'',

      },
      requiredRules: [
        v => !!v || 'campo es requerido',
      ],
    }),
    props:['idjuego'],
    methods:{
      abrirModalPadre(){
        this.dialog = true
      },
        async fetchJuegoById(){
            const docRef = doc(db,'juegos',this.idjuego)
            let response = await getDoc(docRef)
            console.log(response)
            this.form = response.data()
        },
        editJuego(){
            this.$refs.form.validate()//valida campo
            if(!this.valid) return //si no es valido return y salimos
            try{
                let juego = this.form
                juego.id = this.idjuego
                updateDoc(doc(db,'juegos', juego.id),juego)
                this.$router.push('/')
            }catch(error){
                console.log(error)
            }
        },
        async deleteJuego(){
            try{
               await deleteDoc(doc(db,'juegos',this.idjuego))
               this.$router.push('/')
            }catch(error){
                console.log(error)
            }
        },
        resetForm(){
            this.$ref.form.reset()
        },
        
    },
    created(){
        this.fetchJuegoById()
    }
};
</script>

<style>
</style>