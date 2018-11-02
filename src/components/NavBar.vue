<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item button is-outlined is-rounded"
          @click="formModal()">
          Say Hello
      </a>

      <a role="button" class="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navigationMenu" @click="toggleMenu()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span> 
      </a>
    </div>

    <div id="navigationMenu" class="navbar-menu is-transparent" v-bind:class="[isActive ? 'is-active':'']" v-on:click="toggleMenu()">
      <div class="navbar-end">
        <a class="navbar-item" v-scroll-to="'#Home'">
          Home
        </a>
      

        <a class="navbar-item" v-scroll-to="'#AboutMe'">
          About Me
        </a>

        <a class="navbar-item" v-scroll-to="'#Skills'">
          Skills
        </a>

        <a class="navbar-item" v-scroll-to="'#Projects'">
          Projects
        </a>


        <a class="navbar-item" v-scroll-to="'#Social'">
          Social
        </a>
      </div>

    </div>
  </nav>


</template>

<script>
import axios from 'axios';

  const ModalForm = {
    props: ['form', 'onSubmitForm'],
    template: `
      <form v-on:submit.prevent="onSubmitForm()">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Contact Me</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input
                v-model="form.name"
                placeholder="Your name"
                required>
              </b-input>
            </b-field>

            <b-field label="Email">
              <b-input
                type="email"
                v-model="form.email"
                placeholder="Your email"
                required>
              </b-input>
            </b-field>

            <b-field label="Message">
              <b-input
                type="textarea"
                v-model="form.message"
                placeholder="Your Message"
                required>
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" type="submit" @click="$parent.close()"  :disabled="(!!form.email && !!form.message) != 1 ">Send</button>
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
      isActive: false,
      form: {
        email: "",
        name: "",
        message: ""
      }
    }
  },
  methods: {
    formModal() {

      this.$modal.open({
        parent: this,
        component: ModalForm,
        form: this.form,
        props: {
          form:this.form,
          onSubmitForm: this.onSubmitForm
          },
        animation: "zoom-out"
      })
    },
    toggleMenu() {
      this.isActive = !this.isActive
    },
    onSubmitForm() {
      

      var input = this.form;
      this.form = {
        name: "",
        email: "",
        message: ""
      }
      // eslint-disable-next-line
      console.log('input field',input)
      axios.post('/send-email', input)
      .then(response => {
        // eslint-disable-next-line
        console.log('sucessful post', response, 'SHOULD CLOSE NOW')

        
      })
      .catch(e => {
        this.errors.push(e);
      });
    }
  }
}
</script>

<style scoped>
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar-item.button {
  /* position: absolute; */
  margin-left: 5px;
  top: 10px;
  /* transform: translateY(-50%);  */
}

</style>