import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vueScrollto from 'vue-scrollto'

Vue.use(Buefy)
Vue.use(vueScrollto)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// new Vue(App).$mount('#app')