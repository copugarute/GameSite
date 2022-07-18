<template>
  <v-container>
    <v-btn @click="abrirModal">ELiminar</v-btn>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            ¿Desea eliminar el libro?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="confirmDelete"
          >
            I accept
          </v-btn>
        <v-btn @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
    name:'Modal',
    data(){
        return{
            dialog:false
        }
    },
    
    methods:{
        confirmDelete(){
            this.$emit("confirmDelete")
            this.dialog = false
        },
        abrirModal(){
            this.$emit("abrirModal")
            this.dialog = true
        }
    },


}
</script>

<style>

</style>