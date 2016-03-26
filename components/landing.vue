<template>
  <div 
    class="Landing"
    data-js="wrapper"
    :style="{ transform: 'translateY(' + slideP + '%)' }"
  >
    <section
      v-for="slide in slides"
      class="Landing_s"
      :style="{ backgroundImage: 'url(' + slide.background + ')' }"
    >
      <h1>{{ slide.title }}</h1>  
    </section>
  </div>
  <div class="Compter">{{ number + 1 }}/{{ total }}</div>
  <ul class="LocalN">
    <li      
      v-for="slide in slides"
      :class="this.number === this.$index ? 'active' : ''" 
     >
  	  <a v-on:click="goTo($index)">{{ $index + 1 }}</a>
    </li>
  </ul>
</template>

<script>
var globalMix = require('../js/mixins/global')
var swipeSupport = require('../js/mixins/swipeSupport')

module.exports = {

  name: 'Landing',

  mixins: [
    globalMix,
    swipeSupport
  ],
  data: function () {
    return {
      slides: [
         {
           "title": "表題 1",
           "background": "images/haiku.jpg"
         }, {
           "title": "表題 2",
           "background": "images/haiku.jpg"
         }, {
           "title": "表題 3",
           "background": "images/haiku.jpg"
         }, {
           "title": "表題 4",
           "background": "images/haiku.jpg"
         }, {
           "title": "表題 5",
           "background": "images/haiku.jpg"
         }, {
           "title": "表題 6",
           "background": "images/haiku.jpg"
         }
      ],
      total: 0, //slides number
      lastAnim : 0,
      quietP: 500, //quiet period between animations
      animD: 1, //animation duration go along with transition duration in the CSS
      number: 0, //initial slider index
      slideP: 0 //Slider position
    }
  },
  ready: function() {
  	var self = this;
    self.total = self.slides.length;
  	//Listen to mouse wheel
  	document.addEventListener('mousewheel', self.mouseWheelHandler)
    document.addEventListener('DOMMouseScroll', self.mouseWheelHandler)
    //Listen to swipeEvents
    self.swipeEvents(self.$('wrapper'));
    document.addEventListener("swipeDown",  function(event){
      event.preventDefault();
      self.slideDown()
    })
    document.addEventListener("swipeUp", function(event){
      event.preventDefault();
      self.slideUp()
    })
  },
  methods: {
  	 slide: function(number) {
  	   this.slideP = number*-100;
     },
     slideDown: function(number) {
      var self = this;
      self.number--;
      if (self.number <= 0){self.number = 0;}
      self.slide(self.number)
     },
     slideUp: function(number) {
      var self = this;
      self.number++;
      if (self.number >= self.total-1){self.number = self.total-1;}
      self.slide(self.number)
     },
     goTo: function(index) {
       var self = this;
       self.number = index;
       self.slide(self.number)
     },
     mouseWheelHandler: function(event) {
      event.preventDefault()
      var delta = event.wheelDelta || -event.detail;
      this.initScroll(event, delta)
     },
     initScroll: function(event, delta) {
      var self = this,
          deltaOfInterest = delta,
          timeNow = new Date().getTime();
      if(timeNow - self.lastAnim < self.quietP + self.animD*1000) {
        event.preventDefault();
        return;
      }
      if (deltaOfInterest < 0) {
        self.slideUp()
        } else {
        self.slideDown()
      }
      self.lastAnim = timeNow;
     }
  }
}
</script>

<style lang="stylus">
.Landing
  transition transform .7s cubic-bezier(.77,0,.18,1)
  -webkit-transform-style preserve-3d
  transform-style preserve-3d

.Landing_s
  background-size cover
  background-position center center
  h1
    top 50%
    transform translateY(-50%)
    position relative
    text-align center

.LocalN
  bottom 25px
  right 0
  position fixed
  li
    margin-bottom 5px
    opacity .5
    transition all .3s ease
    a
      display block
      padding 20px
      color white
      position relative
      &:after
        display block
        content ''
        height 2px
        width 2px
        top 61px
        left 24px
        position absolute
        background white
        border-radius 2px
        opacity 1
        transition all .3s ease
    &:hover
      cursor pointer
      opacity 1
    &.active
      margin-bottom 40px
      opacity 1
      a
        &:after
          height 40px
          opacity 1

.Compter
  top 35px
  right 10px
  position fixed
</style>
