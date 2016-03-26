module.exports = {
  ready: function() {
    //Need the "keep-alive" option on the router to work after page change
    var  startX,
         startY;
  },
  methods: {
    swipeEvents: function(el){ 
      document.addEventListener("touchstart", this.touchstart)
    },    
    touchstart: function(event) {
      var touches = event.touches;
      if (touches && touches.length) {
        this.startX = touches[0].pageX;
        this.startY = touches[0].pageY;
        document.addEventListener("touchmove", this.touchmove);
      }
    },
    touchmove: function(event) {
      var touches = event.touches;
      if (touches && touches.length) {
        event.preventDefault();
        var deltaX = this.startX - touches[0].pageX;
        var deltaY = this.startY - touches[0].pageY;
        if (deltaX >= 50) {
          var event = new Event('swipeLeft');
          document.dispatchEvent(event);
        }
        if (deltaX <= -50) {
          var event = new Event('swipeRight');
          document.dispatchEvent(event);
        }
        if (deltaY >= 50) {
          var event = new Event('swipeUp');
          document.dispatchEvent(event);
        }
        if (deltaY <= -50) {
          var event = new Event('swipeDown');
          document.dispatchEvent(event);
        }
        if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
          document.removeEventListener('touchmove', this.touchmove);
        }
      }
    }  
  }
}