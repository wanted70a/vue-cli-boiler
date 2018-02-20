import Vue from 'vue'
import Vuex from 'vuex'

//import modules
import home from './modules/home.module'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    home,
  }
})
