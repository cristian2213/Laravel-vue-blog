import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// compositions
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
