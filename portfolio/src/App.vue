<template>
  <div id="app">
    <NavBar></Navbar>
    <section id="Home">Home</section>
    <section id="AboutMe">About Me</section>
    <section id="Skills">Skills</section>
    <section id="Projects">Projects</section>
    <section id="Social">Social</section> 
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
}

section {
  height: 100vh;
}

section-first {
  height: 90vh;
}
</style>
