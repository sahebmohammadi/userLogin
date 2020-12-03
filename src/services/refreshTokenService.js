import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/users/refresh/";

export const refreshToken = ({ token }) => {
  return http.post(apiEndPoint);
};
