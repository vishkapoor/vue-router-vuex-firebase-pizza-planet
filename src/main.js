import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';

var _ = require('lodash');

Vue.use(VueRouter);

let router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {

      if(to.hash) {
        return {
          selector: to.hash
        }
      }

    }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
