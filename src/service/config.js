import axios from "axios";
import { batLoading, tatLoading } from "../redux/spinnerSlice";
import { store } from "..";

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I",

    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidHVkbyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InR1ZG8xNjExQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJ0dWRvMTYxMUBnbWFpbC5jb20iLCJHUDAwIl0sIm5iZiI6MTY5MDE3NzQxNywiZXhwIjoxNjkwMTgxMDE3fQ.dyhZjMDJjRKS4-GLu5EAPc08MRgtyDkom_YbpNTRX0M",
  },
});
export let http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidHVkbyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InR1ZG8xNjExQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJ0dWRvMTYxMUBnbWFpbC5jb20iLCJHUDAwIl0sIm5iZiI6MTY5MDE3NzQxNywiZXhwIjoxNjkwMTgxMDE3fQ.dyhZjMDJjRKS4-GLu5EAPc08MRgtyDkom_YbpNTRX0M",
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
