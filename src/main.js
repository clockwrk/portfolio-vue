import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vueScrollto from 'vue-scrollto'
// import 'bulma'
//import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma/css/bulma.min.css'
// import 'bulma'
// import 'bulma-extensions/dist/bulma-extensions.min.css'
// import 'bulma-extensions/bulma-carousel/dist/bulma-carousel.min.css'




Vue.use(Buefy)
Vue.use(vueScrollto)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// new Vue(App).$mount('#app')