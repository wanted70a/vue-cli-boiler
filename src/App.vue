<template>
  <div id="app">
    <h2>{{getName}}</h2>
  </div>
</template>

<script>
//import { FETCH_POSTS } from './store/modules/actions.types'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'getName'
    ]),
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
