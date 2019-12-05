import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import { store } from  './store/index.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Accounting from 'accounting-js';
var _ = require('lodash');

Vue.use(VueRouter);
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

router.beforeEach((to, from, next) => {

  if (localStorage.getItem('user')
    && to.name == 'login') {
    next({ name: 'home'});
  }

  if (localStorage.getItem('user') == null
    && to.name == 'admin') {
    next({ name: 'login'});
    return;
  }

  next();
});

Vue.filter('currency', (value) => {
  return Accounting.formatMoney(value);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})




