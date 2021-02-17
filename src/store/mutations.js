export default {
  setToken(state, payload) {
    state.token = payload;
  },

  setUser(state, payload) {
    state.user = payload;
  },

  addTokenLocalStorage(state) {
    const token = {
      TYxMzU0: state.token.access_token, // token with alias to security
      wNzkxLCJu: state.token.token_type, // token type
      XRoXC9: {
        // user
        E6ODAwMF: state.user.name, // name user
        C8xMjcuMC: state.user.roles[0].name, // rol user
      },
    };
    localStorage.setItem('JeXAitsi', JSON.stringify(token));
  },
};
