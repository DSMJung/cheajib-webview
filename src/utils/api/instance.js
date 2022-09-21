import axios from "axios";
import { useNavigate } from "react-router-dom";

export const instance = axios.create({
  baseURL: "http://3.34.174.96:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJlb2d1czI1MTNAbmF2ZXIuY29tIiwiaWF0IjoxNjYzNjg3ODY3LCJleHAiOjE2NjQ4OTc0Njd9.loN1lUSfBMmXrs-t7wBzYO6IAjZJxWOT6Doxhll34Dg`,
  },
});

// instance.interceptors.request.use(
//   async function (config) {
//     const accessToken = localStorage.getItem("access_token");
//     // eslint-disable-next-line no-unused-expressions
//     accessToken
//       ? (config.headers = {
//           Authorization: `Bearer ${accessToken}`,
//         })
//       : null;

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async (error) => {
//     const refreshToken = localStorage.getItem("refresh_token");
//     if (axios.isAxiosError(error) && error.response) {
//       const { config, response } = error;
//       if (response.data.status === 401 && refreshToken) {
//         try {
//           const res = await axios({
//             method: "patch",
//             url: ``,
//             headers: {
//               "Refresh-Token": `Bearer ${refreshToken}`,
//             },
//           });

//           const { access_token, refresh_token } = res.data;
//           localStorage.setItem("access_token", access_token);
//           localStorage.setItem("refresh_token", refresh_token);

//           if (config.headers)
//             config.headers.Authorization = `Bearer ${access_token}`;
//           return axios(config);
//         } catch (err) {
//           if (
//             err.response.data.status === 401 ||
//             err.response.data.status === 404
//           ) {
//             window.location.href = "/";
//           }
//         }
//       } else return Promise.reject(error);
//     }
//   }
// );
