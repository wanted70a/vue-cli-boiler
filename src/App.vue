<template>
  <div id="app">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
//import { FETCH_POSTS } from './store/modules/actions.types'
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState([
      'name'
    ])
  },
  methods:{
      ...mapActions([
        'fetchPosts'
      ])
  },

  created(){
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">

</style>
