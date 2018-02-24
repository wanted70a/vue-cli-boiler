import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ROOT } from './endpoints'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = ROOT


const api = {

  get (resource, params) {
    return Vue.axios
      .get(resource,  params)
      .catch((error) => {
        console.log(error);
      })
  }

};


export default api;
