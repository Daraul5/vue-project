<template>
  <div>
    <h2>Estructura v-show</h2>
    <p>A diferencia de v-if, v-show siempre renderiza el elemento en el DOM, pero alterna su propiedad CSS 'display' (lo oculta con display: none) dependiendo de la condición.</p>
    
    <div class="ejemplo">
      <button @click="mostrarMensaje = !mostrarMensaje">
        {{ mostrarMensaje ? 'Ocultar' : 'Mostrar' }} Mensaje Secreto
      </button>
      <p v-show="mostrarMensaje" class="secreto">
        ¡Hola! Este es un mensaje que solo cambia su visibilidad.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrarMensaje = ref(false)
</script>

<style scoped>
.secreto { background: #42b883; color: white; padding: 10px; margin-top: 10px; border-radius: 5px; }
</style>