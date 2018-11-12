<template>
  <div id="app">
    <NavBar></Navbar>
    <Home></Home>
    <section id="AboutMe">About Me</section>
    <!-- <section id="Skills">Skills</section> -->
    <Skills></Skills>
    <Projects></Projects>
    <Social></Social>
    <!-- <section id="Social">Social</section>  -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Social from './components/Social.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar,
    Home,
    Projects,
    Social,
    Skills
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
  min-height: 100vh;
}

section:first-of-type {
  height: 100vh;
}
</style>
