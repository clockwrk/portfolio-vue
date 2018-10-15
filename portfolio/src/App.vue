<template>
  <div id="app">
    <NavBar></Navbar>
    <section>About Me</section>
    <section>Skills</section>
    <section>Projects</section>
    <section>Social</section> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar
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
  margin-top: 60px;
}
</style>
