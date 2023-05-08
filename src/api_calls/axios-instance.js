import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://18.142.153.136:3000/api',
});
const responseSuccessHandler = response => {
  return response;
};
axios.interceptors.request.use(
  function (successfulReq) {
    return successfulReq;
  },
  function (error) {
    Promise.reject(error);
  },
);
const responseErrorHandler = error => {
  return Promise.reject(error.response);
};
instance.interceptors.response.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error),
);

export default instance;
