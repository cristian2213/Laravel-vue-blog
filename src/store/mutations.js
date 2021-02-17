export default {
  setToken(state, payload) {
    state.token = payload;
  },

  setUser(state, payload) {
    state.user = payload;
  },

  addTokenLocalStorage(state) {
    const token = {
      token: state.token.access_token,
      user: {
        name: state.user.name,
        rol: state.user.roles[0].guard_name,
      },
    };
    localStorage.setItem('token', JSON.stringify(token));
  },
};
