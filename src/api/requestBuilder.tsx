import axios from "axios";

const URL = window.location.protocol + '//' + window.location.host;

export const postRequest = (endpoint: string, data: Object) => {
  return axios
    .post(URL + endpoint, data, { withCredentials: true })
    .then((data) => {
      return data;
    });
};

export const getRequest = (endpoint: String) => {
  return axios.get(URL + endpoint, { withCredentials: true }).then((data) => {
    return data;
  });
};
