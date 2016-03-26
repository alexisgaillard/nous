var Vue = require('vue')
var App = require('./components/App.vue')
// require Vue Router component
var VueRouter = require('vue-router')
//Plugins
// var gsap = require('gsap')


//Print stack traces for all warnings and anchor node in the page
Vue.config.debug = true;
// //Suppress all Vue.js logs and warnings
// Vue.config.silent = true;

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    // Required component see below in the routing everythings is async 
    // no registrations needed anymore for the components
    app: App
  }
})

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  history: true
})

router.map({
  '/':  {
    name: 'Landing',
    component: function (resolve) {
      require(['./components/landing.vue'], resolve)
    }
  },
  '/service': {
    name: 'Service',
    component: function (resolve) {
      require(['./components/service.vue'], resolve)
    }
  },
  '/about': {
    name: 'About',
    component: function (resolve) {
      require(['./components/about.vue'], resolve)
    }
  },
  '/members': {
    name: 'Members',
    component: function (resolve) {
      require(['./components/members.vue'], resolve)
    }
  },
  '/recruit': {
    name: 'Recruit',
    component: function (resolve) {
      require(['./components/recruit.vue'], resolve)
    }
  },
  '/offers': {
    name: 'Offers',
    component: function (resolve) {
      require(['./components/offers.vue'], resolve)
    }
  },
  '/contact': {
    name: 'Contact',
    component: function (resolve) {
      require(['./components/contact.vue'], resolve)
    }
  }
});

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/'
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.afterEach(function (transition) {
  // ga('send', 'pageview', {
  //   'page': transition.to.path, 
  //   'title': transition.to.path 
  // });
})

const app = Vue.extend({});
router.start(app, 'html')