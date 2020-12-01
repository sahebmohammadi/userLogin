import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/users/login/";

export const userLogin = (user) => {
  const data = { username: user.email, password: user.password };
  return http.post(apiEndPoint, data, { withCredentials: true });
};
