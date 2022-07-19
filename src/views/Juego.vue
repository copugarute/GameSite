<template>
  <form-editar 
    :idjuego="idjuego"
  />
</template>

<script>
import FormEditar from '../components/FormEditar.vue'
export default {
  name:'Juego',
  components:{ FormEditar },
  props:['idjuego']

}
</script>

<style>

</style>