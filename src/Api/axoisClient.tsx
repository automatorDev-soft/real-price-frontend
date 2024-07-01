import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    Accept: "application/json",
  },
});

axios.interceptors.response.use(null, (err) => {
  console.log(err);
});
