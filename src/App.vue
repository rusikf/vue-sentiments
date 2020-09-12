<template>
  <div id="app">
    <SentimentsList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SentimentsList from './components/sentiments/list.vue'

export default {
  name: 'App',
  components: {
    SentimentsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
