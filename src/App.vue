<template>
  <div id="app">
    <main-header></main-header>
    <main-content>
      <!-- <router-view></router-view> -->
      <!-- <home/> -->
      <docs/>
    </main-content>
    <main-footer v-if="false"></main-footer>
  </div>
</template>
<script>
import Home from './pages/home/index.vue'
import docs from './pages/docs/index.vue'
export default {
  name: 'App',
  components: {
    Home: Home,
    docs: docs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
