import Vue from 'vue'
import App from './App.vue'

import './scss/main-scss.scss'

import router from './router/router.js'
import store from './store/store.js'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
