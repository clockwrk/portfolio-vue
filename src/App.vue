<template>
  <div id="app">
    <NavBar></Navbar>
    <Home></Home>
    <AboutMe></AboutMe>
    <!-- <section id="Skills">Skills</section> -->
    <Skills></Skills>
    <Projects></Projects>
    <Social></Social>
    <!-- <section id="Social">Social</section>  -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Social from './components/Social.vue'
import Skills from './components/Skills.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Home,
    Projects,
    Social,
    Skills,
    AboutMe
  }
}
</script>

<style>

#app {
  font-family:  Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {
  padding-top: 3em;
  min-height: 100vh;
}

section:first-of-type {
  min-height: 100vh;
}

section:last-child {
  min-height: 0vh;
}
</style>
