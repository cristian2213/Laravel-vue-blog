import clientAxios from './axios';

const tokenAuth = (tokenType, token) => {
  if (token) {
    // add token to headers
    clientAxios.defaults.headers.common['Authorization'] =
      tokenType + ' ' + token;
  } else {
    // delete token from headers
    delete clientAxios.defaults.headers.common['Authorization'];
  }
};

export default tokenAuth;
