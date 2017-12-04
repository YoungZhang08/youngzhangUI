<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import index from './components/index.vue';

export default {
  name: 'app',
  components: {
    index: index
  }
}
</script>

<style lang = "less">
#app {
  min-width: 1200px;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
