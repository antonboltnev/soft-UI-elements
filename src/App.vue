<template>
  <div id="app">
    <elements-layout />
  </div>
</template>

<script>
import elementsLayout from './components/elements-layout'

export default {
  name: 'app',
  components: {
    elementsLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
