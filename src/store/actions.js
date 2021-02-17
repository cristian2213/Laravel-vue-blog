import axios from 'axios';

export default {
  async setToken(context, payload) {
    const uri = process.env.VUE_APP_ROUTE_API;

    try {
      const info = {
        email: payload.email,
        password: payload.password,
      };

      const response = await axios({
        method: 'post',
        url: uri + 'auth/login',
        data: info,
      });

      context.commit('setToken', response.data.token);
      context.commit('setUser', response.data.user);
    } catch (error) {
      console.log('2', error);
      // execute mutation to show an error
    }
  },
};
