import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {API_URL, IMGUR_CLIENT_ID } from './endpoints'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = API_URL


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
