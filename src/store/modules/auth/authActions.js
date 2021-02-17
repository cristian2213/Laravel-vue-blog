import clientAxios from '../../../config/axios.js';

export default {
  async registerUser(context, payload) {
    const data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password,
    };

    try {
      const response = await clientAxios.post('auth/register', data);

      if (response.data) {
        return response.data.message;
      }
    } catch (error) {
      console.log((error) => console.log(error));
    }
  },
};
