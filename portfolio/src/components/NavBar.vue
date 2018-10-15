<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item button is-primary is-medium"
          @click="formModal()">
          Say Hello
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigationMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span> 
      </a>
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
  methods: {
    formModal() {

      this.$modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true
      })
    }
  },
  data() {
    return {
      isContactFormActive: false,

    }
  }
}
</script>

<style scoped>

</style>