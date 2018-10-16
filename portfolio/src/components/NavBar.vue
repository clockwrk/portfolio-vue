<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item button is-info is-outlined"
          @click="formModal()">
          Say Hello
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigationMenu" @click="toggleMenu()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span> 
      </a>
    </div>

    <div id="navigationMenu" class="navbar-menu is-transparent" v-bind:class="[isActive ? 'is-active':'']">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
      </div>

        <a class="navbar-item">
          About Me
        </a>

        <a class="navbar-item">
          Skills
        </a>

        <a class="navbar-item">
          Projects
        </a>

      <div class="navbar-end">
        <a class="navbar-item">
          Social
        </a>
      </div>

    </div>
  </nav>


</template>

<script>
  const ModalForm = {
    props: ['email', 'message', 'name'],
    template: `
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Contact Me</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input
                :value="name"
                placeholder="Your name"
                required>
              </b-input>
            </b-field>

            <b-field label="Email">
              <b-input
                type="email"
                :value="email"
                placeholder="Your email"
                required>
              </b-input>
            </b-field>

            <b-field label="Message">
              <b-input
                type="textarea"
                :value="message"
                placeholder="Your Message"
                required>
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary">Send</button>
          </footer>
        </div>  
      </form>
    `
  }

export default {
  name: 'NavBar',
    data() {
    return {
      isContactFormActive: false,
      isActive: false
    }
  },
  methods: {
    formModal() {

      this.$modal.open({
        parent: this,
        component: ModalForm
      })
    },
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>

</style>