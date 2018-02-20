import Vue from 'vue'
import api from '../../api/api' //import api-request actions
// import {
//   //import names for actions
//   FETCH_POSTS,
// } from './actions.types'
// import {
//   //import names for mutations
//   SET_POSTS,
// } from './mutations.types'


const state = {
  posts:[],
  name:'stefan'
};

const getters = {
  getName(state){
    return state.name;
  }
};

const mutations = {
  setPosts(state, data){
        state.posts = data;
        console.log(data);
  }
};

const actions = {
  fetchPosts( {commit} ){
    api.get('/users')
    .then( res => { commit('setPosts', res.data) } );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
