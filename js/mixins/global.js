module.exports = {
    methods: {
      $: function(data){
        var el = document.querySelector('[data-js=' + data + ']');
        return el;
      }
      // $all: function(data){
      //   var el = document.querySelectorAll('[data-js=' + data + ']');
      //   return el;
      // }
    }
  }