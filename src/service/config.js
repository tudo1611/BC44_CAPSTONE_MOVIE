import axios from "axios";
import { batLoading, tatLoading } from "../redux/spinnerSlice";
import { store } from "..";

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I",
  },
});

// export const USER_LOGIN = "USER_LOGIN";
// -----interceptor axios-------

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log("đi");
    //bật loading
    store.dispatch(batLoading());
    return config;
  },
  function (error) {
    // Do something with request error
    //bật loading
    store.dispatch(tatLoading());
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("về");
    //tắt loading
    store.dispatch(tatLoading());
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //tắt loading
    store.dispatch(tatLoading());
    return Promise.reject(error);
  }
);
