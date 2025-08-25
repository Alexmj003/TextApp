<script setup lang="ts">
import BasePage from './views/BasePage.vue';
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style scoped>
/* Reset default margin and padding */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
