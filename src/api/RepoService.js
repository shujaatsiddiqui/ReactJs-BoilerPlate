import * as APIService from "../utils/apiRequestUtils";

export const signUp = (payload) => {
  return APIService.postRequest("/v1/auth/register", payload);
};

export const signIn = (payload) => {
  return APIService.postRequest("/v1/auth/login", payload);
};

export const getDeviceData = () => {
  return APIService.getRequest("/v1/history");
};

export const getUserProfile = (context) => {
  return APIService.getRequest("/v1/users", {
    Authorization: "bearer " + context.accessToken,
  });
};
