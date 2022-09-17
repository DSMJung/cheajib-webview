import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.34.174.96:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
