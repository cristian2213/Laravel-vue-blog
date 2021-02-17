export default {
  getToken(state) {
    return state.token;
  },

  hasToken() {
    return state.token ? true : false;
  },
};
