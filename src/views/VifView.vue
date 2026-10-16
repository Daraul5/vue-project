<template>
    <div>
        <h2>Estructura v-if / v-else / v-else-if</h2>
        <p>Esta directiva renderiza condicionalmente un bloque de código dependiendo de si la expresión es verdadera o falsa. Si es falsa, el elemento no existe en el DOM.</p>
        <div class="ejemplo">
            <h3>Ejemplo: Calificación de Ingeniería en Sistemas</h3>
            <input type="number" v-model="calificacion" placeholder="Ingresa tu calificación" />
            
            <p v-if="calificacion >= 90">Excelente: {{ calificacion }}</p>
            <p v-else-if="calificacion >= 70">Aprobado: {{ calificacion }}</p>
            <p v-else-if="calificacion >= 0">Reprobado: {{ calificacion }}</p>
            <p v-else>Por favor, ingresa una calificación válida.</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const calificacion = ref(0);
</script>

<style scoped>
.ejemplo {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input {
    margin-bottom: 10px;
}
</style>