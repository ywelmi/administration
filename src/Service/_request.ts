import axios from "axios";
import {
  clearUser,
  getUserRefreshToken,
  getUserToken,
  saveUserRefreshToken,
  saveUserToken,
} from "../shared/localStorage/user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API || "",
});

instance.interceptors.request.use(
  function (config) {
    const authorization = getUserToken();
    const refreshToken = getUserRefreshToken();

    // console.log('auth toke', authorization)
    // console.log('refresh', refreshToken)

    if (authorization && refreshToken) {
      config.headers.setAuthorization(authorization);
      config.headers.set("refreshtoken", refreshToken);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (config) {
    const headers = config.headers;
    const authorization = headers.authorization;
    const refreshtoken = headers.refreshtoken;

    // console.log('override token', authorization, refreshtoken)
    if (authorization && refreshtoken) {
      saveUserToken(authorization);
      saveUserRefreshToken(refreshtoken);
      // console.log('override done')
    }
    return config;
  },
  function (error) {
    const { response } = error;
    if (response && response.status === 440) {
      // if (isSessionExpired()) {
      //   messageError("Your session is expired. Please login again !");
      //   clearAllGoalieToken();
      //   window.location.href = "/sign-in";
      //   return;
      // }
      clearUser();
      window.location.href = "/sign-in";
      return;

      // window.location.href = '/sign-out';

      // console.log('href', pathname)
      // if (pathname.includes('/sign-in') || pathname.includes('/sign-up')) {
      //   return;
      // }
      // window.location.href = `/sign-in?redirectUrl=${window.location.pathname}`;
    }
    console.log("ERRIRIRIR", response);
    return Promise.reject(error);
  },
);

export const req = instance;
export const httpGet = req.get;
export const httpPost = req.post;
export const httpPut = req.put;
export const httpDel = req.delete;
