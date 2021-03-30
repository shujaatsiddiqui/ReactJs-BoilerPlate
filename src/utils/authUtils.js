import { defaultStorageService } from "./storageService";

export function accessTokenHandler(token) {
  if (token === undefined) {
    return defaultStorageService.getStorage().getItem("accessToken");
  }
  return defaultStorageService.getStorage().setItem("accessToken", token);
}

export const saveAuthTokensInStorage = (accessToken) => {
  accessTokenHandler(accessToken);
};

export const getAuthTokensFromStorage = () => {
  const accessToken = accessTokenHandler();

  return accessToken || null;
};

export const clearAuthTokensFromStorage = () => {
  defaultStorageService.getStorage().removeItem("accessToken");
};

export function userIdHandler(id) {
  if (id === undefined) {
    return defaultStorageService.getStorage().getItem("userId");
  }
  return defaultStorageService.getStorage().setItem("userId", id);
}

export const saveUserIdInStorage = (id) => {
  userIdHandler(id);
};

export const getUserIdFromStorage = () => {
  const id = userIdHandler();

  return id || null;
};

export const clearUserIdFromStorage = () => {
  defaultStorageService.getStorage().removeItem("userId");
};

export const getUserFromStorage = () => {
  const token = getAuthTokensFromStorage();
  const userId = getUserIdFromStorage();

  return {
    token: token || null,
    userId: userId || null,
  };
};

export const setUserInStorage = (token, id) => {
  saveAuthTokensInStorage(token);
  saveUserIdInStorage(id);
};

export const clearUserFromStorage = () => {
  clearAuthTokensFromStorage();
  clearUserIdFromStorage();
};

export const generateAuthHeaders = () => ({
  Authorization: "bearer " + getAuthTokensFromStorage(),
});
