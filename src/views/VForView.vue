<template>
  <div>
    <h2>Estructura v-for</h2>
    <p>Se utiliza para renderizar una lista de elementos basados en un arreglo. Se parece a un bucle 'for' tradicional.</p>
    
    <div class="ejemplo">
      <h3>Lenguajes de Programación</h3>
      <ul>
        <li v-for="lenguaje in lenguajes">
          {{ lenguaje }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const lenguajes = ref(['C++', 'Python', 'JavaScript', 'Java'])
</script>