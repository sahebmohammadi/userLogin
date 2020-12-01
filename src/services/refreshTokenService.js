import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/users/refresh/";

export const refreshToken = ({ token }) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post(apiEndPoint, { withCredentials: true }, header);
};
