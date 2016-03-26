<template>
  <div class="Main">
    <navigation></navigation>
    <router-view
      v-cloak
    ></router-view>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

module.exports = {

	name: 'App',

  components: {

    'navigation': Navigation

  },
  ready: function() {
    console.log('App ready')
  },
  methods: {

  }
}
</script>

<style lang="stylus">
@import "../stylus/mixins/resets"
$resets()

@import "../stylus/global"

[v-cloak]
  display none

.Landing,
.Service
  //position absolute
  //top 0
  //right 0
  //bottom 0
  //left 0
  transition opacity 1s ease
  &.v-enter, 
  &.v-leave
    opacity 0
</style>