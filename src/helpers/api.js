import axios from "axios";

let store;
export const HOST = "http://172.16.1.217:3100";
export const injectStore = (_store) => (store = _store);
export const instance = axios.create({
  baseURL: HOST,
});

export const authInstance = axios.create({
  baseURL: HOST,
});

authInstance.interceptors.request.use(
  (config) => {
    //lay token
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
authInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
