import axios from 'axios';

// create a new instance of axios with a custom config
const clientAxios = axios.create({
  baseURL: process.env.VUE_APP_ROUTE_API,
});

export default clientAxios;
