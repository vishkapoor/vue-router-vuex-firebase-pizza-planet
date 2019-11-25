import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import getters from './getters.js';

import menu from './modules/menu';
import orders from './modules/orders';
import users from './modules/users';


Vue.use(Vuex);

export const store = new Vuex.Store({
   actions,
   mutations,
   state,
   getters,
   modules: {
    menu,
    orders,
    users
   }
});