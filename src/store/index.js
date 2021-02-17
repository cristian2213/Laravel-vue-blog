import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Modules
import authModule from './modules/auth/index.js';

// compositions
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },

  state: {
    token: null,
    user: null,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
