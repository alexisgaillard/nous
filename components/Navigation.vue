<template>
  <nav class="Nav">
    <ul>
      <li v-link-active>
        <a 
          v-link="{ path: '/', activeClass: 'Pos_0', exact: true }">
          {{ en.home }}
        </a>
      </li>
      <li v-link-active>
        <a 
          v-link="{ path: '/service', activeClass: 'Pos_0', exact: true }">
          {{ en.service }}
        </a>
      </li>
      <li v-link-active>
        <a 
          v-link="{ path: '/about', activeClass: 'Pos_1', exact: true }">
          {{ en.about }}
        </a>
      </li>
      <li v-link-active>
        <a 
          v-link="{ path: '/members', activeClass: 'Pos_2', exact: true }">
          {{ en.members }}
        </a>
      </li>
      <li v-link-active>
        <a 
          v-link="{ path: '/recruit', activeClass: 'Pos_3', exact: true }">
          {{ en.recruit }}
        </a>
      </li>
      <li v-link-active>
        <a 
          v-link="{ path: '/contact', activeClass: 'Pos_4', exact: true }">
          {{ en.contact }}
        </a>
      </li>
    </ul>
    <a class="Navigation_l" v-link="{ path: '/' }">
      <object type="image/svg+xml" viewBox="0 0 800 600" data="./images/logo.svg" class="Logo">
        <h1>Nous Logo</h1><!-- fallback image in CSS -->
      </object>
    </a>
  </nav>
</template>

<script>
  module.exports = {
  
    name: 'Navigation',

    data: function() {
      return {
        en: {
         "home": "home",
         "service": "service",
         "about": "about",
         "members": "members",
         "recruit": "recruit",
         "contact": "contact",
        }
      }
    },
    ready: function() {
    }

  }
</script>

<style lang="stylus">
@import "../stylus/variables"
@import "../stylus/mixins/linearGradient"

.Nav
  top 0
  bottom 0
  left 0
  width 200px
  position fixed
  background-linear-gradient(top, $purple, 0%, $red, 100%)
  z-index 1000
  ul 
    margin-top $lineH*3
    li
      font-size $fontS
      text-align center
      margin-bottom $lineH

.Navigation_l
  display inline-block
  left 22px
  bottom 0
  position absolute
  object
    width 140px
    height auto
    position relative
  &:after
    content ""
    top 0
    right 0
    bottom 0
    left 0
    position absolute
</style>