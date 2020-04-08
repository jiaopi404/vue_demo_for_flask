import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/'

Vue.config.productionTip = false

Vue.use(api)

axios.defaults.headers.common.Pragma = 'no-cache'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
