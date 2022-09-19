import axios from "axios";
import { useNavigate } from "react-router-dom";

export const instance = axios.create({
  baseURL: "http://3.34.174.96:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJ0eXAiOiJhY2Nlc3MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkbWxja3M1NzdAbmF2ZXIuY29tIiwiaWF0IjoxNjYzNTk3NDM1LCJleHAiOjE2NjQ4MDcwMzV9.4l1jgmYA4aGxMM3c_Uoz3ES4PrSoGNRPOOPYRJaOP--aKN3zHbDN-lPC81QokqjdFtKAmT4ud6J5Zd8vNs7MoQ`,
  },
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem("access_token");
    // eslint-disable-next-line no-unused-expressions
    accessToken
      ? (config.headers = {
          Authorization: `Bearer ${accessToken}`,
        })
      : null;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const refreshToken = localStorage.getItem("refresh_token");
    const navigate = useNavigate();
    if (axios.isAxiosError(error) && error.response) {
      const { config, response } = error;
      if (response.data.status === 401 && refreshToken) {
        try {
          const res = await axios({
            method: "patch",
            url: ``,
            headers: {
              "Refresh-Token": `Bearer ${refreshToken}`,
            },
          });

          const { access_token, refresh_token } = res.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);

          if (config.headers)
            config.headers.Authorization = `Bearer ${access_token}`;
          return axios(config);
        } catch (err) {
          if (
            err.response.data.status === 401 ||
            err.response.data.status === 404
          ) {
            navigate("/");
          }
        }
      } else return Promise.reject(error);
    }
  }
);
