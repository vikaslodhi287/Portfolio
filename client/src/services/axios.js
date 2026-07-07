/* ==========================================================
   AXIOS INSTANCE
   Centralized HTTP Client Configuration
========================================================== */

import axios from "axios";
import env from "../config/env";

const api = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ==========================================================
   REQUEST INTERCEPTOR
========================================================== */

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

/* ==========================================================
   RESPONSE INTERCEPTOR
========================================================== */

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Bad Request");
          break;

        case 401:
          console.error("Unauthorized");
          break;

        case 403:
          console.error("Forbidden");
          break;

        case 404:
          console.error("Resource Not Found");
          break;

        case 500:
          console.error("Internal Server Error");
          break;

        default:
          console.error(error.response.data?.message || "Something went wrong");
      }
    } else if (error.request) {
      console.error("Network Error");
    } else {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default api;