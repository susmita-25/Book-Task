import axios from 'axios';
import { API } from './constant';
// import router from './router/router'

export const axiosInstance = axios.create({
    //  baseURL: `http://103.165.118.71:5000/api/`,
    baseURL: API
  });

  axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
    response => {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )