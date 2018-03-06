<template>
  <div id="app">
    <h2>{{getName}}</h2>
    <h3>{{data}}</h3>
    <button type="button" @click='fetchPosts'>KLIK TO TEST FETCH ACTION</button>
  </div>
</template>

<script>
import { FETCH_POSTS } from './store/modules/actions.types'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      data:'From Data Obj'
    }
  }
  computed:{
    ...mapGetters([
      'getName'
    ]),
  },
  methods:{
      ...mapActions([
        FETCH_POSTS,
      ])
  },

  created(){
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">

</style>
