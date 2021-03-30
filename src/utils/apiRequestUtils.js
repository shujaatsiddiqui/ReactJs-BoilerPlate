import axios from "axios";
import { localStorageService,defaultStorageService } from "./storageService";

export const BASE_API_URL = process.env.REACT_APP_BASE_URL;

export const getRequest = (
  endpoint,
  additionalHeaders,
  params,
  responseType
) => {
  const axiosConfig = {
    headers: { "Content-Type": "application/json", ...additionalHeaders },
    params,
    responseType,
  };
  return axios.get(`${BASE_API_URL}${endpoint}`, axiosConfig);
};

export const postRequest = (
  endpoint,
  payload,
  additionalHeaders,
  params,
  onUploadProgress
) => {
  const axiosConfig = {
    headers: { "Content-Type": "application/json", ...additionalHeaders },
    params,
    onUploadProgress,
  };
  return axios.post(`${BASE_API_URL}${endpoint}`, payload, axiosConfig);
};

export const putRequest = (endpoint, payload, additionalHeaders, params) => {
  const axiosConfig = {
    headers: { "Content-Type": "application/json", ...additionalHeaders },
    params,
  };
  return axios.put(`${BASE_API_URL}${endpoint}`, payload, axiosConfig);
};

export const deleteRequest = (endpoint, additionalHeaders) => {
  const axiosConfig = {
    headers: { "Content-Type": "application/json", ...additionalHeaders },
  };
  return axios.delete(`${BASE_API_URL}${endpoint}`, axiosConfig);
};

const errorHandler = async (error) => {
  if (error.response.status === 401) {
    defaultStorageService.getStorage().clearAll();
  }
  return Promise.reject(error.response);
};

const responseHandler = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  }
  return Promise.reject(response);
};

axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
