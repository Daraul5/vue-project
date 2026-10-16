<template>
  <div>
    <h2>Estructura v-bind:key en un bucle</h2>
    <p>Al usar v-for, es obligatorio usar 'v-bind:key' (o su abreviatura ':key') para darle a Vue un identificador único por cada elemento. Esto optimiza el renderizado del DOM virtual.</p>
    
    <div class="ejemplo">
      <h3>Lista de Tareas (Con ID único)</h3>
      <ul>
        <!-- Uso correcto de :key -->
        <li v-for="tarea in tareas" :key="tarea.id">
          <strong>ID: {{ tarea.id }}</strong> - {{ tarea.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tareas = ref([
  { id: 1, nombre: 'Configurar CachyOS' },
  { id: 2, nombre: 'Hacer commit en GitHub' },
  { id: 3, nombre: 'Publicar en GitHub Pages' }
])
</script>
