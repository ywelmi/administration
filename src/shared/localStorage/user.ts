import { AuthUser } from "./type";

const LOCAL_USER = "LOCAL_USER";
const TOKEN = "TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

export const saveUser = (user: AuthUser) => {
  window.localStorage.setItem(LOCAL_USER, JSON.stringify(user));
};

export const clearUser = () => {
  try {
    window.localStorage.removeItem(LOCAL_USER);
  } catch (error) {
    return;
  }
};

export const getUser = () => {
  try {
    const user = JSON.parse(
      window.localStorage.getItem(LOCAL_USER) || "",
    ) as AuthUser;
    if (user?.token) return user;
    return null;
  } catch (error) {
    return null;
  }
};

export const getUserToken = () => {
  const user = getUser();
  if (!user) return;
  return user.token;
};

export const getUserRefreshToken = () => {
  const user = getUser();
  if (!user) return;
  return user.refreshToken;
};

export const saveUserToken = (token: string) => {
  const user = getUser();
  if (!user) return;
  user.token = token;
  saveUser(user);
};

export const saveUserRefreshToken = (refreshToken: string) => {
  const user = getUser();
  if (!user) return;
  user.refreshToken = refreshToken;
  saveUser(user);
};

export const getUserRoleId = () => {
  const user = getUser();
  if (!user) return;
  const { role } = user;
  return role;
};
