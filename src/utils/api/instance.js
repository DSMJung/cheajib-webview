import axios from "axios";

export const instance = axios.create({
  baseURL: "https://cheajib.dsm-pick.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem("access_token");
    // eslint-disable-next-line no-unused-expressions
    accessToken
      ? (config.headers = {
          Authorization: `${accessToken}`,
        })
      : null;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
