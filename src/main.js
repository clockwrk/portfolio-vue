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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faClipboardList,faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode)
library.add(faClipboardList)
library.add(faServer)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)
Vue.use(vueScrollto)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// new Vue(App).$mount('#app')
