import axios from "axios";
// const initialzeAxios = () => {
//   axios.defaults.baseURL = "https://api.arjanhesab.ir";
//   axios.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${localStorage.getItem("token")}`;
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  if ((config.url === "users/login/") | (config.url === "users/refresh/")) {
    config.headers = {};
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReqest = err.config;
      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        originalReqest._retry = true;

        let res = fetch("https://api.arjanhesab.ir/users/refresh/", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "include",
          redirect: "follow",
          referrer: "no-referrer",
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            localStorage.setItem("access", res.access);
            originalReqest.headers["Authorization"] = `Bearer ${res.access}`;
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.access}`;
            return axios(originalReqest);
          });

        resolve(res);
      }

      return Promise.reject(err);
    });
  }
);
// };
// export default initialzeAxios;
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
