import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;

const getEndpoint = (url) => {
  return BASE_URL + url;
}

// const getHeaders = () => {
//   return { headers: { Authorization: `Token token=${localStorage.getItem('token')}` } };
// }

const responseData = (res) => res.data;

export const get = (url) => {
  const endpoint = getEndpoint(url);
  return axios.get(endpoint).then(responseData);
}

// export const put = (url, data) => {
//   const endpoint = getEndpoint(url);
//   const header = getHeaders();
//   return axios.put(endpoint, data, header).then(responseData);
// }

// export const post = (url, data) => {
//   const endpoint = getEndpoint(url);
//   const header = getHeaders();
//   return axios.post(endpoint, data, header).then(responseData);
// }

// export const destroy = (url) => {
//   const endpoint = getEndpoint(url);
//   const header = getHeaders();
//   return axios.delete(endpoint, header).then(responseData);
// }
