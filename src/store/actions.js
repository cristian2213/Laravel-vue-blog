import clientAxios from '../config/axios.js';

export default {
  async setToken(context, payload) {
    try {
      const info = {
        email: payload.email,
        password: payload.password,
      };

      const response = await clientAxios.post('auth/login', info);

      context.commit('setToken', response.data.token); // set property token
      context.commit('setUser', response.data.user); // set property user
      context.commit('addTokenLocalStorage'); // add token to the Local Storage
    } catch (error) {
      console.log('2', error);
      // execute mutation to show an error
    }
  },
};
