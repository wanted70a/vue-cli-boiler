import Vue from 'vue'
import VueRouter from 'vue-router'

//COMPONENTS T0 BE RENDERED
import App from '../App.vue'


Vue.use(VueRouter);

var routes=[
  {
    path:'/',
    component:App,
    name:'home'
  },
]

export default new VueRouter({
  mode: 'history',
  routes: routes,
})
