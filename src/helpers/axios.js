import axios from "axios";

export const axiosMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

axiosMovies.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params["api_key"] = "bf42acf712bba686cfff9820897f4edb";
  config.params["language"] = "en-US";
  return config;
});
