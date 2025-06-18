import axios from "axios";

const InternalApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

InternalApi.interceptors.request.use((request) => {
  request.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return request;
});
