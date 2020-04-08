import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _token: ''
  },
  getters: {
    token: state => state._token
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
