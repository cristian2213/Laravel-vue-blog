export default {
  getToken(state) {
    return state.token;
  },

  hasToken(state) {
    return state.token ? true : false;
  },
};
