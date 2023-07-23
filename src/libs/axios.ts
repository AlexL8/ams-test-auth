import axiosLib from "axios";

export const axios = axiosLib.create({
  baseURL: "https://dummyjson.com",
});


// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  }
)
