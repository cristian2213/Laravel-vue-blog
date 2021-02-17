import authMutations from './authMutations.js';
import authActions from './authActions.js';
import authGetters from './authGetters.js';

export default {
  namespaced: true,
  state: {},

  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
