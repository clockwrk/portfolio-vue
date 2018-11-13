<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item button is-outlined is-rounded"

          @click="openContactForm()"

          >
          Say Hello
      </a>

      <a role="button" class="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navigationMenu" @click="toggleMenu()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span> 
      </a>
    </div>

    <div id="navigationMenu" class="navbar-menu is-transparent"  v-on:click="toggleMenu()" v-bind:class="{ 'fade-in': isActive, 'fade-out':!isActive, 'is-active':isActive}">
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

  <b-modal :active.sync="isContactFormActive" :width="640" scroll="keep">

    <form v-on:submit.prevent="onSubmitForm()" class="card">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Contact Me</p>
          </header>
          <div class="modal-card-body">
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
          </div>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="close()">Close</button>
            <button class="button is-primary" type="submit"  :disabled="(!!form.email && !!form.message) != 1 ">Send</button>
          </footer>
        </div>  
      </form>
        </b-modal>


  </nav>

  


</template>

<script>
import axios from 'axios';

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
      },
      errors: [],
      isCardModalActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
      

    },openContactForm() {
      this.isContactFormActive = true;
    },
    close(){

      this.isContactFormActive = false;
    },
    onSubmitForm: function(){     
      this.isContactFormActive = false;

      var input = this.form;
      this.form = {
        name: "",
        email: "",
        message: ""
      }
      // eslint-disable-next-line
      console.log('input field',input)
      axios.post('/send-email', input)
      .then(function(response) {
        // eslint-disable-next-line
        console.log('sucessful post', response, 'SHOULD CLOSE NOW')

        
      })
      .catch(function() {
        //this.errors.push(e);


      });

    }
  }
}
</script>

<style scoped>
.modal-card-body {
  text-align: left !important;
}
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar-item.button {
  margin-left: 5px;
  top: 10px;
}

.fade-in {
    opacity: 1;
    transition: 2s opacity;
}
.fade-out {
    opacity: 0;
    transition: none;
}



</style>