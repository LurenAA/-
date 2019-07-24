import Vuex from 'vuex'
import Vue from 'vue'
import state from "./state.js"
import mutations from './mutations.js'
import getters from "./getters"
import actions from "./actions"
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
