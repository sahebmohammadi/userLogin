import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/users/login/";

export const userLogin = (user) => {
  return http.post(apiEndPoint, { username: user.email, password: user.password });
};
