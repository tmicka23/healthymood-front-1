import axios from 'axios';
require('dotenv').config();
const baseURL = process.env.REACT_APP_API_BASE_URL;
console.log(baseURL);

const API = axios.create({ baseURL });

const placeTokenInRequestHeaders = req => {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};

API.interceptors.request.use(placeTokenInRequestHeaders);

export default API;
