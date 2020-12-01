import http from './httpServices';

const apiEndPoint = process.env.apiUrl + '/merchant/auth/sign-in';

export const userLogin = (user) => {
  return http.post(apiEndPoint, { email: user.email, password: user.password });
};
