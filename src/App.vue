<template>
  <div id="app-container">
    <header>
      <h1>Proyecto Unidad 3 - SPA Vue</h1>
      <nav>
        <router-link to="/v-if">v-if / v-else</router-link>
        <router-link to="/v-show">v-show</router-link>
        <router-link to="/v-for">v-for</router-link>
        <router-link to="/v-bind-key">v-bind:key</router-link>
      </nav>
    </header>

    <main class="contenido">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #1e1e2e; color: #cdd6f4; }
header { background: #11111b; padding: 20px; text-align: center; border-bottom: 2px solid #89b4fa; }
h1 { margin: 0 0 15px 0; color: #89b4fa; }
nav a { color: #bac2de; text-decoration: none; margin: 0 15px; font-weight: bold; padding: 5px 10px; }
nav a.router-link-exact-active { color: #a6e3a1; border-bottom: 2px solid #a6e3a1; }
.contenido { padding: 40px; max-width: 800px; margin: 0 auto; }
.ejemplo { background: #313244; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #45475a; }
input, button { padding: 8px; margin-top: 10px; border-radius: 4px; border: none; }
button { background: #89b4fa; color: #11111b; cursor: pointer; font-weight: bold; }
</style>