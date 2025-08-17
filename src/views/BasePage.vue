<script setup>
import Toolbar from '../components/ToolBar.vue';
</script>

<template>
  <div class="base-page">
    <header class="header">
      <Toolbar />
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.base-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  /*width: 100%;*/
  /*position: sticky;*/
  /*top: 0;*/
  /*z-index: 100;*/
  /*background-color: #f4f4f4;*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
}

.content {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}

</style>