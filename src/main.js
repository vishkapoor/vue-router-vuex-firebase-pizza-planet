import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import { store } from  './store/index.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
var _ = require('lodash');

Vue.use(VueRouter);
Vue.prototype.$user = null;

library.add(faCog)
Vue.component('fa', FontAwesomeIcon)

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
  store,
  render: h => h(App)
})
